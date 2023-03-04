import { postData } from '../common/crud.js'
import { handleSubmitForm } from '../common/formSubmit.js'
import { ENDPOINT_SIZE, SIZE_FORM } from './size.js'

// Call handleSubmitForm on form submit event
SIZE_FORM.submit((submitEvent) => {
  handleSubmitForm(submitEvent, SIZE_FORM, `${ENDPOINT_SIZE}/create`, "#size-alert", postData)
});
