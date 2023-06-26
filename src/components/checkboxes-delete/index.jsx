import * as React from "react";
import "./checkboxes-delete.css";
import { ReactComponent as Plus } from "../../assets/Plus.svg";
import { Stage } from "./dndComponents";

function CheckboxesDelete(props) {
  return (
    <div className="checkboxes-delete">
      <div className="checkboxes-delete__box">
        {props.data.map((data) => {
          return (
            <Stage
              key={data.value}
              id={data.id}
              data={data}
              equals={props.equals}
              index={data.value}
              handleEdit={props.handleEdit}
              handleDelete={props.handleDelete}
              moveStage={props.moveStage}
            />
          );
        })}
      </div>
      <div onClick={props.handleCreate} className="checkboxes-delete__add">
        <Plus className="checkboxes-delete__plus" />
      </div>
    </div>
  );
}

export default CheckboxesDelete;
