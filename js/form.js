window.addEventListener('DOMContentLoaded', (event) => {
  const name = document.querySelector('#name'); 
  const textError = document.querySelector('.text-error');
  name.addEventListener('input', function () {
    let name = document.querySelector('#name').value;
    try{
      console.log(name);
      (new Contact()).name = name;
      textError.textContent = "";
    }
  catch(e){
      textError.textContent = e;
  }

});
  

    const address = document.querySelector("#address");
    const addressError = document.querySelector('.address-error')
    address.addEventListener('input', function() {
      let address = document.querySelector('#address').value;
      try {
        (new Contact()).address = address;
        addressError.textContent = "";
    }
    catch (e) {
        addressError.textContent = e;
    }
        
    })

    const phNo = document.querySelector('#phoneNumber');
    const phoneError = document.querySelector('.phone-error');
    phNo.addEventListener('input', function() {
      let phone = document.querySelector('#phoneNumber').value;
      try{
        (new Contact()).phone = phoneNumber;
        phoneError.textContent = "";
      }catch(e){
        phoneError.textContent = e;
      }
    });

});

const save = (event) => {
  try{
  let contactData = createContact();
  alert(contactData.toString());
  }
  catch(e){
  alert(e);
  }
}

const createContact = () => {
  let contactData = new Contact();
  contactData.name = getInputValueById('#name');
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
