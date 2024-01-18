import React from 'react';
import Task from "./Task";
const TaskList = ({tasks, remove}) => {

    return (
        <div>
            <h2 style={{textAlign:'center'}}>
                {tasks.length===0 ?
                    (<p>Задач нет!</p>)
                    :
                    (<p>Список задач</p>)
                }
            </h2>
            {tasks.map((task, index ,priority) =>
                <Task priority={priority} remove={remove} number={index+1} task={task} key={task.id}/>
            )}
        </div>
    );
};

export default TaskList;