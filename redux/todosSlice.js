import { createSlice } from '@reduxjs/toolkit'
let nextTodoId = 0;

const todosSlice = createSlice({
  name: 'todos',
  initialState: [
    //	{ id: 1, title: 'todo1', completed: false },
    // 	{ id: 2, title: 'todo2', completed: false },
  ],
  reducers: {
    addTodo(state, action) {
      state.push({ id: nextTodoId++, text: action.payload })
    }
  }
})

//importeras i AddTodo och store
export const { addTodo } = todosSlice.actions

export default todosSlice.reducer