import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
//import p1 from "../Images/loginImage.jpg";
import logo from "../Images/logo-t.png";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Features/UserSlice";

const Login = () => {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.users.user);
  const isSuccess = useSelector((state) => state.users.isSuccess);
  const isError = useSelector((state) => state.users.isError);

  //function that will be invoked when the user clicks the login button;
  const handleLogin = () => {
    const userData = {
      email,
      password,
    };
    dispatch(login(userData));
  };

  useEffect(() => {
    if (isError) {
      navigate("/login");
    }
    if (isSuccess) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [user, isError, isSuccess]);

  //dispatch a login action from the user slice.

  return (
    <Container>
      <Form>
        <Row>
          <Col md={3}>
            <img src={logo} className="logo" />
          </Col>
        </Row>

        <Row>
          <Col md={3}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                id="email"
                name="email"
                placeholder="Enter Email..."
                type="email"
                onChange={(e) => setemail(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col md={3}>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                id="pssword"
                name="password"
                placeholder="Enter Password..."
                type="password"
                onChange={(e) => setpassword(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col md={3}>
            <Button
              className="button"
              color="primary"
              onClick={() => handleLogin()}
            >
              Login
            </Button>
            <p className="smalltext">
              No Account? <Link to="/register">Sign Up now.</Link>
            </p>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default Login;
