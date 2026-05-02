import PanelSummary from "../components/Panel/PanelSummary/PanelSummary"

export default function Panel(){
    return(
        <PanelSummary pedidos={24} faturamento={2000} pedidosAtivos={30} />
    )
}