export default function scene (state = '', action) {
  if (action.type === 'SCENE') {
    
    return action.payload;
  }
  return state;
}
