import TaskForm from "./TaskForm"
import List from "./List"
import { useEffect, useState } from "react"
import axios from "axios"

function ToDo()
{

    const [tasksList,setTasksList]=useState([])

    useEffect(getTasks,[])//only one read

    function  getTasks(){
        axios.get('http://localhost:3030/task')
          .then(result=>setTasksList(result.data))
    }

    return <div className="todo">
        <TaskForm refreshView={getTasks} />
        <List list={tasksList.filter(t=>!t.done)} refreshView={getTasks}/>
        <hr/>
        <List list={tasksList.filter(t=>t.done)} refreshView={getTasks}/>
    </div>
}

export default ToDo