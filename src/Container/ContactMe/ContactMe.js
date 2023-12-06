import React, { useState } from "react";
import TextInput from "../../Components/TextInput/TextInput";
import "./ContactMe.css";
import Head from "../../Components/Head/Head";
import TextField from "../../Components/TextInput/TextField";
import { URL } from "../../Utility/urls";

function ContactMe(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  const sendMessage = async () => {
    try {
      const response = await fetch(URL.send_mail, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          message: message,
          email: email,
        }),
      });
      const jsonData = await response.json();
      console.log(jsonData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="contact-container">
      <Head head={"Contact Me"} subHead={"Lets Keep in Touch"} />
      <div className="contact-parent">
        <TextInput label={"Name"} value={name} onChange={handleName} />
        <TextInput label={"email"} value={email} onChange={handleEmail} />
        <TextField label={"Message"} value={message} onChange={handleMessage} />
      </div>
      <button onClick={sendMessage}>submit</button>
    </div>
  );
}

export default ContactMe;
