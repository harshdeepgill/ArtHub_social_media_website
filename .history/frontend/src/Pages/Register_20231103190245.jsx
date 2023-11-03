import { useRef, useState, useEffect } from "react";
import {
  faCheck,
  faInfoCircle,
  faX,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  Center,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import { register } from "../Redux/action";

const USER_REGEX = /^[A-Za-z][A-Za-z0-9]{4,}@[A-Za-z0-9]+\.[A-Za-z]{2,}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,15}$/;

const Register = () => {
  const userRef = useRef();
  const errRef = useRef();
  const toast = useToast();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [age, setAge] = useState(0);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const [show, setShow] = useState(false);
  const handleShowPasswordClick = () => setShow(!show);

  const [confirmShow, setConfirmShow] = useState(false);
  const handleConfirmShowPasswordClick = () => setConfirmShow(!confirmShow);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  const payload = { username: userName, name, email: user, avatar, password: pwd, age, favourites: [], premium: false, elite: false };

  return (
    <div>Register</div>
  )
}

export default Register