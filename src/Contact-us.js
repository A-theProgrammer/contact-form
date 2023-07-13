import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "ieee-rgit-test",
        "template_71pd5eh",
        form.current,
        "sqJXSxqdv3zVaUDDa"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("working");
          alert("Message Sent Successfully.")
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (

    <form ref={form} onSubmit={sendEmail} className="relative border-black grid gap-8 rounded-lg md:flex-1 md:max-w-lg my-4 md:my-12 lg:my-16 mx-auto p-7 w-full bg-white">
        
      <h1 className="font-bold uppercase text-3xl text-blue-900">Contact Form </h1>
      
        <div className="relative">
          <input type="text" name="user_name" className="peer 
            w-full border-b-4 border-t-0 border-l-0 
            border-r-0 border-blue-600 focus:ring-transparent focus:border-amber-500 
            focus:outline-none transition-all placeholder-transparent required:border-red-500 " 
            placeholder="Your Name"/>
          <label for="name" className="text-neutral-600 text-sm font-bold 
              uppercase absolute -top-2 left-1 -translate-y-1/2
              transition-all peer-placeholder-shown:top-1/4
              peer-placeholder-shown:left-3 peer-placeholder-shown:text-neutral-900
              peer-focus:text-neutral-600 peer-focus:-top-2
              peer-focus:left-1">
            Name
          </label>  
        </div>
        
        <div className="relative">
        <input type="email" name="user_email" className="peer w-full border-b-4 border-t-0 border-l-0 border-r-0 border-blue-600 focus:ring-transparent focus:border-amber-500 focus:outline-none transition-all placeholder-transparent 
          disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
          invalid:border-pink-500 invalid:text-pink-600
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500" 
          placeholder="Your Email"/>
          <label for="email" className="text-neutral-600 text-sm font-bold 
              uppercase absolute -top-2 left-1 -translate-y-1/2
              transition-all peer-placeholder-shown:top-1/4 peer-placeholder-shown:left-3 peer-placeholder-shown:text-neutral-900 peer-focus:text-neutral-600 peer-focus:-top-2 peer-focus:left-1">
             Your Email
          </label>
          <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
            Please provide a valid email address.
          </p>
        </div>
          
        <div className="relative">
          <textarea name="message" cols="20" rows="5"        
              className="peer resize-none w-full
              border-b-4 border-t-0 border-l-0 border-r-0 
              border-blue-600 focus:ring-transparent focus:border-amber-500 
              focus:outline-none transition-all placeholder-transparent" 
              placeholder="We are here to help..."/>
          <label for="message" className="text-neutral-600 text-sm font-bold 
              uppercase absolute -top-2 left-1 -translate-y-1/2 transition-all peer-placeholder-shown:top-1/4 
              peer-placeholder-shown:left-3 
              peer-placeholder-shown:text-neutral-900
              peer-focus:text-neutral-600
              peer-focus:-top-2
              peer-focus:left-1">
              We are here to help...</label>
        </div>
        
        <div className="relative">
          <input type="submit" value="Submit" className="bg-blue-900 font-bold
              shadow-2xl hover:shadow-none hover:bg-blue-500
              transition-shadow focus:outline-none text-white
              focus-visible:ring-4 ring-neutral-900 rounded-md
              ring-offset-3 ring-offset-transparent
              px-4 pb-1 flex h-9 gap-2 w-max uppercase cursor-pointer"/>
        </div>

    </form>
  );
};
