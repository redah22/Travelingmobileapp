# 🏗️ Architecture - Traveling

## Vue d'Ensemble

Application web React moderne organisée en deux modules principaux :
- **TravelShare** : Réseau social de photos de voyages
- **TravelPath** : Générateur intelligent d'itinéraires

## 📁 Structure du Projet

```
traveling/
├── src/
│   ├── app/
│   │   ├── App.tsx                    # Point d'entrée avec AuthProvider
│   │   ├── routes.ts                  # Configuration React Router
│   │   ├── contexts/
│   │   │   └── AuthContext.tsx        # Gestion authentification globale
│   │   └── components/
│   │       ├── Home.tsx               # Écran d'accueil
│   │       ├── Itinerary.tsx          # Ancien écran (legacy)
│   │       │
│   │       ├── auth/                  # 🔐 Authentification
│   │       │   ├── Login.tsx          # Écran de connexion
│   │       │   └── Register.tsx       # Écran d'inscription
│   │       │
│   │       ├── travel-share/          # 📸 Module TravelShare
│   │       │   ├── (voir détails ci-dessous)
│   │       │
│   │       ├── travel-path/           # 🗺️ Module TravelPath
│   │       │   ├── (voir détails ci-dessous)
│   │       │
│   │       ├── ui/                    # Composants réutilisables
│   │       │   ├── button.tsx
│   │       │   ├── input.tsx
│   │       │   ├── dialog.tsx
│   │       │   ├── tabs.tsx
│   │       │   └── ... (37 composants au total)
│   │       │
│   │       └── figma/
│   │           └── ImageWithFallback.tsx
│   │
│   └── styles/
│       ├── index.css                  # Point d'entrée CSS
│       ├── tailwind.css               # Config Tailwind v4
│       ├── theme.css                  # Variables CSS
│       └── fonts.css                  # Imports de polices
│
├── FEATURES.md                        # Documentation fonctionnalités
├── MODES.md                           # Documentation modes invité/connecté
├── QUICKSTART.md                      # Guide de démarrage rapide
├── ARCHITECTURE.md                    # Ce fichier
└── README.md                          # Documentation principale
```

## 🧩 Détail des Modules

### Module TravelShare (📸)

```
travel-share/
├── PhotoDetail.tsx          # Détail d'une photo
│   ├── Affichage complet
│   ├── Commentaires
│   ├── Localisation + Google Maps
│   ├── Tags et informations
│   └── Actions (like, signaler, partager)
│
├── Search.tsx               # Recherche avancée
│   ├── Barre de recherche (text + vocal)
│   ├── Filtres rapides
│   ├── Vue grille / vue carte
│   └── Résultats filtrés
│
├── PublishPhoto.tsx         # Publication de photo
│   ├── Upload d'image
│   ├── Annotation IA
│   ├── Description (text + vocal)
│   ├── Tags et localisation
│   └── Choix de visibilité
│
├── Groups.tsx               # Gestion des groupes
│   ├── Liste des groupes
│   ├── Création de groupe
│   ├── Gestion des membres
│   └── Configuration notifications
│
└── Profile.tsx              # Profil utilisateur
    ├── Statistiques
    ├── Photos publiées
    ├── Photos aimées
    └── Déconnexion
```

### Module TravelPath (🗺️)

```
travel-path/
├── PlanTrip.tsx             # Formulaire de planification
│   ├── Destination
│   ├── Sélection activités
│   ├── Lieux favoris
│   ├── Budget / Durée
│   ├── Niveau d'effort
│   └── Sensibilité météo
│
├── ItineraryOptions.tsx     # 3 options de parcours
│   ├── Parcours Économique
│   ├── Parcours Équilibré
│   ├── Parcours Confort
│   ├── Comparaison métriques
│   └── Actions (like, régénérer)
│
└── ItineraryDetail.tsx      # Détail du parcours
    ├── Carte interactive
    ├── Timeline des étapes
    ├── Galerie photos
    ├── Météo du jour
    ├── Conseils pratiques
    └── Export PDF / Partage
```

## 🔄 Flux de Navigation

### Navigation Principale

