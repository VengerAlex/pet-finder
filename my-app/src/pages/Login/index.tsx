import {FormEvent, useState} from "react";
import {Link, useNavigate} from "react-router-dom";

import "../../styles/login.scss"
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {Input} from "../../shared/Input"
import useInput from "../../hooks/useInput";
import {login, register} from "../../redux/reducers/user/user.actions";

const Login = () => {
  const [title, setTitle] = useState<"login" | "registration">("login");
  const email = useInput("");
  const password = useInput("");
  const fullName = useInput("");
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    if (title === "registration"){
      dispatch(register({password: password.value, fullName: fullName.value, email: email.value}))
          .then(r => navigate("/"))
    }else {
      dispatch(login({password: password.value, email: email.value}))
          .then(r => navigate("/"))
    }
  }

  const changeTitleHandler = () => {
    setTitle(title === "registration" ? "login" : "registration")
  }

  return (
    <div className="login">
      <div className="login__box">
        <h2 className="login__box-title title">{title}</h2>
      </div>
      <div className="login__container">

        <form onSubmit={submitHandler} className="login__form">
          {title === "registration" && <Input
              {...fullName}
              placeholder="fullName"
              type="text"
          />}
          <Input
            {...email}
            placeholder="login"
            type="text"
          />
          <Input
            isPassword={true}
            {...password}
            placeholder="password"
          />
          <button>{title === "registration" ? "Registration" : "Sign In"}</button>
        </form>

        <div className="login__footer">
          <Link to="/"><h4>Home</h4></Link>

          {title !== "registration"
              ? <h4 onClick={changeTitleHandler}>Registration</h4>
              : <h4 onClick={changeTitleHandler}>Go Back</h4>
          }

        </div>
      </div>
    </div>
  );
};

export default Login;