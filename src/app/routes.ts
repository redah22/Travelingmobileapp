import { createBrowserRouter } from 'react-router';
import { Home } from './components/Home';
import { TravelShare } from './components/TravelShare';
import { Itinerary } from './components/Itinerary';
import { Login } from './components/auth/Login';
import { Register } from './components/auth/Register';
import { PhotoDetail } from './components/travel-share/PhotoDetail';
import { Search } from './components/travel-share/Search';
import { PublishPhoto } from './components/travel-share/PublishPhoto';
import { Groups } from './components/travel-share/Groups';
import { Profile } from './components/travel-share/Profile';
import { PlanTrip } from './components/travel-path/PlanTrip';
import { ItineraryOptions } from './components/travel-path/ItineraryOptions';
import { ItineraryDetail } from './components/travel-path/ItineraryDetail';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  },
  // Auth
  {
    path: '/login',
    Component: Login,
  },
  {
    path: '/register',
    Component: Register,
  },
  // TravelShare
  {
    path: '/travel-share',
    Component: TravelShare,
  },
  {
    path: '/photo/:photoId',
    Component: PhotoDetail,
  },
  {
    path: '/search',
    Component: Search,
  },
  {
    path: '/publish-photo',
    Component: PublishPhoto,
  },
  {
    path: '/groups',
    Component: Groups,
  },
  {
    path: '/profile',
    Component: Profile,
  },
  // TravelPath
  {
    path: '/travel-path',
    Component: PlanTrip,
  },
  {
    path: '/itinerary-options',
    Component: ItineraryOptions,
  },
  {
    path: '/itinerary-detail',
    Component: ItineraryDetail,
  },
  // Legacy
  {
    path: '/itinerary',
    Component: Itinerary,
  },
]);