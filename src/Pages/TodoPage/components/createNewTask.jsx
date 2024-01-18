import React, {useMemo, useState} from 'react';
import MyButton from "../../../components/UI/Button/myButton";
import MyInput from "../../../components/UI/Input/MyInput";
import classes from "./createNewTask.module.css";
const CreateNewTask = ({create,visibleTogle}) => {
    const [task,setTask]=useState({title:'',body:'',priority:"Средний приоритет"})
    const CreateNewElement = (e) => {
        e.preventDefault()
        const NewTask = {
            ...task,id:Date.now()
        }
        create(NewTask)
        setTask({title:'',body:'',priority:"Средний приоритет"})
    }

    return (
        <form onClick={visibleTogle} className={classes.cntForm}>
            <div onClick={(e)=>e.stopPropagation()} className={classes.cntContent}>
            <MyInput
                value={task.title}
                onChange={e=>setTask({...task,title:e.target.value})}
                type="text"
                placeholder={'Задача'}/>
            <MyInput
                value={task.body}
                onChange={e=>setTask({...task,body:e.target.value})}
                type="text"
                placeholder={'Описание'}/>
            <p>Выбрать приоритет задачи:<select value={task.priority} onChange={e=>setTask({...task,priority:e.target.value})}>
                <option value={"Высший приоритет"}>Высший приоритет</option>
                <option value={"Средний приоритет"}>Средний приоритет</option>
                <option value={"Низкий приоритет"}>Низкий приоритет</option>
            </select></p>
            <MyButton onClick={CreateNewElement} >Создать новую задачу</MyButton>
            </div>
        </form>
    );
};

export default CreateNewTask;