import { database } from "@/firebaseConfig";
import { collection, addDoc } from "@firebase/firestore";

const files = collection(database, "files");

export const addFiles = (imgLink: string) => {
  addDoc(files, { imgLink: imgLink }).catch((err) => console.log(err));
};
