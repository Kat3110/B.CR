import React from "react";
import CSVReader from "react-csv-reader";

export default function CsvUploader({ inputRef, handleData }) {
  const papaparseOptions = {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    transformHeader: (header) => header.toLowerCase().replace(/\W/g, "_"),
  };

  return (
    <CSVReader
      cssClass="csv-reader-input"
      parserOptions={papaparseOptions}
      inputId="csvReader"
      inputName="csvReader"
      inputRef={inputRef}
      inputStyle={{ display: "none" }}
      onFileLoaded={handleData}
    />
  );
}
