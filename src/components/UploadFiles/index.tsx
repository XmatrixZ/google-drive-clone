import React, { ChangeEvent, useState } from "react";
import styles from "./UploadFiles.module.scss";
import Button from "../common/Button";
import { fileUpload } from "@/API/FIleUpload";
import CommonProgress from "../common/Progress";

function UploadFiles() {
  const [isFileSelect, setFileSelect] = useState(false);
  const [progress, setProgress] = useState(0);
  const uploadFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) fileUpload(file, setProgress);
  };
  return (
    <div className={styles.UploadMain}>
      <Button
        onClick={() => setFileSelect(!isFileSelect)}
        title="Add a File"
        ButtonClass="btn-outline btn-primary"
      />
      {isFileSelect ? (
        <input
          onChange={(event) => uploadFile(event)}
          type="file"
          className="file-input w-full max-w-xs"
        />
      ) : (
        <></>
      )}
      <Button title="Create a folder" ButtonClass="btn-outline btn-success" />
      {progress === 0 || progress === 100 ? (
        <></>
      ) : (
        <CommonProgress progress={progress} />
      )}
    </div>
  );
}

export default UploadFiles;
