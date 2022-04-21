// Update the relevant fields with the new data.
const setContact = info => {
  document.getElementById('firstname').textContent = info.firstname;
  document.getElementById('lastname').textContent = info.lastname;
  document.getElementById('jobtitel').textContent = info.jobtitle;
  document.getElementById('company').textContent = info.company;
  document.getElementById('ort').textContent = info.ort;
  document.getElementById('placeholder1').textContent = info.liste[0];
  document.getElementById('placeholder2').textContent = info.liste[1];
  document.getElementById('placeholder3').textContent = info.liste[2];
  document.getElementById('placeholder4').textContent = info.liste[3];
  document.getElementById('placeholder5').textContent = info.liste[4];
};

// Once the DOM is ready...
window.addEventListener('DOMContentLoaded', () => {
  // ...query for the active tab...
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, tabs => {
    // ...and send a request for the DOM info...
    chrome.tabs.sendMessage(
        tabs[0].id,
        {from: 'popup', subject: 'contact'},
        // ...also specifying a callback to be called 
        //    from the receiving end (content script).
        setContact);
  });
});