import * as React from "react";
import Chip from "@mui/material/Chip";
import "./chips-delete.css";
import { ReactComponent as Plus } from "../../assets/Plus.svg";
import { ReactComponent as Trash } from "../../assets/Trash.svg";

function ChipsDelete({ chipData, edit }) {
  const handleDelete = (chipToDelete) => () => {
    console.log(chipToDelete);
  };

  return (
    <div className="chips-delete">
      <div className="chips-delete__box">
        {chipData.map((data) => (
          <div key={data.id} className="chips-delete__list">
            <Chip
              deleteIcon={<Trash />}
              label={
                edit ? (
                  <input type="text" defaultValue={data.name} />
                ) : (
                  data.name
                )
              }
              onDelete={handleDelete(data)}
              className="chips-delete__item"
            />
          </div>
        ))}
      </div>
      <div className="chips-delete__add">
        <Plus className="chips-delete__plus" />
      </div>
    </div>
  );
}

export default ChipsDelete;
