export const initialState = [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  },
  {
      item: 'Get my homework done',
      completed: false,
      id: 703301979
  },
  {
      item: 'Time to make Beats',
      completed: false,
      id: 703301980
  }
]


export const todoReducer = (state, action) => {


switch(action.type) {
    case 'ADD_TODO':
        console.log(state, action)
        return [...state, { item: action.payload, id:Date.now(), completed: false }]

    case 'MARK_COMPLETE':
        state.map(item => {
            if (item.id === action.payload){
            return item.completed = !item.completed;
            }
        })
        return [...state]

    case 'CLEAR_COMPLETE':
        
        const newArr = state.filter(item => {
           return item.completed !== true
        })
       
        return [...newArr]
    
    default:
        return state;
}
}