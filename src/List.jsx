import './List.css'

function List({tasks, add, up, remove}) {

    function checkSubmit(e){
        if(e.key == "Enter") {
            if(e.currentTarget.value.trim() == "") {window.alert("Please type in a task!"); return;}
            let object = {val: e.currentTarget.value, marked: false};
            if(tasks.filter(item => (object.val == item.val)).length > 0) { window.alert("Please type in a unique task!"); return;}
            add(object);
            e.currentTarget.value = "";
        }
    }

    function changed(e) {
        if(e.target.parentElement?.textContent) {
            up(e.target.checked, e.target.parentElement.textContent.trim());
        }
    }

    function deleted(e) {
        if(e.currentTarget.parentElement?.firstChild?.textContent){
            remove(e.currentTarget.parentElement.firstChild.textContent.trim());
        }
    }


   return (
        <div className="bar">
            { tasks.map(item => (<label key={item.val.trim()}><span><input type="checkbox" onChange={changed} id={item.val} defaultChecked={item.marked} /><span>{item.val}</span></span><button onClick={deleted} className="danger">Delete</button> </label>) )}
            <label> <input type="checkbox" disabled /> <input onKeyDown={checkSubmit} id="next" placeholder="Doing the Dishes (Press enter to update task)"/> </label>
        </div>
    )
}

export default List;