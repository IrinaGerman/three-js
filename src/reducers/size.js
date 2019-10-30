export default function size (state = '', action) {
    if (action.type === 'SIZE') {
      console.log(action.payload);
      return action.payload;
    }
    return state;
  }
  