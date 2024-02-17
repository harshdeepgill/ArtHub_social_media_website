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
import axios from "axios";
import styles from "../style_modules/register.module.css";

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

  useEffect(() => {
    const result = USER_REGEX.test(user);
    console.log(result);
    // console.log(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      const payload = { username: userName, name, email: user, avatar, password: pwd, age, subscription: "basic" };
      console.log("register payload :", payload);
      axios.post("https://artsphere.onrender.com/users/register", payload)
        .then((res) => {
          console.log("Register response :", res.data);
          toast({
            title: "Registration Successful",
            description: "Details are correctly provided",
            status: "success",
            duration: 3000,
            isClosable: true,
            position: "top",
          });
          setSuccess(true);
        })
        .catch(err => console.log({ "registration error": err.message }));
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Username taken");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
  };

  // const reg = `${styles.register_form_section}`;

  return (
    <>
      {success ? (
        <section className={`${styles.register_form_section} ${styles.Nunito}`} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <Center>
            <VStack spacing={6} align="center">
              <Text fontSize="3xl" color="purple">
                Success!
              </Text>
              <Text>
                <ChakraLink
                  as={ReactRouterLink}
                  to="/login"
                  style={{ color: "blue" }}
                >
                  Login
                </ChakraLink>
              </Text>
            </VStack>
          </Center>
        </section>
      ) : (
        <section className={`${styles.register_form_section} ${styles.Nunito}`} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p
            ref={errRef}
            className={errMsg ? `${styles.errMsg}` : `${styles.offscreen}`}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <Center>
            <Heading size="2xl" as="b" style={{ color: "purple" }}>
              Register
            </Heading>
          </Center>
          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel
                color="black"
                marginTop="2rem"
                className={`${styles.Nunito}`}
                style={{ fontSize: "1.5rem", fontWeight: "bold" }}
              >
                Email:
                <span className={validName ? `${styles.valid}` : `${styles.hide}`}>
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ color: "green" }}
                  ></FontAwesomeIcon>
                </span>
                <span className={validName || !user ? `${styles.hide}` : `${styles.invalid}`}>
                  <FontAwesomeIcon
                    icon={faX}
                    style={{ color: "red" }}
                  ></FontAwesomeIcon>
                </span>
              </FormLabel>
              <Input
                type="text"
                size={"lg"}
                id="username"
                placeholder="Enter Email"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => {
                  setUser(e.target.value);
                }}
                required
                aria-invalid={validName ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
              ></Input>
              <p
                id="uidnote"
                className={
                  userFocus && user && !validName ? `${styles.instructions}` : `${styles.offscreen}`
                }
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                must begin with a letter.
                <br />
                email id must be greater than 5 characters.
                <br />
                must have "@"" symbol.
                <br />
                must have "." symbol.
              </p>
              <FormLabel
                color="black"
                marginTop="1rem"
                className={`${styles.Nunito}`}
                style={{ fontSize: "1.5rem", fontWeight: "bold" }}
              >
                Name:
              </FormLabel>
              <Input
                type="text"
                size={"lg"}
                id="name"
                placeholder="Enter Name"
                autoComplete="off"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                required
                aria-invalid={validName ? "false" : "true"}
                aria-describedby="uidnote"
              ></Input>

              <FormLabel
                color="black"
                marginTop="1rem"
                className={`${styles.Nunito}`}
                style={{ fontSize: "1.5rem", fontWeight: "bold" }}
              >
                Username:
              </FormLabel>
              <Input
                type="text"
                size={"lg"}
                id="username"
                placeholder="Enter Username"
                autoComplete="off"
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
                required
                aria-invalid={validName ? "false" : "true"}
                aria-describedby="uidnote"
              ></Input>

              <FormLabel
                color="black"
                marginTop="1rem"
                className={`${styles.Nunito}`}
                style={{ fontSize: "1.5rem", fontWeight: "bold" }}
              >
                Avatar:
              </FormLabel>
              <Input
                type="text"
                size={"lg"}
                id="avatar"
                placeholder="Enter Avatar url"
                autoComplete="off"
                onChange={(e) => {
                  setAvatar(e.target.value);
                }}
                required
                aria-invalid={validName ? "false" : "true"}
                aria-describedby="uidnote"
              ></Input>

              <FormLabel
                color="black"
                marginTop="1rem"
                className={`${styles.Nunito}`}
                style={{ fontSize: "1.5rem", fontWeight: "bold" }}
              >
                Age:
              </FormLabel>
              <Input
                type="text"
                size={"lg"}
                id="age"
                placeholder="Enter Age"
                autoComplete="off"
                onChange={(e) => {
                  setAge(+e.target.value);
                }}
                required
                aria-invalid={validName ? "false" : "true"}
                aria-describedby="uidnote"
              ></Input>

              <FormLabel
                color="black"
                className={`${styles.Nunito}`}
                style={{ fontSize: "1.5rem", fontWeight: "bold", marginTop: "1rem" }}
              >
                Password:
                <span className={validPwd ? `${styles.valid}` : `${styles.hide}`}>
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ color: "green" }}
                  ></FontAwesomeIcon>
                </span>
                <span className={validPwd || !pwd ? `${styles.hide}` : `${styles.invalid}`}>
                  <FontAwesomeIcon
                    icon={faX}
                    style={{ color: "red" }}
                  ></FontAwesomeIcon>
                </span>
              </FormLabel>
              <InputGroup>
                <Input
                  type={show ? "text" : "password"}
                  size={"lg"}
                  placeholder="Enter Password"
                  id="password"
                  onChange={(e) => {
                    setPwd(e.target.value);
                  }}
                  required
                  aria-invalid={validPwd ? "false" : "true"}
                  aria-describedby="pwdnote"
                  onFocus={() => setPwdFocus(true)}
                  onBlur={() => setPwdFocus(false)}
                ></Input>
                <InputRightElement w="23%" marginBottom={2}>
                  <Button
                    h="2.2rem"
                    variant="outline"
                    size="md"
                    bgColor={show ? "tomato" : "green.300"}
                    _hover={show ? { backgroundColor: "tomato" } : { backgroundColor: "lightgreen" }}
                    onClick={handleShowPasswordClick}
                    leftIcon={
                      <FontAwesomeIcon icon={show ? faEyeSlash : faEye} />
                    }
                    style={{ marginBottom: "1rem", marginTop: "1.4rem" }}
                  >
                    {show ? "Hide" : "show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <p
                id="pwdnote"
                className={pwdFocus && !validPwd ? `${styles.instructions}` : `${styles.offscreen}`}
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                8 to 15 characters.
                <br />
                must include at least one uppercase and lowercase letter and a
                number and a special character.
                <br />
                Allowed special characters:{" "}
                <span aria-label="exclamation mark">!</span>
                <span aria-label="at symbol">@</span>
                <span aria-label="hashtag">#</span>
                <span aria-label="dollar sign">$</span>
                <span aria-label="percent">%</span>
              </p>
              <FormLabel
                color="black"
                className={`${styles.Nunito}`}
                style={{ fontSize: "1.5rem", fontWeight: "bold", marginTop: "1rem" }}
              >
                Confirm Password:
                <span className={validMatch && matchPwd ? `${styles.valid}` : `${styles.hide}`}>
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ color: "green" }}
                  ></FontAwesomeIcon>
                </span>
                <span className={validMatch || !matchPwd ? `${styles.hide}` : `${styles.invalid}`}>
                  <FontAwesomeIcon
                    icon={faX}
                    style={{ color: "red" }}
                  ></FontAwesomeIcon>
                </span>
              </FormLabel>
              <InputGroup>
                <Input
                  type={confirmShow ? "text" : "password"}
                  size={"lg"}
                  id="confirm_pwd"
                  placeholder="Enter Password"
                  onChange={(e) => {
                    setMatchPwd(e.target.value);
                  }}
                  required
                  aria-invalid={validMatch ? "false" : "true"}
                  aria-describedby="confirmnote"
                  onFocus={() => setMatchFocus(true)}
                  onBlur={() => setMatchFocus(false)}
                ></Input>
                <InputRightElement w="23%" marginBottom={2}>
                  <Button
                    h="2.2rem"
                    variant="outline"
                    size="md"
                    bgColor={confirmShow ? "tomato" : "green.300"}
                    _hover={confirmShow ? { backgroundColor: "tomato" } : { backgroundColor: "lightgreen" }}
                    onClick={handleConfirmShowPasswordClick}
                    leftIcon={
                      <FontAwesomeIcon
                        icon={confirmShow ? faEyeSlash : faEye}
                      />
                    }
                    style={{ marginBottom: "1rem", marginTop: "1.4rem" }}
                  >
                    {confirmShow ? "Hide" : "show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <p
                id="confirmnote"
                className={
                  matchFocus && !validMatch ? `${styles.instructions}` : `${styles.offscreen}`
                }
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                must match the first password input field value.
              </p>
              <Button
                type="submit"
                w="100%"
                variant="solid"
                className={`${styles.SignUp_btn}`}
                isDisabled={
                  !validName || !validPwd || !validMatch ? true : false
                }
              >
                Register
              </Button>
            </FormControl>
          </form>
          <p className={`${styles.Nunito}`} style={{ display: "flex", flexDirection: "column", alignItems: "center", fontSize: "1.1rem", marginTop: "1rem" }}>
            Already Registered?
            <br />
            <span className={`${styles.line}`}>
              <ChakraLink
                as={ReactRouterLink}
                to="/login"
                style={{ color: "blue" }}
              >
                Login
              </ChakraLink>
            </span>
          </p>
        </section>
      )}
    </>
  )
}

export default Register;