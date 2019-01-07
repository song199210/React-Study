import React from "react";
import {Store} from "../redux";
import {addDataAction,delDataAction} from "../redux/action";

export default class VOne extends React.Component {
    render(){
        const num=Store.getState()['num'];
        console.log(num);
        return (
            <div>
                <p>{num}</p>
                <div>
                    <button type="button" onClick={()=>Store.dispatch(addDataAction())}>+1</button>
                    <button type="button" onClick={()=>{Store.dispatch(delDataAction())}}>-1</button>
                </div>
            </div>
        );
    }
}