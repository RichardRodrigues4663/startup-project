import './index.css'
import { NavLink } from 'react-router-dom'

export default function Sidebar(){
    return(
        <aside className='border p-3'>
            <header className="header">
                <div className="d-flex justify-content-center align-items-center flex-column">
                    <h4>Startup Project</h4>
                    <span className='fs-6 text-secondary'>Gestão de restaurante</span>
                </div>
                {/* <div className='d-flex justify-content-center align-items-center'>
                    <i className="me-2 fa-solid fa-x"></i>
                </div> */}
            </header>

            <hr />
            
            <nav>
                <ul className='d-flex flex-column list-unstyled gap-1'>
                    <NavLink  
                    to="/"
                    end
                    className={({ isActive }) =>
                        `item-list ${isActive ? "item-list-active" : ""}`
                    }role='button'>
                        <div className='icon-item-list'>
                            <i className="fa-solid fa-chart-line"></i>
                        </div>
                        Painel
                    </NavLink>
                    
                    <NavLink 
                    to="/pedidos"
                    className={({ isActive }) =>
                        `item-list ${isActive ? "item-list-active" : ""}`
                    } role='button'>
                        <div className='icon-item-list'>
                            <i className="bx bx-shopping-bag"></i>
                        </div>
                        Pedidos
                    </NavLink>

                    <NavLink 
                    to="/conversas"
                    className={({ isActive }) =>
                        `item-list ${isActive ? "item-list-active" : ""}`
                    } role='button'>
                        <div className='icon-item-list'>
                            <i className="fa-regular fa-message"></i>
                        </div>
                        Conversas
                    </NavLink>

                    <NavLink
                    to="/produtos"
                    className={({ isActive }) =>
                        `item-list ${isActive ? "item-list-active" : ""}`
                    } role='button'>
                        <div className='icon-item-list'>
                            <i className="bx bx-box"></i>
                        </div>
                        Produtos
                    </NavLink>

                    <NavLink 
                    to="/configuracoes"
                    className={({ isActive }) =>
                        `item-list ${isActive ? "item-list-active" : ""}`
                    }role='button'>
                        <div className='icon-item-list'>
                            <i className="bx bx-cog"></i>
                        </div>
                        Configurações
                    </NavLink>

                    <NavLink 
                    to="/relatorios"
                    className={({ isActive }) =>
                        `item-list ${isActive ? "item-list-active" : ""}`
                    } role='button'>
                        <div className='icon-item-list'>
                            <i className="fa-solid fa-chart-column"></i>
                        </div>
                        Relatórios
                    </NavLink>
                </ul>
            </nav>
            <footer>

            </footer>
        </aside>
    )
}