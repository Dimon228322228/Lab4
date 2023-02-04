import {createStore, combineReducers} from "redux";
import {radiusReducer} from "./RadiusReducer";
import {XReducer} from "./XReducer";
import {YReducer} from "./YReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {TableReducer} from "./TableReducer";

const rootReducer = combineReducers({
   xReducer: XReducer,
   yReducer: YReducer,
   rReducer: radiusReducer,
   tableReducer: TableReducer
});
export const store = createStore(rootReducer, composeWithDevTools());