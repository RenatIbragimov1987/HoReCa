import React from 'react';

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import AboutCompany from '../AboutCompany/AboutCompany';
import DeliveryPayment from '../DeliveryPayment/DeliveryPayment';
import Contacts from '../Contacts/Contacts';
import Services from '../Services/Services';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppContent />
      </div>
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation();
  const isContactsPage = location.pathname === '/contacts';

  return (
    <>
      <Header isContactsPage={isContactsPage} />
      <Sidebar isContactsPage={isContactsPage} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/company" element={<AboutCompany />} />
        <Route path="/delivery" element={<DeliveryPayment />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer isContactsPage={isContactsPage} />
    </>
  );
}

export default App;
