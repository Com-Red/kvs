import React from 'react';
import Data from '../data/data.json'

const active = 13;

const mass = {
    name: 'Tom',
    age: 33,
    obj: [1,2,3,4,5,6],
    cif: 0,
}



const obj = [
    [{name: 'Bob'}]
]

let mass2 = mass.obj.map((i) => <p>{i}</p>);



class Test extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            counter: 0
        };
    }

    handlerClick(){
        this.setState({counter: this.state.counter + 1});
    }

    render(){
        return(
            <>
                <h1>{Data.data[0][0].name}</h1>
                <button id='123' onClick={this.handlerClick}>Push {this.state.counter}</button>
            </>
        );
    }
}
 export default (Test)