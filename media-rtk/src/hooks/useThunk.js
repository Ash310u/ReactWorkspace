import { useState, useCallback } from 'react'
import { useDispatch} from "react-redux";

const useThunk = (thunk) => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    
    const dispatch = useDispatch()
    const runThunk = useCallback((arg) => {
        setIsLoading(true)
        dispatch(thunk(arg))
            .unwrap() // The "unwrap()" method is used to access the resolved or rejected value of a dispatched asynchronous action ( Basically unwrap() give a brand new promise back )
            .catch((error) => setError(error))
            .finally(() => setIsLoading(false));
    },[dispatch, thunk])

    return [
        runThunk,
        isLoading,
        error
    ]
}

export default useThunk;