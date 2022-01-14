import Counter from './Counter'
import HoverCounter from './HoverCounter'

export default function Section(){


    return(
        <Counter>
            {(count,incrementCounter)=>(
                <HoverCounter count={count} incrementCounter={incrementCounter} />
            )}
        </Counter>

    )
}