import { useState } from 'react'
import Search from "./Search"
import List from "./List"

function Content() {
    
    const [keyword, setStr] = useState("");
    const [tasks, setTasks] = useState([]);
    
    let str = "a";
    let totalTasks = []; 

    if(localStorage.getItem('task-data') !== null) {
        totalTasks = JSON.parse(localStorage.getItem('task-data'));   
    }

    function update() {
        return totalTasks.filter(item => item.val.toLowerCase().indexOf(keyword) > -1);
    }

    
    function deletedEl(label) {
        let key =  label;
        let index = totalTasks.findIndex(x => key == x.val);
        //if(window.confirm("Are you sure you want to delete " + key + "?")){
        totalTasks.splice(index, 1); 
        localStorage.setItem('task-data', JSON.stringify([...totalTasks]));
        setTasks(tasks => [...totalTasks]);
        //}
    }

    function updateStore( boolVal , label) {
        let key = {val: label, marked: !boolVal};
        let object = {val: label, marked: boolVal};
        totalTasks[totalTasks.findIndex(x=> key.val == x.val)] = object;
        localStorage.setItem('task-data', JSON.stringify([...totalTasks]));
        setTasks(tasks => [...totalTasks]); 
    }

    function add(item) {
        localStorage.setItem('task-data', JSON.stringify([...totalTasks, item]));
        setTasks(tasks => [...totalTasks, item]);   
    }

    return (
        <div id="content">
            <h1>Tasks Due</h1>
            <Search onInputChange={setStr}/>
            <List tasks={update()} up={updateStore} add={add} remove={deletedEl}/>
        </div>
    )
}

export default Content