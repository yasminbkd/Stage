import React, { useState } from "react";
import Back from "../common/back/Back";
import IntershipCard from "./IntershipCard";
import { Link } from 'react-router-dom';
import Heading from "../common/heading/Heading";
import { Button, Modal, Form } from 'react-bootstrap';

const IntershipHome = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    titre: '',
    duree: '',
    competences: '',
    description: '',
    outils: '',
  });

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save the form data to the backend
    saveFormData(formData);
    toggleModal();
  };

  const saveFormData = (data) => {
    // Send a POST request to the backend to save the form data
    // Replace the URL and API endpoint with your backend route for saving data
    fetch("http://localhost:8080/stages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        console.log("Form data saved successfully!", data);
        // Refresh the stages list or update the state as needed
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <>
      <Back title='Découvrir les stages' />
      <button className='primary-btn' onClick={toggleModal}>COMMENCER MAINTENANT <i className='fa fa-long-arrow-alt-right'></i></button>
      <Modal show={showModal} onHide={toggleModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Stage Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="titre">
              <Form.Label>Titre</Form.Label>
              <Form.Control
                type="text"
                name="titre"
                value={formData.titre}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="duree">
              <Form.Label>Durée</Form.Label>
              <Form.Control
                type="text"
                name="duree"
                value={formData.duree}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="competences">
              <Form.Label>Compétences</Form.Label>
              <Form.Control
                type="text"
                name="competences"
                value={formData.competences}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="outils">
              <Form.Label>Outils</Form.Label>
              <Form.Control
                type="text"
                name="outils"
                value={formData.outils}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">Save</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <IntershipCard />
    </>
  )
}

export default IntershipHome;
