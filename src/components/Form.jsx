import { useState, useEffect } from 'react';
import './Form.css';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    region: '+351',
    company: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    submit: ''
  });

  const regions = [
    { code: '+48', flag: '🇵🇱', country: 'Poland', digits: 9 },
    { code: '+44', flag: '🇬🇧', country: 'United Kingdom', digits: 10 },
    { code: '+1', flag: '🇺🇸', country: 'United States', digits: 10 },
    { code: '+49', flag: '🇩🇪', country: 'Germany', digits: 11 },
    { code: '+33', flag: '🇫🇷', country: 'France', digits: 9 },
    { code: '+39', flag: '🇮🇹', country: 'Italy', digits: 10 },
    { code: '+34', flag: '🇪🇸', country: 'Spain', digits: 9 },
    { code: '+31', flag: '🇳🇱', country: 'Netherlands', digits: 9 },
    { code: '+32', flag: '🇧🇪', country: 'Belgium', digits: 9 },
    { code: '+45', flag: '🇩🇰', country: 'Denmark', digits: 8 },
    { code: '+46', flag: '🇸🇪', country: 'Sweden', digits: 9 },
    { code: '+47', flag: '🇳🇴', country: 'Norway', digits: 8 },
    { code: '+358', flag: '🇫🇮', country: 'Finland', digits: 9 },
    { code: '+43', flag: '🇦🇹', country: 'Austria', digits: 10 },
    { code: '+41', flag: '🇨🇭', country: 'Switzerland', digits: 9 },
    { code: '+351', flag: '🇵🇹', country: 'Portugal', digits: 9 },
    { code: '+353', flag: '🇮🇪', country: 'Ireland', digits: 9 },
    { code: '+420', flag: '🇨🇿', country: 'Czech Republic', digits: 9 },
    { code: '+421', flag: '🇸🇰', country: 'Slovakia', digits: 9 },
    { code: '+36', flag: '🇭🇺', country: 'Hungary', digits: 9 },
    { code: '+30', flag: '🇬🇷', country: 'Greece', digits: 10 },
    { code: '+40', flag: '🇷🇴', country: 'Romania', digits: 9 },
    { code: '+359', flag: '🇧🇬', country: 'Bulgaria', digits: 9 },
    { code: '+385', flag: '🇭🇷', country: 'Croatia', digits: 9 },
    { code: '+386', flag: '🇸🇮', country: 'Slovenia', digits: 8 },
  ];

  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const FORM_URL = import.meta.env.VITE_FORM_URL;

  useEffect(() => {
    let timeoutId;

    if (status === 'Form submitted successfully!') {
      setIsButtonDisabled(true);
      timeoutId = setTimeout(() => {
        setStatus('');
        setIsButtonDisabled(false);
      }, 5000);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [status]);

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (value.trim().length < 2) {
          return 'Name must be at least 2 characters long';
        }
        if (!/^[a-zA-Z\s]*$/.test(value)) {
          return 'Name should only contain letters and spaces';
        }
        if (value.trim().split(/\s+/).length !== 2) {
          return 'Please enter your full name';
        }
        break;

      case 'email':
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          return 'Please enter a valid email address';
        }
        break;

      case 'phone':
        const selectedRegion = regions.find(r => r.code === formData.region);
        const digitsOnly = value.replace(/\D/g, '');

        if (!digitsOnly) {
          return 'Phone number is required';
        }
        if (digitsOnly.length !== selectedRegion.digits) {
          return `Phone number must be ${selectedRegion.digits} digits for ${selectedRegion.country}`;
        }
        if (!/^\d+$/.test(digitsOnly)) {
          return 'Phone number should only contain digits';
        }
        break;

      case 'company':
        if (value && value.length < 2) {
          return 'Company name must be at least 2 characters long';
        }
        break;
    }
    return '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    Object.keys(formData).forEach(field => {
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
        isValid = false;
      }
    });

    setErrors(prev => ({
      ...prev,
      ...newErrors
    }));

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(prev => ({ ...prev, submit: '' }));

    if (!validateForm()) {
      setErrors(prev => ({
        ...prev,
        submit: 'Please fix the errors above before submitting'
      }));
      return;
    }

    setIsSubmitting(true);
    setStatus('Submitting...');

    try {
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = FORM_URL;
      form.target = '_blank'; 
      form.style.display = 'none';

      const fullPhoneNumber = `${formData.region}${formData.phone}`;

      const formFields = {
        'entry.1900654331': formData.name,
        'entry.497331105': formData.email,
        'entry.645117345': fullPhoneNumber,
        'entry.889127360': formData.company
      };

      Object.entries(formFields).forEach(([key, value]) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = value;
        form.appendChild(input);
      });

      document.body.appendChild(form);
      form.submit();
      document.body.removeChild(form);

      setStatus('Form submitted successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        region: '+351',
        company: ''
      });
      setErrors({
        name: '',
        email: '',
        phone: '',
        company: '',
        submit: ''
      });

    } catch (error) {
      console.error('Form submission error:', error);
      setErrors(prev => ({
        ...prev,
        submit: 'Error submitting form. Please try again.'
      }));
      setStatus('');
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <section className="form" id="form">
      <div className="form-content">
        <h2>Register for the Event</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
              disabled={isSubmitting}
              className={errors.name ? 'error' : ''}
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              disabled={isSubmitting}
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="form-group phone-group">
            <label htmlFor="phone">Phone Number *</label>
            <div className="phone-input">
              <select
                name="region"
                value={formData.region}
                onChange={handleChange}
                className="region-select"
                disabled={isSubmitting}
              >
                {regions.map((region) => (
                  <option key={region.code} value={region.code}>
                    {region.flag} {region.code} ({region.country})
                  </option>
                ))}
              </select>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Enter your phone number"
                disabled={isSubmitting}
                className={errors.phone ? 'error' : ''}
              />
            </div>
            {errors.phone && <span className="error-message">{errors.phone}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="company">Company (Optional)</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Enter your company name"
              disabled={isSubmitting}
              className={errors.company ? 'error' : ''}
            />
            {errors.company && <span className="error-message">{errors.company}</span>}
          </div>

          {errors.submit && <div className="submit-error">{errors.submit}</div>}

          <button
            type="submit"
            className="submit-button"
            disabled={isSubmitting || isButtonDisabled}
          >
            {status ? status : 'Register Now'}
          </button>
        </form>
      </div>
    </section>
  );
}
export default Form;