import Embed from "@editorjs/embed";
import Table from "@editorjs/table";
import List from "@editorjs/list";
import LinkTool from "@editorjs/link";
import Raw from "@editorjs/raw";
import Header from "@editorjs/header";
import Quote from "@editorjs/quote";
import ColorPlugin from "editorjs-text-color-plugin";
import CheckList from "@editorjs/checklist";
import Delimiter from "@editorjs/delimiter";
import InlineCode from "@editorjs/inline-code";
import SimpleImage from "@editorjs/simple-image";
import BreakLine from "editorjs-break-line";
import AttachesTool from "@editorjs/attaches";
import ImageTool from "@editorjs/image";
import TextVariantTune from "@editorjs/text-variant-tune";
import VideoTool from "@vietlongn/editorjs-video";
import Paragraph from "@editorjs/paragraph";
import { uploadFile } from "services/editor";

export const tools = {
  paragraph: {
    class: Paragraph,
    inlineToolbar: true,
    config: {
      preserveBlank: true,
    },
  },
  embed: Embed,
  table: Table,
  Color: {
    class: ColorPlugin, // if load from CDN, please try: window.ColorPlugin
    config: {
      colorCollections: [
        "#EC7878",
        "#9C27B0",
        "#673AB7",
        "#3F51B5",
        "#0070FF",
        "#03A9F4",
        "#00BCD4",
        "#4CAF50",
        "#8BC34A",
        "#CDDC39",
        "#FFF",
      ],
      defaultColor: "#FF1300",
      type: "text",
      customPicker: true, // add a button to allow selecting any colour
    },
  },
  Marker: {
    class: ColorPlugin, // if load from CDN, please try: window.ColorPlugin
    config: {
      defaultColor: "#FFBF00",
      type: "marker",
      icon: `<svg fill="#000000" height="200px" width="200px" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M17.6,6L6.9,16.7c-0.2,0.2-0.3,0.4-0.3,0.6L6,23.9c0,0.3,0.1,0.6,0.3,0.8C6.5,24.9,6.7,25,7,25c0,0,0.1,0,0.1,0l6.6-0.6 c0.2,0,0.5-0.1,0.6-0.3L25,13.4L17.6,6z"></path> <path d="M26.4,12l1.4-1.4c1.2-1.2,1.1-3.1-0.1-4.3l-3-3c-0.6-0.6-1.3-0.9-2.2-0.9c-0.8,0-1.6,0.3-2.2,0.9L19,4.6L26.4,12z"></path> </g> <g> <path d="M28,29H4c-0.6,0-1-0.4-1-1s0.4-1,1-1h24c0.6,0,1,0.4,1,1S28.6,29,28,29z"></path> </g> </g></svg>`,
    },
  },
  list: List,
  attaches: {
    class: AttachesTool,
    config: {
      uploader: {
        uploadByFile(file) {
          return uploadFile(file).then((response) => {
            return {
              success: 1,
              file: {
                url: response.location,
                size: response.size,
                title: response.originalname,
                extension: response.mimetype.split("/")[1],
              },
            };
          });
        },
      },
    },
  },
  image: {
    class: ImageTool,
    config: {
      endpoints: {
        byFile: "http://15.164.251.83:3000/uploads/editor/image", // Your backend file uploader endpoint
      },
    },
  },
  video: {
    class: VideoTool,
    config: {
      endpoints: {
        byFile: "http://15.164.251.83:3000/uploads/editor/video", // Your backend file uploader endpoint
      },
    },
  },

  linkTool: {
    class: LinkTool,
    config: {
      endpoint: "http://15.164.251.83:3000/uploads/link",
    },
  },
  raw: Raw,
  header: {
    class: Header,
    shortcut: "CMD+SHIFT+H",
    config: {
      placeholder: "Enter a header",
      levels: [1, 2, 3],
      defaultLevel: 1,
    },
  },
  breakLine: {
    class: BreakLine,
    inlineToolbar: true,
    shortcut: "CMD+SHIFT+ENTER",
  },
  quote: Quote,
  checklist: CheckList,
  delimiter: Delimiter,
  inlineCode: InlineCode,
  simpleImage: SimpleImage,
  textVariant: TextVariantTune,
};
