import React, {useState} from 'react';
import MyButton from "../../../components/UI/Button/myButton";
import MyInput from "../../../components/UI/Input/MyInput";

const Task = (props) => {
    const [changesState,setChangesState]=useState(true)
    const [changes,setChanges]=useState(props.task)

    const getColor =()=>{
        if(changes.priority==="Высший приоритет"){
    return 'red'
    }else if(changes.priority==="Средний приоритет"){
            return 'yellow'
        }else{
            return 'green'
        }
    }

    const styles={
        backgroundColor: getColor(),
        minHeight:'177px',
        width:'100%',

    }
    return (
        <div>
            <div className={"Task"}>
                    <div style={styles}>
                    </div>
                    <div className={'Task_content'}>
                        <h2>{props.number}. {changes.title}</h2>
                        <p>{changes.body}</p>
                    </div>
                    {changesState ? (
                    <div className={'Task_btnSection'}>
                        <MyButton onClick={()=>{setChangesState(false)}}>Редактировать</MyButton>
                        <MyButton onClick={()=> props.remove(props.task)} className="Task_btn_ready">Выполнено</MyButton>
                        <MyButton onClick={()=> props.remove(props.task)} className="Task_btn_cancel">Отменить</MyButton>
                    </div>
                    ):(
                        <div className={'Task_btnSection'}>
                            <MyButton onClick={()=>{setChangesState(true)}}>Применить</MyButton>
                            <MyInput
                                value={changes.title}
                                onChange={e=>setChanges({...changes,title:e.target.value})}
                                type="text"
                            />
                            <MyInput
                                value={changes.body}
                                onChange={e=>setChanges({...changes,body:e.target.value})}
                                type="text"
                            />
                            <p>Изменить приоритет задачи:<select
                                value={changes.priority}
                                onChange={e=>setChanges({...changes,priority:e.target.value})}
                            >
                                <option value={"Высший приоритет"}>Высший приоритет</option>
                                <option value={"Средний приоритет"}>Средний приоритет</option>
                                <option value={"Низкий приоритет"}>Низкий приоритет</option>
                            </select></p>
                        </div> )}
                </div>
        </div>
    );
};

export default Task;