import React from 'react';
import Base from "../components/Base";
import userContext from "../context/userContext";

const About = () => {
  return (
    <userContext.Consumer>
      {(object) => (
        <Base>
          <div style={{
            backgroundColor: '#f5f5f5',
            padding: '20px',
            borderRadius: '8px',
            maxWidth: '800px',
            width: '80%',
            margin: '20px auto',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
          }}>
            <h1 style={{ textAlign: 'center', fontSize: '2em', marginBottom: '20px' }}>About Us</h1>
            <h2 style={{ fontSize: '1.3em', color: '#333' }}>
            Welcome: <span style={{ color: 'coral' }}>{object.user.login && object.user.data.name}</span>
            </h2>
            <p style={{ fontSize: '1em', lineHeight: '1.4', color: '#555' }}>
              We are building a blog website where users can upload and share their study notes. Our blog covers various computer science subjects, including:
            </p>
            <ul style={{ fontSize: '1em', lineHeight: '1.4', color: '#555' }}>
              <li><strong>Database Management Systems (DBMS):</strong> Detailed notes on database design, SQL, normalization, transactions, and more.</li>
              <li><strong>Object-Oriented Programming (OOP):</strong> Comprehensive notes on OOP concepts, principles, design patterns, and programming languages.</li>
              <li><strong>Operating Systems (OS):</strong> In-depth notes on OS concepts, processes, threads, memory management, file systems, and more.</li>
              <li><strong>Networking:</strong> Extensive notes on network protocols, models, communication, security, and more.</li>
            </ul>
            <p style={{ fontSize: '1em', lineHeight: '1.4', color: '#555' }}>
              Our mission is to provide high-quality study materials that help students understand complex concepts with ease. Join us in creating a rich resource for learners everywhere.
            </p>
          </div>
        </Base>
      )}
    </userContext.Consumer>
  );
};

export default About;
