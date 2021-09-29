import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "@redux-saga/core";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer, { rootSaga } from ".";


const sagaMiddleware = createSagaMiddleware();
const middleware = [ thunk, sagaMiddleware ];


const composeEnhancers = composeWithDevTools({ 
    trace: true, 
    traceLimit: 25 
}); 

const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware( ...middleware )
    )
);

sagaMiddleware.run(rootSaga);

export { store };