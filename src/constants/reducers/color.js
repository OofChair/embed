import { SET_COLOR } from 'constants/types';

const color = (state = '#fef797', action) => {
    switch (action.type) {
      case SET_COLOR:
        return action.color
      default:
        return state
    }
  }
  
  export default color