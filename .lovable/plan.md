## Simulateur "Quels diagnostics sont obligatoires ?"

### Nouvelle route
- `src/routes/simulateur.tsx` — page dédiée avec `head()` SEO ("Simulateur diagnostics obligatoires — DIAG VERITAS", description ciblant "diagnostics obligatoires vente location Île-de-France").
- Ajout du lien "Simulateur" dans `site-header.tsx` (nav desktop + menu mobile) et éventuellement footer.

### Composant simulateur (`src/components/simulator.tsx`)
Un wizard multi-étapes, une question par écran, dans un carte noir/or cohérente avec le design existant (bordures `gold/20`, `font-display` pour titres, boutons dorés).

**Étapes (7 questions)** :
1. Type d'opération — Vente / Location
2. Type de bien — Appartement / Maison
3. Année de construction — input `number` (validation 1800–année courante)
4. Copropriété — Oui / Non (auto-skip et forcé à "Oui" si Appartement pour simplifier ? → non, on garde la question pour maison en copro)
5. Installation électrique > 15 ans — Oui / Non / Je ne sais pas
6. Installation gaz > 15 ans — Oui / Non / Pas de gaz
7. Commune sous arrêté termites — Oui / Non / Je ne sais pas (avec petit lien info)

**UI** :
- Barre de progression dorée (`x / 7`)
- Boutons "Précédent" / "Suivant"
- Grandes cartes cliquables pour les choix binaires
- Animation de transition douce (opacity/translate CSS, pas de librairie ajoutée)
- Entièrement responsive (grid 1 col mobile, 2 col desktop pour les choix)
- Accessibilité : `role="radiogroup"`, labels, focus visible

### Moteur de règles (`src/lib/simulator-logic.ts`)
Fonction pure `computeDiagnostics(answers)` retournant la liste des slugs de `DIAGNOSTICS` requis + raison courte pour chaque :
- DPE — toujours
- ERP — toujours
- CREP plomb — si `année < 1949`
- Amiante — si `année < 1997` (approximation permis avant 01/07/1997)
- Électricité — si `elec > 15 ans` **OU** si `année de construction ≤ année courante − 15` et réponse "je ne sais pas"
- Gaz — même logique si "je ne sais pas", ignoré si "pas de gaz"
- Loi Boutin — si location
- Loi Carrez — si vente **ET** copropriété
- Termites — si arrêté = Oui (si "je ne sais pas" → afficher en "à vérifier")

Chaque diagnostic renvoyé pointe vers sa fiche `/diagnostics/$slug` (lien depuis les cartes de résultat).

### Écran de résultat
- Titre "Vos diagnostics obligatoires" + sous-titre récap ("Vente · Appartement · 1965 · copropriété…")
- Grille de cartes reprenant le style de la home (icône Lucide, nom, prix "à partir de X€", lien fiche)
- Section "À vérifier" séparée pour les cas incertains (termites/élec inconnus)
- Encart d'avertissement doré avec le texte demandé :
  > « Ce résultat est fourni à titre indicatif. Les obligations peuvent varier selon les caractéristiques du bien et la réglementation en vigueur. Contactez DIAG VERITAS pour une vérification gratuite et un devis personnalisé. »
- Deux CTA : **"Demander un devis"** (Link vers `/devis` avec query params `?diagnostics=dpe,amiante,...` pré-remplissant le formulaire) + "Appeler maintenant" (tel:)
- Bouton "Recommencer le simulateur"

### Pré-remplissage de `/devis`
Petite mise à jour de `src/routes/devis.tsx` pour lire `?diagnostics=` et cocher automatiquement les prestations correspondantes (si le formulaire actuel ne gère pas la sélection multiple, on ajoute simplement un pré-message dans le champ "message" listant les diagnostics identifiés — approche moins intrusive).

### Intégration Accueil
Dans `src/routes/index.tsx` :
- Nouvel encart entre la section "Diagnostics" et "Pourquoi nous choisir", format bandeau horizontal doré :
  - Titre "Pas sûr des diagnostics obligatoires pour votre bien ?"
  - Bouton **"Trouver mes diagnostics obligatoires"** → `/simulateur`
- Ajout d'un CTA secondaire discret dans le hero (petit lien sous les boutons).

### État & tech
- État local `useState` (aucun backend, aucun stockage), un seul composant client.
- Pas de nouvelles dépendances.
- Icônes Lucide déjà présentes.
- Tokens `gold`, `gold-gradient-text`, `shadow-gold` déjà définis dans `styles.css`.

### SEO
- `head()` avec title/description/og
- JSON-LD `WebApplication` léger pointant vers le simulateur
- Ajout de `/simulateur` au `sitemap.xml`

### Livraison
Un seul batch d'édits :
- création `simulator-logic.ts`, `simulator.tsx`, `routes/simulateur.tsx`
- édition `index.tsx`, `site-header.tsx`, `sitemap[.]xml.ts`, éventuellement `devis.tsx`
