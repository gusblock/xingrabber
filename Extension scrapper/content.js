

/* Inform the background page that this tab should have a page-action. */

let textarea = "not assigned"

function notnull(nobject) {
  var voider = (document.querySelector(nobject) == !null);
  return voider
  // returns false if object exists
  // returns true if object does not exist
}

function performPaste() {
  var pasteTextarea = document.querySelector('.js-cuttextarea');

  if (useAsyncApi()) {
    navigator.clipboard.readText()
      .then((text) => {
        pasteTextarea.textContent = text;
        console.log('Async readText successful, "' + text + '" written');
      })
      .catch((err) => console.log('Async readText failed with error: "' + err + '"'));
  } else {
    pasteTextarea.focus();
    try {
      var successful = document.execCommand('paste');
      var msg = successful ? 'successful' : 'unsuccessful';
      console.log('Pasting text command was ' + msg);
    } catch (err) {
      console.log('execCommand Error', err);
    }
  }
}

chrome.runtime.sendMessage({
  from: 'content',
  subject: 'showAction',
});


function pausecomp(millis) {
  var date = new Date();
  var curDate = null;
  do { curDate = new Date(); }
  while (curDate - date < millis);
}

function selectobject(thing) {
  var formal = document.querySelector(thing)
  console.log(formal)
};

function replacewords(wordlist, replacerlist) {
  let element = document.activeElement;
  var docend = element.textLength;


  if (element instanceof HTMLTextAreaElement) {
    let { selectionStart, selectionEnd } = element;

    // nothing is selected
    if (selectionStart === selectionEnd) return;
    let clipboardsearch = element.value;
    let clipboardtrue = false;

    if (wordlist.some(v => clipboardsearch.substring(selectionStart,selectionEnd).includes(v))) {
      clipboardtrue = true;
      console.log(`Match using`);
  } else {
      console.log(`No match using `);
  }
    /**       let clipboardsearch = element.value;
              var totlength = element.value; */
    for (let i = 0; i < wordlist.length; i++) {

      if (clipboardsearch.indexOf(wordlist[i]) > 0) {

        let prefix = clipboardsearch.substring(0, selectionStart);
        let infix = clipboardsearch.substring(selectionStart, clipboardsearch.indexOf(wordlist[i]));
        let postfix = clipboardsearch.substring(clipboardsearch.indexOf(wordlist[i]) + wordlist[i].length, selectionEnd)
        clipboardsearch = infix + replacerlist[i] + postfix;
        selectionEnd = clipboardsearch.length;
        selectionStart = clipboardsearch-clipboardsearch.length
      }
    }
    if (clipboardtrue){
    // if (clipboardsearch.includes(wordlist) ) {
      navigator.clipboard.writeText(clipboardsearch).then(function () {
        /* clipboard successfully set */
        /*       navigator.clipboard.readText().then(
                clipText => document.getElementById("outbox").innerText = clipText); */
        console.log(clipboardsearch)
      }, function () {
        console.log("didnt work")
        /* clipboard write failed */
      });
     }

  }


};

function replaceword(wordlist, replacerlist) {

  let element = document.activeElement;
  var docend = element.textLength;

  if (element instanceof HTMLTextAreaElement) {
    let { selectionStart, selectionEnd } = element;

    // nothing is selected
    if (selectionStart === selectionEnd) return;
    let clipboardsearch = element.value;
    /**       let clipboardsearch = element.value;
            var totlength = element.value; */
    

    if (clipboardsearch.indexOf(wordlist) > 0) {

      let prefix = clipboardsearch.substring(0, selectionStart);
      let infix = clipboardsearch.substring(selectionStart, clipboardsearch.indexOf(wordlist));
      let postfix = clipboardsearch.substring(clipboardsearch.indexOf(wordlist) + wordlist.length, selectionEnd)
      clipboardsearch = infix + replacerlist + postfix;
      // selectionEnd = selectionEnd + (wordlist[i].length-replacerlist[i].length)
    }

    
    navigator.clipboard.writeText(clipboardsearch).then(function () {
      /* clipboard successfully set */
      /*       navigator.clipboard.readText().then(
              clipText => document.getElementById("outbox").innerText = clipText); */
        console.log(clipboardsearch)
      }, function () {
        console.log("didnt work")
      /* clipboard write failed */
      });
    }

  


};

