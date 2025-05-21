const defaultState = {
    status:  true,
    score: 0,
    answer: false
  };
  const gameReducer = (state = defaultState, action) => {
    switch (action.type){
        case 'INCREMENT': 
          return {...state, score: state.score + action.payload > 0 ? state.score + action.payload : 0};  
        case 'DECREMENT': 
          return {...state, score: state.score - action.payload > 0 ? state.score - action.payload : 0};
        case 'ZERO': 
          return {...state, score: 0};  
        case 'TRUE_ANSWER': 
          return {...state, answer: true};
        case 'BAD_ANSWER': 
          return {...state, answer: false};  
        case 'START_GAME': 
          return {...state, status: true};
        case 'END_GAME': 
          return {...state, status: false};    
        default: 
          return state;  
    }
  }
  export default gameReducer;
  
