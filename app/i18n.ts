export const locales = ['fr', 'en', 'es', 'it'] as const;
export type Locale = (typeof locales)[number];
export type ForeignLocale = Exclude<Locale, 'fr'>;
export const foreignLocales: ForeignLocale[] = ['en','es','it'];
export const isForeignLocale = (value: string): value is ForeignLocale => foreignLocales.includes(value as ForeignLocale);
export const localizedHref = (locale: Locale, path: string = '') => locale === 'fr' ? ('/' + path) : ('/' + locale + (path ? '/' + path : ''));
export const alternativeLanguages = (path: string = '') => Object.fromEntries(locales.map(locale => [locale, localizedHref(locale,path)]));
export const texts = {
  en: {
    nav:['Menu','Our story','Exhibition','Shop','In the press','Find us'], reserve:'Book a table',
    slogan:'Provence, without the fuss.', hero:'Generous food, a place to come together.', viewMenu:'Explore the menu',
    atTable:'AT THE TABLE', simply:'Simply good.', intro:'Bistro cooking, generous plates and the pleasure of sharing a good meal.',
    spirit:'THE SPIRIT OF LULU', storyTitle:'Chez Lulu, simply.', story1:'Our cooking takes inspiration from the traditions of southern France, follows the seasons and leaves room for our own ideas.',story2:'Come for a coffee, stay for lunch, catch up over a glass. Along the way, discover the artists exhibiting on our walls.', story3:'In Avignon, Provence is best enjoyed without the fuss.',
    now:'ON SHOW', exhibit:'Painting exhibition', dates:'20 November 2026 – 7 February 2027',exhibitText:'Chez Lulu welcomes paintings by MAT GM. A chance to discover an artistic world over a coffee, lunch or a drink.', vernissage:'Opening reception · Friday 4 December 2026 at 6 pm', instagram:'Follow our exhibitions on Instagram',
    shop:'THE SHOP', shopTitle:'A little Lulu to take home.',shopText:'Objects, textiles and little things to take away. Our first selection is coming soon.',shopNote:'Selection coming soon',
    press:'IN THE PRESS', pressTitle:'In the press.',
    find:'FIND US',findTitle:'See you soon?',findText:'In the heart of Avignon:',directions:'Directions on Google Maps',call:'Call to book',hours:'Opening hours',closed:'Closed',
    faq:'Frequently asked questions',qParking:'Where can I park?',aParking:'Les Halles car park is the most convenient, about a 3-minute walk from the restaurant.',parkingLink:'Find Les Halles car park',qBooking:'Do I need a reservation?',aBooking:'To book a table, call',qVeg:'Do you offer vegetarian dishes?',aVeg:'Yes, our menu includes vegetarian options.',qWhere:'Where is Chez Lulu?',aWhere:'At 42 rue Carnot, in central Avignon.',planRoute:'Plan your route',
    menuTitle:'The menu',menuIntro:'Our cooking follows the seasons and draws on the traditions of southern France, with the freedom to add our own touch. Generous dishes, a few surprises and, above all, the pleasure of eating well, without the fuss.',menuNote:'Dish names and descriptions are currently in French.',tabs:['Food','Drinks','Wine','Breakfast'], days:['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], ask:'Ask us'
  },
  es: {
    nav:['Carta','Nuestra historia','Exposición','Tienda','En la prensa','Dónde estamos'], reserve:'Reservar mesa',
    slogan:'La Provenza, sin ceremonias.', hero:'Cocina generosa, un lugar para encontrarse.', viewMenu:'Descubrir la carta',
    atTable:'A LA MESA',simply:'Sencillamente bueno.',intro:'Cocina de bistrot, platos generosos y el placer de compartir una buena comida.',
    spirit:'EL ESPÍRITU LULU',storyTitle:'Chez Lulu, así de sencillo.',story1:'Nuestra cocina se inspira en las tradiciones del sur de Francia, sigue las estaciones y deja espacio para nuestra creatividad.',story2:'Ven a tomar un café, a comer o a charlar con una copa. Y descubre también los artistas que exponen en nuestras paredes.',story3:'En Aviñón, la Provenza se disfruta sin ceremonias.',
    now:'AHORA',exhibit:'Exposición de pintura',dates:'Del 20 de noviembre de 2026 al 7 de febrero de 2027',exhibitText:'Chez Lulu acoge las pinturas de MAT GM. Una oportunidad de descubrir su universo artístico tomando un café, comiendo o compartiendo una copa.',vernissage:'Inauguración · Viernes 4 de diciembre de 2026 a las 18:00',instagram:'Seguir las exposiciones en Instagram',
    shop:'LA TIENDA',shopTitle:'Un poquito de Lulu para llevar.',shopText:'Objetos, ropa y pequeños recuerdos para llevarse a casa. Pronto llegará nuestra primera selección.',shopNote:'Próximamente',
    press:'EN LA PRENSA',pressTitle:'Hablan de nosotros.',
    find:'DÓNDE ESTAMOS',findTitle:'¿Nos vemos?',findText:'En el corazón de Aviñón:',directions:'Cómo llegar con Google Maps',call:'Llamar para reservar',hours:'Horario',closed:'Cerrado',
    faq:'Preguntas frecuentes',qParking:'¿Dónde puedo aparcar?',aParking:'El aparcamiento de Les Halles es el más práctico, a unos 3 minutos andando del restaurante.',parkingLink:'Ver el aparcamiento Les Halles',qBooking:'¿Hay que reservar?',aBooking:'Para reservar una mesa, llámanos al',qVeg:'¿Hay opciones vegetarianas?',aVeg:'Sí, nuestra carta incluye opciones vegetarianas.',qWhere:'¿Dónde está Chez Lulu?',aWhere:'En el número 42 de rue Carnot, en el centro de Aviñón.',planRoute:'Cómo llegar',
    menuTitle:'La carta',menuIntro:'Nuestra cocina sigue las estaciones y se inspira en las tradiciones del sur de Francia, con libertad para aportar nuestro toque personal. Platos generosos, alguna sorpresa y el placer de comer bien, sin ceremonias.',menuNote:'Los nombres y las descripciones de los platos están por ahora en francés.',tabs:['Comida','Bebidas','Vinos','Desayuno'],days:['Lunes','Martes','Miércoles','Jueves','Viernes','Sábado','Domingo'],ask:'Consúltanos'
  },
  it: {
    nav:['Menù','La nostra storia','Mostra','Negozio','Stampa','Dove siamo'],reserve:'Prenota un tavolo',
    slogan:'La Provenza, senza cerimonie.',hero:'Una cucina generosa, un posto dove ritrovarsi.',viewMenu:'Scopri il menù',
    atTable:'A TAVOLA',simply:'Semplicemente buono.',intro:'Cucina da bistrot, piatti generosi e il piacere di condividere un buon pasto.',
    spirit:'LO SPIRITO LULU',storyTitle:'Chez Lulu, semplicemente.',story1:'La nostra cucina si ispira alle tradizioni del Sud della Francia, segue le stagioni e lascia spazio alla nostra creatività.',story2:'Vieni per un caffè, fermati a pranzo o ritrovati con gli amici davanti a un bicchiere. E scopri gli artisti che espongono sulle nostre pareti.',story3:'Ad Avignone, la Provenza si vive senza cerimonie.',
    now:'IN QUESTO MOMENTO',exhibit:'Mostra di pittura',dates:'Dal 20 novembre 2026 al 7 febbraio 2027',exhibitText:'Chez Lulu ospita i dipinti di MAT GM. Un’occasione per scoprire il suo universo artistico davanti a un caffè, a pranzo o con un bicchiere in mano.',vernissage:'Inaugurazione · Venerdì 4 dicembre 2026 alle 18:00',instagram:'Segui le mostre su Instagram',
    shop:'IL NEGOZIO',shopTitle:'Un po’ di Lulu da portare a casa.',shopText:'Oggetti, abbigliamento e piccole idee da portare via. La nostra prima selezione arriverà presto.',shopNote:'Prossimamente',
    press:'SULLA STAMPA',pressTitle:'Parlano di noi.',
    find:'DOVE SIAMO',findTitle:'Ci vediamo da Lulu?',findText:'Nel cuore di Avignone:',directions:'Indicazioni su Google Maps',call:'Chiama per prenotare',hours:'Orari di apertura',closed:'Chiuso',
    faq:'Domande frequenti',qParking:'Dove posso parcheggiare?',aParking:'Il parcheggio Les Halles è il più comodo, a circa 3 minuti a piedi dal ristorante.',parkingLink:'Vedi il parcheggio Les Halles',qBooking:'Devo prenotare?',aBooking:'Per prenotare un tavolo, chiamaci al',qVeg:'Ci sono piatti vegetariani?',aVeg:'Sì, il nostro menù include opzioni vegetariane.',qWhere:'Dove si trova Chez Lulu?',aWhere:'Al 42 di rue Carnot, nel centro di Avignone.',planRoute:'Indicazioni',
    menuTitle:'Il menù',menuIntro:'La nostra cucina segue le stagioni e si ispira alle tradizioni del Sud della Francia, con la libertà di aggiungere il nostro tocco personale. Piatti generosi, qualche sorpresa e soprattutto il piacere di mangiare bene, senza cerimonie.',menuNote:'I nomi e le descrizioni dei piatti sono per ora in francese.',tabs:['Da mangiare','Bevande','Vini','Colazione'],days:['Lunedì','Martedì','Mercoledì','Giovedì','Venerdì','Sabato','Domenica'],ask:'Chiedici'
  }
} as const;
