import { Button, Col, Container, Row, Label, FormGroup } from "reactstrap";
import { userSchemaValidation } from "../Validation/UserValidation";
import logo from "../Images/logo-t.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addUser, deleteUser, updateUser } from "../Features/UserSlice";
import { useNavigate } from "react-router-dom";

import { registerUser } from "../Features/UserSlice";

const Register = () => {
  const userList = useSelector((state) => state.users.value);
  //For form validation using react-hook-form

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const {
    register,
    handleSubmit, // Submit the form when this is called
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchemaValidation), //Associate yourYup validation schema using the resolver
  });
  // Handle form submission
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    try {
      const userData = {
        name: data.name,
        email: data.email,
        password: data.password,
      };

      console.log("Form Data", data); // You can handle the form submission here
      alert("Validation all good.");
      dispatch(registerUser(userData));
      navigate("/login");
    } catch (error) {
      console.log("Error.");
    }
  };
  const handleDelete = (email) => {
    dispatch(deleteUser(email));
  };

  const handleUpdate = (email) => {
    const userData = {
      name: name, //create an object with the values from the state variables
      email: email,
      password: password,
    };
    dispatch(updateUser(userData)); //use the useDispatch hook to dispatch an action, passing as parameter the userData
  };

  return (
    <Container fluid>
      <Row>
        <Col md={6} className="center">
          <img src={logo} className="center" />
        </Col>
      </Row>

      <Row>
        <Col md={6} className="center">
          <form className="div-form" onSubmit={handleSubmit(onSubmit)}>
            <section className="form">
              <div className="form-group">
                <FormGroup>
                  <Label for="name">Name</Label>

                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    placeholder="Enter your name..."
                    {...register("name", {
                      onChange: (e) => setname(e.target.value),
                    })}
                  />
                  <p className="error">{errors.name?.message}</p>
                </FormGroup>
              </div>

              <div className="form-group">
                <FormGroup>
                  <Label for="name">Email</Label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="Enter your email..."
                    {...register("email", {
                      onChange: (e) => setemail(e.target.value),
                    })}
                  />
                  <p className="error">{errors.email?.message}</p>
                </FormGroup>
              </div>
              {/*----------------------------------------------------------------------
              <div className="form-group">
                <input
                  type="text"
                  id="age1"
                  className="form-control"
                  placeholder="Enter your age1..."
                  {...register("age1")}
                />
                <p className="error">{errors.age1?.message}</p>
              </div>

              <div className="form-group">
                <input
                  type="text"
                  id="age2"
                  className="form-control"
                  placeholder="Enter your age2..."
                  {...register("age2")}
                />
                <p className="error">{errors.age2?.message}</p>
              </div>

              <div className="form-group">
                <input
                  type="text"
                  id="salary"
                  className="form-control"
                  placeholder="Enter your salary..."
                  {...register("salary")}
                />
                <p className="error">{errors.salary?.message}</p>
              </div>

              -----------------------------------------------------------------------------*/}

              <div className="form-group">
                <FormGroup>
                  <Label for="name">Password</Label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    placeholder="Enter your password..."
                    {...register("password", {
                      onChange: (e) => setpassword(e.target.value),
                    })}
                  />
                  <p className="error">{errors.password?.message}</p>
                </FormGroup>
              </div>

              <div className="form-group">
                <FormGroup>
                  <Label for="name">Confirm Password</Label>

                  <input
                    type="password"
                    id="confirmPassword"
                    className="form-control"
                    placeholder="Confirm your password..."
                    {...register("confirmPassword", {
                      onChange: (e) => setconfirmPassword(e.target.value),
                    })}
                  />
                  <p className="error">{errors.confirmPassword?.message}</p>
                </FormGroup>
              </div>

              <div className="form-group">
                <Button color="primary" className="button">
                  Register
                </Button>
              </div>
            </section>
          </form>
        </Col>

        <Col className="columndiv1" lg="6"></Col>
      </Row>

      <Row>
        <Col md={6}>
          {/*List of Users
          <table>
            <tbody>
              {userList.map((user) => (
                <tr key={user.email}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td>
                    <Button onClick={() => handleDelete(user.email)}>
                      Delete User
                    </Button>

                    <Button onClick={() => handleUpdate(user.email)}>
                      Update User
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>*/}
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
