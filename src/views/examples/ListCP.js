/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import {
  Badge,
  Card,
  CardHeader,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Table,
  Container,
  Row,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import AuthService from "../../services/auth";

const ListCP = (props) => {
  const [msg, setMsg] = useState("");
  const [listCP, setListCP] = useState([]);

  useEffect(() => {
    retrieveCP();
  }, []);

  const retrieveCP = () => {
    AuthService.getAll("cadre_pedagogique")
      .then((res) => {
        console.log("res", res);
        setListCP(res);
      })
      .catch((err) => {
        console.log("err", err.response.data.message);
        setMsg(err.response.data.message);
      });
  };

  const deleteOneCP = (id) => {
    AuthService.deleteOne(id)
      .then((res) => {
        console.log("res", res);
        retrieveCP()
      })
      .catch((err) => {
        console.log("err", err.response.data.message);
        setMsg(err.response.data.message);
      });
  };

  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Card tables</h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {listCP.map((obj) => (
                    <tr>
                      <td>{obj.firstName}</td>
                      <td> {obj.lastName}</td>
                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          <i className="bg-warning" />
                          {obj.email}
                        </Badge>
                      </td>
                      <td className="text-right">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light"
                            href="#pablo"
                            role="button"
                            size="sm"
                            color=""
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem
                              onClick={(e) => deleteOneCP(obj._id)}
                            >
                              Delete
                            </DropdownItem>
                            <DropdownItem
                              onClick={(e) => {props.history.push("/index");}}
                            >
                              Update
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default ListCP;
