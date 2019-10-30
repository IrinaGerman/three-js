export default function uuid(state = [], action) {
    if (action.type === "ADD_UUID") {
        console.log("uuid", action.payload)
        return [
            ...state,
            action.payload
        ];    
    } if (action.type === "DEL_UUID") {
        console.log("del", action.payload)
        var arr = state.filter(item => 
            item!== action.payload
        );         
        
        return [
            ...arr
        ];    
    } 
    return state;
    
}