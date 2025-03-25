import { useEffect, useState, useRef } from "react";
import { auth, db } from "./firebase";
import Home from "./Components/Home";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import ChatUI from "./Components/ChatUI";
import {
  addDoc,
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
  QuerySnapshot,
  serverTimestamp,
} from "firebase/firestore";

export default function App() {
  const [user] = useAuthState(auth);
  const [inputMessage, setInputMessage] = useState("");
  const [message, setMessage] = useState([]);
  const scroll = useRef();

  function googleSignIn() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  }

  function signOut() {
    auth.signOut();
  }

  function handleOnChange(event) {
    setInputMessage(event.target.value);
  }

  async function sendMessage(event) {
    event.preventDefault();
    if (inputMessage.trim !== "") {
      const { uid, displayName, photoURL } = auth.currentUser;
      await addDoc(collection(db, "messages"), {
        text: inputMessage,
        name: displayName,
        avatar: photoURL,
        createdAt: serverTimestamp(),
        uid,
      });
      scroll.current.scrollIntoView({behavior: 'smooth'})
    }
    setInputMessage("");
  }

  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt", "desc"),
      limit(50)
    );
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      const fetchedMessage = [];
      QuerySnapshot.forEach((doc) => {
        fetchedMessage.push({ ...doc.data(), id: doc.id });
      });
      const sortedMessage = fetchedMessage.sort(
        (a, b) => a.createdAt - b.createdAt
      );
      setMessage(sortedMessage);
    });
    return () => unsubscribe;
  }, []);

  return (
    <div className="h-screen flex justify-center p-4">
      {!user ? (
        <Home googleSignIn={googleSignIn} />
      ) : (
        <ChatUI
          handleOnChange={handleOnChange}
          inputMessage={inputMessage}
          sendMessage={sendMessage}
          messages={message}
          scroll={scroll}
          signOut={signOut}
        />
      )}
    </div>
  );
}
