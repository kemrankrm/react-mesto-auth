import AuthForm from "./AuthForm";

export default function Login(props) {
  return (
    <>
      <AuthForm
        isRegistration={false}
        buttonText="Войти"
        legend="Вход"
        onLoggedin={props.onLoggedin}
        onCurrentEmail={props.onCurrentEmail}
        onAuthStatus={props.onAuthStatus}
        onTooltipOpen={props.onTooltipOpen}
      />
    </>
  );
}
