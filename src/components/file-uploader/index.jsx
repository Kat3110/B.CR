import React from "react";
import { FileUploader } from "./uploader";
import { useFileUploadMutation } from "services/uploads";

export default function FileUploaderContainer({
  inputRef,
  limit,
  format,
  handleImage,
}) {
  const [upload] = useFileUploadMutation();

  const accept = React.useMemo(() => {
    return format;
  }, [format]);

  const handleUpload = (e) => {
    const { files } = e.target;
    const maxSize = 5 * 1024 * 1024;
    if (files[0].size > maxSize) {
      alert("The file exceeds 5 MB.");
      return;
    }
    const formData = new FormData();
    formData.append("files", files[0]);
    upload(formData)
      .unwrap()
      .then(({ data }) => handleImage(data[0]))
      .catch((e) => console.log(e));
    inputRef.current.value = "";
  };
  return (
    <FileUploader
      inputRef={inputRef}
      accept={accept}
      handleUpload={handleUpload}
    />
  );
}
