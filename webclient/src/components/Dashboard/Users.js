import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardBody, Col, Row, Table } from "reactstrap";
import { getUsers } from "../../store/actions/action_user";
import { Spin } from "antd";


const Users = () => {
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();
  const [ message, setMessage ] = useState("");

  useEffect(() => {
    dispatch(getUsers());
  }, [ dispatch ]);

  console.log(users)
  return (
    <div>
      <Row className="justify-content-center">
        <Col xs="10" xl="11">
          {users.getLoading === true ? (
            <div className="text-center">
              <Spin tip="Loading..." />
            </div>
          ) : (
            <Card>
              <CardBody>
                <Table className="table-hovered">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Role</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                  {users.users ? users.users.map(user => (
                    <tr key={user._id}>
                      <td>{user.fullname}</td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
                      <td>{user.role}</td>
                      
                    </tr>
                  )) : 
                    <div className="text-center">
                      <p style={{
                        fontSize: 24
                      }}>No records found</p>
                    </div>
                  }
                  </tbody>
                </Table>
                
              </CardBody>
            </Card>
          )}
          <Row>
            <Col xs="12" xl="12">

            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default Users;