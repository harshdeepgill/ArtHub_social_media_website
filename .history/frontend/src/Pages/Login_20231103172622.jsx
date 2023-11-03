import React from 'react'
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

const Login = () => {
  return (
    <div>Login</div>
  )
}

export default Login