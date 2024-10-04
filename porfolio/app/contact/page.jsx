"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+1) 740 607 6217",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "thanhdatvu.203@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "San Marcos, California",
  },
];

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false); 
  const [submitStatus, setSubmitStatus] = useState(null);
  {/* useState keep track of the state and updates it in real time This ensures that the UI is always in sync with the current state.*/}

  const handleSubmit = async (e) => {
    e.preventDefault(); {/* Prevents the form from being submitted in the traditional way*/}
    setIsSubmitting(true);
    setSubmitStatus(null);

    const form = e.target; {/*typically the <form> element itself*/}
    const formData = new FormData(form); {/*Creating a FormData object to hold the form fields and their values*/}
    {/*API call*/}
    try {
      const response = await fetch('https://formspree.io/f/xrbgzpyy', {
        method: 'POST', 
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      {/*handle error*/}
      if (response.ok) {
        setSubmitStatus('success');
        form.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px] mt-8">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#0c2128] rounded-xl">
              <h3 className="text-4xl text-accent">Thank you for reaching out!</h3>
              <p className="text-white/60">
                I appreciate your interest and look forward to connecting with you. Please feel free to get in touch with any questions, 
                inquiries, or opportunities. I'll get back to you as soon as possible.
              </p>
              {/* inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" name="firstname" placeholder="Firstname" required />
                <Input type="text" name="lastname" placeholder="Lastname" required />
                <Input type="email" name="email" placeholder="Email address" required />
                <Input type="tel" name="phone" placeholder="Phone number" />
              </div>
              {/* textarea */}
              <Textarea
                name="message"
                className="h-[200px] bg-primary rounded-md border border-white/10 focus:border-accent focus:ring-0 font-light"
                placeholder="Type your message here."
                required
              />
              {/* btn */}
              <Button type="submit" size="md" className="max-w-40" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send message'}
              </Button>
              {submitStatus === 'success' && <p className="text-green-500">Message sent successfully!</p>}
              {submitStatus === 'error' && <p className="text-red-500">Failed to send message. Please try again.</p>}
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#0c2128] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;