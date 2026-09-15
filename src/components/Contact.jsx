import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaCopy, FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";
import { useLanguage } from "../hooks/useLanguage";

const EMAIL = "heni.zeineb@gmail.com";

export default function Contact() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section id="contact" className="py-20 px-6 max-w-3xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="card p-8 space-y-6"
      >
        <h2 className="text-3xl font-bold text-brand-purpleLight">{t.contact.heading}</h2>
        <p className="text-muted">{t.contact.text}</p>

        <div className="flex justify-center">
          <button
            onClick={handleCopyEmail}
            className="chip flex items-center gap-2 px-4 py-2 text-sm hover:-translate-y-0.5 transition relative"
          >
            {copied && (
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-brand-purple text-white px-2 py-1 rounded whitespace-nowrap">
                {t.contact.copied}
              </span>
            )}
            <FaEnvelope />
            {EMAIL}
            <FaCopy className="text-muted" />
          </button>
        </div>

        <div className="flex justify-center gap-6 text-3xl">
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