```
┌─────────────┐
│    Home     │
└──────┬──────┘
       │
       ├──────────────────┬──────────────────┐
       │                  │                  │
       v                  v                  v
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   Login     │    │ TravelShare │    │ TravelPath  │
│  Register   │    └──────┬──────┘    └──────┬──────┘
└─────────────┘           │                  │
                          │                  │
         ┌────────────────┼────────┐         │
         │                │        │         │
         v                v        v         v
    ┌────────┐      ┌─────────┐ ┌────────┐ ┌─────────┐
    │ Search │      │  Photo  │ │ Groups │ │ Options │
    │        │      │ Detail  │ │Profile │ │         │
    └────────┘      └─────────┘ └────────┘ └────┬────┘
                                                 │
                                                 v
                                            ┌─────────┐
                                            │ Detail  │
                                            └─────────┘
```

### Flux Authentification

```
┌──────────┐
│  Guest   │ Utilisateur non connecté
└────┬─────┘
     │
     ├─ Parcours TravelShare (limité)
     ├─ Parcours TravelPath (complet)
     │
     v
┌──────────┐
│ Register │ Inscription
│  Login   │ Connexion
└────┬─────┘
     │
     v
┌──────────┐
│Connected │ Utilisateur connecté
└────┬─────┘
     │
     ├─ TravelShare (complet)
     ├─ TravelPath (complet)
     ├─ Profil
     └─ Groupes
```

## 🎨 Système de Design

### Palette de Couleurs

```typescript
// TravelShare - Tons bleus
primary: 'blue-500 to blue-600'
accent: 'blue-50 to purple-50'

// TravelPath - Tons purple/pink
primary: 'purple-500 to pink-600'
accent: 'purple-50 to pink-50'

// Commun
background: 'gray-50'
text: 'gray-800'
border: 'gray-200'
```

### Composants UI

37 composants Radix UI + customs :
- **Forms** : Button, Input, Textarea, Select, Checkbox, Slider
- **Overlays** : Dialog, Sheet, Popover, Tooltip
- **Navigation** : Tabs, Accordion, Navigation Menu
- **Feedback** : Toast (Sonner), Alert, Progress
- **Layout** : Card, Separator, Scroll Area

### Glassmorphism

```css
.glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
```

## 🔧 Technologies

### Core
- **React** 18.3.1
- **TypeScript** (implicite)
- **Vite** 6.3.5

### Routing
- **React Router** 7.13.0 (Data mode)

### Styling
- **Tailwind CSS** v4.1.12
- **Class Variance Authority** 0.7.1
- **Tailwind Merge** 3.2.0

### UI Components
- **Radix UI** (15+ packages)
- **Lucide React** 0.487.0 (icônes)
- **Sonner** 2.0.3 (toasts)

### Forms & Data
- **React Hook Form** 7.55.0
- **Date-fns** 3.6.0

### Animations
- **Motion** (Framer Motion) 12.23.24

### Additional
- **Recharts** 2.15.2 (graphiques)
- **React Slick** 0.31.0 (carrousels)
- **React DnD** 16.0.1 (drag & drop)

## 📊 Gestion d'État

### Global State
```typescript
// AuthContext.tsx
interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email, password) => Promise<void>;
  register: (name, email, password) => Promise<void>;
  logout: () => void;
}
```

### Local State
Chaque composant gère son état local avec `useState` :
- Posts (TravelShare)
- Options de parcours (TravelPath)
- Formulaires
- UI state (modals, tabs, etc.)

## 🔐 Authentification

### Flux Simplifié
1. **Inscription/Connexion** → Simulation (pas de vrai backend)
2. **Stockage** → Context React (mémoire)
3. **Vérification** → `isAuthenticated` boolean
4. **Protection** → Redirections conditionnelles

### Guards
```typescript
// Exemple de guard
if (!isAuthenticated) {
  navigate('/login');
  return null;
}
```

## 📱 Responsive Design

### Breakpoints Tailwind
- **sm**: 640px (mobile landscape)
- **md**: 768px (tablette)
- **lg**: 1024px (desktop)
- **xl**: 1280px (large desktop)

