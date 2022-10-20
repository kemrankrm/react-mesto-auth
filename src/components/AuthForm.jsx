import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import auth from "../auth";

export default function AuthForm(props) {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const history = useHistory();

  //Controlled Input Setup
  const handleChange = (e) => {
    if (e.target.name === "email") {
      setUserData({
        [e.target.name]: e.target.value,
        password: userData.password,
      });
    } else {
      setUserData({
        email: userData.email,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.isRegistration) {
      auth(userData, "signup")
        .then((res) => {
          if (res) {
            props.onAuthStatus("success");
            history.push("/sign-in");
          } else {
            props.onAuthStatus("fail");
          }
          props.onTooltipOpen(true);
        })
        .catch((e) => console.log(e));
    } else {
      auth(userData, "signin")
        .then((res) => {
            console.log(res.token)
          if (res.token) {
            localStorage.setItem("jwt", res.token);
            props.onLoggedin(true);
            props.onCurrentEmail(userData.email);
            history.push("/main");
          } else {
            props.onAuthStatus("fail");
            props.onTooltipOpen(true);
          }
        })
        .catch((e) => console.log(e));
    }
  };

  return (
    <div className="authentification">
      <form className="authentification__form" onSubmit={handleSubmit}>
        <fieldset className="authentification__input-container">
          <legend className="authentification__legend">{props.legend}</legend>
          <input
            name="email"
            value={userData.email}
            onChange={handleChange}
            className="authentification__email"
            type="email"
            placeholder="Email"
          />
          <input
            name="password"
            value={userData.password}
            onChange={handleChange}
            className="authentification__password"
            type="password"
            placeholder="Пароль"
          />
          <button className="authentification__button" type="submit">
            {props.buttonText}
          </button>
        </fieldset>
        {props.isRegistration && (
          <Link to="/sign-in" className="authentification__text">
            Уже зарегистрированы? Войти
          </Link>
        )}
      </form>
    </div>
  );
}
