import { useEffect } from "react";
import { messaging } from "./firebase";
import { getToken } from "firebase/messaging";
import logo from "./logo.svg";
import "./App.css";

function App() {
  async function requestPermission() {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      // Generate Token
      const token = await getToken(messaging, {
        vapidKey:
          "BOG2VRDTWHk-A5JlyAQ1vJg1keK5tD2Qp1zPVrnM0pEqX--zkU4tDv3X6NGEdGTPfCIvmDS8utuGwJDzEfPASRs",
      });
      alert(token)
      console.log("Token Gen", token);
      // Send this token  to server ( db)
    } else if (permission === "denied") {
      alert("You denied for the notification");
    }
  }


  

  return (
    <div className="App">
     <button onClick={()=>requestPermission()}>request token</button>
    </div>
  );
}

export default App;
