import React from "react";
import styles from "./Home.module.scss";
import Topbar from "../Topbar";
import UploadFiles from "../UploadFiles";
import ShowFiles from "../ShowFiles";

function HomeComponent() {
  return (
    <div >
      <Topbar />
      <UploadFiles />
      {/* <ShowFiles /> */}
    </div>
  );
}

export default HomeComponent;
