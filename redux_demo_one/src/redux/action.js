import {ADD_DATA,DEL_DATA} from "./actionType";

export function addDataAction(data){
    return {
        type:ADD_DATA,
        payload:data
    }
}
export function delDataAction(data){
    return {
        type:DEL_DATA,
        payload:data
    }
}