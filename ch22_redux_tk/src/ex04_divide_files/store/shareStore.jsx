import { configureStore } from "@reduxjs/toolkit";
import strSlice from "./slice/strSlice";
import counterSlice from "./slice/counterSlice";

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        append: strSlice.reducer,
    },
});

export default store;
