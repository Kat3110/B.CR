import axios from "axios";

const editor = axios.create({
  baseURL: "http://15.164.251.83:3000",
  headers: {
    "Contest-Type": "multipart/form-data",
  },
});

export const uploadImage = (file) => {
  const formData = new FormData();
  formData.append("file", file);

  return new Promise((resolve, reject) => {
    editor
      .post("/uploads/editor", formData)
      .then((res) => {
        resolve(res.data.data.location);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const uploadVideo = (file) => {
  const formData = new FormData();
  formData.append("file", file);

  return new Promise((resolve, reject) => {
    editor
      .post("/uploads/editor", formData)
      .then((res) => {
        resolve(res.data.data.location);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const uploadFile = (file) => {
  const formData = new FormData();
  formData.append("file", file);

  return new Promise((resolve, reject) => {
    editor
      .post("/uploads/editor", formData)
      .then((res) => {
        resolve(res.data.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
