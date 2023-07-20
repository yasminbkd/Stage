import React, { useState } from "react";
import Back4 from "../common/back/Back4";
import "./contact.css";
import axios from "axios";

const Contact = () => {
  const map =
    "https://maps.google.com/maps?q=Clevory+Training,+Charguia+1&z=15&output=embed";

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle the form submission
    console.log("Nom:", name);
    console.log("Email:", email);
    console.log("Sujet:", subject);
    console.log("Message:", message);

    axios
    .post("http://localhost:8080/contact", { name, email, subject, message })
    .then((response) => {
      console.log(response);
      setSuccessMessage(true); // Set the success message state to true on successful submission
      // Reset the form fields after successful submission
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    })
    .catch((err) => {
      console.log("Erreur :", err);
    });
  }
  return (
    <>
      <Back4 title="Contact us" />
      <section className="contacts padding">
        <div className="container shadow flexSB">
          <div className="left row">
            <iframe src={map}></iframe>
          </div>
          <div className="right row">
            <h1>Contactez-nous</h1>
            <p>Nous sommes ouverts à toute suggestion ou simplement pour discuter.</p>

            <div className="items grid2">
              <div className="box">
                <h4>ADRESSE:</h4>
                <p>8, Rue des Mineraux (Ex-Rue 8603) Charguia 1, 2035 Tunisia</p>
              </div>
              <div className="box">
                <h4>EMAIL:</h4>
                <p>contact@clevory.com</p>
              </div>
              <div className="box">
                <h4>TÉLÉPHONE:</h4>
                <p> +216 31 404 377</p>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="flexSB">
                <input
                  type="text"
                  name="name"
                  placeholder="Nom"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Sujet"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <textarea
                name="message"
                cols="30"
                rows="10"
                placeholder="Créez un message ici..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <button type="submit" className="primary-btn2">
                ENVOYER MESSAGE
              </button>
            </form>
          </div>
        </div>
      </section>
      {/* Popup message de succés */}
      {successMessage && (
        <div className="popup">
          <p>Message envoyé avec succès!</p>
        </div>
      )}
    </>
  );
};

export default Contact;
