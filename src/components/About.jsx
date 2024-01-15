import React, { useEffect, useState } from 'react'; 

function Form() {
  const initialValues = {
    FirstName: '',
    LastName: '',
    email: '',
    PhoneNumber: '',
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    alert(JSON.stringify(formValues, undefined, 2));
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors, isSubmit]);

  const validate = (values) => {
    const errors = {};

    if (!values.FirstName) {
      errors.FirstName = 'First name is required';
    }

    if (!values.LastName) {
      errors.LastName = 'Last name is required';
    }

    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.PhoneNumber) {
      errors.PhoneNumber = 'Phone number is required';
    } else if (values.PhoneNumber.length !== 10) {
      errors.PhoneNumber = 'Phone number must be 10 digits';
    }

    return errors;
  };

  return (
    <div className='form-container'>
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className='success'>Success</div>
      ) : (
        <div></div>
      )}
      <form onSubmit={handleSubmit}>
        <div className='form-field'>
          <label htmlFor='FirstName'>First Name</label>
          <input
            type='text'
            name='FirstName'
            placeholder='First Name'
            value={formValues.FirstName}
            onChange={handleChange}
          />
          <p>{formErrors.FirstName}</p>
        </div>

        <div className='form-field'>
          <label htmlFor='LastName'>Last Name</label>
          <input
            type='text'
            name='LastName'
            placeholder='Last Name'
            value={formValues.LastName}
            onChange={handleChange}
          />
          <p>{formErrors.LastName}</p>
        </div>

        <div className='form-field'>
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            name='email'
            placeholder='Email'
            value={formValues.email}
            onChange={handleChange}
          />
          <p>{formErrors.email}</p>
        </div>

        <div className='form-field'>
          <label htmlFor='PhoneNumber'>Phone Number</label>
          <input
            type='number'
            name='PhoneNumber'
            placeholder='Phone Number'
            value={formValues.PhoneNumber}
            onChange={handleChange}
          />
          <p>{formErrors.PhoneNumber}</p>
        </div>

        <button type='submit'>Register</button>
      </form>
    </div>
  );
}

export default Form;
