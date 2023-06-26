export const getData = (type) => {
  switch (type) {
    case "todo":
      return {
        type: "checklist",
        data: { items: [{ text: "", checked: false }] },
      };
    case "h1":
      return {
        type: "header",
        data: { text: "", level: 1 },
      };
    case "h2":
      return {
        type: "header",
        data: { text: "", level: 2 },
      };
    case "h3":
      return {
        type: "header",
        data: { text: "", level: 3 },
      };
    case "table":
      return {
        type: "table",
        data: { withHeadings: false, content: [] },
      };
    case "bullet":
      return {
        type: "list",
        data: { style: "unordered", items: [""] },
      };
    case "number":
      return {
        type: "list",
        data: { style: "ordered", items: [""] },
      };
    case "quote":
      return {
        type: "quote",
        data: { text: "", caption: "", alignment: "left" },
      };
    case "divider":
      return {
        type: "quote",
        data: { text: "", caption: "", alignment: "left" },
      };
    case "callout":
      return {
        type: "quote",
        data: { text: "", caption: "", alignment: "left" },
      };
    case "image":
      return {
        type: "quote",
        data: { text: "", caption: "", alignment: "left" },
      };
    case "video":
      return {
        type: "quote",
        data: { text: "", caption: "", alignment: "left" },
      };
    case "link":
      return {
        type: "quote",
        data: { text: "", caption: "", alignment: "left" },
      };
    case "file":
      return {
        type: "quote",
        data: { text: "", caption: "", alignment: "left" },
      };
    default:
      return "";
  }
};
