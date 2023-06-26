import React from "react";
import BoxTemplate from "../box-template";
import Editor from "../editor";

export function BlocksList({ data }) {
  return data.map((item) => (
    <BoxTemplate key={item.id}>
      <Editor id={item.id} content={item.content} readOnly={true} />
    </BoxTemplate>
  ));
}
