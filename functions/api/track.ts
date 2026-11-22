interface Env { BOUTIQUE_DB?: D1Database }
interface D1Database { prepare(query:string):{bind(...values:unknown[]):{run():Promise<unknown>}} }
const validProducts=new Set(['lulu-cest-vous','daube','tout-au-fond','facade','cest-qui-lulu','lu-plus-lu','creme-brulee','tablier','torchon-rouge','torchon-bleu','torchon-carreaux','torchon-pois','torchon-minimal','tote-bag']);
export const onRequestPost=async({request,env}:{request:Request,env:Env}):Promise<Response>=>{
 if(!env.BOUTIQUE_DB)return new Response(null,{status:503});
 let data:Record<string,unknown>;
 try{data=await request.json() as Record<string,unknown>;}catch{return new Response(null,{status:400})}
 const id=String(data.product_id||'');
 const event=String(data.event||'');
 if(!validProducts.has(id)||!['view','interest','lead'].includes(event))return new Response(null,{status:400});
 try{await env.BOUTIQUE_DB.prepare('INSERT INTO boutique_events (product_id,event,source,created_at) VALUES (?,?,?,datetime(\'now\'))').bind(id,event,String(data.source||'').slice(0,80)).run();return new Response(null,{status:204})}catch{return new Response(null,{status:500})}
};
