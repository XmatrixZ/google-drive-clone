import { storage } from "@/firebaseConfig";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { addFiles } from "./Firestore";

export const fileUpload = (
  file: File,
  setProgress: (progress: number) => void
): void => {
  const storageRef = ref(storage, `files/${file.name}`);
  const uploadTask = uploadBytesResumable(storageRef, file);

  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const progress = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
      setProgress(progress);
    },
    (error) => {
      console.error("File upload error:", error);
      alert(`Upload failed: ${error.message}`);
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref)
      .then((downloadURL) => {
        console.log("File uploaded successfully. URL:", downloadURL);
        addFiles(downloadURL).catch((error) =>
          console.error("Failed to add file to Firestore:", error)
        );
      })
      .catch((error) => {
        console.error("Failed to retrieve download URL:", error);
      });
    }
  );
};
