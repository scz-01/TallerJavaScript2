import {useDispatch, useSelector} from "react-redux"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { decrement, increment, incrementByAmount } from "../store/counterSlice";

const Counter = () => {
    const contador = useSelector ( (state) => state.counter.value )
    const dispach = useDispatch()

    return (
        <div>
            <Stack spacing={2} direction="row">
                    <Button variant="contained" onClick={ () => dispach(increment) }>Incrementar</Button>
                    <Button variant="contained" onClick={ () => dispach(decrement) }>Decrementar</Button>
                    <Button variant="contained" onClick={ () => dispach(incrementByAmount(5)) }>Incrementar en 5</Button> 
            </Stack>
            <h1>valor actual del contador: {contador}</h1>
        </div>
    )
}

export default Counter;