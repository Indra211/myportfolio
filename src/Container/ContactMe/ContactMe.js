import React, { useEffect, useState } from "react";
import TextInput from "../../Components/TextInput/TextInput";
import "./ContactMe.css";
import Head from "../../Components/Head/Head";
import TextField from "../../Components/TextInput/TextField";
import { URL } from "../../Utility/urls";
import "react-toastify/dist/ReactToastify.css";
import { showToast } from "../../Utility/ToastMsg";

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
  const [loading, setLoading] = useState(false);
  const [bordercolor, setBorderColor] = useState({
    name: "#4ba5fa",
    email: "#4ba5fa",
    message: "#4ba5fa",
  });
  const sendMessage = async () => {
    try {
      setLoading(true);
      const response = await fetch(URL.send_mail, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          message: message,
          email: email,
        }),
      });
      const jsonData = await response.json();
      if (jsonData?.success) {
        setLoading(false);
        showToast("success", "Suceesfully sent");
        setEmail("");
        setName("");
        setMessage("");
      } else {
        setLoading(false);
        showToast("error", "Something went wrong");
        setEmail("");
        setName("");
        setMessage("");
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      showToast("error", "Something went wrong");
    }
  };

  const handleError = () => {
    if (!name) {
      showToast("warn", "Enter name");
      setBorderColor((prevBorderColor) => ({
        ...prevBorderColor,
        name: "red",
      }));
    } else if (!email || !email.includes("@")) {
      showToast("warn", "Enter correct Mail id");
      setBorderColor((prevBorderColor) => ({
        ...prevBorderColor,
        email: "red",
      }));
    } else if (!message) {
      showToast("warn", "Enter message");
      setBorderColor((prevBorderColor) => ({
        ...prevBorderColor,
        message: "red",
      }));
    } else {
      sendMessage();
    }
  };

  useEffect(() => {
    if (name) {
      setBorderColor((prevBorderColor) => ({
        ...prevBorderColor,
        name: "#4ba5fa",
      }));
    } else if (email || email.includes("@")) {
      setBorderColor((prevBorderColor) => ({
        ...prevBorderColor,
        email: "#4ba5fa",
      }));
    } else if (message) {
      setBorderColor((prevBorderColor) => ({
        ...prevBorderColor,
        message: "#4ba5fa",
      }));
    }
  }, [name, email, message]);
  return (
    <div className="contact-container">
      <Head head={"Contact Me"} subHead={"Lets Keep in Touch"} />
      <div className="contact-parent">
        <TextInput
          label={"Name"}
          value={name}
          onChange={handleName}
          style={{
            borderWidth: 1,
            borderColor: bordercolor?.name,
          }}
        />
        <TextInput
          type={"email"}
          label={"Email"}
          value={email}
          onChange={handleEmail}
          style={{
            borderWidth: 1,
            borderColor: bordercolor?.email,
          }}
        />
        <TextField
          label={"Message"}
          value={message}
          onChange={handleMessage}
          style={{
            borderWidth: 1,
            borderColor: bordercolor?.message,
          }}
        />
        <button
          onClick={handleError}
          disabled={loading}
          style={{
            borderWidth: 1,
            borderColor: "#4ba5fa",
            paddingRight: 10,
            paddingLeft: 10,
            borderRadius: 5,
            color: "white",
            fontFamily: "Poppins-Bold",
            alignSelf: "center",
            backgroundColor: loading ? "#16314B" : "#4ba5fa",
          }}
        >
          {loading ? "Sending....." : "Send"}
        </button>
      </div>
    </div>
  );
}

export default ContactMe;
