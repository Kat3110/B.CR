import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import Chip from "@mui/material/Chip";
import { ReactComponent as Trash } from "../../assets/Trash.svg";
import { ReactComponent as Equals } from "../../assets/Equals.svg";
import Checkbox from "../checkbox";
import HTMLTooltip from "../custom-tooltip";

const ItemTypes = {
  STAGE: "stage",
};

export const Stage = ({
  id,
  data,
  equals,
  index,
  handleEdit,
  handleDelete,
  moveStage,
}) => {
  const ref = useRef(null);
  const [{ handlerId }, drop] = useDrop({
    accept: ItemTypes.STAGE,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }

      moveStage(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.STAGE,
    item: () => {
      return { id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0.5 : 1;
  drag(drop(ref));
  return (
    <div ref={ref} style={{ opacity }} data-handler-id={handlerId}>
      <div key={data.value} className="checkboxes-delete__list">
        <Chip
          deleteIcon={<Trash />}
          label={
            <>
              <HTMLTooltip
                content={
                  <Checkbox
                    onChange={(e) => {
                      handleEdit(data.value, e.target.checked, data.label);
                    }}
                    handleText={(e) => {
                      handleEdit(data.value, data.checked, e.target.value);
                    }}
                    text={data.label}
                    checked={data.checked}
                    edit
                  />
                }
                hover="Complete stage"
              />
              {equals ? <Equals className="checkboxes-delete__equals" /> : null}
            </>
          }
          onDelete={() => handleDelete(data.value)}
          className="checkboxes-delete__item"
        />
      </div>
    </div>
  );
};
