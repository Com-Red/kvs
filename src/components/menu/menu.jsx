import React from "react";
import './menu.css';

class Menu extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="menu">
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </div>
        )
    }
}

export default (Menu);