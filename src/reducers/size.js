export default function size (state = '', action) {
    if (action.type === 'SIZE') {
     
      return action.payload;
    }
    return state;
  }
  