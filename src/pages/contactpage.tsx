import React, { useState } from 'react'; 

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-gray-950 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-5xl flex flex-col lg:flex-row gap-8">
        {/* Form Container */}
        <div className="bg-gray-800/30 backdrop-blur-lg p-8 w-full lg:w-1/2 flex flex-col justify-center">
          <h1 className="text-4xl font-extrabold mb-8 text-center bg-clip-text text-transparent">
            Help
          </h1>
          <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-6">
            <div>
              <label htmlFor="name" className="block">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2"
                placeholder="Ente name"
                required
                aria-required="true"
              />
            </div>
            <div>
              <label htmlFor="email" className="block">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2"
                placeholder="Enter your email"
                required
                aria-required="true"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="message" className="block">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2"
                placeholder="Questions, comments, or feedback"
                required
                aria-required="true"
              />
            </div>
            <button
              type="submit"
              className="font white"
            >
              Send
            </button>
          </form>
          <div className="mt-8 text-center">
            <p>
              Or email{' '}
              <a href="mailto:helpcenter@example.com" className="text-white-400">
                helpcenter@example.com
              </a>
            </p>
            <p className="mt-2">
              Follow us{' '}
              <a href="https://facebook.com/example" className="text-white-400">
                facebook
              </a>
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ContactPage;