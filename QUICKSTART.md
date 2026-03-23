# 🚀 Guide de Démarrage Rapide - Traveling

## En 5 Minutes

Voici comment tester toutes les fonctionnalités de l'application Traveling en quelques minutes.

## ⚡ Installation

```bash
# Installer les dépendances
npm install

# Lancer l'application
npm run dev
```

Ouvrir http://localhost:5173 dans votre navigateur.

## 🎯 Scénarios de Test Rapides

### 1️⃣ Mode Découverte (2 min)

**Objectif** : Tester l'expérience utilisateur invité

1. Sur l'écran d'accueil, cliquer sur **TravelShare**
2. Observer le banner "Mode découverte"
3. Faire défiler le flux de photos
4. Cliquer sur une photo pour voir les détails
5. Essayer de cliquer sur le ❤️ (like)
   - ✅ Une confirmation apparaît pour se connecter
6. Cliquer sur 🔍 (recherche)
7. Rechercher "paris"
8. Observer les résultats

**Résultat attendu** : L'utilisateur peut explorer mais est invité à se connecter pour interagir.

---

### 2️⃣ Inscription et Connexion (1 min)

**Objectif** : Créer un compte

1. Depuis TravelShare, cliquer sur **S'inscrire**
2. Remplir le formulaire :
   - Nom : `Jean Dupont`
   - Email : `jean@exemple.com`
   - Mot de passe : `password123`
3. Cliquer sur **S'inscrire**

**Résultat attendu** : Retour au flux TravelShare, mais maintenant connecté (avatar "JD" visible).

---

### 3️⃣ Publier une Photo (2 min)

**Objectif** : Tester la publication complète

1. Cliquer sur le bouton **+** (en bas à droite)
2. Sélectionner une image (ou simuler avec une image web)
3. Cliquer sur **Générer avec l'IA**
   - ✅ Les tags et la localisation sont générés automatiquement
4. Modifier la description si souhaité
5. Sélectionner la visibilité : **Public**
6. Cliquer sur **Publier**

**Résultat attendu** : Confirmation de publication et retour au flux.

---

### 4️⃣ Groupes et Notifications (2 min)

**Objectif** : Tester les fonctionnalités sociales

1. Cliquer sur l'icône **👥** (groupes)
2. Cliquer sur **+ Créer**
3. Nom du groupe : `Voyage en Asie`
4. Cliquer sur **Créer le groupe**
5. Faire défiler pour voir les paramètres de notifications
6. Activer/désactiver différentes notifications

**Résultat attendu** : Groupe créé et notifications configurables.

---

### 5️⃣ Profil Utilisateur (1 min)

**Objectif** : Consulter le profil

1. Cliquer sur l'avatar **JD** en haut à droite
2. Observer les statistiques
3. Naviguer entre **Mes photos** et **J'aime**
4. Cliquer sur **Se déconnecter**
5. Confirmer

**Résultat attendu** : Retour à l'écran d'accueil, déconnecté.

---

### 6️⃣ Planifier un Voyage (3 min)

**Objectif** : Tester TravelPath complet

1. Depuis l'accueil, cliquer sur **TravelPath**
2. Remplir le formulaire :
   - Destination : `Paris`
   - Activités : Sélectionner `Culture` et `Restauration`
   - Ajouter un lieu : `Tour Eiffel` (cliquer sur +)
   - Budget : `2000€`
   - Durée : `2 jours`
   - Effort : `Modéré`
   - Météo : Sélectionner `Chaleur`
3. Cliquer sur **Générer mes parcours**

**Résultat attendu** : Affichage de 3 options de parcours.

---

### 7️⃣ Comparer les Parcours (2 min)

**Objectif** : Évaluer les différentes options

1. Observer les 3 cartes :
   - **Parcours Économique** (~1400€)
   - **Parcours Équilibré** (2000€)
   - **Parcours Confort** (~2600€)
2. Comparer les métriques (budget, durée, effort, arrêts)
3. Lire les points forts de chaque option
4. Cliquer sur ❤️ sur le parcours préféré
5. Cliquer sur **Voir les détails** du parcours équilibré

