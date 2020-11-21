let contactLocalStorageList;
window.addEventListener('DOMContentLoaded',(event) => {
    contactLocalStorageList = getLocalStorageContacts();
    document.querySelector(".person-count").textContent = contactLocalStorageList.length;
    createInnerHtml();
  });

  const createInnerHtml = () => {
    const headerHtml = ` 
      <th>Full Name</th>
      <th>Address</th>
      <th>City</th>
      <th>State</th>
      <th>Zip Code</th>
      <th>Phone Number</th>
    `;
    if(contactLocalStorageList.length == 0) return;
    document.querySelector(".person-count").textContent = contactLocalStorageList.length;
    let innerHtml = `${headerHtml}`;
    for(const contactData of contactLocalStorageList)
    {
    innerHtml = `${innerHtml}
    <tr>
        <td>${contactData._name}</td>
        <td>${contactData._address}</td>
        <td>${contactData._city}</td>
        <td>${contactData._state}</td>
        <td>${contactData._zip}</td>
        <td>${contactData._phone}</td>
        <td>
        <img id="${contactData._id}" onclick="remove(this)" alt="delete" 
                src="../assets/icons/delete-black-18dp.svg">
        <img id="${contactData._id}" alt="edit" onclick="update(this)"
                src="../assets/icons/create-black-18dp.svg">
        </td>
    </tr>
    `;
    }
  document.querySelector('#table-display').innerHTML = innerHtml;
  }

  const getLocalStorageContacts = () => {
    return localStorage.getItem("contactLocalStorageList") ?
    JSON.parse(localStorage.getItem('contactLocalStorageList')) : [];
  }

  const createContactJSON = () => {
    let contactListArray = [
    {
        _name: "Dhanshree Patil",
        _address: "New Street",
        _city: "Pune",
        _state: "Maharashtra",
        _zip: "234567",
        _phone: "917745080769",
    },
    {
        _name: "Rekha",
        _address: "Army Colony",
        _city: "Surat",
        _state: "Gujrat",
        _zip: "789065",
        _phone: "9876543210",
    }
    ];
    return contactListArray;
  }
  const remove = (node) => {
    let contact = contactLocalStorageList.find(contactData => contactData._id == node.id);
    if(!contact) return;
    const index = contactLocalStorageList.map(contactData => contactData._id).indexOf(contact._id);
    contactLocalStorageList.splice(index,1);
    document.querySelector(".person-count").textContent = contactLocalStorageList.length;
    localStorage.setItem("contactLocalStorageList",JSON.stringify(contactLocalStorageList));
    createInnerHtml();
}

const update = (node) =>{
  let contactToUpdate = contactLocalStorageList.find(contactData => contactData._id==node.id);
  if(!contactToUpdate) return;
  localStorage.setItem("editContact",JSON.stringify(contactToUpdate));
  window.location.replace(site_properties.add_contact_page); 
}

