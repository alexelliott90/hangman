import { configureStore } from "@reduxjs/toolkit";
//import reducers:
import wordsReducer from "./words.js";
import imagesReducer from "./images.js";

//create store for reducers
export default configureStore({
    reducer: {
        //add reducers to export:
        words: wordsReducer,
        images: imagesReducer,
    },
});