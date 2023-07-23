import { useContext } from 'react'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import './ToggleTheme.css'
import { themeContext } from '../../context/ThemeProvider'


const ToggleTheme = () => {
    const {toggleTheme, darkMode} = useContext(themeContext)
  return (
    <button className='toggle-theme-btn' onClick={toggleTheme}>
        <span>Go {darkMode ? "Light" : "Dark"}</span>
        <img src={darkMode? sun : moon} alt="toggle-icon" />
    </button>
  )
}
export default ToggleTheme