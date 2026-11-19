import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { menu } from '../../carte/menu';
import MenuTabs from '../../carte/menu-tabs';
import { alternativeLanguages, foreignLocales, isForeignLocale, texts } from '../../i18n';

export const dynamicParams = false;
export function generateStaticParams(){ return foreignLocales.map(locale=>({locale})); }
export async function generateMetadata({params}:{params:Promise<{locale:string}>}):Promise<Metadata>{
 const {locale}=await params;
 if(!isForeignLocale(locale)) return {};
 return { title:`${texts[locale].menuTitle} | Chez Lulu, Avignon`,description:texts[locale].menuIntro,alternates:{canonical:`/${locale}/carte`,languages:alternativeLanguages('carte')} };
}
const categoryTabs:Record<string,string>={
 'Boissons fraîches':'boissons','Sodas & sirops':'boissons',Eaux:'boissons',Bières:'boissons','Apéritifs & cocktails':'boissons','Boissons chaudes':'boissons','Les spéciaux · froids ou chauds':'boissons',
 'Vins blancs':'vins','Vins rosés':'vins','Vins rouges':'vins',
 'Petit déjeuner · sucré':'petit-dejeuner','Petit déjeuner · salé':'petit-dejeuner','Formules petit déjeuner':'petit-dejeuner','Suppléments petit déjeuner':'petit-dejeuner'
};
const ids=['manger','boissons','vins','petit-dejeuner'];
const format=new Intl.NumberFormat('fr-FR',{style:'currency',currency:'EUR'});
export default async function LocalizedMenu({params}:{params:Promise<{locale:string}>}){
 const {locale}=await params;
 if(!isForeignLocale(locale)) notFound();
 const t=texts[locale];
 return <main className="menuPage" lang={locale}>
   <h1>{t.menuTitle}</h1><p className="menuIntro">{t.menuIntro}</p>
   <p className="menuTranslationNote" role="note">{t.menuNote}</p>
   <MenuTabs tabs={ids.map((id,i)=>({id,label:t.tabs[i],content:menu.filter(c=>(categoryTabs[c.name]||'manger')===id).map(c=><section className="menuCategory" key={c.name} lang="fr"><h2>{c.name}</h2><ul className="menuDishes">{c.dishes.map(d=><li key={d.name}><div className="menuDishHeading"><h3>{d.name}</h3>{(d.priceEuros!==undefined||d.priceLabel)&&<div className="menuPrice">{d.priceEuros!==undefined&&<span>{format.format(d.priceEuros)}</span>}{d.priceLabel&&<span>{d.priceLabel==='Demandez-nous'?t.ask:d.priceLabel}</span>}</div>}</div>{d.description&&<p>{d.description}</p>}{d.variants&&<ul className="menuVariants">{d.variants.map(v=><li key={v.label}><span>{v.label}</span><span className="menuPrice">{format.format(v.priceEuros)}</span></li>)}</ul>}{d.allergens&&d.allergens.length>0&&<p>Allergènes : {d.allergens.join(', ')}</p>}</li>)}</ul></section>)}))}/>
 </main>;
}
