import React from "react";
import { AddCsv } from "./addCsv";
import CsvUploader from "components/csvUploader";
import { isNull, isEmpty } from "lodash";

export default function AddCsvContainer({ handleCsv }) {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState(null);
  const inputRef = React.useRef(null);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const inputClick = () => {
    inputRef.current.click();
  };

  const handleData = (data) => {
    setData(data);
  };

  React.useEffect(() => {
    if (!isNull(data) && !isEmpty(inputRef.current.files)) {
      const filename = inputRef.current.files[0].name;
      handleCsv(filename, data);
      handleClose();
      inputRef.current.value = "";
    }
  }, [data, handleCsv]);

  return (
    <>
      <AddCsv
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        inputClick={inputClick}
        handleData={handleData}
      />
      <CsvUploader inputRef={inputRef} handleData={handleData} />
    </>
  );
}
