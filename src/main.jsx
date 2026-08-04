import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import ErrorPage from './components/error/ErrorPage.jsx';
import PartyInfoPage from './components/partyInfoPage/PartyInfoPage.jsx';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/error",
    element: <ErrorPage />,
  },
  {
    path: "/info-fiesta",
    element: <PartyInfoPage />,
  },
]);

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);