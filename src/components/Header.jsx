import logo from '../assets/images/logo.svg' 
import Article from './Article';
import NavBar from './NavBar';


const Header = () => {
    return (
        <header className='flex place-content-between items-center mb-14'>
            <img className='cursor-pointer'src={logo} alt="logo" />
            <NavBar/>
        </header>
    );
}

export default Header;
