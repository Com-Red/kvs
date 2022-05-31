import React from "react";
import './menu.css';
import Test from "./test";
import {Link, Outlet} from 'react-router-dom'

class Menu extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className="menu">
                <ul>
                    <li><Link to="/">Главная</Link></li>
                    <li><Link to="Page2">Page2</Link></li>
                    <li><Link to="Page3">Page3</Link></li>
                    <li><Link to="Test">Test</Link></li>
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