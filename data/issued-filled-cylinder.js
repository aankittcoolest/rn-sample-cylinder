const issuedFilledCylinderReference = {
  headers: ["", "14.2", "19", "5 (D)", "4 (C)"],
  data: {
    loadmanDeliveries: [
      {
        name: "LOAD-1",
        size1Count: "540",
        size2Count: "0",
        size3Count: "0",
        size4Count: "0",
      },
      {
        name: "LOAD-2",
        size1Count: "300",
        size2Count: "0",
        size3Count: "0",
        size4Count: "0",
      },
    ],
    hawkerDeliveries: [
      {
        name: "Rakesh Kumar",
        size1Count: "5",
        size2Count: "0",
        size3Count: "0",
        size4Count: "0",
      },
      {
        name: "Ram Singh",
        size1Count: "5",
        size2Count: "0",
        size3Count: "0",
        size4Count: "0",
      },
    ],
    total: {
      name: "TOTAL",
      size1Count: "857",
      size2Count: "0",
      size3Count: "0",
      size4Count: "0",
    },
  },
};

let data = [];
data.push(["LOADMAN"]);
issuedFilledCylinderReference.data.loadmanDeliveries.forEach((x) =>
  data.push(Object.values(x))
);

data.push(["HAWKER"]);
issuedFilledCylinderReference.data.hawkerDeliveries.forEach((x) =>
  data.push(Object.values(x))
);
data.push([""]);
data.push(Object.values(issuedFilledCylinderReference.data.total));

const issuedFilledCylinderData = {
  headers: issuedFilledCylinderReference.headers,
  data: data,
};

export default issuedFilledCylinderData;
