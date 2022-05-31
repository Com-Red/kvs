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
                <img src="../data/image/kub.png" alt=""></img>
                <ul>
                    <NavLink to="/"><li>Главная</li></NavLink>
                    <NavLink to="Page2"><li>Page2</li></NavLink>
                    <NavLink to="Page3"><li>Page3</li></NavLink>
                    <NavLink to="Test"><li>Test</li></NavLink>
                    <li>Классы
                        <ul>
                            <li id='pageclass11'>11 класс</li>
                            <li id='pageclass10'>10 класс</li>
                            <li id='pageclass9'>9 классы</li>
                        </ul>
                        </li>
                        <li>Blog
                        <ul>
                            <li>123</li>
                            <li>321</li>
                        </ul>
                    </li>
                    <li>Contact</li>
                </ul>
            </div>
        )
    }
}

export default (Menu);