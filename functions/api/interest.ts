interface Env { BOUTIQUE_DB?: D1Database }
interface D1Database { prepare(query:string):{bind(...values:unknown[]):{run():Promise<unknown>}} }
const validProducts=new Set(['lulu-cest-vous','daube','tout-au-fond','facade','cest-qui-lulu','lu-plus-lu','creme-brulee','tablier','torchon-rouge','torchon-bleu','torchon-carreaux','torchon-pois','torchon-minimal','tote-bag']);
export const onRequestPost=async({request,env}:{request:Request,env:Env}):Promise<Response>=>{
 if(!env.BOUTIQUE_DB)return Response.json({error:'Service unavailable'},{status:503});
 let data:Record<string,unknown>;
 try{data=await request.json() as Record<string,unknown>;}catch{return Response.json({error:'Invalid request'},{status:400})}
 const id=String(data.product_id||'');
 const email=String(data.email||'').trim().toLowerCase();
 const size=String(data.size||'').toUpperCase();
 if(!validProducts.has(id)||email.length>254||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)||data.consent!==true||!['','S','M','L','XL','XXL'].includes(size))return Response.json({error:'Invalid input'},{status:400});
 try{
 await env.BOUTIQUE_DB.prepare('INSERT INTO boutique_leads (product_id,email,size,source,created_at) VALUES (?,?,?,?,datetime(\'now\')) ON CONFLICT(product_id,email) DO UPDATE SET size=excluded.size, source=excluded.source').bind(id,email,size,String(data.source||'').slice(0,80)).run();
 return Response.json({ok:true});
 }catch{return Response.json({error:'Temporary error'},{status:500})}
};
