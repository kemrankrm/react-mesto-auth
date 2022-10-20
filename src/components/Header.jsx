// import { Children } from "react";
// import { Link, useLocation } from "react-router-dom";
import headerLogo from "../images/headerLogo.svg";




function Header(props) {
  // const location = useLocation();

  // const handleLogout = () => {
  //   props.onLogout()
  // }

  // function generateContent(location){
  //   switch(location.pathname) {
  //     case '/sign-in':
  //       return (
  //         <Link className="header__link header__auth-link" to="/sign-up">Регистрация</Link>
  //       )
  //     case '/sign-up':
  //       return (
  //         <Link className="header__link header__auth-link" to="/sign-in">Войти</Link>
  //       )
  //     default:
  //       return (
  //         <>
  //         <p className="header__link header__username">{props.userEmail}</p>
  //         <Link className="header__link header__logout" onClick={handleLogout} to="/">Выйти</Link>
  //         </>
  //       )
  //   }
  // }

  return (
    <header className="header">
      <img src={headerLogo} className="header__logo" alt="логотип" />
      <nav className="header__info-tooltip">
        {
          props.children
        }  
      </nav>
    </header>
  );
}

export default Header;
