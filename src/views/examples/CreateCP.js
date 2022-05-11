import React, { useState } from "react";
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
import Header from "components/Headers/Header";

const CreateCP = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conformPassword, setConformPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    setLoading(true);
    const data = {
      email,
      password,
      conformPassword,
      firstName,
      lastName,
      role: "cadre_pedagogique",
    };
    
    if(password === conformPassword) {
        AuthService.register(data)
        .then((res) => {
          console.log("res", res);
          props.history.push("/index");
          setLoading(false);
        })
        .catch((err) => {
          console.log("err", err.response.data.message);
          setMsg(err.response.data.message);
          setLoading(false);
        });
    }
    else {
        setMsg('password and confirm password must be match');
        setLoading(false);
    }
  };

  return (
    <>
    <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-1" xl="12">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Create Cadre Pedagogique</h3>
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
                            onChange={(e) => setEmail(e.target.value)}
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
                            onChange={(e) => setFirstName(e.target.value)}
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
                            onChange={(e) => setLastName(e.target.value)}
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
                            onChange={(e) => setPassword(e.target.value)}
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
                            onChange={(e) => setConformPassword(e.target.value)}
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

export default CreateCP;
