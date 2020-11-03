import { createStore } from 'redux';

import { Provider } from 'react-redux';

/**
 * Reducers
 */
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const initialState = {
    count: 0
};

const reducer = ( state = initialState, action ) => {
    let count = initialState.count;
    switch ( action.type ) {
        case INCREMENT:
            count++;
            break;
        case DECREMENT:
            count--;
            break;
        default:
            count = 0;
    }

    return {
        count
    }
};
/**
 * Store
 */
const store = createStore( reducer );

function Counter() {
    return (
        <Provider store={store}>
            <div className="Counter">
                <p className="count">
                    <section className="controls">
                        <button >Increment</button>
                        <button >Decrement</button>
                        <button >Reset</button>
                    </section>
                </p>
            </div>
        </Provider>
    );
}

export default Counter;
