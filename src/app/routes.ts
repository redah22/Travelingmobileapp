import { createBrowserRouter } from 'react-router';
import { Home } from './components/Home';
import { TravelShare } from './components/TravelShare';
import { TravelPath } from './components/TravelPath';
import { Itinerary } from './components/Itinerary';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/travel-share',
    Component: TravelShare,
  },
  {
    path: '/travel-path',
    Component: TravelPath,
  },
  {
    path: '/itinerary',
    Component: Itinerary,
  },
]);