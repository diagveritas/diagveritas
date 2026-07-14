## Envoi réel des demandes de devis par e-mail

Objectif : remplacer le `mailto:` actuel par un vrai envoi automatique côté serveur vers `contact.diagveritas@gmail.com`, avec message de succès / d'erreur clairs, et faire la même chose pour le formulaire de contact.

### 1. Prérequis backend (Lovable Cloud + Emails)

- Activer **Lovable Cloud** (nécessaire pour l'envoi d'e-mails managé).
- Configurer un **domaine e-mail** : Lovable délègue un sous-domaine (ex. `notify.votredomaine.fr`) via des enregistrements NS. C'est indispensable pour envoyer vers Gmail de façon fiable (sinon impossible d'envoyer depuis le site).
  - Vous devrez posséder un nom de domaine (ex. `diagveritas.fr`). Si vous n'en avez pas encore, il faudra en acheter un (chez OVH, Gandi, Cloudflare, etc.).
  - Une interface s'ouvrira pour compléter la configuration DNS. Tant que le domaine n'est pas vérifié, aucun envoi n'est possible.

### 2. Template e-mail "Demande de devis"

- Créer `src/lib/email-templates/quote-request.tsx` (React Email) reprenant l'identité noir/or :
  - Sujet : `Nouvelle demande de devis — {Nom Prénom}`
  - Contenu : nom & prénom, téléphone, e-mail, adresse du bien, type de bien, surface, diagnostics demandés (liste), message client.
  - Bouton "Répondre au client" (`mailto:` vers l'e-mail du client) pour faciliter la réponse.
- Créer aussi `src/lib/email-templates/contact-request.tsx` pour le formulaire de contact (même logique, champs adaptés).
- Enregistrer les deux templates dans `src/lib/email-templates/registry.ts`.

### 3. Route serveur d'envoi

- Créer `src/routes/api/quote-request.ts` (POST) :
  - Validation Zod côté serveur (mêmes règles que le formulaire).
  - Rate-limit léger par IP (anti-spam simple).
  - Appelle `sendTemplateEmail('quote-request', 'contact.diagveritas@gmail.com', { templateData, replyTo: emailDuClient })`.
  - Réponses JSON : `{ ok: true }` ou `{ ok: false, error: '...' }` avec status HTTP approprié.
- Créer `src/routes/api/contact-request.ts` sur le même modèle.

### 4. Mise à jour des formulaires

- `src/routes/devis.tsx` :
  - Remplacer la logique `mailto:` par un `fetch('/api/quote-request', { method: 'POST', body: JSON.stringify(...) })`.
  - État `loading` (bouton désactivé + spinner "Envoi en cours…").
  - Sur succès : afficher **« Votre demande a bien été envoyée. DIAG VERITAS vous recontactera rapidement. »** (encart doré déjà présent, texte mis à jour).
  - Sur erreur : encart rouge clair **« L'envoi a échoué. Merci de réessayer dans un instant ou de nous appeler au 06 72 29 73 62. »** avec bouton "Réessayer".
- `src/routes/contact.tsx` : mêmes changements pour le formulaire de contact.

### 5. Test réel

- Après vérification du domaine, envoyer une **demande test** depuis le site via une commande serveur.
- Vérifier via `email_domain--list_email_logs` que l'e-mail est bien parti et accepté.
- Vous confirmerez la bonne réception dans la boîte `contact.diagveritas@gmail.com` (y compris dossier Spam au premier envoi).

### Points à confirmer avant implémentation

1. **Avez-vous un nom de domaine** (ex. `diagveritas.fr`) utilisable pour l'envoi ? Si oui, lequel ? Si non, souhaitez-vous en acheter un avant qu'on continue ?
2. Souhaitez-vous que le **formulaire de contact** (`/contact`) bénéficie aussi du vrai envoi (recommandé, même travail) ?
3. Voulez-vous en plus un **accusé de réception automatique** envoyé au client (« Nous avons bien reçu votre demande… ») ? Optionnel mais rassurant.
