const receivedEmptyCylinderReference = {
  headers: ["", "14.2", "19", "5 (D)", "4 (C)"],
  data: {
    loadmanDeliveries: [
      {
        name: "LOAD-1",
        size1Count: "540/200",
        size2Count: "0/0",
        size3Count: "0/0",
        size4Count: "0/0",
      },
      {
        name: "LOAD-2",
        size1Count: "300/200",
        size2Count: "0/0",
        size3Count: "0/0",
        size4Count: "0/0",
      },
    ],
    hawkerDeliveries: [
      {
        name: "Rakesh Kumar",
        size1Count: "5/3",
        size2Count: "0/0",
        size3Count: "0/0",
        size4Count: "0/0",
      },
      {
        name: "Ram Singh",
        size1Count: "5/1",
        size2Count: "0/0",
        size3Count: "0/0",
        size4Count: "0/0",
      },
    ],
    total: {
      name: "TOTAL",
      size1Count: "857/600",
      size2Count: "0/0",
      size3Count: "0/0",
      size4Count: "0/0",
    },
  },
};

let data = [];
data.push(["LOADMAN"]);
receivedEmptyCylinderReference.data.loadmanDeliveries.forEach((x) =>
  data.push(Object.values(x))
);

data.push(["HAWKER"]);
receivedEmptyCylinderReference.data.hawkerDeliveries.forEach((x) =>
  data.push(Object.values(x))
);
data.push([""]);
data.push(Object.values(receivedEmptyCylinderReference.data.total));

const receivedEmptyCylinderData = {
  headers: receivedEmptyCylinderReference.headers,
  data: data,
};

export default receivedEmptyCylinderData;
