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
  Label,
} from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.js";
import ArchiveService from "../../services/archive";

const UpdateArchive = (props) => {
  const [archive, setArchive] = useState(null);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  console.log(window.location.search.split('=')[1]);

  useEffect(() => {
    retrieveOne();
  }, []);


  const handleRegister = (e) => {
    e.preventDefault();
console.log(archive);
ArchiveService.update(window.location.search.split('=')[1], archive)
.then((res) => {
  console.log("res", res);
  setLoading(false);
  localStorage.clear();
  props.history.push("/auth/login");
})
.catch((err) => {
  console.log("err", err);
  setMsg(err);
  setLoading(false);
});
  };

  const retrieveOne = () => {

    ArchiveService.getOne(window.location.search.split('=')[1])
        .then((res) => {
          console.log("res", res);
          setArchive(res)
        })
        .catch((err) => {
          console.log("err", err);

        });
  }

  return (
    <>
      <UserHeader />
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
                            defaultValue={archive?.fullName}
                            type="text"
                            onChange={(e) => setArchive({...archive, fullName:e.target.value})}
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
                            defaultValue={archive?.description}
                            type="textarea"
                            onChange={(e) => setArchive({...archive, description:e.target.value})}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                        <Label className="form-control-label" for="exampleSelect">Select</Label>
                        <Input type="select" name="select" id="exampleSelect" value={archive?.role} onChange={(e) => setArchive({...archive, role:e.target.value})}>
                          <option value={'Student'}>Student</option>
                          <option value={'Teacher'}>Teacher</option>
                          <option value={'Admin'}>Admin</option>
                          <option value={'Doc'}>Doc</option>
                        </Input>
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

export default UpdateArchive;
