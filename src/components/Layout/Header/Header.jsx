import './index.css'

export default function Header(){
    return(
        <main className='border-bottom d-flex justify-content-end'>

            <div className="d-flex justify-content-center align-items-center gap-3 p-3">

                <div className='d-flex flex-column align-items-end'>
                    <h6>Proprietário</h6>
                    <small className="text-secondary">contato@restaurante.com</small>
                </div>

                <div className="p-2 rounded-circle icon-user d-flex justify-content-center align-items-center">
                    <i class="fa-regular fa-user"></i>
                </div>

            </div>
        </main>
    )
}