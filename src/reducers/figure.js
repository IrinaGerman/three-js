export default function figure(state = '', action) {
  if (action.type === 'FIGURE') {
    console.log(action.payload);
    return action.payload;
  }
  return state;
}
