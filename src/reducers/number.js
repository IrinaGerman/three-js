export default function number(state = 0, action) {
  if (action.type === 'NUM') {
    
    return ++state;
  }
  return state;
}
