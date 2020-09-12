const inputEmail = document.querySelector('#inputEmail')
const inputName = document.querySelector('#inputName')
const inputPhone = document.querySelector('#inputPhone')
const inputMessage = document.querySelector('#inputMessage')
const submitBtn = document.querySelector('button')

const checkEmpty = (e) => {
   const value = e.target.value
   if (value == '') {
      e.target.classList.add('is-invalid')
   }
}

const nameValidate = (e) => {
   checkEmpty(e)
}

const emailValidate = (e) => {
   const value = e.target.value
   const EmailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

   if (!EmailRegex.test(String(value).toLocaleLowerCase())) {
      e.target.classList.add('is-invalid')
   }
}

const phoneValidate = (e) => {
   const value = e.target.value
   // const phoneRegex = /^(?=\d{8}$)(010|011|012)\d+/
   const phoneRegex = /^(010|011|012)\d{8}$/
   if (!phoneRegex.test(value)) {
      e.target.classList.add('is-invalid')
   }
}

const messageValidate = (e) => {
   checkEmpty(e)
}


inputName.addEventListener('blur', nameValidate)
inputEmail.addEventListener('blur', emailValidate)
inputPhone.addEventListener('blur', phoneValidate)
inputMessage.addEventListener('blur', messageValidate)

const clearErr = (e) => {
   if (e.target.classList.contains('is-invalid')) {
      e.target.classList.remove('is-invalid')
   }
}

inputName.addEventListener('focus', clearErr)
inputEmail.addEventListener('focus', clearErr)
inputPhone.addEventListener('focus', clearErr)
inputMessage.addEventListener('focus', clearErr)