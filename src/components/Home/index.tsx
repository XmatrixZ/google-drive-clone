import React from "react";
import styles from "./Home.module.scss";
import Topbar from "../Topbar";
import UploadFiles from "../UploadFiles";

function HomeComponent() {
  return (
    <div >
      <Topbar />
      <UploadFiles />
    </div>
  );
}

export default HomeComponent;
