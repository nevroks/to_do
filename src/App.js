import React, {useState} from 'react'
import './reset.css'
import './components/styles/App.css';
import TodoPage from "./Pages/TodoPage/todoPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Burger from "./components/UI/BurgerMenu/Burger";
import burger_ico from "./sources/icons/Hamburger_icon.svg.png";
import MyButton from "./components/UI/Button/myButton";
import TimerPage from "./Pages/TimerPage/timerPage";


function App() {
            const[visibleModal,setVisibleModal]=useState(false)
    console.log(visibleModal)
    return (
            <div className="App">
                <div className={'modal'}>
                    <MyButton onClick={()=>{setVisibleModal(!visibleModal)}}>
                        <img src={burger_ico} alt=""/>
                    </MyButton>
                    <Burger visibleModal={visibleModal} setVisibleModal={setVisibleModal}/>
                </div>
                <BrowserRouter>
                    <Routes>
                        <Route path='/todo' element={<TodoPage/>}/>
                        <Route path='/timer' element={<TimerPage/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
  );
}

export default App;


