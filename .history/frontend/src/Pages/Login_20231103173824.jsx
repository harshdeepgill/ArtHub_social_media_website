import {
  Center,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  InputGroup,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";
import { Link as ReactRouterLink, useLocation, useNavigate } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faX,
  faInfoCircle,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";

import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Redux/action";
import axios from "axios";

const USER_REGEX = /^[A-Za-z][A-Za-z0-9]{4,}@[A-Za-z0-9]+\.[A-Za-z]{2,}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,15}$/;

const Login = () => {
  const isAuth = useSelector((store) => store.authReducer.isAuth);
  const dispatch = useDispatch();
  const toast = useToast();

  const location = useLocation();

  const userRef = useRef();
  const errRef = useRef();

  const [username, setUsername] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [show, setShow] = useState(false);
  const handleShowPasswordClick = () => setShow(!show);

  const [errMsg, setErrMsg] = useState("");
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const result = USER_REGEX.test(username);
    // console.log(result);
    // console.log(username);
    setValidName(result);
  }, [username]);

  useEffect(() => {
    const result = PWD_REGEX.test(password);
    // console.log(result);
    // console.log(password);
    setValidPwd(result);
  }, [password]);

  useEffect(() => {
    setErrMsg("");
  }, [username, password]);

  return (
    <div>Login</div>
  )
}

export default Login