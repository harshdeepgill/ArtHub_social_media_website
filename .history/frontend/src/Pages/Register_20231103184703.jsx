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
  return (
    <div>Register</div>
  )
}

export default Register