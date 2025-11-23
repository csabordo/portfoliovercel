import React, { useState } from "react";
import { Mail, Send, CheckCircle, XCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage(null);

    // Simulated API
    setTimeout(() => {
      setIsSending(false);
      const success = Math.random() > 0.1; 
      if (success) {
        setStatusMessage({ type: 'success', text: 'Message sent successfully!' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatusMessage({ type: 'error', text: 'Failed to send message.' });
      }
    }, 1500);
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-lg border-0">
            <div className="card-body p-5">
              
              <h1 className="text-center fw-bold mb-4 text-primary d-flex align-items-center justify-content-center">
                <Mail className="me-2" size={28} /> Get in Touch
              </h1>
              
              {statusMessage && (
                <div className={`alert ${statusMessage.type === 'success' ? 'alert-success' : 'alert-danger'} d-flex align-items-center`} role="alert">
                  {statusMessage.type === 'success' ? <CheckCircle size={20} className="me-2"/> : <XCircle size={20} className="me-2"/>}
                  {statusMessage.text}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-medium">Name</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    disabled={isSending}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-medium">Email</label>
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    required
                    disabled={isSending}
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="form-label fw-medium">Message</label>
                  <textarea
                    className="form-control form-control-lg"
                    id="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSending}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-lg w-100 d-flex align-items-center justify-content-center"
                  disabled={isSending}
                >
                  {isSending ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="me-2" size={18} /> Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;