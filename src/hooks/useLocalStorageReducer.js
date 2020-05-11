import { useReducer, useEffect } from 'react';

function useLocalStorageReducer(key, defaultValue, reducer) {
    // Make piece of state based off of value in localStorage (or default)
    const[state, dispatch] = useReducer(reducer, defaultValue, () => {
        let val;
        try {
            val = JSON.parse(window.localStorage.getItem(key) || String(defaultValue));
        } catch(err) {
            val = defaultValue;
        }
        return val;
    });
    
    // Use useEffect to update localStorage when state changes
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);

    return [state, dispatch];
}

export default useLocalStorageReducer;