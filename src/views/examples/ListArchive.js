import React, { useState, useEffect } from "react";
import {
  Card,
  Container,
  Row,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Col,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import ArchiveService from "../../services/archive";

const ListArchive = (props) => {
  const [msg, setMsg] = useState("");
  const [listArchive, setListArchive] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    retrieveArchive();
  }, []);

  const retrieveArchive = (role) => {
    console.log(role);
    if (role === "" || role === undefined) {
      ArchiveService.getAll()
        .then((res) => {
          console.log("res", res);
          setListArchive(res);
        })
        .catch((err) => {
          console.log("err", err.response.data.message);
          setMsg(err.response.data.message);
        });
    } else if (role === "Admin") {
      ArchiveService.getAllAdmins()
        .then((res) => {
          console.log("res", res);
          setListArchive(res);
        })
        .catch((err) => {
          console.log("err", err.response.data.message);
          setMsg(err.response.data.message);
        });
    } else if (role === "Student") {
      ArchiveService.getAllStudents()
        .then((res) => {
          console.log("res", res);
          setListArchive(res);
        })
        .catch((err) => {
          console.log("err", err.response.data.message);
          setMsg(err.response.data.message);
        });
    } else if (role === "Teacher") {
      ArchiveService.getAllTeachers()
        .then((res) => {
          console.log("res", res);
          setListArchive(res);
        })
        .catch((err) => {
          console.log("err", err.response.data.message);
          setMsg(err.response.data.message);
        });
    } else if (role === "Doc") {
      ArchiveService.getAllDocs()
        .then((res) => {
          console.log("res", res);
          setListArchive(res);
        })
        .catch((err) => {
          console.log("err", err.response.data.message);
          setMsg(err.response.data.message);
        });
    }
  };

  const deleteOneArchive = (id) => {
    ArchiveService.deleteOne(id)
      .then((res) => {
        console.log("res", res);
        retrieveArchive("");
      })
      .catch((err) => {
        console.log("err", err.response.data.message);
        setMsg(err.response.data.message);
      });
  };

  const deleteAllArchives = () => {
    ArchiveService.deleteAll()
      .then((res) => {
        console.log("res", res);
        retrieveArchive("");
        setModal(false)
      })
      .catch((err) => {
        console.log("err", err.response.data.message);
        setMsg(err.response.data.message);
      });
  };

  const toggle = () => {
    setModal(!modal);
  };
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col lg="6">
            <FormGroup>
              <Input
                type="select"
                name="select"
                id="exampleSelect"
                onChange={(e) => {
                  retrieveArchive(e.target.value);
                }}
              >
                <option value={""}>All</option>
                <option value={"Student"}>Student</option>
                <option value={"Teacher"}>Teacher</option>
                <option value={"Admin"}>Admin</option>
                <option value={"Doc"}>Doc</option>
              </Input>
            </FormGroup>
          </Col>
          <Col lg='6'>
            <Button color="danger" onClick={toggle}>Remove All</Button>
          </Col>
        </Row>
        <Row xs={1} md={3} className="g-4">
          {listArchive.map((obj, idx) => (
            <Col key={idx}>
              <Card>
                <CardImg
                  top
                  width="100%"
                  src={`http://localhost:5000/uploads/${obj.picture}`}
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle> {obj.fullName} </CardTitle>
                  <CardSubtitle>{obj.role}</CardSubtitle>
                  <CardText>{obj.description}</CardText>
                  <Button onClick={() => deleteOneArchive(obj._id)}>
                    Delete
                  </Button>
                  <Button onClick={(e) => {props.history.push(`update-archive?id=${obj._id}`);}}>Edit</Button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Modal isOpen={modal} toggle={toggle} >
          <ModalHeader toggle={toggle}>Are you sure?</ModalHeader>
          <ModalBody>
            Are you sure you want to delete all Archives
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={deleteAllArchives}>Yes</Button>{' '}
            <Button color="primary" onClick={toggle}>No</Button>
          </ModalFooter>
        </Modal>
    </>
  );
};

export default ListArchive;
