import React from "react";
import './menu.css';
import Test from "../page/test";
import {NavLink, Outlet} from 'react-router-dom'

class Menu extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className="menu">
                <ul className="ulmenu">
                    <NavLink to="/"><li>Главная</li></NavLink>
                    <NavLink to="Page2"><li>Page2</li></NavLink>
                    <NavLink to="Page3"><li>Page3</li></NavLink>
                    <NavLink to="Test"><li>Test</li></NavLink>
                </ul>
                <div className="menu1"></div>
            </div>
        )
    }
}

export default (Menu);