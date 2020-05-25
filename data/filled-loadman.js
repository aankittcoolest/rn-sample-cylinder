const filledLoadmanDataReference = {
  headers: ["CHALLAN NO.", "TYPE", "14.2", "19", "5 (D)", "5 (C)"],
  data: {
    details: [
      {
        challanNumber: "#ABC1234",
        type: "ISSUE",
        size1Count: "20",
        size2Count: "2",
        size3Count: "0",
        size4Count: "40",
      },
      {
        challanNumber: "#ABC1234",
        type: "ISSUE",
        size1Count: "20",
        size2Count: "2",
        size3Count: "0",
        size4Count: "40",
      },
      {
        challanNumber: "#ABC1234",
        type: "ISSUE",
        size1Count: "20",
        size2Count: "2",
        size3Count: "0",
        size4Count: "40",
      },
      {
        challanNumber: "#ABC1234",
        type: "RECEIVE",
        size1Count: "20",
        size2Count: "2",
        size3Count: "0",
        size4Count: "40",
      },
      {
        challanNumber: "",
        type: "NC ISSUE",
        size1Count: "20",
        size2Count: "2",
        size3Count: "0",
        size4Count: "40",
      },
      {
        challanNumber: "",
        type: "NC ISSUE",
        size1Count: "20",
        size2Count: "2",
        size3Count: "0",
        size4Count: "40",
      },
    ],
    sum: {
      name: "TOTAL",
      type: "",
      size1Sum: "300",
      size2Sum: "22",
      size3Sum: "4",
      size4Sum: "60",
    },
  },
};

let data = [];
filledLoadmanDataReference.data.details.forEach((x) =>
  data.push(Object.values(x))
);

data.push(Object.values(filledLoadmanDataReference.data.sum));

const filledLoadmanData = {
  headers: filledLoadmanDataReference.headers,
  data: data,
};

export default filledLoadmanData;
