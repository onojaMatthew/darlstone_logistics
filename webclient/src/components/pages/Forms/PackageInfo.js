import React from "react";
import { Input } from "antd";
import { Row, Col } from "react";

const { TextArea } = Input;
const PackageInfo = ({
  packageInfo,
  weight,
  dimension,
  specialInstruction,
  numOfPieces,
  setPackageInfo,
  setWeight,
  setNumOfPieces,
  setDimension,
  setSpecialInstruction,
}) => {
  return(
    <div>
      <Row>
        <Col xs="12" xl="6">
          <div className="mb-3">
            <label htmlFor="packInf">Package Information</label>
            <Input
              type="text"
              placeholder="Company name"
              value={packageInfo}
              id="packInf"
              onChange={(e) => setPackageInfo(e.value)}
            />
          </div>
        </Col>
        <Col xs="12" xl="6">
          <div className="mb-3">
            <label htmlFor="num">Number of Pieces</label>
            <Input 
              type="number"
              placeholder="Number of pieces"
              value={numOfPieces}
              id="num"
              onChange={(e) => setNumOfPieces(e.value)}
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs="12" xl="6">
          <div className="mb-3">
            <label htmlFor="weight">Weight</label>
            <Input 
              type="text"
              placeholder="Weight"
              value={weight}
              id="weight"
              onChange={(e) => setWeight(e.value)}
            />
          </div>
        </Col>
        <Col xs="12" xl="6">
          <div className="mb-3">
            <label htmlFor="dimension">Dimension</label>
            <Input
              id="dimension"
              type="text"
              placeholder="Dimension"
              value={dimension}
              onChange={(e) => setDimension(e.value)}
            />
          </div>
        </Col>
      </Row>
      
      <Row>
        <Col xs="12" xl="12">
          <div className="mb-3">
            <label htmlFor="instruction">Special Instruction</label>
            <TextArea 
              placeholder="Special instruction"
              value={specialInstruction}
              id="instruction"
              row="4"
              onChange={(e) => setSpecialInstruction(e.value)}
            />
          </div>
        </Col>
      </Row>
      
    </div>
  )
}

export default PackageInfo;