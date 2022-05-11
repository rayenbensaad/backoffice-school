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
  Label,
} from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.js";
import AuthArchive from "../../services/archive";
import Header from "components/Headers/Header";

const CreateArchive = (props) => {
  const [fullName, setFullName] = useState("");
  const [description, setDescription] = useState("");
  const [role, setRole] = useState("Student");
  const [picture, setPicture] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    const reader = new FileReader(),
    files = picture

  console.log(files[0])
  const data = new FormData()
  data.append('file', files[0])
  data.append('fullName', fullName)
  data.append('description', description)
  data.append('role', role)

    setLoading(true);
    // const data = {
    //   fullName,
    //   description,
    //   role,
    //   picture
    // }
    
    AuthArchive.create(data)
        .then((res) => {
          console.log("res", res);
          // props.history.push("/index");
          setLoading(false);
        })
        .catch((err) => {
          console.log("err", err);
          setMsg(err);
          setLoading(false);
        });
  };

  const onChangePicture = e => {
    const reader = new FileReader(),
      files = e.target.files

    console.log(files[0])
    const data = new FormData()
    data.append('image', files[0])
    console.log(data)

  }

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
                    <h3 className="mb-0">Create Archive</h3>
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
                          >
                            Full Name
                          </label>
                          <Input
                            className="form-control-alternative"
                            placeholder="Full Name"
                            type="text"
                            onChange={(e) => setFullName(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            Description
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-first-name"
                            placeholder="First name"
                            type="textarea"
                            onChange={(e) => setDescription(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                        <Label className="form-control-label" for="exampleSelect">Select</Label>
                        <Input type="select" name="select" id="exampleSelect" onChange={(e) => {setRole(e.target.value)}}>
                          <option value={'Student'}>Student</option>
                          <option value={'Teacher'}>Teacher</option>
                          <option value={'Admin'}>Admin</option>
                          <option value={'Doc'}>Doc</option>
                        </Input>
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                      <FormGroup>
                      <Label className="form-control-label" for="exampleFile"> Picture </Label>
                      <Input type="file" name="file" id="exampleFile" onChange={(e) => setPicture(e.target.files)}/>
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

export default CreateArchive;
