import { database } from "@/firebaseConfig";
import { collection, addDoc } from "@firebase/firestore";

const filesCollection = collection(database, "files");

export const addFiles = async (imageLink: string): Promise<void> => {
  try {
    await addDoc(filesCollection, { imageLink });
    console.log("File URL added to Firestore successfully.");
  } catch (error) {
    console.error("Error adding file URL to Firestore:", error);
  }
};
