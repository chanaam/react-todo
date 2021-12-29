import axios from "axios";


function TaskForm(props){

    function handleSubmit(e){

        e.preventDefault()
        const form=e.target;
        const values = getAllValues(form)
        console.log(values);
        axios.post('http://localhost:3030/task',values)
        .then(()=>{
            props.refreshView()
            form.reset()
        })
        
    }

    function getAllValues(form) {
        return Object.values(form)
            .reduce((acc, curr) => {
                let { value, name } = curr
                return name ? { ...acc, [name]: value } : acc
            }, {})
    }


    return <form onSubmit={handleSubmit}>
            <input type="text" name="text" placeholder="Add a task here"></input>
            <input type='submit' value="+"></input>
        </form>
   
}

export default TaskForm

//<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.9.0/css/all.css" />
//<i class="fas fa-plus-square"></i>