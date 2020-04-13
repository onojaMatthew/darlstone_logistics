export const shipmentTotal = (unit, weight, distance) => {
  let charge;
  if (unit === "kg") {
    charge = weight * 1500;
  } else if (unit === "tons") {
    chart = weight * 22960;
  }

  return charge;
}