function waitForElm(selector) {
  return new Promise(resolve => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver(mutations => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  });
};

/* document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed"); */
var wordler = ['Parlivas', 'Karmite', 'Balitaf', 'Sempato', 'Platzo']

// Listen for messages from the popup.
/*  */
waitForElm('#main-region > div.sc-bczRLJ.kEeNDb > div.sc-bczRLJ.kEeNDb > div.sc-bczRLJ.sc-gKXOVf.sc-ezWXYA.PanelWrapper-hAsiOI.slxfl > div.sc-bczRLJ.sc-eCOUaW.PanelHeader-dHJCts.PanelHeaderStyled-dINhNb.enenHr.dzqviH.hISVuM > div > header > div.sc-ewDcJz.DNOpw > div.sc-djvmMF.kmSBkm > span').then((elm) => {
  var titelnames = ['Dr.', 'Ing.', 'Dr. Med.', 'Dipl.-Ing.']
  var name = document.querySelector('#main-region > div.sc-bczRLJ.kEeNDb > div.sc-bczRLJ.kEeNDb > div.sc-bczRLJ.sc-gKXOVf.sc-ezWXYA.PanelWrapper-hAsiOI.slxfl > div.sc-bczRLJ.sc-eCOUaW.PanelHeader-dHJCts.PanelHeaderStyled-dINhNb.enenHr.dzqviH.hISVuM > div > header > div.sc-ewDcJz.DNOpw > div.sc-djvmMF.kmSBkm > span').textContent.replace(/\n/g, '').split(' ')
  if (titelnames.includes(name[0])) {
    title = name[0]
    name.shift();
  }
  var job = document.querySelector('#main-region > div.sc-bczRLJ.kEeNDb > div.sc-bczRLJ.kEeNDb > div.sc-bczRLJ.sc-gKXOVf.sc-ezWXYA.PanelWrapper-hAsiOI.slxfl > div.sc-bczRLJ.sc-eCOUaW.PanelHeader-dHJCts.PanelHeaderStyled-dINhNb.enenHr.dzqviH.hISVuM > div > header > div.sc-ewDcJz.DNOpw > div.sc-djvmMF.kmSBkm > div.sc-edUIhV.fRHgAC > div').textContent.replace(/\n/g, '').split(',')
  var place = document.querySelector('#main-region > div.sc-bczRLJ.kEeNDb > div.sc-bczRLJ.kEeNDb > div.sc-bczRLJ.sc-gKXOVf.sc-ezWXYA.PanelWrapper-hAsiOI.slxfl > div.sc-bczRLJ.sc-eCOUaW.PanelHeader-dHJCts.PanelHeaderStyled-dINhNb.enenHr.dzqviH.hISVuM > div > header > div.sc-ewDcJz.DNOpw > div.sc-djvmMF.kmSBkm > div.sc-cexmgL.sc-fDbLeC.dOfDVK.bJRqki > div > span').textContent.replace(/\n/g, '').split(',')
  var contact = {
    firstname: name[0],
    middlename: name[1],
    lastname: name[name.length - 1],
    jobtitle: job[0].trim(),
    company: job[1].trim(),
    ort: place[0].trim(),
    liste: wordler
  };

  var replaceler = [contact.firstname, contact.lastname, contact.jobtitle, contact.company, contact.ort]

  /***/

  document.addEventListener('mouseup', (event) => {

    replacewords(wordler, replaceler);
    // replaceword('[Vorname]', contact.firstname);
    // replaceword('[Nachname]', contact.lastname);

  }
  );

  console.log("It is saved as" + document.getElementById('former'));


  /*     for (let i = 0; i < wordlist.length; i++){
        if (clipboardsearch.indexOf(wordlist[i]) > 0) */
  chrome.storage.sync.set({ key: contact.firstname }, function () {

  });

  chrome.storage.sync.get(['key'], function (result) {
    console.log('Value currently is ' + result.key);
  });

  // Directly respond to the sender (popup), 
  // through the specified callback.

  chrome.runtime.onMessage.addListener((msg, sender, response) => {
    // First, validate the message's structure.
    if ((msg.from === 'popup') && (msg.subject === 'contact')) {
      response(contact);
    }
  });
  /*   }
  }); */
}); 
