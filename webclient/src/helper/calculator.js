
export const shipmentTotal = (pieces, weight) => {
  // charge = weight * 22960; in tons
  
  const charge = pieces * weight * 1500; // in kg
  return charge;
}