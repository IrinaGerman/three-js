export default function uuid(state = [], action) {
    if (action.type === "ADD_UUID") {
       
        return [
            ...state,
            action.payload
        ];    
    } if (action.type === "DEL_UUID") {
       
        var arr = state.filter(item => 
            item!== action.payload
        );         
        
        return [
            ...arr
        ];    
    } 
    return state;
    
}