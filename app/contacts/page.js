'use client'
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import Link from 'next/link';



	const contacts = [
		{
			id: 70219577,
			name: "Albert Einstein",
			image_url: "https://en.wikipedia.org/wiki/Albert_Einstein#/media/File:Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
			email: "aeinstein@example.com",
			phone_number: "15555555555"
		},

    {
			id: 86316094,
			name: "Luke Combs",
			image_url: "https://th.bing.com/th/id/OIP.PNaqhzxnVdKIIGqQZUQedgHaHa?rs=1&pid=ImgDetMain",
			email: "l_combs2048@example.com",
			phone_number: "12345678901"
		},

    {
			id: 86316094,
			name: "P!nk",
			image_url: "https://th.bing.com/th/id/OIP.AEQTNq9old7qgVfneEOe7QHaJ3?rs=1&pid=ImgDetMain",
			email: "p!nk@example.com",
			phone_number: "83629036172"
		}
	]


const ContactRow = (contact) => (
  <tr key={contact?.id}>
    <td>
      <Link href={`/contacts/${contact?.id}`}>
        <img src={contact?.url} alt={contact?.name} />
      </Link>
    </td>
    <td>
      <Link href={`/contacts/${contact?.id}`}> {contact?.name} </Link>
    </td>
    <td>{contact?.phone_number}</td>
    <td>{contact?.email}</td>
  </tr>
);

export default function Contacts() {
  return (
    <div>
      <button type="button" className="btn btn-primary add-contact-btn">
      
      </button>
      <div className="row">
        <table>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Email</th>
          </tr>
          <tbody>{contacts?.map((contact) => ContactRow(contact))}</tbody>
        </table>
      </div>
    </div>
  );
}

contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
};