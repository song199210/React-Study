import {ADD_DATA,DEL_DATA} from "./actionType";

import {data} from "./initState";

export function addDataReducer(state=data,actions){
    let obj={};
    switch(actions.type){
        case ADD_DATA:
            obj={...state};
            obj['num']+=1;
            return obj;
        case DEL_DATA:
            obj={...state};
            obj['num']-=1;
            return obj;
        default:
            return state;
    }
}