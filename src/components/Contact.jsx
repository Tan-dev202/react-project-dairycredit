import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section className="contact container mt-5">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <h4 className="text-center mb-4">Contact Us</h4>

          {submitted && (
            <div className="alert alert-success" role="alert">
              Thank you for your message! We'll get back to you soon.
            </div>
          )}

          <div className="card shadow">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <div class="d-grid gap-2 col-1 mx-auto">
                  <button
                    type="submit"
                    className="btn bg-dark text-white rounded"
                  >
                    Send
                  </button>
                </div>
              </form>

              <div className="text-center mt-5">
                <h5>Contact Information</h5>
                <p>
                  If you prefer to contact us directly, please use the
                  information below:
                </p>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <strong>Email:</strong> info@dairycredit.com
                  </li>
                  <li className="mb-2">
                    <strong>Address:</strong> Nairobi, Kenya
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
