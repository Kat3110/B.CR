import React from "react";
import EditorJS from "@editorjs/editorjs";
import { tools } from "./constants";
import DragDrop from "editorjs-drag-drop";
import Undo from "editorjs-undo";
import { useParams } from "react-router-dom";
import "./editor.css";

export default function Editor({ id, content, readOnly, handleContent }) {
  const [editor, setEditor] = React.useState(null);
  const [ready, setReady] = React.useState(false);
  const { blockId } = useParams();

  const ref = React.useRef(null);

  React.useEffect(() => {
    setEditor(
      new EditorJS({
        holder: `editor${id}`,
        tools,
        data: content,
        readOnly,
        onReady: () => {
          setReady(true);
          new Undo({ editor });
          new DragDrop(editor);
        },
        onChange: (api) => {
          !readOnly &&
            handleContent &&
            api.saver.save().then((content) => {
              handleContent(id, content);
            });
        },
        tunes: ["textVariant"],
        logLevel: "ERROR",
      }),
    );
    return () => {
      if (editor) {
        editor.destroy();
      }
    };
    //eslint-disable-next-line
  }, []);

  React.useEffect(() => {
    if (editor && editor.blocks && editor.blocks.render)
      editor.blocks.render(content);
    //eslint-disable-next-line
  }, [content]);

  React.useEffect(() => {
    if (blockId !== "undefined" && Number(blockId) === id && ready)
      ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [id, blockId, ready]);

  return <div ref={ref} id={`editor${id}`} />;
}
