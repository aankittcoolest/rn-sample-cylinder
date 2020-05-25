import React from "react";
import PDFReader from "rn-pdf-reader-js";

const ViewPdfScreen = (props) => {
  return (
    <PDFReader
      source={{
        uri: "http://gahp.net/wp-content/uploads/2017/09/sample.pdf",
      }}
    />
  );
};

export default ViewPdfScreen;
