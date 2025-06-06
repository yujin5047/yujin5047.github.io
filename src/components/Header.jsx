// import account_circle from '../assets/account_circle.png';
import './Header.css';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function Header(){
    const {isDarkMode} = useContext(ThemeContext);

    return (
        <>

        <div className="Header_div">
            <div className={isDarkMode? "h_dark_mode": "h_mode"}>
                <h1>김유진</h1>
                <p>이메일: 0505ujin@pusan.ac.kr</p>
            </div>
            {/* <img className='account_img' src={account_circle} alt='사람' /> */}
            
        </div>
        </>
    );
}

export default Header;