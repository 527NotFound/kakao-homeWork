import { useReducer } from "react";

// reducer 함수: 현재 상태와 액션을 받아 새로운 상태를 반환
const reducer = (state, action) => {
    console.log('리듀서 실행!', state, action)
    switch (action.type) {
        case 'PLUS':
            return state + 1;
        case 'MINUS':
            return state - 1;
        default:
            return state;
    }
}

const UseReducer = () => {
    // const [count, setCount] = useState(0);
    const [count, dispatch] = useReducer(reducer, 0)

    const plusHandler = () => {
        // setCount(count + 1)
        dispatch({type: 'PLUS'});
    }

    const minusHandler = () => {
        // setCount(count - 1)
        dispatch({type: 'MINUS'});
    }

    return (
        <div style={{typeAlign: 'center'}}>
            <h1>{count}</h1>
            <button onClick={ plusHandler }>더하기</button>
            <br />
            <br />
            <button onClick={ minusHandler }>빼기</button>
        </div>
    )
}

export default UseReducer;