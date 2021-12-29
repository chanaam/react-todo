import axios from "axios"

function ListItem(props){

    function deleteTask()
    {
        axios.delete(`http://localhost:3030/task/${props._id}`)
        .then(()=>props.refreshView())
    }

    function upDateTask(e)
    {
        const newDone=e.target.checked;//true/false
        axios.put(`http://localhost:3030/task/${props._id}`,{done:newDone})
        .then(()=>props.refreshView())
    }

    return <li className={props.done ?'done' :''}>
        <label>{props.text}</label>
        <span>
           <input type="checkbox" onChange={upDateTask} defaultChecked={props.done}></input>
           {props.done? null :<button className="x" onClick={deleteTask}>X</button>}
        </span>
    </li>

}

export default ListItem