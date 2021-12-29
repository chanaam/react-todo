import ListItem from "./ListItem"


function List(props){

    const list=props.list
    
    return <div>
        <ul>
            {list.map(t=>
            <ListItem 
            key={t.id}
            refreshView={props.refreshView}
            {...t}
            //text={t.text}
            //done={t.done}/>
            />)}
        </ul>
        
        
    </div>

}

export default List