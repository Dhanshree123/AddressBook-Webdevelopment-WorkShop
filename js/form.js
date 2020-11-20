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
        (new Contact()).phone = phoneNumber.value;
        phoneError.textContent = "";
      }catch(e){
        phoneError.textContent = e;
      }
    });

});

const save = (event) => {
  try{
  let contactData = createContact();
  createAndUpdateStorage(contactData);
  alert(contactData.toString());
  }
  catch(e){
  alert(e);
  }
}

const createContact = () => {
  let contactLocalStorageList = JSON.parse(localStorage.getItem("contactLocalStorageList"));
  let max = 0;
  if(contactLocalStorageList){
      for(const contactData of contactLocalStorageList){
          if(max<contactData._id)
          max = contactData._id;
      }
  }
  let contactData = new Contact();
  contactData.id = parseInt(max) + 1;
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

function createAndUpdateStorage(contactData) {

  let contactLocalStorageList = JSON.parse(localStorage.getItem("contactLocalStorageList"));

  if(contactLocalStorageList != undefined) {
    contactLocalStorageList.push(contactData);
  } else {
    contactLocalStorageList = [contactData];
  }
  localStorage.setItem("contactLocalStorageList", JSON.stringify(contactLocalStorageList));
}

const resetForm = () => {

  setValue('#name','');
  setValue('#address','');
  setSelectedIndex('#city',0);
  setSelectedIndex('#state',0);
  setValue('#zip','');
  setValue('#phoneNumber','');
}

const setValue = (id,value) => {
const element = document.querySelector(id);
element.value = value;
}

const setSelectedIndex = (id,index) => {
const element = document.querySelector(id);
element.selectedIndex = index;
}
