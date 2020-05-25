const challanDataReference = {
  headers: ["ITEM", "QUANTITY"],
  data: [
    {
      item_name: "14.2 kg",
      quantity: "5",
    },
    {
      item_name: "5.00 Domestic kg",
      quantity: "10",
    },
    {
      item_name: "19.00 kg",
      quantity: "5",
    },
  ],
};

let data = [];
challanDataReference.data.forEach((x) => data.push(Object.values(x)));

let challanData = {
  headers: challanDataReference.headers,
  data,
};

export default challanData;
