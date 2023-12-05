'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


const CreateContact = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [img_url, setImg] = useState('')
  const [contact, setContacts] = useState([]);

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    
    if (Array.isArray(storedContacts)) {
      setContacts((prevContacts) => [...prevContacts, ...storedContacts]);
    } else {
      console.error('Invalid data.');
    }
  }, []);
  

  const generateId = () => Math.round(Math.random() * 100000000);

  const createContact = () => {
    const contact = {
      id: generateId(),
      name,
      email,
      phone,
      img_url,
   };

    console.log('Creating contact:', contact);

    setContacts((prevContacts) => [...prevContacts, contact]);

  };

  const addContact = () => {
    const contact = {
      id: generateId(),
      name,
      email,
      phone,
      img_url,
    };
    if (contact.name) {
      createContact(contact);
      alert(`Created contact for ${contact.name}`);
    } else {
      alert('Please enter a name');
    }
    setName('');
    setEmail('');
    setPhone('');
    setImg('');
    router.push('/contacts');
  };
  return (
    <div>
      <div className="mx-auto form">
        <div className="row">
          <Link href="/contacts">
            <div className="col-1">
              <button className="btn-primary back-button">Back</button>
            </div>
          </Link>
          <h1 className="col-10">Add contact here</h1>
        </div>
        <p>Name:</p>
        <input value={name} className="form-control mx-auto" placeholder="Name" onChange={event => setName(event.target.value)} />
        <p>Email:</p>
        <input value={email} className="form-control mx-auto" placeholder="Email" onChange={event => setEmail(event.target.value)}></input>
        <p>Phone Number:</p>
        <input value={phone} className="form-control mx-auto" placeholder="Phone Number" onChange={event => setPhone(event.target.value)}></input>
        <p>Image URL:</p>
        <input value={img_url} className="form-control mx-auto" placeholder="Image Url" onChange={event => setImg(event.target.value)}></input>
        <button onClick={addContact} className="btn-primary create-contact" type="button">
          Create Contact
        </button>
      </div>
    </div>
  );
};
export default CreateContact;