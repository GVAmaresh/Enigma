"use client";
import React, { useState, ChangeEvent } from "react";
import axios from "axios";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { auth, db, storage } from "../config/firebase";

import { v4 } from "uuid";
export default function UploadFile() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const fileListRef = ref(storage, "assignments/");

  // const handleUpload = () => {
  //   if (selectedFile) {
  //     const formData = new FormData();
  //     formData.append("file", selectedFile);
  //     axios
  //       .post("/api/upload", formData)
  //       .then((response) => {
  //         console.log(response.data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }
  // };

  const uploadFile = async () => {
    if (!selectedFile) return;
    try {
      const fileFolderRef = ref(
        storage,
        `assignments/${selectedFile.name + v4()}`
      );

      uploadBytes(fileFolderRef, selectedFile).then(() =>
        setSelectedFile(null)
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className=" m-52 bg-black">
      <div className="p-20">
        <input type="file" onChange={handleFileUpload} className="bg-blue " />
        <div className="">
          <button
            onClick={uploadFile}
            className=" text-center p-5 bg-sky-400 rounded-3xl m-2 "
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
}

// export default UploadFile;
