import ResumoPainel from "../components/Painel/resumoPainel/resumo"

export default function Painel(){
    return(
        <ResumoPainel pedidos={24} faturamento={2000} pedidosAtivos={30} />
    )
}