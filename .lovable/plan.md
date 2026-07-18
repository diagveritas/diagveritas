
# Plan d'optimisation globale — DIAG VERITAS

Vous m'avez demandé une amélioration massive. Comme vous souhaitez être consulté avant chaque **changement majeur d'apparence ou de fonctionnement**, je propose de structurer le travail en **6 lots**. Vous validez le lot 1 (le plus stratégique et sans risque visuel), puis je vous soumets un aperçu avant les lots suivants qui touchent au design.

---

## LOT 1 — SEO technique & contenu (aucun impact visuel) ✅ prêt à lancer

**A. Nouveaux diagnostics ajoutés au catalogue**
Ajout dans `diagnostics-data.ts` de : **PPPT, DTG, DPE Immeuble, Amiante avant travaux, Amiante avant démolition** (contenu unique, prix, obligations, points clés, FAQ).
→ 5 nouvelles pages `/diagnostics/[slug]` indexables.

**B. FAQ unique par diagnostic**
Chaque page `/diagnostics/$slug` reçoit **6 questions/réponses uniques** + balisage `FAQPage` Schema.org (déjà en place pour les villes).

**C. Extension des villes (48 → ~70)**
Ajout des villes manquantes que vous citez : **Coubron, Courtry, Le Pin, Vaujours** (93/77) + renforcement Oise (Creil, Compiègne, Beauvais, Senlis, Chantilly, Nogent-sur-Oise, Pont-Sainte-Maxence, Crépy-en-Valois, Méru). Chaque page = intro + contexte + parc immobilier + focus local + quartiers + FAQ, **100 % unique** (rédaction manuelle, pas de template).

**D. Pages combinées « Prestation × Ville » (silo SEO)**
Création d'une route dynamique `/{diagnostic}-{ville}` (ex. `/dpe-livry-gargan`, `/amiante-paris`) pour les **5 diagnostics phares × 12 villes prioritaires = 60 pages** de longue traîne, chacune avec contenu contextuel unique, tarifs, délais, FAQ locale, JSON-LD Service.
→ Non liées au menu, uniquement via sitemap + maillage interne depuis les pages villes/diagnostics.

**E. Sitemap & robots**
- Sitemap XML étendu automatiquement à toutes les nouvelles URL.
- `robots.txt` : ajout `Sitemap:` + `Disallow` sur `/lovable/` et `/api/`.
- Ajout d'un `sitemap-index.xml` séparant villes / diagnostics / combos.

**F. Données structurées renforcées**
- `Organization` + `WebSite` (SearchAction) dans `__root.tsx`
- `LocalBusiness` avec `openingHours`, `geo`, `aggregateRating` (si vous acceptez d'afficher une note moyenne — à confirmer)
- `BreadcrumbList` sur toutes les pages profondes
- `Service` par diagnostic avec `areaServed` multi-villes

**G. Maillage interne**
- Bloc « Diagnostics associés » sur chaque page diagnostic
- Bloc « Autres villes proches » (déjà présent) + « Diagnostics populaires à [ville] » avec liens vers les combos
- Footer enrichi : top 12 villes + 8 diagnostics principaux

**H. Balises méta**
Audit et réécriture des `title` (<60 car.) et `meta description` (<160 car.) sur toutes les pages avec mots-clés locaux + call-to-action.

**I. Corrections techniques**
- Vérification de tous les `Link` (typage TanStack)
- Ajout `hreflang="fr-FR"`
- Ajout `<link rel="preconnect">` pour Google Fonts
- Attributs `alt` explicites partout
- `loading="lazy"` sur images non-LCP

---

## LOT 2 — Performance ⚡ (aucun impact visuel)

- Conversion images (JPG → WebP/AVIF via `vite-imagetools`)
- Preload de l'image LCP du hero
- Font-display: swap + subset latin
- Suppression CSS/JS inutilisés
- Compression gzip/brotli vérifiée
- Score Lighthouse cible : **95+ mobile**

---

## LOT 3 — UX / conversion (impact visuel léger — validation requise avant exécution)

- Ajout d'un **bandeau de confiance** sous le hero (5 chiffres clés : ans d'expérience, biens diagnostiqués, note moyenne, délai, garantie)
- Bloc **« Comment ça marche »** en 3 étapes (Devis → Visite → Rapport)
- **Sticky CTA** desktop (barre latérale flottante avec téléphone + devis)
- **Micro-animations** au scroll (framer-motion, subtil)
- Amélioration du formulaire de devis : progression visuelle, validation temps réel
- **Preuves sociales renforcées** : logos partenaires (agences, notaires) si vous en avez
- Page « Avis clients » dédiée avec Schema `Review`

---

## LOT 4 — Design premium (impact visuel fort — validation obligatoire)

Je vous proposerai **3 directions visuelles** (via l'outil de prototypage) avant toute modification :
- Direction A : épurée éditoriale (plus de blanc, typo Cormorant renforcée)
- Direction B : dense premium (dorures marquées, textures subtiles)
- Direction C : moderne institutionnel (plus proche Bureau Veritas)

---

## LOT 5 — Contenu Google Business Profile (livrable texte, hors site)

Livraison dans un fichier `GOOGLE_BUSINESS_PROFILE.md` :
- Description courte (750 car.) + longue
- Catégorie principale + secondaires
- Liste des 30 services avec descriptions
- 15 questions/réponses pré-rédigées
- 20 mots-clés stratégiques
- 12 modèles de publications (mensuelles) avec CTA
- Template de demande d'avis clients
- Checklist de configuration

---

## LOT 6 — Analytics & tracking avancé

- Vérification GTM/GA4 (déjà en place via `track.ts`)
- Ajout événements : scroll 75%, temps sur page, clic tel/mail
- Balises Google Ads conversion prêtes à activer
- Microdata pour rich snippets (prix, avis, disponibilité)

---

## Compte rendu final

À la fin de chaque lot je vous livrerai un rapport détaillé (fichiers modifiés, raisons, impact SEO estimé, recommandations complémentaires).

---

## ✋ Ce que je vous demande maintenant

1. **Je démarre immédiatement le LOT 1 + LOT 2** (SEO + perf, zéro impact visuel) ?
2. Pour le LOT 3 (UX) : je vous montre des maquettes avant modification — **OK ?**
3. Le **LOT 4 (redesign)** est-il souhaité, ou souhaitez-vous conserver le design actuel ?
4. Point à confirmer : puis-je afficher une **note moyenne « 4,9/5 sur X avis »** dans le schema `AggregateRating` ? (nécessaire pour les étoiles Google — mais doit correspondre à de vrais avis Google Business)
5. Avez-vous des **logos partenaires** (agences, notaires, mandataires) à intégrer ?
