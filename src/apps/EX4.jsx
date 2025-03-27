import '../css/EX4.css';
import { useState } from 'react';

function EX4() {
  const [formData, setFormData] = useState({
    name: null,
    email: null,
    payment: null,
    promotions: false,
    location: null
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    
    // Convert FormData to object
    const formValues = {
      name: data.get('name'),
      email: data.get('email'),
      payment: data.get('payment'),
      promotions: data.get('promotions') === 'on', // checkboxes return 'on' when checked
      location: data.get('location')
    };

    setFormData(formValues);
  };

  return (
    <div id='ex4-container'>
      <form id='ex4-form' onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Name: </label>
          <input 
            type='text' 
            id='name' 
            name='name' 
          />
        </div>
        
        <div>
          <label htmlFor='email'>Email: </label>
          <input 
            type='email' 
            id='email' 
            name='email' 
          />
        </div>
        
        <div id='ex4-form-checkbox-container'>
          <p>
            <label>
              <input type='radio' name='payment' value='cash' /> Cash
            </label>
            
            <label>
              <input type='radio' name='payment' value='credit' /> Credit Card
            </label>
            
            <label>
              <input type='radio' name='payment' value='gpay' /> Google Pay
            </label>
            
            <label>
              <input type='radio' name='payment' value='apple' /> Apple Pay
            </label>            
          </p>
        </div>
        <label>
          <input type='checkbox' name='promotions'/> 
          Sign me up for special promotions
        </label>
        <label>
          Preferred Location: 
          <select name='location'>
            <option value='' disabled>Select an option</option>
            <option value='OC'>OC</option>
            <option value='LA'>LA</option>
            <option value='SD'>SD</option>
            <option value='SJ'>SJ</option>
          </select>
        </label>
        <input type='submit'/>
      </form>
      
      <table>
        <thead>
          <tr id='ex4-keyvalue-container'>
            <td id='ex4-key-label'>Key</td>
            <td id='ex4-value-label'>Value</td>
          </tr>
        </thead>
        <tbody>
          <tr id='ex4-name-container'>
            <td id='ex4-name-label'>name</td>
            <td id='ex4-name-output'>{formData.name ?? 'null'}</td>
          </tr>
          <tr id='ex4-email-container'>
            <td id='ex4-email-label'>email</td>
            <td id='ex4-email-output'>{formData.email ?? 'null'}</td>
          </tr>
          <tr id='ex4-payment-container'>
            <td id='ex4-payment-label'>payment</td>
            <td id='ex4-payment-output'>{formData.payment ?? 'null'}</td>
          </tr>
          <tr id='ex4-promotion-container'>
            <td id='ex4-promotion-label'>promotion</td>
            <td id='ex4-promotion-output'>{formData.promotions ? 'ON' : 'OFF'}</td>
          </tr>
          <tr id='ex4-location-container'>
            <td id='ex4-location-label'>location</td>
            <td id='ex4-location-output'>{formData.location ?? 'null'}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default EX4;