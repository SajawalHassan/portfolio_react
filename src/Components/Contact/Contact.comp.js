import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    if (!name) return setError("Field name is not allowed to be empty!");
    if (!email) return setError("Field email is not allowed to be empty!");
    if (!email.includes("@gmail.com"))
      return setError("Email must be a gmail!");
    if (!message) return setError("Field message is not allowed to be empty!");

    emailjs
      .sendForm(
        "service_oqrbztr",
        "template_nnl6h6m",
        form.current,
        "KkA5CHqxpyrdiEbn-"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setName("");
    setEmail("");
    setMessage("");
    setEmailSent(true);
  }

  if (error) setTimeout(() => setError(""), 3000);
  if (emailSent) setTimeout(() => setEmailSent(false), 3000);

  return (
    <div id="contact" className="mt-[30%] mb-[30%] pt-[20%]">
      <div className="section">
        <h1 className="section-heading">Contact me</h1>
        <div className="section-description">
          <p>
            If you want to talk to me about something feel free to use the form
          </p>
        </div>
        <form ref={form} className="mt-7 space-y-2 relative">
          <div className="group overflow-x-hidden">
            <input
              type="text"
              placeholder="Name"
              className="contact-input w-full"
              name="from_name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <div className="bar-animation"></div>
          </div>
          <div className="group overflow-x-hidden">
            <input
              type="text"
              placeholder="Email"
              className="contact-input w-full"
              name="from_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="bar-animation"></div>
          </div>
          <div className="group overflow-x-hidden">
            <textarea
              name="message"
              cols="30"
              rows="7"
              className="contact-input w-full"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <div className="bar-animation"></div>
          </div>
          <div className="flex items-center space-x-4 relative">
            <button
              type="submit"
              className="section-btn absolute right-0 -top-4"
              onClick={(e) => sendEmail(e)}
            >
              Send Message
            </button>
            <div className="flex items-center space-x-2 mt-2">
              <a
                href="https://github.com/SajawalHassan"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon />
              </a>
              <a
                href="https://www.youtube.com/channel/UCkjFnHCmmZtYVFvosxef3yg"
                target="_blank"
                rel="noreferrer"
              >
                <YouTubeIcon />
              </a>
              <a
                href="https://twitter.com/scientificninj2"
                target="_blank"
                rel="noreferrer"
              >
                <TwitterIcon />
              </a>
            </div>
          </div>
        </form>
      </div>
      {emailSent && (
        <h1 className="absolute inset-x-0 mx-auto mt-10 bg-gradient-to-r from-[#13B5D2] to-blue-600 text-white font-bold py-2 w-max px-4 rounded-md email-sent-animation">
          Email sent!
        </h1>
      )}
      {error && (
        <h1 className="absolute inset-x-0 mx-auto mt-10 bg-gradient-to-r from-pink-500 to-red-600 text-white font-bold py-2 w-max px-4 rounded-md email-sent-animation">
          {error}
        </h1>
      )}
    </div>
  );
}

export default Contact;
