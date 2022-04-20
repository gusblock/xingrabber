
const form  = document.getElementById('form');

/* chrome.tabs.sendMessage(
  content.js,
  {from: 'options', subject: 'form'},
  // ...also specifying a callback to be called 
  //    from the receiving end (content script).
  setcontactform); */
/*

  document.getElementById('form').onsubmit = function () {
    let muser = document.getElementById('form');
    console.log('Formular wird ausgefüllt');
    if ( muser.value == '') {
        muser.focus();
        return false;
    }
}

form.addEventListener('submit', (event) => {
    // handle the form data
    var contactform = {
      fname: form.elements['fname'],
      mname:form.elements['lname'],
      lname: form.elements['lname'],
      jtitle: form.elements['jobtitle'],
      cmpany: form.elements['company'],
      dort: form.elements['place']
    }
    console.log(contactform)
    save_options(contactform)
});



function save_options(contactform) {
  var former = document.getElementById('signup').value;
  chrome.storage.sync.set({
    forms: former
  }, function() {
    console.log('Value is set to ' + former);
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    // Update status to let user know options were saved.
    setTimeout(function() {
      forms.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    forms: 'red',
  }, function(items) {
    console.log('Value currently is ' + items.key);
    document.getElementById('forms').textContent = items.forms;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',save_options); 

*/
