import ComponentNav from "../Components/ComponentNav";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Alert, Snackbar, Stack } from "@mui/material";

export default function Contact() {
  const [sending, setSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [sendMsg, setSendMsg] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    setSending(true);
    setOpen(true);
    e.preventDefault();
    setSending(false);

    emailjs
      .sendForm(
        import.meta.env.VITE_Service_Key,
        import.meta.env.VITE_Template_Key,
        form.current,
        import.meta.env.VITE_Public_Key
      )
      .then((result) => {
        setIsSuccess(true);
        setSendMsg("Email Sent Successfully");
        console.log(result.text);
      })
      .catch((error) => {
        setIsSuccess(false);
        setSendMsg("Error Sending Email");
        console.log(error.text);
      });
  };
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <div className="containerTransition  bg-primary-black flex justify-center items-center md:mr-5 p-5 rounded-xl border border-opacity-10 border-white max-md:mr-0 max-md:p-0 max-md:mb-16 ">
      <div className="max-md:hidden">
        <ComponentNav />
      </div>
      <div className="flex-col justify-center align-middle">
        <section className="flex md:justify-start align-middle md:mb-12 max-md:justify-center max-md:mt-3">
          <h1 className="text-center font-bold text-lg border-b-4 border-primary-golden border-opacity-80 pb-1 px-4">
            Contact
          </h1>
        </section>
        <form className="flex justify-center" ref={form} onSubmit={sendEmail}>
          <main className="flex-col mt-11 justify-center items-center">
            <div className="flex justify-between max-md:flex-col  ">
              <input
                // onChange={getUserName}
                required
                type="text"
                placeholder="Full Name"
                name="user_name"
                className="bg-primary-black flex justify-center items-center mr-5 p-5 rounded-xl border border-opacity-10 border-white max-md:mb-6 max-md:ml-2"
              />
              <input
                // onChange={getUserEmail}
                required
                type="email"
                name="user_email"
                placeholder="Email"
                className="bg-primary-black flex justify-center items-center mr-5 p-5 rounded-xl border border-opacity-10 border-white max-md:ml-2"
              />
            </div>
            <input
              // onChange={getUserMessage}
              required
              type="text"
              name="message"
              placeholder="Message"
              // value="Message"
              className="bg-primary-black flex justify-center items-center mt-5 p-5 rounded-xl border border-opacity-10 border-white w-full max-md:w-fit max-md:ml-2"
            />

            {sending ? (
              <input
                type="submit"
                value="Loading"
                className="text-primary-golden bg-primary-black flex justify-around mt-5 px-11 py-3 cursor-pointer rounded-xl border border-opacity-10 border-white w-1/4  hover:border-primary-golden hover:border-opacity-30 max-md:w-1/2 max-md:ml-2 max-md:mb-4"
              />
            ) : (
              <input
                type="submit"
                value="SUBMIT"
                className="text-primary-golden bg-primary-black flex justify-around mt-5 px-11 py-3 cursor-pointer rounded-xl border border-opacity-10 border-white w-1/4  hover:border-primary-golden hover:border-opacity-30 max-md:w-1/2 max-md:ml-2 max-md:mb-4"
              />
            )}
          </main>
        </form>
        <div>
          <Stack spacing={2} sx={{ width: "100%" }}>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert
                className="fixed -bottom-16 right-0"
                onClose={handleClose}
                severity={isSuccess ? "success" : "error"}
              >
                {sendMsg}
              </Alert>
            </Snackbar>
          </Stack>
        </div>
      </div>
    </div>
  );
}
