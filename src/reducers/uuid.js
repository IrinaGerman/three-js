export default function uuid(state = [], action) {
    if (action.type === "ADD_UUID" && Array.isArray(state)) {
        return [
            ...state,
            action.payload
        ];
    } if (action.type === "ADD_UUID") {
        return [
            action.payload
        ];       
    } if (action.type === "DEL_UUID") {
        var arr = state.filter(item => 
            item!== action.payload
        );               
        return [
            ...arr
        ];    
    } if (action.type === 'WRONG_REQUEST') {
		return'THIS REQUEST IS NOT CORRECT';
    }
    
    return state;
    
}