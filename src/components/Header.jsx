import account_circle from '../assets/account_circle.png';
import './Header.css';

function Header(){

    return (
        <>
        <div className="Header_div">
            <h1>김유진</h1>
            <img className='account_img' src={account_circle} alt='사람' />
        </div>
        </>
    );
}

export default Header;