import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import App from "./App.jsx";

//importando styles globais
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css'

//importando pages
import Panel from './pages/Panel.jsx'
import Orders from './pages/Orders.jsx'
import Chat from './pages/Chat.jsx'
import Products from './pages/Products.jsx'
import Settings from './pages/Settings.jsx'
import Report from "./pages/Report.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <Panel></Panel>
      },
      {
        path: 'orders',
        element: <Orders></Orders>
      },
      {
        path: 'chat',
        element: <Chat></Chat>
      },
      {
        path: 'products',
        element: <Products></Products>
      },
      {
        path: 'settings',
        element: <Settings></Settings>
      },
      {
        path: 'report',
        element: <Report></Report>
      },
    ]
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);
