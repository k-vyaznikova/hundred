const defaultState = {
    //currentTask:  Math.floor(Math.random() * 100)
    currentTask:  0
  };
  const taskReducer = (state = defaultState, action) => {
    switch (action.type){
        case 'CURRENT_TASK': 
          action?.payload?.callback();
          return {...state, currentTask: action.payload.next_task};   
        default: 
            return state;
    }
  }
  export default taskReducer;
  
