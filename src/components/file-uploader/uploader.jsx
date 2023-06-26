import React from "react";

export function FileUploader({ inputRef, accept, handleUpload }) {
  return (
    <input
      style={{ display: "none" }}
      type="file"
      ref={inputRef}
      accept={accept}
      onChange={handleUpload}
    />
  );
}
