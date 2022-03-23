import { FormGroup } from "@angular/forms";

export function invalidInputs(formgroup: FormGroup, validationMessages: any) {

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
        const nestedGroupMessages = invalidInputs(control, validationMessages);
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