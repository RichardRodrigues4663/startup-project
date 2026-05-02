import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import App from "./App.jsx";

//importando styles globais
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css'

//importando pages
import Painel from './pages/Painel.jsx'
import Pedidos from './pages/Pedidos.jsx'
import Conversas from './pages/Conversas.jsx'
import Produtos from './pages/Produtos.jsx'
import Configuracoes from './pages/Configuracoes.jsx'
import Relatorios from './pages/Relatorios.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <Painel></Painel>
      },
      {
        path: 'pedidos',
        element: <Pedidos></Pedidos>
      },
      {
        path: 'conversas',
        element: <Conversas></Conversas>
      },
      {
        path: 'produtos',
        element: <Produtos></Produtos>
      },
      {
        path: 'configuracoes',
        element: <Configuracoes></Configuracoes>
      },
      {
        path: 'relatorios',
        element: <Relatorios></Relatorios>
      },
    ]
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);