**Résultat attendu** : Navigation vers les détails du parcours.

---

### 8️⃣ Explorer l'Itinéraire Détaillé (2 min)

**Objectif** : Consulter le parcours complet

1. Observer la carte (placeholder)
2. Observer la météo du jour
3. Naviguer dans l'onglet **Timeline** :
   - Voir les 5 étapes avec horaires
   - Observer les photos
   - Lire les conseils pratiques 💡
4. Basculer sur l'onglet **Galerie**
5. Consulter le résumé en bas
6. Cliquer sur **Exporter en PDF**
   - ✅ Un message de simulation apparaît
7. Cliquer sur **Partager sur TravelShare**

**Résultat attendu** : Parcours complet avec toutes les informations.

---

### 9️⃣ Recherche Avancée (2 min)

**Objectif** : Tester les filtres de recherche

1. Retour sur **TravelShare**
2. Cliquer sur 🔍 (recherche)
3. Taper `tokyo` dans la barre
4. Cliquer sur **Rechercher**
5. Observer les résultats
6. Essayer les filtres rapides :
   - Par lieu 📍
   - Par période 📅
   - Par auteur 👤
   - Par tag 🏷️
7. Basculer entre **Grille** et **Carte**

**Résultat attendu** : Résultats filtrés et vues multiples.

---

### 🔟 Détail d'une Photo (2 min)

**Objectif** : Explorer toutes les informations d'une photo

1. Cliquer sur une photo dans le flux
2. Observer :
   - Description complète
   - Tags
   - Localisation avec coordonnées GPS
   - "Comment y aller" (transports)
3. Cliquer sur **Obtenir l'itinéraire**
   - ✅ Ouverture de Google Maps (nouvelle fenêtre)
4. Faire défiler les commentaires
5. Ajouter un commentaire :
   ```
   Magnifique ! Je veux y aller.
   ```
6. Cliquer sur **Publier**
7. Cliquer sur l'icône 🚩 (signaler)

**Résultat attendu** : Fiche complète de la photo avec interactions.

---

## 🎓 Fonctionnalités Clés à Tester

### ✅ TravelShare

- [x] **Navigation** : Flux, recherche, détails
- [x] **Mode invité** : Limitations et incitations
- [x] **Mode connecté** : Toutes fonctionnalités
- [x] **Publication** : Upload, IA, tags, visibilité
- [x] **Interactions** : Like, commentaires, signalement
- [x] **Social** : Groupes, notifications
- [x] **Profil** : Stats, photos, déconnexion

### ✅ TravelPath

- [x] **Planification** : Formulaire complet
- [x] **Génération** : 3 options optimisées
- [x] **Détails** : Timeline, galerie, météo
- [x] **Export** : PDF (simulation)
- [x] **Partage** : TravelShare, externe

### ✅ Intégration

- [x] **Authentification** : Inscription, connexion, déconnexion
- [x] **Navigation** : Entre les deux modules
- [x] **Design** : Cohérence visuelle
- [x] **Responsive** : Adaptation écrans

---

## 🐛 Points de Test Importants

### Comportements Mode Invité

1. **TravelShare** :
   - ❌ Aimer → Confirmation
   - ❌ Commenter → CTA connexion
   - ❌ Publier → Confirmation
   - ❌ Groupes → Redirection login

2. **TravelPath** :
   - ✅ Créer parcours
   - ❌ Sauvegarder → Confirmation
   - ❌ Partager → Confirmation

### Comportements Mode Connecté

1. **TravelShare** :
   - ✅ Toutes actions disponibles
   - ✅ Avatar cliquable → Profil
   - ✅ Groupes accessibles

2. **TravelPath** :
   - ✅ Toutes actions disponibles
   - ✅ Sauvegarde parcours
   - ✅ Partage social

---

## 💡 Astuces de Navigation

### Raccourcis Rapides

