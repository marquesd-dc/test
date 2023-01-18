import contacts from './contacts.json' assert {type: 'json'};

let totalContacts = contacts.length;
document.getElementById("totalContacts").innerHTML = "Total: " + totalContacts;

let contact = "";
/*** Note: put in function? ***/              
for (let i = 0; i < contacts.length; i++) {
    let contactObj = contacts[i];    
    contact += '<li class="contact-item cf">'+ '<div class="contact-details">';
    contact += `<img class="avatar" src="${contactObj.image}">`;
    contact += '<h3>' + contactObj.name + '</h3>';
    contact += '<span class="email">' + contactObj.email + '</span>' + '</div>';
    contact += '<div class="joined-details">' + '<span class="date">' + contactObj.joined + '</span>' + '</div>' +'</li>';
}

document.getElementById("contactList").innerHTML = contact;


let pages = Math.ceil(contacts.length  / 10);
let buttons = '';
for (var j = 1; j <= pages;j++) {
    buttons += '<li class="pagination">' + '<a>' + j + '</a>'+'</li>';

}

document.getElementById("pages").innerHTML = buttons;