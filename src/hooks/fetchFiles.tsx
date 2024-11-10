import { database } from "@/firebaseConfig";
import { collection, onSnapshot } from "@firebase/firestore";
import { useEffect, useState } from "react";

export const FetchFiles = () => {
  const [fileList, setFileList] = useState([{}]);
  useEffect(() => {
    const files = collection(database, "files");
    return onSnapshot(files, (response) => {
      setFileList(
        response.docs.map((item) => {
          return { ...item.data(), id: item.id };
        }),
      );
    });
  }, []);
  return {
    fileList,
  };
};
