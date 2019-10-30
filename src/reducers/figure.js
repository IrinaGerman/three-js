export default function figure(state = '', action) {
  if (action.type === 'FIGURE') {
    
    return action.payload;
  }
  return state;
}
