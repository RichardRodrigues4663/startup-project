//importando styles
import './App.css'

//importnado compontentes
import Sidebar from './components/Layout/Sidebar/Sidebar.jsx'
import Header from './components/Layout/Header/Header.jsx';
import { Outlet } from 'react-router';

function App() {

  return (
    <main>
        <Sidebar></Sidebar>
        <section>
          <Header></Header>
          <Outlet></Outlet>
        </section>
    </main>
  )
}

export default App
