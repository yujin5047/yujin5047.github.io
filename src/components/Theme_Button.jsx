import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Button = () => {
    const { toggleDarkMode, isDarkMode } = useContext(ThemeContext);
    const handleClick = () => {
        toggleDarkMode();
    }
    return (
        <button style={{backgroundColor: isDarkMode? 'black':'white' , color: isDarkMode? 'white':'black', cursor:'pointer'}} onClick={handleClick}>
            {isDarkMode? '라이트 모드로 전환':'다크 모드로 전환'}
        </button>
    );
}

export default Button;