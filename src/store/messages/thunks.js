import { doc, setDoc, collection } from "firebase/firestore/lite";
import { saveMessage } from "./messagesSlice";
import { FirebaseDB } from "../../firebase/config";


export const startSaveFormData = ({ name, email, phoneNumber, message }) => {
    return async ( dispatch ) => {


        const newDoc = doc( collection( FirebaseDB , `/messages`) );
        await setDoc( newDoc, { name, email, phoneNumber, message} );

        dispatch( saveMessage({ name, email, phoneNumber, message }) )

    }
}