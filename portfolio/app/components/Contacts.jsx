"use client";
import React, { useState } from 'react';
import Form from './Form';
import handleChange from '../functions/handleChange';
import submitMessage from '../functions/submitMessage';


const Contacts = () => {
  // user State
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    message: "",
  });
  // loading state
  const [loading, setLoading] = useState(false);

  

  // onsubmit the message
  const onSubmit = async (e) => {
    setLoading(true);
    console.log(userData);
    try {
      e.preventDefault();
      await submitMessage(userData, setLoading);
    } catch (error) {
      console.error("Error submitting message:", error);
    }
  };

  return (
    <main className="h-screen flex justify-center items-center flex-col" id="contacts">
      <span className="text-6xl mb-[127px]">LET'S COLLAB</span>

      {/* container */}
      <Form
        submitMessage={onSubmit}
        name={userData.name}
        email={userData.email}
        message={userData.message}
        setName={(name) => setUserData((prev) => ({ ...prev, name }))}
        setEmail={(email) => setUserData((prev) => ({ ...prev, email }))}
        setMessage={(message) => setUserData((prev) => ({ ...prev, message }))}
        handleChange={handleChange}
        loading={loading}
      />
    </main>
  );
};

export default Contacts;
