export const summaryDataReference = {
  headers: ["Site", "Count", "Amount", "Hawker Charges", "Total"],

  data: [
    {
      site: "GODOWN",
      count: 15,
      amount: 5000,
      hawker_charges: 0,
      total: 5000,
    },
    {
      site: "LOAD -1",
      count: 150,
      amount: 50000,
      hawker_charges: 5000,
      total: 55000,
    },
    {
      site: "LOAD-2",
      count: 25,
      amount: 6000,
      hawker_charges: 2000,
      total: 8000,
    },
    {
      site: "LOAD-3",
      count: 50,
      amount: 12000,
      hawker_charges: 200,
      total: 12200,
    },
  ],
};

let data = [];

summaryDataReference.data.forEach((x) => data.push(Object.values(x)));

const summaryData = {
  headers: summaryDataReference.headers,
  data,
};

export default summaryData;
