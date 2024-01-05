import React from 'react';
// import { validateEmail } from '../utils/helpers';

// function ContactForm() {
//     const [formState, setFormState] = useState({ name: '', email: '', message: '' });
//     const { name, email, message } = formState;
//     const [errorMessage, setErrorMessage] = useState('');

//     function handleChange(e) {
//         if (e.target.name === 'email') {
//             const isValid = validateEmail(e.target.value);
//             // isValid conditional statement
//             if (!isValid) {
//                 setErrorMessage('Your email is invalid.');
//             } else {
//                 setErrorMessage('');
//             }
//         } else {
//             if (!e.target.value.length) {
//                 setErrorMessage(`${e.target.name} is required.`);
//             } else {
//                 setErrorMessage('');
//             }
//         }
//         setFormState({ ...formState, [e.target.name]: e.target.value });
//     }

//     function handleSubmit(e) {
//         e.preventDefault();
//         console.log(formState);
//     }

//     return (
//         <section>
//             <h1 data-testid="h1tag">Contact me</h1>
//             <form id="contact-form" onSubmit={handleSubmit}>
//                 <div>
//                     <label htmlFor="name">Name:</label>
//                     <input type="text" value={name} onChange={handleChange} name="name" />
//                 </div>
//                 <div>
//                     <label htmlFor="email">Email address:</label>
//                     <input type="email" value={email} onChange={handleChange} name="email" />
//                 </div>
//                 <div>
//                     <label htmlFor="message">Message:</label>
//                     <textarea name="message" value={message} onChange={handleChange} rows="5" />
//                     {errorMessage && (
//                         <div>
//                             <p className="error-text">{errorMessage}</p>
//                         </div>
//                     )}
//                     <button data-testid="button" type="submit">Submit</button>
//                 </div>
//             </form>
//         </section>
//     )
// }

// export default ContactForm;

function ContactLinks() {
    return (
      <section>
        <h2>Contact Me</h2>
        <ul>
          <li>
            <a href="mailto:william.santee@gmail.com">Email: william.santee@gmail.com</a>
          </li>
          <li>
            <a href="https://github.com/willsan0723" target="_blank" rel="noopener noreferrer">
              GitHub: github.com/willsan0723
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/william-santee-97568351/" target="_blank" rel="noopener noreferrer">
              LinkedIn: linkedin.com/in/william-santee-97568351
            </a>
          </li>
        </ul>
      </section>
    );
  }
  
  export default ContactLinks;