- **Retour accueil** : Cliquer sur ← en haut à gauche
- **Profil** : Cliquer sur l'avatar
- **Recherche** : Icône 🔍 dans TravelShare
- **Publier** : Bouton + flottant (TravelShare)

### Navigation entre Modules

```
Accueil
  ├─ TravelShare
  │   ├─ Photo détail → Retour flux
  │   ├─ Recherche → Retour flux
  │   ├─ Publier → Retour flux
  │   ├─ Groupes → Retour flux
  │   └─ Profil → Retour flux
  │
  └─ TravelPath
      ├─ Planification → Options
      └─ Options → Détail → Retour options
```

### Retour en Arrière

- Utiliser toujours le bouton ← de l'application
- Éviter le bouton retour du navigateur (peut fonctionner aussi)

---

## 🎯 Checklist Complète

Cochez au fur et à mesure :

**Authentification**
- [ ] S'inscrire avec un nouveau compte
- [ ] Se connecter avec un compte existant
- [ ] Observer les différences invité/connecté
- [ ] Se déconnecter

**TravelShare - Invité**
- [ ] Parcourir le flux
- [ ] Voir détail d'une photo
- [ ] Rechercher des photos
- [ ] Tenter d'aimer (voir blocage)
- [ ] Tenter de commenter (voir blocage)

**TravelShare - Connecté**
- [ ] Aimer une photo
- [ ] Commenter une photo
- [ ] Publier une photo
- [ ] Utiliser l'IA pour tags
- [ ] Créer un groupe
- [ ] Configurer notifications
- [ ] Voir son profil
- [ ] Signaler du contenu

**TravelPath**
- [ ] Remplir le formulaire complet
- [ ] Générer 3 parcours
- [ ] Comparer les options
- [ ] Consulter détails timeline
- [ ] Voir galerie photos
- [ ] Exporter en PDF
- [ ] Sauvegarder un parcours
- [ ] Partager un parcours

**Navigation**
- [ ] Aller-retour entre modules
- [ ] Navigation profonde (photo → détail → retour)
- [ ] Utiliser la recherche
- [ ] Accéder aux groupes

---

## 🏆 Tests Avancés

Pour les utilisateurs expérimentés :

### Test 1 : Flux Complet Utilisateur
1. Mode invité → Exploration → Tentative interaction
2. Inscription forcée par limitation
3. Publication d'une photo
4. Création groupe
5. Configuration notifications
6. Planification voyage
7. Export et partage

### Test 2 : Tous les Écrans
Visiter chaque écran de l'application :
- [ ] `/` - Accueil
- [ ] `/login` - Connexion
- [ ] `/register` - Inscription
- [ ] `/travel-share` - Flux TravelShare
- [ ] `/photo/1` - Détail photo
- [ ] `/search` - Recherche
- [ ] `/publish-photo` - Publication
- [ ] `/groups` - Groupes
- [ ] `/profile` - Profil
- [ ] `/travel-path` - Planification
- [ ] `/itinerary-options` - Options parcours
- [ ] `/itinerary-detail` - Détail parcours

### Test 3 : Responsive Design
1. Ouvrir DevTools (F12)
2. Activer le mode responsive
3. Tester différentes tailles :
   - Mobile : 375x667 (iPhone SE)
   - Tablette : 768x1024 (iPad)
   - Desktop : 1920x1080
4. Vérifier que tout est lisible et accessible

---

## ⏱️ Temps Total

- **Test Rapide** : 15 min (scénarios 1-5)
- **Test Complet** : 30 min (tous les scénarios)
- **Test Approfondi** : 45-60 min (avec tests avancés)

---

## 📞 Support

Pour toute question ou problème :
- Consulter `README.md` pour la documentation générale
- Consulter `FEATURES.md` pour les fonctionnalités détaillées
- Consulter `MODES.md` pour comprendre les différences invité/connecté

---

**Bon test ! 🚀**

N'hésitez pas à explorer librement et à tester toutes les fonctionnalités. L'application est conçue pour être intuitive et offrir une expérience fluide dans les deux modes.
