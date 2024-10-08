"use client";

import { db } from './firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import React, { useState } from 'react';

async function addDataToFirestore(name, email, message) {
  try {
    const docRef = await addDoc(collection(db, "messages"), {
      name: name,
      email: email,
      message: message,
    });
    console.log("Document written with ID: ", docRef.id);
    return true;
  } catch (e) {
    console.log("Error adding document: ", e);
    return false;
  }
}

export default function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const added = await addDataToFirestore(name, email, message);
    if (added) {
      setName('');
      setEmail('');
      setMessage('');
      alert('Data added to Firestore database');
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold text-center">
        Add Data to Firestore Database
      </h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name:</label>
          <input 
            type="text" 
            id="name" 
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder="Max Mustermann"
          />
        </div>
       
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
          <input 
            type="text" 
            id="email" 
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Max.Mustermann@gmail.com"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message:</label>
          <textarea
            rows={5}
            id="message" 
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            placeholder="Hallo, ich möchte einen neuen Account erstellen."
          />      
        </div>

        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </main>
  );
} 