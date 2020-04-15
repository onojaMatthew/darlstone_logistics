import React from "react";
import { Input } from "antd";
import { Row, Col } from "reactstrap";


// const { TextArea } = Input;

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
  errors
  // selectAfter,
}) => {
  return(
    <div>
      <Row>
        <Col xs="12" xl="4">
          <div className="mb-3">
            <label htmlFor="packInf">Package Information</label>
            <Input 
              placeholder="Package Information"
              value={packageInfo}
              id="packInf"
              onChange={(e) => setPackageInfo(e.target.value)}
            />
            <span style={{ color: "#ff0000" }}>{errors[packageInfo]}</span>
          </div>
        </Col>
        <Col xs="12" xl="4">
          <div className="mb-3">
            <label htmlFor="num">Numer of Pieces</label>
            <Input 
              placeholder="Numer of Pieces"
              value={numOfPieces}
              id="num"
              onChange={(e) => setNumOfPieces(e.target.value)}
            />
            <span style={{ color: "#ff0000" }}>{errors[numOfPieces]}</span>
          </div>
        </Col>
        <Col xs="12" xl="4">
          <div className="mb-3">
            <label htmlFor="weight">Weight</label>
            <Input 
              placeholder="Contact last name"
              value={weight}
              id="weight"
              onChange={(e) => setWeight(e.target.value)}
              // addonAfter={selectAfter}
            />
            <span style={{ color: "#ff0000" }}>{errors[weight]}</span>
          </div>
        </Col>
      </Row>
      
      
      <Row>
       
        <Col xs="12" xl="6">
          <div className="mb-3">
            <label htmlFor="dim">Dimension</label>
            <Input
              id="dim"
              type="text"
              placeholder="Dimension"
              value={dimension}
              onChange={(e) => setDimension(e.target.value)}
            />
            <span style={{ color: "#ff0000" }}>{errors[dimension]}</span>
          </div>
        </Col>
        <Col xs="12" xl="6">
        <div className="mb-3">
        <label htmlFor="special">Special Instruction</label>
        <Input 
          placeholder="Special Instruction"
          value={specialInstruction}
          id="special"
          onChange={(e) => setSpecialInstruction(e.target.value)}
        />
        <span style={{ color: "#ff0000" }}>{errors[specialInstruction]}</span>
      </div>
        </Col>
      </Row>
     
    </div>
  )
}

export default PackageInfo;