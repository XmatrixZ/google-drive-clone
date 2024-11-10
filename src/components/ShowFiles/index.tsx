import React from "react";
import styles from "./ShowFiles.module.scss";
import { FetchFiles } from "../../hooks/fetchFiles";
import Image from 'next/image'

export default function ShowFiles() {
  const { fileList } = FetchFiles();
  console.log(fileList);
  return (
    <div>
      {fileList.map((file, i) => {
        return (
          <div key={i}>
            <Image className={styles.imgLink} src={file.imageLink} alt="" />
          </div>
        );
      })}
    </div>
  );
}
