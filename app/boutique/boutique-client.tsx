'use client';
import { useEffect, useState } from 'react';
import { euro, products, type Product } from './products';

const categories = [
 {id:'all',label:'Tout voir'},
 {id:'tshirt',label:'T-shirts'},
 {id:'apron',label:'Tablier'},
 {id:'towel',label:'Torchon'},
 {id:'bag',label:'Cabas'},
] as const;
type Category = (typeof categories)[number]['id'];

function analytics(product:Product,action:'view'|'interest'|'lead'){
  if(typeof window==='undefined') return;
  const body=JSON.stringify({product_id:product.id,event:action,path:window.location.pathname,source:new URLSearchParams(window.location.search).get('utm_source')||''});
  // Anonymous events need a Cloudflare D1 database binding, configured separately.
  navigator.sendBeacon?.('/api/track',new Blob([body],{type:'application/json'}));
}

function ProductVisual({product}:{product:Product}){
 const [failed,setFailed]=useState(false);
 return <div className="boutiquePhoto" style={{background:product.color}}>
   {product.image&&!failed?<img src={product.image} alt={product.name+' — Chez Lulu'} loading="lazy" onError={()=>setFailed(true)}/>:<div className={'boutiqueImagePlaceholder '+(product.id==='lulu-cest-vous'?'pending':'')} aria-label={'Visuel de '+product.name+' à venir'}><span>CHEZ LULU</span><small>AVIGNON · 2026</small></div>}
 </div>;
}
export default function Boutique(){
 const [filter,setFilter]=useState<Category>('all');
 useEffect(()=>{
   if(typeof IntersectionObserver==='undefined')return;
   const viewed=new Set<string>();
   const observer=new IntersectionObserver(entries=>{
     for(const entry of entries){
       if(!entry.isIntersecting)continue;
       const id=(entry.target as HTMLElement).dataset.productId;
       const product=products.find(p=>p.id===id);
       if(!product||viewed.has(product.id))continue;
       viewed.add(product.id);
       analytics(product,'view');
     }
   },{threshold:.35});
   document.querySelectorAll<HTMLElement>('.boutiqueProduct[data-product-id]').forEach(node=>observer.observe(node));
   return()=>observer.disconnect();
 },[filter]);
 const [selected,setSelected]=useState<Product|null>(null);
 const [email,setEmail]=useState('');
 const [size,setSize]=useState('');
 const [status,setStatus]=useState<'idle'|'sending'|'sent'|'error'>('idle');
 const [notice,setNotice]=useState('');
 useEffect(()=>{ if(!selected)return; const key=(e:KeyboardEvent)=>{if(e.key==='Escape')setSelected(null)};document.addEventListener('keydown',key);return()=>document.removeEventListener('keydown',key)},[selected]);
 function selectProduct(product:Product){
   analytics(product,'interest'); setSelected(product);setEmail('');setSize('');setStatus('idle');setNotice('');
 }
 async function subscribe(e:React.FormEvent){
   e.preventDefault();
   if(!selected || status==='sending')return;
   setStatus('sending');
   try{
     const res=await fetch('/api/interest',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({product_id:selected.id,email,size:size||null,consent:true,source:new URLSearchParams(window.location.search).get('utm_source')||'',page:window.location.pathname})});
     if(!res.ok)throw Error('Le service est temporairement indisponible.');
     analytics(selected,'lead');
     setStatus('sent');
   }catch{setStatus('error');setNotice('L’inscription n’est pas encore disponible. Réessayez plus tard.');}
 }
 return <main className="boutiquePage" id="boutique-top">
  <div className="boutiqueMasthead">
    <span className="boutiqueEdition">COLLECTION INAUGURALE <span aria-hidden="true">·</span> Nº 001 <span aria-hidden="true">·</span> AVIGNON 2026</span>
    <h1>La boutique</h1>
    <div className="boutiqueFilters" role="group" aria-label="Catégories de la collection">
      {categories.map(cat=><button key={cat.id} type="button" className={cat.id===filter?'active':''} aria-pressed={cat.id===filter} onClick={()=>setFilter(cat.id)}>{cat.label}</button>)}
    </div>
  </div>
  <section className="boutiqueProducts" aria-label="Collection inaugurale 2026">
   {products.filter(p=>filter==='all'||p.category===filter).map((p)=><article className="boutiqueProduct" key={p.id} data-product-id={p.id}>
     <button type="button" className="boutiqueProductImageButton" onClick={()=>selectProduct(p)} aria-label={'Découvrir '+p.name}><ProductVisual product={p}/></button>
     <div className="boutiqueProductInfo"><h2>{p.name}</h2><span>{euro(p.price)}</span></div>
     <button className="boutiqueNotify" onClick={()=>selectProduct(p)}>Me prévenir <span aria-hidden="true">↗</span></button>
    </article>)}
  </section>
  <p className="boutiqueFootnote">Collection inaugurale 2026 · Pièces en préparation, sans vente pour le moment.</p>
  {selected&&<div className="boutiqueOverlay" onMouseDown={e=>{if(e.target===e.currentTarget)setSelected(null)}}>
    <section className="boutiqueDialog" role="dialog" aria-modal="true" aria-labelledby="boutique-dialog-title">
      <button type="button" className="boutiqueClose" aria-label="Fermer" onClick={()=>setSelected(null)}>×</button>
      <div className="boutiqueDialogVisual"><ProductVisual product={selected}/></div>
      <div className="boutiqueDialogText">
       <span className="boutiqueEdition">COLLECTION 001 · 2026</span>
       <h2 id="boutique-dialog-title">{selected.name}</h2>
       <p className="boutiqueDialogPrice">{euro(selected.price)}</p>
       {status==='sent'?<div role="status"><h3>Merci !</h3><p>Nous vous écrirons dès que cette pièce sera disponible.</p><button type="button" className="boutiqueNotify" onClick={()=>setSelected(null)}>Continuer la visite</button></div>:
       <><p>Cette pièce n’est pas encore disponible. Soyez parmi les premiers informés de sa sortie.</p>
        <form onSubmit={subscribe}>
          <label htmlFor="boutique-email">Votre e-mail</label>
          <input required id="boutique-email" type="email" autoComplete="email" maxLength={254} value={email} onChange={e=>setEmail(e.target.value)} placeholder="vous@exemple.fr"/>
          {selected.category==='tshirt'&&<><label htmlFor="boutique-size">Taille souhaitée <span>(facultatif)</span></label><select id="boutique-size" value={size} onChange={e=>setSize(e.target.value)}><option value="">Je ne sais pas encore</option>{['S','M','L','XL','XXL'].map(v=><option key={v}>{v}</option>)}</select></>}
          <p className="boutiquePrivacy">En demandant cette alerte, vous recevrez uniquement un e-mail sur cet article. Aucune newsletter.</p>
          <button type="submit" className="boutiqueNotify" disabled={status==='sending'}>{status==='sending'?'Envoi…':'M’avertir de sa sortie →'}</button>
          {status==='error'&&<p role="alert" className="boutiqueError">{notice}</p>}
        </form>
       </>}
      </div>
    </section>
  </div>}
 </main>;
}