### Approche Mobile-First
```jsx
<div className="
  w-full              // Mobile
  md:w-1/2            // Tablette
  lg:w-1/3            // Desktop
">
```

## 🚀 Performance

### Optimisations
- **Code Splitting** : Routes séparées (React Router)
- **Lazy Loading** : Images via Unsplash
- **Memoization** : Composants optimisés si nécessaire
- **Bundle Size** : Vite optimizations

### Images
- Unsplash CDN pour photos
- Paramètres de taille dans URLs
- Fallback avec ImageWithFallback

## 🧪 Points d'Extension

### Backend à Intégrer
```typescript
// Remplacer les simulations par de vraies APIs
const login = async (email, password) => {
  // Actuellement : simulation
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // À implémenter :
  // const response = await fetch('/api/auth/login', { ... });
  // const data = await response.json();
  // return data.user;
};
```

### APIs Externes
1. **Google Maps** : Cartes interactives
2. **Weather API** : Météo en temps réel
3. **Voice Recognition** : Recherche vocale
4. **AI Service** : Tags automatiques photos
5. **PDF Generation** : jsPDF pour export

### Features Futures
1. **WebSockets** : Notifications en temps réel
2. **Service Worker** : Mode hors-ligne
3. **IndexedDB** : Cache local
4. **Camera API** : Photo directe depuis caméra
5. **Geolocation API** : Localisation automatique

## 📈 Scalabilité

### Structure Modulaire
Chaque module (TravelShare, TravelPath) est indépendant :
- Peut être extrait en package séparé
- Peut être développé en parallèle
- Peut avoir son propre backend

### Ajout de Modules
Pour ajouter un nouveau module :
1. Créer `/src/app/components/module-name/`
2. Créer les écrans nécessaires
3. Ajouter les routes dans `routes.ts`
4. Ajouter une carte sur Home.tsx
5. Documenter dans FEATURES.md

## 🎯 Patterns & Conventions

### Naming
- **Components** : PascalCase (`PhotoDetail.tsx`)
- **Functions** : camelCase (`handleLike`)
- **Constants** : UPPER_SNAKE_CASE (`INITIAL_POSTS`)
- **Types** : PascalCase (`interface User {}`)

### File Organization
```
ComponentName.tsx
  ├── Imports
  ├── Types/Interfaces
  ├── Constants/Mock Data
  ├── Component Function
  │   ├── Hooks
  │   ├── Handlers
  │   └── JSX Return
  └── Export
```

### Component Structure
```typescript
export function ComponentName() {
  // 1. Hooks
  const navigate = useNavigate();
  const { user } = useAuth();
  const [state, setState] = useState();
  
  // 2. Handlers
  const handleAction = () => { ... };
  
  // 3. Render
  return ( ... );
}
```

## 🔍 Debugging

### React DevTools
- Inspecter le contexte d'authentification
- Vérifier les props et state
- Profiler les performances

### Console Logs
Ajouter des logs stratégiques :
```typescript
console.log('User authenticated:', isAuthenticated);
console.log('Current route:', location.pathname);
```

### Network Tab
Observer les appels APIs (actuellement simulés)

## 📝 Documentation

### Fichiers de Documentation
- **README.md** : Vue d'ensemble et installation
- **FEATURES.md** : Fonctionnalités détaillées
- **MODES.md** : Différences invité/connecté
- **QUICKSTART.md** : Guide de test rapide
- **ARCHITECTURE.md** : Ce fichier

### Code Comments
```typescript
// Commentaires pour logique complexe
// TODO: pour tâches futures
// FIXME: pour bugs connus
// NOTE: pour informations importantes
```

---

## 🎓 Résumé Architecture

**Traveling** est une application React moderne structurée autour de :
- **2 modules** principaux indépendants
- **1 système d'authentification** global
- **37+ composants UI** réutilisables
- **Design system** cohérent avec Tailwind
- **Navigation** fluide avec React Router
- **État** géré via Context + useState
- **Performance** optimisée avec Vite

L'architecture permet une **évolution facile** vers :
- Backend réel
- APIs externes
- Fonctionnalités avancées
- Application mobile native

---

**Architecture conçue pour la scalabilité, la maintenabilité et l'extensibilité** 🏗️
