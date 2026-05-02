//importando styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

//importnado compontentes
import Sidebar from './components/Layout/sidebar/Sidebar.jsx';
import { Outlet } from 'react-router';

function App() {

  return (
    <main>
        <Sidebar></Sidebar>
        <Outlet></Outlet>
    </main>
  )
}

export default App
