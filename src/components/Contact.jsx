import { motion } from "framer-motion";
import { FaEnvelope, FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 max-w-3xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass p-8 space-y-6"
      >
        <h2 className="text-3xl font-bold text-brand-purpleLight">Let’s connect</h2>
        <p className="text-purple-200">
          Looking for a 6-month internship (Jan 2026)? Drop me a message.
        </p>

        <div className="flex justify-center gap-6 text-3xl">
          <a
                href="mailto:heni.zeineb@gmail.com"
               className="hover:text-brand-purple transition"
                title="Email">
               <FaEnvelope />
          </a>
          <a href="https://wa.me/21693840013" target="_blank" rel="noopener noreferrer" className="hover:text-brand-purple transition" title="WhatsApp">
            <FaWhatsapp />
          </a>
          <a href="https://github.com/zainebhn" target="_blank" rel="noopener noreferrer" className="hover:text-brand-purple transition" title="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/zaineb-elheni/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-purple transition" title="LinkedIn">
            <FaLinkedin />
          </a>
        </div>
      </motion.div>
    </section>
  );
}