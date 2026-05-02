import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './index.css'

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1200)

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth < 1200
            setIsMobile(mobile)
            if (!mobile) setIsOpen(false) // reseta ao voltar para desktop
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const closeSidebar = () => setIsOpen(false)

    return (
        <>
            {isMobile && (
                <button
                    className="sidebar-toggle-btn"
                    onClick={() => setIsOpen(true)}
                    aria-label="Abrir menu"
                >
                    <i className="bx bx-menu"></i>
                </button>
            )}

            {/* Overlay escuro atrás do sidebar no mobile */}
            {isMobile && (
                <div
                    className={`sidebar-overlay ${isOpen ? 'sidebar-overlay--visible' : ''}`}
                    onClick={closeSidebar}
                />
            )}

            <aside className={`sidebar border p-3 ${isMobile ? 'sidebar--mobile' : ''} ${isMobile && isOpen ? 'sidebar--open' : ''}`}>
                <header className="header">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex flex-column">
                            <h4 className="mb-0">Startup Project</h4>
                            <span className='fs-6 text-secondary'>Gestão de restaurante</span>
                        </div>

                        {isMobile && (
                            <button className="sidebar-close-btn ms-2 d-flex" onClick={closeSidebar} aria-label="Fechar menu">
                                <i className="fa-solid fa-x"></i>
                            </button>
                        )}
                    </div>
                </header>

                <hr />

                <nav>
                    <ul className='d-flex flex-column list-unstyled gap-1'>
                        <NavLink
                            to="/"
                            end
                            onClick={isMobile ? closeSidebar : undefined}
                            className={({ isActive }) =>
                                `item-list ${isActive ? "item-list-active" : ""}`
                            } role='button'>
                            <div className='icon-item-list'>
                                <i className="fa-solid fa-chart-line"></i>
                            </div>
                            Painel
                        </NavLink>

                        <NavLink
                            to="/orders"
                            onClick={isMobile ? closeSidebar : undefined}
                            className={({ isActive }) =>
                                `item-list ${isActive ? "item-list-active" : ""}`
                            } role='button'>
                            <div className='icon-item-list'>
                                <i className="bx bx-shopping-bag"></i>
                            </div>
                            Pedidos
                        </NavLink>

                        <NavLink
                            to="/chat"
                            onClick={isMobile ? closeSidebar : undefined}
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
                            onClick={isMobile ? closeSidebar : undefined}
                            className={({ isActive }) =>
                                `item-list ${isActive ? "item-list-active" : ""}`
                            } role='button'>
                            <div className='icon-item-list'>
                                <i className="bx bx-box"></i>
                            </div>
                            Produtos
                        </NavLink>

                        <NavLink
                            to="/settings"
                            onClick={isMobile ? closeSidebar : undefined}
                            className={({ isActive }) =>
                                `item-list ${isActive ? "item-list-active" : ""}`
                            } role='button'>
                            <div className='icon-item-list'>
                                <i className="bx bx-cog"></i>
                            </div>
                            Configurações
                        </NavLink>

                        <NavLink
                            to="/report"
                            onClick={isMobile ? closeSidebar : undefined}
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

            </aside>
        </>
    )
}