import { useReducer } from "react"
import { produce } from 'immer'
import Button from "../components/Button"
import Panel from "../components/Panel";


const INCREMENT_COUNT = 'increment_count';
const DECREMENT_COUNT = 'decrement_count';
const ADD_VALUE = 'add_value';
const CHANGE_VALUE = 'change_value';


const reducer =  (state, action) => {
    // HUH! Using a switch statement is a common pattern in Redux reducers and is generally considered more readable and conventional, making it a good choice in terms of code organization.

    // switch (action.type) {
    //     case INCREMENT_COUNT:
    //         state.count = state.count + 1
    //         return ;
    
    //     case DECREMENT_COUNT:
    //         state.count = state.count - 1
    //         return ;
    
    //     case ADD_VALUE:
    //         state.valueToAdd =  action.payload
    //         return ;
    
    //     case CHANGE_VALUE:
    //         state.count = state.count + state.valueToAdd
    //         state.valueToAdd =  0
    //         return ;
    
    //     default:
    //         return ;
    // }

    return (
        action.type === INCREMENT_COUNT ? {...state, count: state.count + 1} :
        action.type === DECREMENT_COUNT ? {...state, count: state.count - 1} :
        action.type === ADD_VALUE ? {...state, valueToAdd: action.payload} :
        action.type === CHANGE_VALUE ? {...state, count: state.count + state.valueToAdd, valueToAdd: 0} :
        state
    )
}

const CounterPage = ({ intialCount }) => {

    const [state, dispatch] = useReducer(produce(reducer), {
        count: intialCount,
        valueToAdd: 0
    });

    const incrementCount = () => {
        dispatch({
            type: INCREMENT_COUNT
        })
    }

    const decrementCount = () => {
        dispatch({
            type: DECREMENT_COUNT
        })
    }

    const handleChange = (e) => {
        const value = parseInt(e.target.value) || 0;
        dispatch({
            type: ADD_VALUE,
            payload:value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({
            type: CHANGE_VALUE,
        })
    }

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            handleChange();
        }
    })

    return (
        <Panel classNames="m-3">
            <h1 className="text-xl">Count is {state.count}</h1>
            <div className="flex flex-row pt-4 gap-2">
                <Button success rounded onClick={incrementCount}>Increment</Button>
                <Button secondary rounded onClick={decrementCount}>Decrement</Button>
            </div>

            <form className="flex flex-row items-center" onSubmit={handleSubmit}>
                <label>Add a lot!</label>
                <input
                    value={state.valueToAdd || ''}
                    onChange={handleChange}
                    type="number"
                    className="p-1 m-3 bg-gray-50 rounded border border-gray-300"
                />
                <Button primary rounded >Add it!</Button>
            </form>
        </Panel>
    )
}

export default CounterPage