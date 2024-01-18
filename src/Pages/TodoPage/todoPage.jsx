import React, {useEffect, useState} from 'react';
import MyButton from "../../components/UI/Button/myButton";
import CreateNewTask from "./components/createNewTask";
import MySelect from "../../components/UI/select/MySelect";
import TaskList from "./components/TaskList";
import '../../components/styles/Pages/todoPage.css'

const TodoPage = () => {
    const [tasks, setTasks] =useState([])
    const [DarkMode,setDarkMode]=useState(false)
    const [visibleModal,setVisibleModal] =useState(false)
    const AddNew =(NewTask)=>{
        setTasks([...tasks,NewTask])
        setVisibleModal(false)
    }
    function toggleVisible (){
        setVisibleModal(!visibleModal)
    }

    const removeTask =(task)=>{
        setTasks(tasks.filter(t => t.id !== task.id))
    }
    const [SelectedSort,setSelectedSort]=useState('')
    const sortTasks =(SelecredSort)=>{
        setSelectedSort(SelecredSort)
        setTasks([...tasks].sort((a,b)=>a[SelecredSort].localeCompare(b[SelecredSort])))
    }
    useEffect(()=>{
        const todos=JSON.parse(localStorage.getItem('todos'))
        if(todos){
            setTasks(todos)
        }
    },[])
    useEffect(()=>{
        localStorage.setItem('todos',JSON.stringify(tasks))
    },[tasks])

    return (
        <div className="todoPage">
                <MyButton onClick={()=>{setDarkMode(!DarkMode)}}>
                    {DarkMode===true?
                        (<p>Лайт мод</p>)
                        :
                        (<p>Дарк мод</p>)
                    }

                </MyButton>
                {visibleModal &&<CreateNewTask visibleTogle={toggleVisible} create={AddNew}></CreateNewTask>}
                <MyButton  onClick={toggleVisible}>Создать новую задачу</MyButton>

                <MySelect
                    value={SelectedSort}
                    onChange={sortTasks}
                    options={[
                        {name:"По названию",value:"title"},
                        {name:"По описанию",value:"body"},
                        {name:"По приоритету",value:"priority"}
                    ]}
                />
                <TaskList remove={removeTask} tasks={tasks}/>
        </div>

    );
};

export default TodoPage;