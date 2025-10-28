import React, { useState } from 'react';

// Apple-style Contact page with consistent glassmorphic design
const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Mock contact data
  const contactData = {
    address: "123 E-Commerce Street, Digital City, DC 12345",
    phone: "+1 (555) 123-4567",
    email: "hello@estore.com",
    hours: "Monday - Friday: 9:00 AM - 6:00 PM",
    social: [
      { name: "Twitter", url: "#", icon: "🐦" },
      { name: "Facebook", url: "#", icon: "📘" },
      { name: "Instagram", url: "#", icon: "📷" },
      { name: "LinkedIn", url: "#", icon: "💼" }
    ]
  };

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-14 bg-white">
      {/* Apple-style Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-8xl font-light text-gray-900 mb-8 tracking-tight">
            Contact
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            We'd love to hear from you. Get in touch with our team.
          </p>
        </div>
      </section>

      {/* Apple-style Contact Form & Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
                Send us a message
              </h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100/50 backdrop-blur-sm border border-green-200/50 text-green-700 rounded-xl">
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-100/50 backdrop-blur-sm border border-red-200/50 text-red-700 rounded-xl">
                  Something went wrong. Please try again.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 bg-white rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none text-gray-900 placeholder-gray-500"
                      placeholder="Name"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 bg-white rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none text-gray-900 placeholder-gray-500"
                      placeholder="Email"
                    />
                  </div>
                </div>
                
                <div>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 bg-white rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none text-gray-900"
                  >
                    <option value="">Subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Customer Support</option>
                    <option value="order">Order Question</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-4 bg-white rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none text-gray-900 placeholder-gray-500 resize-none"
                    placeholder="Message"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-colors duration-200 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
                  Get in touch
                </h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Visit us</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{contactData.address}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Call us</h3>
                    <p className="text-gray-600 text-lg">{contactData.phone}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Email us</h3>
                    <p className="text-gray-600 text-lg">{contactData.email}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Hours</h3>
                    <p className="text-gray-600 text-lg">{contactData.hours}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 