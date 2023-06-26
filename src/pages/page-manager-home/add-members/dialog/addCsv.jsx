import React from "react";
import "./add-csv.css";
import Button from "components/button";
import GroupButton from "components/group-button";
import DialogCsv from "components/dialog-csv";
import CsvUploader from "components/csvUploader";
import { CSVLink } from "react-csv";

export function AddCsv({ open, handleOpen, handleClose, inputClick }) {
  return (
    <DialogCsv
      open={open}
      handleOpen={handleOpen}
      handleClose={handleClose}
      title={
        <div className="dialog-csv__title">
          Upload CSV file for member’s data
        </div>
      }
      trigger={<Button size="s" text="Add CSV" color="black" />}
      content={
        <>
          <div className="dialog-csv__box">
            <p className="dialog-csv__subtitle">
              After downloading the{" "}
              <CSVLink
                filename="addMember.csv"
                headers={[
                  { label: "Name", key: "name" },
                  { label: "Nation", key: "nation" },
                  { label: "ID", key: "id" },
                  { label: "Password", key: "password" },
                  { label: "Company", key: "company" },
                  { label: "Position", key: "position" },
                  { label: "Role", key: "role" },
                ]}
                data={[]}
              >
                sample file (CSV)
              </CSVLink>
              , fill it out according to the form and upload it.
              <br />
              All existing data are not replaced after uploading. Added only for
              new data.
            </p>
            <GroupButton
              textTwo="Find"
              onClick={inputClick}
              close={handleClose}
            />
            <CsvUploader />
          </div>
        </>
      }
    />
  );
}
