import React, {useState} from 'react';
import "./burger.css";
const Burger = ({setVisibleModal,visibleModal}) => {
    console.log(visibleModal)
    return (
        <div onClick={()=>{setVisibleModal(!visibleModal)}} className={visibleModal ? 'burger active' : 'burger'}>
            <div onClick={(e)=>e.stopPropagation()} className={visibleModal? 'burger__content active' : 'burger__content'}>
                <ul style={visibleModal?{display:"block"}:{display:"none"}}>
                    <li><a href="/todo">TODO</a></li>
                    <li><a href="/timer">TIMER</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Burger;