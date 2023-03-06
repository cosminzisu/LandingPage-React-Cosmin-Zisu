import React from 'react';
import './Contact.css';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      comment: ''
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  
  }

  render() {
    return (
      <section id="contact">
      <div className="contact-form-container">
        <form onSubmit={this.handleSubmit} className="contact-form">
          <div className="form-column">
            <h2>Contact Form</h2>
            <label>
              Name:
              <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
            </label>
            <label>
              Email:
              <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
            </label>
            <label>
              Comment:
              <textarea name="comment" value={this.state.comment} onChange={this.handleChange}></textarea>
            </label>
            <button type="submit">Submit</button>
          </div>
          <div className="info-column">
          <h2>Contact Information</h2>
          <div class="contact-info">     
            <i class="fas fa-phone-alt contact-icon"></i>
            <span class="contact-text">075-123-4567</span>
          </div>

          <div class="contact-info">
            <i class="fas fa-map-marker-alt contact-icon"></i>
            <span class="contact-text">Bulevardul Stefan cel Mare si Sfant, Iasi</span>
          </div>

          <div class="contact-info">
            <i class="fas fa-envelope contact-icon"></i>
            <span class="contact-text">smarthomero@gmail.com</span>
</div>
          </div>
        </form>
      </div>
      </section>
    );
  }
}

export default Contact;