## Périmètre demandé

Cinq chantiers. Avant de tout coder, quelques points à valider — surtout le domaine et l'ampleur du SEO.

---

### 1. SEO — Expansion massive (50 à 100 villes)

**Ce que je vais faire**
- Étendre `src/lib/cities-data.ts` à ~70 communes couvrant : Seine-Saint-Denis (93), Seine-et-Marne (77), Val-d'Oise (95), Oise (60), et communes limitrophes de Paris/92/94 pertinentes.
- Chaque ville aura un contenu **unique** (intro, contexte parc immobilier, quartiers, spécificités réglementaires) — pas de duplicate content. Générer 70 textes uniques de qualité représente un vrai volume ; je le ferai par lots cohérents (département par département).
- Ajouter une **FAQ unique par ville** (5-6 questions) avec balisage JSON-LD `FAQPage` : "Prix DPE à [ville] ?", "Délai d'intervention ?", "Zone termites ?", etc.
- Maillage interne renforcé : chaque page ville liera vers 6-8 villes voisines + tous les diagnostics + simulateur + devis.
- Hub `/zones` réorganisé par département avec compteurs.
- Sitemap.xml étendu automatiquement (déjà dynamique).
- Ajout de `hreflang="fr-FR"`, `lang="fr"`, données structurées `LocalBusiness` avec `geo` (lat/lng) et `openingHoursSpecification` complet.
- Balises `<h1>`/`<h2>` optimisées par ville, alt-text sur toutes les images, `loading="lazy"` sur images non-LCP, `fetchpriority="high"` sur le hero.

**Google Search Console & Analytics**
- GSC : je peux vérifier le domaine automatiquement via la balise meta une fois `diagveritas.fr` connecté (via mon connecteur Google). Sinon je fournis la balise à coller.
- Google Analytics 4 : nécessite votre ID `G-XXXXXXXXXX`. Créez une propriété GA4 gratuite sur analytics.google.com et donnez-moi l'ID. Sinon j'utilise l'analytics Lovable déjà intégré (visible dans votre panneau "More").

---

### 2. Tracking des conversions

- Événements `dataLayer` (compatibles GA4 + GTM) sur :
  - Clic téléphone (`tel:`) → event `call_click`
  - Clic "Demander un devis" → event `quote_cta_click`
  - Soumission formulaire devis réussie → event `quote_submit`
  - Soumission formulaire contact réussie → event `contact_submit`
  - Utilisation du simulateur → event `simulator_complete`
- Compatible GA4 (une fois l'ID fourni) et Google Ads (conversions importables).

---

### 3. Suppression Tarifs

- Suppression du lien "Tarifs" dans header + footer + toute mention interne.
- Suppression du fichier `src/routes/tarifs.tsx`.
- Retrait de `/tarifs` du sitemap.
- Redirection SEO 301 `/tarifs` → `/devis` (via route splat qui renvoie `Response(..., { status: 301 })`) pour ne perdre aucun jus SEO existant.
- Sur pages diagnostics et villes : remplacement des mentions de prix "à partir de X€" par des CTA "Devis personnalisé" + lien vers simulateur.

---

### 4. Performance & UX

- Audit avant/après avec vérification que rien ne régresse.
- Preload de l'image LCP hero, conversion des images bundlées en AVIF/WebP (`vite-imagetools`).
- Vérification qu'aucune page n'a de bundle JS excessif.
- Skip link pour l'accessibilité, focus states visibles, contrastes WCAG AA.

---

### 5. Domaine diagveritas.fr (OVH)

**Réponse claire** :
- Connecter un domaine personnalisé sur Lovable **nécessite un plan payant (Pro minimum)**. Sur le plan gratuit, ce n'est pas disponible.
- **Solutions gratuites** :
  1. **Rediriger `diagveritas.fr` vers `diagveritas.lovable.app`** depuis votre espace OVH (redirection 301 visible). Simple mais l'URL affichée reste `.lovable.app` — mauvais pour le SEO et l'image de marque. **Non recommandé**.
  2. **Exporter le code et l'héberger vous-même** : Lovable permet d'exporter le projet vers GitHub gratuitement. Vous pouvez ensuite déployer sur **Cloudflare Pages** ou **Netlify** ou **Vercel** (tous 100 % gratuits pour ce type de site) et connecter `diagveritas.fr` là-bas. Fonctionne parfaitement mais toute modification future se ferait hors de Lovable (ou nécessiterait de re-synchroniser).
  3. **Passer au plan Pro Lovable** : le plus simple, tout reste centralisé. Configuration guidée depuis Project Settings → Domains (records A vers `185.158.133.1`).

Je ne peux pas vous connecter le domaine moi-même sur le plan gratuit. Décision à prendre.

---

## Questions avant exécution

1. **Nombre de villes** : je pars sur ~70 (couverture solide 77/93/95/60 + limitrophes). OK, ou vous voulez viser 100 exactement ?
2. **Google Analytics** : vous me fournissez un ID GA4, ou je m'appuie uniquement sur l'analytics Lovable + dataLayer prêt pour GA4 futur ?
3. **Domaine** : Pro Lovable, export vers hébergement gratuit tiers, ou on reste sur `.lovable.app` pour l'instant ?

Dès que vous validez, je commence par le plus rapide (suppression Tarifs + tracking) puis j'attaque l'expansion des villes par département.
