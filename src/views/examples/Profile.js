import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.js";
import AuthService from "../../services/auth";

const Profile = (props) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("userData")))
  }, []);


  const handleRegister = (e) => {
    e.preventDefault();

    setLoading(true);
    // const data = {
    //   email,
    //   password,
    //   conformPassword,
    //   firstName,
    //   lastName,
    //   role: "cadre_pedagogique",
    // };
    
    // if(password === conformPassword) {
    //     AuthService.register(data)
    //     .then((res) => {
    //       console.log("res", res);
    //       props.history.push("/index");
    //       setLoading(false);
    //     })
    //     .catch((err) => {
    //       console.log("err", err.response.data.message);
    //       setMsg(err.response.data.message);
    //       setLoading(false);
    //     });
    // }
    // else {
    //     setMsg('password and confirm password must be match');
    //     setLoading(false);
    // }

    AuthService.updateProfile(user)
        .then((res) => {
          console.log("res", res);
          // props.history.push("/index");
          setLoading(false);
          localStorage.clear();
          props.history.push("/auth/login");
        })
        .catch((err) => {
          console.log("err", err.response.data.message);
          setMsg(err.response.data.message);
          setLoading(false);
        });
  };

  return (
    <>
      <UserHeader />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
            <Card className="card-profile shadow">
              <Row className="justify-content-center">
                <Col className="order-lg-2" lg="3">
                  <div className="card-profile-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={
                          require("../../assets/img/profile.png")
                            .default
                        }
                      />
                    </a>
                  </div>
                </Col>
              </Row>
              <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
              </CardHeader>
              <CardBody className="pt-0 pt-md-4">
                <Row>
                  <div className="col">
                    <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                      <div>
                        <span className="heading">22</span>
                        <span className="description">Friends</span>
                      </div>
                      <div>
                        <span className="heading">10</span>
                        <span className="description">Photos</span>
                      </div>
                      <div>
                        <span className="heading">89</span>
                        <span className="description">Comments</span>
                      </div>
                    </div>
                  </div>
                </Row>
                <div className="text-center">
                  <hr className="my-4" />
                  <p>
                    Ryan — the name taken by Melbourne-raised, Brooklyn-based
                    Nick Murphy — writes, performs and records all of his own
                    music.
                  </p>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col className="order-xl-1" xl="8">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">My account</h3>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
              <Form onSubmit={handleRegister}>
                  <h6 className="heading-small text-muted mb-4">Information</h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Email address
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-email"
                            placeholder="jesse@example.com"
                            type="email"
                            defaultValue={user?.email}
                            onChange={(e) => setUser({...user, email:e.target.value})}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            First name
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-first-name"
                            placeholder="First name"
                            type="text"
                            defaultValue={user?.firstName}
                            onChange={(e) => setUser({...user, firstName:e.target.value})}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Last name
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-last-name"
                            placeholder="Last name"
                            type="text"
                            defaultValue={user?.lastName}
                            onChange={(e) => setUser({...user, lastName:e.target.value})}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />
                  {/* Address */}
                  <h6 className="heading-small text-muted mb-4">
                    Security Information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-password"
                          >
                            Password
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-password"
                            placeholder="*****"
                            type="password"
                            // onChange={(e) => setPassword(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-confirm-password"
                          >
                            Confirm Password
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-confirm-password"
                            placeholder="*****"
                            type="password"
                            // onChange={(e) => setConformPassword(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Button className="my-4" color="primary" type="submit">
                        Submit
                        {loading && (
                          <span className="spinner-border spinner-border-sm"></span>
                        )}
                      </Button>
                    </Row>
                  </div>
                </Form>
                {msg && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {msg}
                </div>
              </div>
            )}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
