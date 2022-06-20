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

  if (emailSent) setTimeout(() => setEmailSent(false), 3000);

  return (
    <div id="contact" className="mt-[30%] pt-[20%]">
      <div className="section">
        <h1 className="section-heading">Contact me</h1>
        <div className="section-description">
          <p>
            If you want to talk to me about something feel free to use the form
          </p>
        </div>
        <form ref={form} className="mt-7 space-y-2">
          <div className="group overflow-x-hidden">
            <input
              type="text"
              placeholder={error.includes("name") ? `${error}` : `Name`}
              className={
                error.includes("name")
                  ? `contact-input w-full placeholder:text-red-500`
                  : `contact-input w-full`
              }
              name="from_name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setError("");
              }}
            />
            {error.includes("name") & !name ? (
              <div className="bg-red-500 h-[1px] bar-error-aniamtion"></div>
            ) : (
              <div className="bar-animation"></div>
            )}
          </div>
          <div className="group overflow-x-hidden">
            <input
              type="text"
              placeholder={error.includes("email") ? `${error}` : `Email`}
              className={
                error.includes("email")
                  ? `contact-input w-full placeholder:text-red-500`
                  : `contact-input w-full`
              }
              name="from_email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
            />
            {error.includes("email") & !email ? (
              <div className="bg-red-500 h-[1px] bar-error-aniamtion"></div>
            ) : (
              <div className="bar-animation"></div>
            )}
          </div>
          <div className="group overflow-x-hidden">
            <textarea
              name="message"
              cols="30"
              rows="7"
              placeholder={error.includes("message") ? `${error}` : `Message`}
              className={
                error.includes("message")
                  ? `contact-input w-full placeholder:text-red-500`
                  : `contact-input w-full`
              }
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                setError("");
              }}
            ></textarea>
            {error.includes("message") & !message ? (
              <div className="bg-red-500 h-[1px] bar-error-aniamtion"></div>
            ) : (
              <div className="bar-animation"></div>
            )}
          </div>
          <div className="flex items-center space-x-4 relative">
            <button
              type="submit"
              className="section-btn absolute right-0 -top-4 group w-[13rem]"
              onClick={(e) => sendEmail(e)}
            >
              {emailSent ? (
                <h1 className="text-green-500 group-hover:text-black">
                  Email sent!
                </h1>
              ) : (
                <h1>Send Message</h1>
              )}
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
    </div>
  );
}

export default Contact;
