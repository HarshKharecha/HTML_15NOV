import { useState } from 'react'
import './App.css'
import StudentRegistration from './components/StudentRegistration';
import UserLogin from './components/UserLogin';
import ContactUs from './components/ContactUs';
import FeedbackForm from './components/FeedbackForm';
import EmployeeRegistration from './components/EmployeeRegistration';
import UserProfileUpdate from './components/UserProfileUpdate';
import EmailValidation from './components/EmailValidation';
import PasswordValidation from './components/PasswordValidation';
import LoginValidation from './components/LoginValidation';
import CollegeAdmission from './components/CollegeAdmission';
import HospitalAppointment from './components/HospitalAppointment';
import RestaurantBooking from './components/RestaurantBooking';
import JobApplication from './components/JobApplication';
import BankingForm from './components/BankingForm';
import ShoppingCheckout from './components/ShoppingCheckout';
import EventRegistration from './components/EventRegistration';
import LibraryMembership from './components/LibraryMembership';
import MultiStepForm from './components/MultiStepForm';
import IndustryCheckout from './components/IndustryCheckout';
import FormikRegistration from './components/FormikRegistration';
import FormikIndustryCheckout from './components/FormikIndustryCheckout';

function App() {
  return (
    <>
      <StudentRegistration />
      <UserLogin />
      <ContactUs />
      <FeedbackForm />
      <EmployeeRegistration />
      <UserProfileUpdate />
      <EmailValidation />
      <PasswordValidation />
      <LoginValidation />
      <CollegeAdmission />
      <HospitalAppointment />
      <RestaurantBooking />
      <JobApplication />
      <BankingForm />
      <ShoppingCheckout />
      <EventRegistration />
      <LibraryMembership />
      <MultiStepForm />
      <FormikRegistration />
      <IndustryCheckout />
      <FormikIndustryCheckout />
    </>
  );
}

export default App;