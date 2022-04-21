

function logSubmit(event) {
  event.preventDefault();
}

function savevariables(){
  var contactform = {
    fname: document.getElementById('fname').value,
    lname: document.getElementById('lname').value,
    jtitle: document.getElementById('jobtitle').value,
    dort: document.getElementById('place').value
  }
  document.getElementById('optionsave').textContent = contactform.fname;
  console.log(contactform);
  return contactform;
} 



form.addEventListener('submit', logSubmit);
form.addEventListener('submit', savevariables);
form.addEventListener('submit', sendmsg);

function sendmsg(){
chrome.runtime.sendMessage(
  {from: 'options', subject: 'optionsset', msg: savevariables},
  // ...also specifying a callback to be called 
  //    from the receiving end (content script).
  );
}







/*
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
*/
/*
function save_options(muser) {
  chrome.storage.sync.set({
    forms: muser
  }, function() {
    console.log('Value is set to ' + muser);
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
    document.getElementById('optionsave').textContent = items.forms;
  });
}


document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('form').addEventListener('post',save_options); */
