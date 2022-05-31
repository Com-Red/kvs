import React from 'react';
import Data from '../data/data.json'

const active = 13;

const mass = {
    name: 'Tom',
    age: 33,
    obj: [1,2,3,4,5,6]
}

const obj = [
    [{name: 'Bob'}]
]

let mass2 = mass.obj.map((i) => <p>{i}</p>);

function test1(){
    
}

class Test extends React.Component {
    render(){
        return(
            <>
                <h1>{Data.data[0][0].name}</h1>
                {}
            </>
        );
    }
}
 export default (Test)