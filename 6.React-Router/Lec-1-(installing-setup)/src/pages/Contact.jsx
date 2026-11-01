import { Form } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
export const contactData = async ({ request }) => {
  try {
    const response = await request.formData();
    const data = Object.fromEntries(response);
    console.log(data);
    return null;
  } catch (error) {
    console.log(error);
  }
};

export const Contact = () => {
  return (
    <section className="section-contact">
      <div className="container">
        <h1 className="common-heading">Contact Us</h1>
        <p className="contact-subheading">Get in touch with us. We are always here to help you.</p>
      </div>
      <div className="container">
        <div className="grid grid-two--cols contact-content">
          <div className="contact-form">
            <Form method="POST" action="/contact">
              <div className="form-container">
                <div className="form-group">
                  <label htmlFor="username">Full Name</label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    required
                    autoComplete="off"
                    placeholder="enter your full name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    autoComplete="off"
                    placeholder="enter your email address"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message </label>
                  <textarea
                    name="message"
                    id="message"
                    required
                    cols={30}
                    rows={6}
                    placeholder="we are always here to help you."
                  ></textarea>
                </div>
                <div>
                  <button type="submit" className="btn btn-submit">Send Message</button>
                </div>
              </div>
            </Form>
          </div>
          <div className="contact-image">
            <figure>
              <img src="/contact_illustration.png" alt="contact illustration" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};
