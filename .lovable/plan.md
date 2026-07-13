# Plan : Site DIAG VERITAS

Site vitrine haut de gamme, esthétique noir & or, pour une entreprise de diagnostics immobiliers basée à Livry-Gargan (93) intervenant en Île-de-France et dans l'Oise.

## Identité & design

- Palette : noir profond (#0a0a0a), anthracite, or (#c9a84c, #f0d78c), blanc cassé pour le texte
- Typographie : Cormorant Garamond (titres, serif élégant) + Inter (corps, lisibilité)
- Ambiance : premium, éditorial, sérieux ; larges espaces, fines lignes dorées, animations discrètes au scroll
- Composants : shadcn/ui personnalisés, boutons dorés avec dégradé subtil, cartes noires avec bordure or à 1px
- 100% responsive mobile-first, sticky header avec CTA « Appeler maintenant » (tel:+33672297362) toujours visible
- Bouton flottant d'appel sur mobile

## Pages (routes TanStack Start)

```
/                    Accueil
/diagnostics         Vue d'ensemble + grille des 9 diagnostics
/diagnostics/$slug   Fiche détaillée par diagnostic (dpe, amiante, plomb, electricite, gaz, termites, erp, loi-boutin, loi-carrez)
/tarifs              Grille « à partir de »
/a-propos            Entreprise, certifications, assurances, Bureau Veritas
/contact             Coordonnées + iframe Google Maps + formulaire court
/devis               Formulaire complet de demande de devis
```

Chaque route a son propre `head()` (title, description, og:title, og:description, canonical relatif) avec mots-clés SEO ciblés.

## Contenu clé

**Accueil**
- Hero : accroche « Diagnostics immobiliers certifiés en Île-de-France & Oise », sous-titre, 2 CTA (Devis / Appeler), badge certifications
- Bandeau logos : Bureau Veritas, certifications, assurances
- Section « Nos diagnostics » : grille 3×3 des 9 prestations avec icône dorée
- Section « Pourquoi DIAG VERITAS » : certifié, assuré, rapide, tarifs transparents
- Zones d'intervention (93, IDF, Oise) avec villes clés dont Livry-Gargan
- Avis clients (carrousel)
- CTA final devis

**Diagnostics** : page index + 9 fiches détaillées (à quoi ça sert, obligation légale, durée validité, prix indicatif, CTA devis)

**Tarifs** : tableau prix « à partir de » par prestation + formules (vente/location)

**À propos** : histoire, valeurs, équipe, certifications COFRAC/Bureau Veritas, assurance RC Pro (placeholders à remplir), zones d'intervention

**Contact** : téléphone cliquable, email, adresse (14 rue Eugène Massé, 93190 Livry-Gargan), horaires, iframe Google Maps centrée sur l'adresse, mini-formulaire

**Devis** : formulaire complet avec validation Zod (nom, email, téléphone, type de bien, surface, adresse, diagnostics souhaités checkboxes, message). Envoi via `mailto:` pré-rempli vers contact.diagveritas@gmail.com (pas de backend, pas de secrets nécessaires). Message de confirmation clair.

## SEO

- `<title>` uniques par page ciblant : « diagnostic immobilier Livry-Gargan », « DPE Seine-Saint-Denis », « diagnostic immobilier Oise », « diagnostic immobilier Île-de-France »
- Meta description spécifique par page
- Un `<h1>` par page, hiérarchie sémantique
- JSON-LD `LocalBusiness` sur l'accueil (nom, adresse, téléphone, zone desservie, horaires)
- JSON-LD `Service` sur chaque fiche diagnostic
- `og:image` : image hero générée pour l'accueil uniquement (route feuille)
- `sitemap.xml` via route serveur listant toutes les pages
- `robots.txt` autorisant tout
- Images optimisées avec `alt` descriptifs
- Liens internes entre fiches diagnostics et devis

## Détails techniques

- TanStack Start + Tailwind v4 + shadcn/ui existant
- Tokens design (noir/or, radius, ombres dorées) définis dans `src/styles.css` via `@theme inline`
- Polices chargées via `<link>` Google Fonts dans `__root.tsx`
- Formulaires : `react-hook-form` + `zod` (déjà présents dans shadcn)
- Icônes : lucide-react
- Animations légères CSS/tailwind (fade-in au scroll via `IntersectionObserver` custom)
- Aucune dépendance backend : formulaires ouvrent le client mail de l'utilisateur (rapide à mettre en place, aucun secret). Migration possible plus tard vers Lovable Cloud si souhaité.
- 1 image hero générée (façade immeuble haussmannien / clé dorée, ambiance premium)
- Logo Bureau Veritas : placeholder texte stylisé (le vrai logo nécessite l'accord de BV)

## Livraison

Un premier passage complet du site, puis itérations selon vos retours (contenu réel, photos, prix exacts, avis, logos officiels).