# Boutique Chez Lulu — MVP, collection inaugurale 2026

La boutique est disponible sous `/boutique`. Elle présente un vrai catalogue visuel de 10 références, mais **aucun achat ni paiement** tant que la production n'a pas commencé. L'intention se mesure par clic et par e-mail laissé pour être informé de la disponibilité.

## À faire une seule fois pour activer la collecte

1. Dans Cloudflare, ouvrez **Workers & Pages → D1 SQL Database** et créez une base de données (par exemple `chez-lulu-boutique`).
2. Ouvrez l'onglet **Console** de cette base et exécutez le contenu de `boutique-db.sql`.
3. Dans **Workers & Pages → chez-lulu-site → Settings → Bindings**, ajoutez un binding de type **D1 database**, variable exactement `BOUTIQUE_DB`, vers cette base. Vérifiez les environnements Production et Preview, puis redéployez.
4. Vérifiez que le déploiement utilise le répertoire de sortie Next.js `out` et prend en charge le répertoire racine `functions/` de Cloudflare Pages.
5. Testez une inscription à `/boutique` avec une adresse e-mail que vous contrôlez, puis vérifiez la base en SQL.

Sans le binding D1, les appels à `/api/interest` renvoient 503 et le site n'affiche **pas** de fausse confirmation d'inscription. Aucune plate-forme d'e-mailing ni envoi automatique n'est encore connectée : les adresses sont uniquement conservées dans D1, pour un futur avis de disponibilité manuel ou via une intégration consentie.

## Mesure et analyse des résultats

Depuis la Console D1:

```sql
SELECT product_id, event, COUNT(*) AS total FROM boutique_events
GROUP BY product_id, event ORDER BY total DESC;

SELECT product_id, COUNT(*) AS prospects FROM boutique_leads
GROUP BY product_id ORDER BY prospects DESC;
```

Les clics `interest` sont anonymes et comptabilisés par article. Les inscriptions sont dédupliquées par article et e-mail. Le produit est enregistré automatiquement : on ne demande jamais au visiteur de choisir une deuxième fois. Le formulaire n'a qu'un champ obligatoire (e-mail), et une taille facultative pour les t-shirts.

## Images

Les fichiers photographiques attendus doivent être envoyés individuellement dans `public/images/boutique/`, avec les noms:
- `daube.jpg`
- `tout-au-fond.jpg`
- `cest-qui-lulu.jpg`
- `lu-plus-lu.jpg`
- `creme-brulee.jpg`
- `tablier.jpg`
- `torchon.jpg`

Deux images attendent encore des références définitives : **Lulu, c'est vous** et **La façade**. Le cabas n'a pas encore de photographie. En leur absence, le site montre un visuel de substitution de marque, et ne fait pas passer une création provisoire pour un produit fini.

## Avant communication publique

- Vérifier l'ergonomie mobile, les prix TTC, l'ensemble du catalogue et le fonctionnement des liens.
- Mettre en ligne les mentions légales et une politique de confidentialité précisant le responsable de traitement, les finalités, la durée de conservation, et les modalités d'accès/suppression des e-mails.
- Ajouter un moyen de protection contre les inscriptions automatisées si nécessaire, sans friction abusive pour les utilisateurs.
- Ne pas promettre d'envoi automatique des e-mails avant qu'une solution de notification ne soit mise en service.
