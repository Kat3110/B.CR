import * as React from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import { ReactComponent as DeleteIcon } from "../../assets/DeleteIcon.svg";
import "./chip-member.css";

export default function ChipMember({ chipData, handleDelete }) {
  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        flexWrap: "wrap",
        listStyle: "none",
        p: 0,
        m: 0,
        gap: "10px",
      }}
      component="ul"
    >
      {chipData.map((data) => {
        return (
          <Chip
            key={data.key}
            className="chip-member"
            deleteIcon={<DeleteIcon />}
            label={
              data.firstWord ? (
                <>
                  <span className="chip-member__first-word">
                    {data.firstWord}
                  </span>
                  {data.label}
                </>
              ) : (
                data.label
              )
            }
            onDelete={() => handleDelete(data)}
          />
        );
      })}
    </Paper>
  );
}
