import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import toast from 'react-hot-toast';

const Contact = () => {
  const formRef = useRef();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_ed08d0h",
        "template_5kvxmxr",
        {
          from_name: form.name,
          to_name: 'Abhijit Singh',
          from_email: form.email,
          to_email: 'mailmeat.lightspeed@gmail.com',
          message: form.message,
        },
        "kC_lfO4vIU1T29yFL",
      )
      .then(
        () => {
          setLoading(false);
          toast.success('Thank you for your message 😃');

          setTimeout(() => {
            setForm({
              name: '',
              email: '',
              message: '',
            });
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          toast.error("I didn't receive your message 😢");
        },
      );
  };

  return (
    <section className="c-space mt-20" id="contact">

      <div className="relative min-h-screen flex items-center justify-center flex-col">
        {/* <img src="/assets/terminal.png" alt="terminal-bg" className="absolute inset-0 min-h-screen" /> */}

        <div className="contact-container">
          <h3 className="head-text">Let's talk</h3>
          <p className="text-lg text-white-600 mt-3">
            Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to
            life, I’m here to help.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input text-neutral-400"
                placeholder="ex., John Doe"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input text-neutral-400"
                placeholder="ex., johndoe@gmail.com"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input text-neutral-400"
                placeholder="Share your thoughts or inquiries..."
              />
            </label>

            <button className="btn" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}

              <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
