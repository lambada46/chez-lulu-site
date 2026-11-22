export type Product = {
 id: string; name: string; category: 'tshirt'|'apron'|'towel'|'bag'; price: number;
 image?: string; description: string; color: string;
};
export const products: Product[] = [
 {id:'lulu-cest-vous',name:'Lulu, c’est vous',category:'tshirt',price:29.90,description:'Le modèle signature. Visuel définitif à venir.',color:'#ebe6da'},
 {id:'daube',name:'Daube',category:'tshirt',price:29.90,image:'/images/boutique/daube.jpg',description:'Notre sandwich a du caractère.',color:'#ede4d5'},
 {id:'tout-au-fond',name:'Tout au fond à gauche',category:'tshirt',price:29.90,image:'/images/boutique/tout-au-fond.jpg',description:'Une phrase qui en dit long.',color:'#2b2b2a'},
 {id:'facade',name:'La façade',category:'tshirt',price:29.90,description:'Le coin de rue qui nous ressemble. Visuel à venir.',color:'#e6dfd2'},
 {id:'cest-qui-lulu',name:'C’est qui Lulu ?',category:'tshirt',price:29.90,image:'/images/boutique/cest-qui-lulu.jpg',description:'La question que tout le monde se pose.',color:'#efe7d9'},
 {id:'lu-plus-lu',name:'Lu + Lu = Lulu',category:'tshirt',price:29.90,image:'/images/boutique/lu-plus-lu.jpg',description:'Une équation à porter.',color:'#eee8df'},
 {id:'creme-brulee',name:'Crème brûlée universelle',category:'tshirt',price:29.90,image:'/images/boutique/creme-brulee.jpg',description:'Une autre planète, la même gourmandise.',color:'#22382f'},
 {id:'tablier',name:'Le tablier',category:'apron',price:34.90,image:'/images/boutique/tablier.jpg',description:'Le bistrot jusque dans la cuisine.',color:'#70432f'},
 {id:'torchon',name:'Le torchon',category:'towel',price:14.90,image:'/images/boutique/torchon.jpg',description:'Pour les belles habitudes du quotidien.',color:'#e6dfd2'},
 {id:'tote-bag',name:'Le cabas',category:'bag',price:16.90,description:'Un peu de Chez Lulu partout.',color:'#e8ddc9'},
];
export const euro=(amount:number)=>new Intl.NumberFormat('fr-FR',{style:'currency',currency:'EUR'}).format(amount);
