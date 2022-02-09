import { createSlice } from '@reduxjs/toolkit'
let nextTodoId = 0;

const todosSlice = createSlice({
  name: 'todos',
  initialState: [

  ],
  reducers: {
    addTodo(state, action) {
      state.push({ id: nextTodoId++, text: action.payload, completed: false })
    },
  }
})

//importeras i AddTodo och store
export const { addTodo } = todosSlice.actions

export default todosSlice.reducer