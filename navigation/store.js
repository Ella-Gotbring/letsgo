//holds and manages reducer from todoSlice
import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "../redux/todosSlice";
export const store = configureStore({
    reducer: {
        todos: todosSlice
    },
});