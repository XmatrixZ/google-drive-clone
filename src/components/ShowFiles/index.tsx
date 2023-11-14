import React from "react";
// import Styles from "./ShowFiles.modules.scss";
import { FetchFiles } from '../../hooks/fetchFiles';
export default function ShowFiles() {
  const { fileList } = FetchFiles();
  console.log(fileList);
  return <div>ShowFiles</div>;
}
