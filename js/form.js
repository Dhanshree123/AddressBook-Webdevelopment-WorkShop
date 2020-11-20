window.addEventListener('DOMContentLoaded', (event) => {
  const name = document.querySelector('#name'); 
  const textError = document.querySelector('.text-error');
  name.addEventListener('input', function () {
    let nameList = name.value.split(" ");
    let nameRegex = RegExp('^[A-Z][a-z]{2,}$');
    if (nameList.length == 0) {
      textError.textContent = "";
      return;
    }
    if (nameList.length == 2) {
        if(!nameRegex.test(nameList[0]))
        textError.textContent = 'Invalid Name';
        if(!nameRegex.test(nameList[1]))
        textError.textContent = 'Invalid Name';
    }
    else {
      if(!nameRegex.test(nameList[0]))
        textError.textContent = 'Invalid Name';
      else
        textError.textContent = "";
    }
});

    const address = document.querySelector("#address");
    const addressError = document.querySelector('.address-error')
    address.addEventListener('input', function() {
        let addressRegex = RegExp('^[A-Za-z, 0-9]{3,}$');
        let addressWords = address.value.split(" ");
        if(addressWords.length>1) {
            for(words of addressWords) {
                if(!addressRegex.test(words))   
                    addressError.textContent = "Minimum Length Should be 3";
                else
                    addressError.textContent = "";
            }
        }
        else {
            addressError.textContent = "Add multiple words";
        }
        
    })

    const phNo = document.querySelector('#phoneNumber');
    const phoneError = document.querySelector('.phone-error');
    phNo.addEventListener('input', function() {
        let phoneRegex1 = RegExp('^[1-9]{1}[0-9]{9}$');
        let phoneRegex2 = RegExp('^[0-9]{2}[1-9]{1}[0-9]{9}$');
        let phoneRegex3 = RegExp('^[+]{1}[0-9]{2}[1-9]{1}[0-9]{9}$');
        if(phoneRegex1.test(phNo.value) || phoneRegex2.test(phNo.value) || phoneRegex3.test(phNo.value))
            phoneError.textContent = "";
        else 
            phoneError.textContent = "Invalid Phone Number";
    })

});

const save = (event) => {
  let contactData = createContact();
  let jsonObject = JSON.stringify(contactData);
  alert(jsonObject);
}

const createContact = () => {
  let contactData = new Contact();
  let names = getInputValueById('#name').split(" ");
  contactData.firstName = names[0];
  contactData.lastName = names[1];
  contactData.address = getInputValueById('#address');
  contactData.city = getInputValueById('#city');
  contactData.state = getInputValueById('#state');
  contactData.zip = getInputValueById('#zip');
  contactData.phone = getInputValueById('#phoneNumber');
  return contactData;
}

const getInputValueById = (id) => {
  let value = document.querySelector(id).value;
  return value;
}
