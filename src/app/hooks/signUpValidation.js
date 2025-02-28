// validation.js

export const validateFname = (value) => {
    if (/^\s/.test(value)) {
      return "First name cannot start with a space.";
    }
  
    if (!value.trim()) {
      return "First name is required.";
    }
  
    if (/[^a-zA-Z\s]/.test(value)) {
      return "First name can only contain letters and spaces.";
    }
  
    return undefined; // No errors
  };
  
  export const validateLname = (value) => {
    if (/^\s/.test(value)) {
      return "Last name cannot start with a space.";
    }
  
    if (!value.trim()) {
      return "Last name is required.";
    }
  
    if (/[^a-zA-Z\s]/.test(value)) {
      return "Last name can only contain letters and spaces.";
    }
  
    return undefined;
  };
  
  export const validatePhone = (value) => {
    const cleanedValue = value.replace(/[^0-9]/g, "");
  
    if (!/^\d{12}$/.test(cleanedValue)) {
      return "Invalid phone number. It must be 12 digits.";
    }
  
    return undefined;
  };
  
  export const validateCity = (value) => {
    if (/^\s/.test(value)) {
      return "City name cannot start with a space.";
    }
  
    return undefined;
  };
  
  export const validateDistrict = (value) => {
    if (!value || value.trim() === '') {
      return "District is required.";
    }
    return undefined;
  };
  
  export const validateStreet = (value) => {
    if (/^\s/.test(value)) {
      return "Street name cannot start with a space.";
    }
  
    if (!value.trim()) {
      return "Street name is required.";
    }
  
    if (/[^a-zA-Z0-9\s,.-]/.test(value)) {
      return "Street name can only contain letters, numbers, spaces, commas, periods, and dashes.";
    }
  
    return undefined;
  };
  
  export const validatePin = (value) => {
    if (!/^\d{6}$/.test(value)) {
      return "Invalid pin code. It must be 6 digits.";
    }
  
    return undefined;
  };
  