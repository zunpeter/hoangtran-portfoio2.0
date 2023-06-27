import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import './contact.css';
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xjgy6rh', 'template_eymj645', form.current, 'Sz7GtG4_974QU52lQ')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  };
  return (
    <div
      className={`xl:mt-12 flex  flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText} style={{ color: "#fcd34d" }}>Contact</h3>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your full name" required style={{ border: "2px solid white", paddingLeft: "10px" }} />
          <input type="email" name="email" placeholder="Your Email" required style={{ border: "2px solid white", paddingLeft: "10px" }} />
          <textarea name="message" rows="7" placeholder="You wanna say something?" style={{ border: "2px solid white", paddingLeft: "10px", paddingTop: "5px" }}></textarea>
          <button type="submit" className="btn btn-primary" style={{ width: "fit-content", alignSelf: "flex-end", color: "#fcd34d", fontWeight: "bold", fontSize: "24px" }} >Send Message</button>
        </form>


      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        {/* <img width={500} height={500} src="src/assets/pacman.gif" alt="pacmangif" /> */}
        {/* <EarthCanvas /> */}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");