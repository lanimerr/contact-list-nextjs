'use client'
import React, { useState }from 'react'
import _ from 'lodash';
import { useRouter } from 'next/navigation';
import { PropTypes } from 'prop-types';


const ContactId = () => {
  const [contacts, setContacts] = useState([
    {id: 70219577,
			name: "Albert Einstein",
			image_url: "https://en.wikipedia.org/wiki/Albert_Einstein#/media/File:Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
			email: "aeinstein@example.com",
			phone_number: "15555555555"},
    {id: 86316094,
			name: "Luke Combs",
			image_url: "https://th.bing.com/th/id/OIP.PNaqhzxnVdKIIGqQZUQedgHaHa?rs=1&pid=ImgDetMain",
			email: "l_combs2048@example.com",
			phone_number: "12345678901"},
    {id: 86316094,
			name: "P!nk",
			image_url: "https://th.bing.com/th/id/OIP.AEQTNq9old7qgVfneEOe7QHaJ3?rs=1&pid=ImgDetMain",
			email: "p!nk@example.com",
			phone_number: "83629036172"},

  ]);

  return (
    <div>
      <h2>Contact Info</h2>
      <ul>
        {contacts.map((contact) =>(
          <li key = {contact.id}>
          {contact.name} - {contact.image_url} - {contact.email} - {contact.phone_number}
          </li>
        ))}
      </ul>
    </div>
  )
};

export default ContactId;

