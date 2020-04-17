import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getShipments } from "../../store/actions/action_shipment";
import { Table, Row, Col, Card, CardBody } from 'reactstrap';
import { Spin } from "antd";
import { Link } from "react-router-dom";


const Shipments = (props) => {
  const shipment = useSelector(state => state.shipment);
  const dispatch = useDispatch();
  const [errors, setErrors ] = useState("");

  useEffect(() => {
    dispatch(getShipments())
  }, []);

  console.log(shipment);
  const dataSource = shipment.shipments && shipment.shipments;
  return (
    <div>
      <Row className="justify-content-center">
        
        <Col xs="10" xl="11">
          <Card>
            <CardBody>
            {shipment.getLoading === true ? (
              <div className="text-center">
                <Spin tip="Loading..." />
              </div>
            ) : (
              <Table hover>
                <thead>
                  <tr>
                    <th>S/N</th>
                    <th>Company Name</th>
                    <th>Contact Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Tracking Number</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {dataSource && dataSource.length > 0 ? dataSource.map((data, i) => (
                    <tr key={data._id}>
                      <th scope="row">{i + 1}</th>
                      <td>{data.companyName}</td>
                      <td>{data.contactFName} {data.contactLName}</td>
                      <td>{data.email}</td>
                      <td>{data.phone}</td>
                      <td>{data.trackingNumber}</td>
                      <td>{data.delivered === false ? "Pending" : "Delivered"}</td>
                      <td><Link to={`${props.match.url}/${data._id}`}>View</Link></td>
                    </tr>
                  )) : "No records found"}
                  
                
                </tbody>
              </Table>
            )}
            </CardBody>
          </Card>
        </Col>
      </Row>
      
    </div>
  )
}

export default Shipments;