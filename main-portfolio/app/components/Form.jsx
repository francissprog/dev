"use client"
import axios from 'axios';
import React, { useState } from 'react';
import { FiSend } from "react-icons/fi";
import Swal from 'sweetalert2';

const Form = () => {
    // userData States
    const [userData, setUserData] = useState({
        username: "",
        email: "",
        message: "",
    });
    // loading states
    const [loading, setLoading] = useState(false);

    // function to handle error messages
    const errorMessage = (message, icon) => {
        Swal.fire({
            title: message,
            icon,
            allowOutsideClick: false,
            showCancelButton: false,
            showConfirmButton: false,
            timer: 1200
        });
        setTimeout(() => { setLoading(false) }, 1200);
    };

    const submitMessage = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await axios.post("/api", userData);

            if (res.status === 200) {
                // Log the formatted response data
                console.log(res.data);
                Swal.fire({
                    title: 'Message Sent Successfully!',
                    icon: "success",
                    allowOutsideClick: false,
                    showCancelButton: false,
                    showConfirmButton: false,
                    timer: 1200
                });
                // Optionally clear the form
                setUserData({
                    username: "",
                    email: "",
                    message: "",
                });
                setTimeout(() => { setLoading(false) }, 1200);
            }
        } catch (error) {
            console.log(error);
            if (error.response) {
                if (error.response.status === 400) {
                    return errorMessage(error.response.data.error || "Invalid Credentials", "warning");
                } if (error.response.status === 401) {
                    return errorMessage(error.response.data.error , "warning");
                }
            }
            errorMessage("An unexpected error occurred", "error");
        }
    };

    return (
        <div className='px-4 md:px-10 py-4 h-auto w-full max-w-[600px]'>
            <form onSubmit={submitMessage} className={`flex flex-col gap-6 md:gap-10 text-base md:text-xl ${loading ? "opacity-50 cursor-not-allowed" : "opacity-100 cursor-pointer"}`}>
                {/* Username */}
                <input
                    type="text"
                    name='username'
                    value={userData.username}
                    onChange={e => setUserData({ ...userData, username: e.target.value })}
                    className='bg-transparent border-b-2 p-2 outline-none w-full focus:border-b-2'
                    placeholder='Username'
                    autoComplete='off'
                    disabled={loading}
                />
                <input
                    type="email"
                    name='email'
                    value={userData.email}
                    onChange={e => setUserData({ ...userData, email: e.target.value })}
                    className='bg-transparent border-b-2 p-2 outline-none w-full focus:border-b-2'
                    placeholder='Email'
                    autoComplete='off'
                    disabled={loading}
                />
                <textarea
                    name="message"
                    className="bg-transparent resize-none outline-none border border-1 p-2"
                    rows="6"
                    cols="50"
                    value={userData.message}
                    onChange={e => setUserData({ ...userData, message: e.target.value })}
                    placeholder='Message'
                    disabled={loading}
                />
                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={loading}
                    className={`flex gap-2 items-center justify-center w-full md:w-[200px] border p-2 py-3 ${loading ? "cursor-not-allowed" : "cursor-pointer"}`}
                >
                    {loading ? (
                        <div role="status" className="inline-block h-5 w-5 mr-2 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
                    ) : (
                        <div className='flex gap-2 items-center'><FiSend /> Send Message</div>
                    )}
                </button>
            </form>
        </div>
    );
};

export default Form;
