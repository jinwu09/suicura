import { HomeContext, VariableCenter } from "../../pages/Home"



export  const CenterContent = ({Element})=>{
    return(
        <HomeContext>
            {Element}
        </HomeContext>
    )
}