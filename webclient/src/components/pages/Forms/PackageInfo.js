import React from "react";
import { Input } from "antd";

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
      <div className="mb-3">
        <label htmlFor="packInf">Package Information</label>
        <Input 
          placeholder="Company name"
          value={packageInfo}
          id="packInf"
          onChange={(e) => setPackageInfo(e.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="num">Number of Pieces</label>
        <Input 
          placeholder="Number of pieces"
          value={numOfPieces}
          id="num"
          onChange={(e) => setNumOfPieces(e.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="weight">Weight</label>
        <Input 
          placeholder="Weight"
          value={weight}
          id="weight"
          onChange={(e) => setWeight(e.value)}
        />
      </div>
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
      <div className="mb-3">
        <label htmlFor="instruction">Special Instruction</label>
        <Input 
          placeholder="Special instruction"
          value={specialInstruction}
          id="instruction"
          onChange={(e) => setSpecialInstruction(e.value)}
        />
      </div>
    </div>
  )
}

export default PackageInfo;