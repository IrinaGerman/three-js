export default function number(state = 0, action) {
  if (action.type === 'NUM') {
    console.log(state);
    return ++state;
  }
  return state;
}
