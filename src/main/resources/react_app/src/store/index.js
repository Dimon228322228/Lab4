import chooserReducer from "./chooserSlice"
import paginationReducer from "./paginationSlice"
import {configureStore} from "@reduxjs/toolkit";
import {api} from "../services/api";

export const store = configureStore({
   reducer: {
      [api.reduserPath]: api.reduser,
      chooser: chooserReducer,
      pagination: paginationReducer,
   },
   middleware: (gDM) => gDM().concat(api.middleware)
});