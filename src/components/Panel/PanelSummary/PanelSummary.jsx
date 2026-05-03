import './index.css'

export default function PanelSummary({pedidos, faturamento, pedidosAtivos}){
    return(
         <main className='container'>

            <h3 className='my-3'>Painel</h3>
            
            <section className="section">

                <div className="card-item d-flex justify-content-around align-items-center gap-4">
                    <div className="d-flex flex-column">
                        <small className='text-secondary fs-6'>Pedidos hoje</small>
                        <h2>{pedidos}</h2>
                    </div>
                    <div className='icon-card icon-card-green'>
                        <i className="fa-solid fa-bag-shopping"></i>
                    </div>
                </div>

                <div className="card-item d-flex justify-content-around align-items-center gap-4">
                    <div className="d-flex flex-column">
                        <small className='text-secondary fs-6'>Faturamento</small>
                        <h2>{faturamento}</h2>
                    </div>
                    <div className='icon-card icon-card-orange'>
                        <i className="bx bx-dollar" />
                    </div>
                </div>

                <div className="card-item d-flex justify-content-around align-items-center gap-4">
                    <div className="d-flex flex-column">
                        <small className='text-secondary fs-6'>Pedidos Ativos</small>
                        <h2>{pedidosAtivos}</h2>
                    </div>
                    <div className='icon-card icon-card-blue'>
                        <i className="fa-regular fa-clock"></i>
                    </div>
                </div>
            </section>

        </main>
    )
}