import React, { useState } from "react";
import * as Components from '../styles/Components';
import styled from "styled-components";
import axios from "axios";
import register, { login } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import { Input } from '@chakra-ui/react';


const Login = () => {
  const [signIn, toggle] = React.useState(true);
  const handleToggle = () => {
    toggle(!signIn);
  };
  const dispatch = useDispatch();
  const userData = useSelector((store) => store.registerReducer);

  const [userName, setUserName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState(0);

  const userInfo = { username: userName, name, email, avatar, password, age, premium: false, elite: false };

  const userCredentials = { email, password };

  const handleRegister = (e) => {
    e.preventDefault();
    register(dispatch, userInfo);
    console.log(userData);
    axios.post("https://gifted-kit-cow.cyclic.app/users/register", userData)
      .then((res) => console.log("register Response: ", res.data))
      .catch(err => console.log(err.message));
  }

  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, userCredentials);
    console.log(userCredentials);
    // axios.post("https://gifted-kit-cow.cyclic.app/users/login", userCredentials)
    //   .then((res) => console.log("login Response: ", res.data))
    //   .catch(err => console.log(err.message));
  }

  const CONT = styled.div`
  * {
    box-sizing: border-box;
  }
  background: rgb(255,85,79);
  background: linear-gradient(218deg, rgba(255,85,79,1) 25%, rgba(255,127,80,1) 75%);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Mulish",sans-serif;
  height: 100vh;
  `;

  return (
    <CONT>
      {/* <input type="text" /> */}
      <Components.Container>
        <Components.SignUpContainer signinIn={signIn}>
          <Components.Form>
            <Components.Title>Create Account</Components.Title>
            <Components.Input type='text' placeholder='UserName' value={userName} onChange={(e) => { setUserName(e.target.value) }} />
            <Components.Input type='text' placeholder='Name' value={name} onChange={(e) => { setName(e.target.value) }} />
            <Components.Input type='email' placeholder='Email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
            <Components.Input type='text' placeholder='Avatar' value={avatar} onChange={(e) => { setAvatar(e.target.value) }} />
            <Components.Input type='password' placeholder='Password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
            <Components.Input type='number' placeholder='Age' value={age} onChange={(e) => { setAge(e.target.value) }} />
            <Components.Button onClick={handleRegister} type="submit">Sign Up</Components.Button>
          </Components.Form>
        </Components.SignUpContainer>

        <Components.SignInContainer signinIn={signIn}>
          <Components.Form>
            <Components.Title>Sign in</Components.Title>
            <Input type='email' placeholder='Email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
            {/* <input type="email" placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value) }}/> */}
            {/* </Components.Input> */}
            <Components.Input type='password' placeholder='Password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
            <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
            <Components.Button type="submit" onClick={handleLogin}>Sign In</Components.Button>
          </Components.Form>
        </Components.SignInContainer>

        <Components.OverlayContainer signinIn={signIn}>
          <Components.Overlay signinIn={signIn}>

            <Components.LeftOverlayPanel signinIn={signIn}>
              <Components.Title>Welcome Back!</Components.Title>
              <Components.Paragraph>
                To keep connected with us please login with your personal info
              </Components.Paragraph>
              <Components.GhostButton onClick={handleToggle}>
                Sign In
              </Components.GhostButton>
            </Components.LeftOverlayPanel>

            <Components.RightOverlayPanel signinIn={signIn}>
              <Components.Title>Hello, Friend!</Components.Title>
              <Components.Paragraph>
                Enter Your personal details and start journey with us
              </Components.Paragraph>
              <Components.GhostButton onClick={handleToggle}>
                Sign Up
              </Components.GhostButton>
            </Components.RightOverlayPanel>

          </Components.Overlay>
        </Components.OverlayContainer>

      </Components.Container>
    </CONT>
  )
}

export default Login;