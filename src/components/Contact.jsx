import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 max-w-3xl mx-auto">
      <div className="glass p-8 text-center">
        <h2 className="text-3xl font-bold mb-4 text-brand-purpleLight">Let’s connect</h2>
        <p className="mb-6">Seeking a 6-month end-of-study internship (Jan 2026).</p>
        <div className="flex justify-center gap-6 text-3xl mb-6">
          <a href="https://github.com/zainebhn" target="_blank" rel="noreferrer" className="hover:text-brand-purple">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/zaineb-elheni/" target="_blank" rel="noreferrer" className="hover:text-brand-purple">
            <FaLinkedin />
          </a>
        </div>
        <a href="mailto:heni.zeineb@gmail.com" className="btn-primary">
          heni.zeineb@gmail.com
        </a>
      </div>
    </section>
  );
}