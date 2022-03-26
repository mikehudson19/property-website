import { FormGroup } from "@angular/forms";

export function invalidInputs(formgroup: FormGroup) {

    let messages = {};
    for (const input in formgroup.controls) {
      const control = formgroup.controls[input];

      // If the passwords don't match, assign error message.
      if (control instanceof FormGroup && control.errors) {
        Object.keys(control.errors).map((messageKey) => {
          messages[input] = validationMessages[input][messageKey];
        });
      }

      // If the password field doesn't meet the requirements, assign error message.
      if (control instanceof FormGroup) {
        const nestedGroupMessages = invalidInputs(control);
        Object.assign(messages, nestedGroupMessages);
      }

      // If any of the other fields don't meet the requirements, assign error message.
      if (validationMessages[input]) {
        messages[input] = ""; 
        if (control.errors && (control.dirty || control.touched)) {
          console.log("validationMessages",validationMessages);

          Object.keys(control.errors).map((messageKey) => {
            messages[input] = validationMessages[input][messageKey];
          });
        }
      }
    }
    return messages;
  }

  
const validationMessages: {} = {
  firstName: {
    required: "A first name is required.",
    minlength: "Your first name need to be at least 1 character long.",
    multipleSpaceValidator: "Your first name cannot contain multiple spaces.",
    maxlength: "Your first name cannot be longer than 100 characters",
    noNumbers: "Your first name cannot contain any numbers",
    noSpecialChar: "Your first name cannot contain any special characters",
  },
  lastName: {
    required: "Your last name is required",
    minlength: "Your last name needs to be at least 3 characters long.",
    multipleSpaceValidator: "Your last name cannot contain multiple spaces.",
    maxlength: "Your last name cannot be longer than 100 characters",
    noNumbers: "Your last name cannot contain any numbers",
    noSpecialChar: "Your last name cannot contain any special characters",
  },
  email: {
    required: "Your email address is required.",
    minlength: "Your email address must be at least 6 characters long",
    noSpaceValidator: "Your email address cannot contain spaces.",
    email: "This must be a valid email address.",
    maxlength: "Your email cannot be longer than 100 characters",
  },
  contactNumber: {
    required: "Your contact number is required.",
    onlyNumbers: "Your contact number can only contain numbers",
  },
  currentPassword: {
    required: "Your current password is required"
  },
  passwords: {
    match: "Your passwords must match",
  },
  password: {
    required: "A password is required",
    minlength: "Your password needs to be at least 8 characters long",
    maxlength: "Your password cannot be longer than 100 characters",
    noSpaceValidator: "Your password cannot contain spaces",
    passwordNumber: "Your password must contain at least one number",
    passwordUpperCase:
      "Your password must contain at leat one uppercase character",
  },
  confirmPass: {
    required: "Please confirm your password",
  },
  name: {
    required: "Your name is required."
  },
  message: {
    required: "A message is required",
  },
  title: {
    required: "An advert title is required.",
    minlength: "Your advert title must be at least 10 characters long.",
    maxlength: "Your advert title cannot be longer than 100 characters",
    multipleSpaceValidator: "Your advert title cannot have consecutive spaces"
  },
  province: {
    required: "Your province is required.",
  },
  city: {
    required: "Your city is required.",
  },
  details: {
    required: "Advert details are required.",
    minlength: "Your advert details need to be at least 10 characters long.",
    maxlength: "Your advert details cannot be longer than 1000 characters.",
    multipleSpaceValidator: "Your advert details cannot have consecutive spaces"
  },
  price: {
    required: "An advert price is required.",
    min: "The minimum advert price is R10 000",
    max: "The maximum advert price is R100,000,000",
    noSpaceValidator: "Your price cannot contain spaces",
    onlyNumbers: "Your price can only contain numbers"
  },
  bedrooms: {
    required: "Bedrooms are required",
    min: "Cannot be less than 0"
  },
  bathrooms: {
    required: "Bathrooms are required",
    min: "Cannot be less than 0"
  },
  parkingSpaces: {
    required: "Parkings are required",
    min: "Cannot be less than 0"
  }
};