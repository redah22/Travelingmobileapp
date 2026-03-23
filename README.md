# 🌍 Traveling - Application de Voyage Complète

Application mobile web moderne qui combine **TravelShare** (partage de photos de voyages) et **TravelPath** (planification d'itinéraires intelligents).

## 🚀 Démarrage Rapide

### Installation
```bash
npm install
```

### Lancement
```bash
npm run dev
```

L'application sera accessible sur `http://localhost:5173`

## 📱 Structure de l'Application

### Écran d'Accueil
Point d'entrée avec accès aux deux modules principaux :
- **TravelShare** 📸 - Partage de photos et découverte
- **TravelPath** 🗺️ - Planification de parcours

## 🎨 Fonctionnalités Principales

### 🔐 Authentification
- **Inscription** : Créer un compte avec nom, email, mot de passe
- **Connexion** : Accéder à toutes les fonctionnalités
- **Mode Invité** : Parcourir avec fonctionnalités limitées

### 📸 TravelShare

#### Mode Invité (Non connecté)
- ✅ Parcourir les photos publiques
- ✅ Rechercher des photos
- ✅ Voir les détails (lieu, coordonnées, tags)
- ✅ Obtenir l'itinéraire Google Maps
- ❌ Aimer, commenter, publier (invite à se connecter)

#### Mode Connecté
- ✅ Publier des photos avec :
  - Upload d'image
  - Description texte/vocal
  - Localisation GPS
  - Tags manuels ou IA
  - Visibilité (Public/Groupe/Privé)
- ✅ Aimer et commenter
- ✅ Créer et gérer des groupes
- ✅ Configurer les notifications
- ✅ Profil utilisateur complet
- ✅ Recherche avancée multi-critères

### 🗺️ TravelPath

#### Planification de Voyage
1. **Saisir les préférences** :
   - Destination
   - Activités (restauration, culture, nature, etc.)
   - Lieux à visiter impérativement
   - Budget (500€ - 5000€)
   - Durée (1-14 jours)
   - Niveau d'effort (Faible/Modéré/Élevé)
   - Sensibilité météo

2. **Génération automatique** :
   - 3 options de parcours optimisés
   - Économique / Équilibré / Confort
   - Photos et métriques pour chaque option

3. **Détails du parcours** :
   - Timeline complète avec horaires
   - Photos de chaque étape
   - Conseils pratiques
   - Budget détaillé
   - Météo du jour
   - Export PDF

## 📂 Navigation

```
/ (Home)
│
├── Authentification
│   ├── /login - Connexion
│   └── /register - Inscription
│
├── TravelShare
│   ├── /travel-share - Flux de photos
│   ├── /photo/:id - Détail d'une photo
│   ├── /search - Recherche avancée
│   ├── /publish-photo - Publier (connecté)
│   ├── /groups - Gestion des groupes (connecté)
│   └── /profile - Profil utilisateur (connecté)
│
└── TravelPath
    ├── /travel-path - Formulaire de planification
    ├── /itinerary-options - 3 options générées
    └── /itinerary-detail - Détails complets
```

## 🎯 Scénarios d'Utilisation

### Scénario 1 : Mode Découverte (Invité)
1. Ouvrir l'application
2. Cliquer sur "TravelShare"
3. Parcourir les photos
4. Cliquer sur une photo pour voir les détails
5. Essayer d'aimer → Invitation à se connecter
6. S'inscrire ou continuer en mode découverte

### Scénario 2 : Publier une Photo
1. Se connecter
2. Aller sur TravelShare
3. Cliquer sur le bouton "+"
4. Upload une photo
5. Utiliser l'IA pour générer tags et localisation
6. Choisir la visibilité
7. Publier

### Scénario 3 : Planifier un Voyage
1. Cliquer sur "TravelPath"
2. Renseigner la destination (ex: "Paris")
3. Sélectionner les activités souhaitées
4. Ajouter des lieux à visiter impérativement
5. Ajuster le budget et la durée
6. Générer les parcours
7. Comparer les 3 options
8. Consulter les détails
9. Exporter en PDF

### Scénario 4 : Créer un Groupe
1. Se connecter
2. Aller sur TravelShare
3. Cliquer sur l'icône Groupes
4. Créer un nouveau groupe
5. Configurer les notifications
6. Publier des photos dans le groupe

## 🛠️ Technologies

- **React** 18.3.1
- **React Router** 7.13.0
- **Tailwind CSS** v4
- **TypeScript**
- **Lucide React** (icônes)
- **Radix UI** (composants)

## 📋 Fonctionnalités par Module

### TravelShare
- [x] Mode invité avec limitations
- [x] Authentification complète
- [x] Publication avec upload d'image
- [x] Annotation IA simulée
- [x] Recherche multi-critères
- [x] Groupes et partage
- [x] Notifications configurables
- [x] Profil utilisateur
- [x] Détails photo avec itinéraire
- [x] Like/Unlike/Commentaires
- [x] Signalement de contenu
- [ ] Vue carte interactive (préparée)
- [ ] Vraie reconnaissance vocale

### TravelPath
- [x] Formulaire de préférences complet
- [x] 6 types d'activités
- [x] Lieux personnalisés
- [x] Budget et durée configurables
- [x] Niveau d'effort
- [x] Sensibilité météo
- [x] Génération 3 options
- [x] Timeline détaillée avec photos
- [x] Galerie photos
- [x] Météo du jour
- [x] Export PDF (simulation)
- [x] Like/Save parcours
- [x] Partage sur TravelShare
- [ ] Carte interactive (préparée)
- [ ] Vrai export PDF

## 💡 Points Clés

### Design
- **Glassmorphism** : Effets de verre sur headers
- **Gradients** : Bleu pour TravelShare, Purple/Pink pour TravelPath
- **Responsive** : Adapté mobile, tablette, desktop
- **Animations** : Transitions fluides

### Sécurité
- Authentification simulée (à connecter à un vrai backend)
- Validation des formulaires
- Gestion des erreurs

### Performance
- Images optimisées via Unsplash
- Composants React optimisés
- Navigation rapide avec React Router

## 🚧 Améliorations Futures

1. **Intégration Backend**
   - Base de données réelle
   - Authentification sécurisée
   - Upload réel d'images

2. **APIs Externes**
   - Google Maps pour cartes
   - Météo en temps réel
   - Reconnaissance vocale
   - IA pour tags automatiques

3. **Fonctionnalités Avancées**
   - Mode hors-ligne
   - Stories de voyage
   - Réservations intégrées
   - Chat entre voyageurs

4. **Mobile Native**
   - Application React Native
   - Notifications push
   - Géolocalisation en temps réel

## 📄 Documentation

Pour plus de détails sur les fonctionnalités, consultez [FEATURES.md](./FEATURES.md)

## 🤝 Contribution

Cette application est un prototype démontrant l'intégration de deux services de voyage.

## 📝 Licence

Projet éducatif - Libre d'utilisation

---

**Traveling** - Votre compagnon de voyage complet 🌍✈️
