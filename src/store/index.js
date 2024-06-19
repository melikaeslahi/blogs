import { configureStore   } from "@reduxjs/toolkit";
import { postsApi } from "../api/postApi";
import { categoryApi } from "../api/categoryApi";
import { authorApi } from "../api/authorApi";
import utilReducer from "../slice/utilSlice";

 


export const store = configureStore({
    reducer:{
     utils: utilReducer,
    [postsApi.reducerPath] : postsApi.reducer,
    [categoryApi.reducerPath] : categoryApi.reducer,
    [authorApi.reducerPath] : authorApi.reducer,

    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
    .concat(postsApi.middleware ,
           categoryApi.middleware ,
          authorApi.middleware),
})