import Button from "./Button"


const HeaderComponent = ({title, onAdd, isAddTaskOpen}) => {

    
    

    return ( <header className="header">
        <h1>{title}</h1>
        <Button onClick={onAdd}
               text={isAddTaskOpen?"Close":"Add"}
               color={isAddTaskOpen?"red":"green"} 
        />
    </header>)
}

HeaderComponent.defaultProps = {
    title: 'Task Tracker'
}


export default HeaderComponent