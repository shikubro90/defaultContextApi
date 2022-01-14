import { useContext } from 'react'
import createContext from './themeContext'

export default function HoverCounter({count,incrementCounter}){

    const context = useContext(createContext)
    const {theme,switchTheme} = context

    const style = theme === 'dark' ? {backgroundColor : '#000000',color : '#fff'} : null

    return(
        <div>
            <h1 style={style} onMouseOver={incrementCounter}>This is hover counter and presses {count} time</h1>
            <button onClick={switchTheme}>Click Button</button>
        </div>
    )
}