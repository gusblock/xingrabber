chrome.runtime.onMessage.addListener((msg, sender) => {
  // First, validate the message's structure.
  if ((msg.from === 'content') && (msg.subject === 'showAction')) {
    // Enable the page-action for the requesting tab.
    chrome.pageAction.show(sender.tab.id);
  }
});

chrome.commands.onCommand.addListener(function (command) {
  switch (command) {
      case 'duplicate-tab':
          duplicateTab();
          if (navigator.clipboard) {
            // yep, turn the feature on.
            console.log("workss")
          } else {
            // nope 😢. Use execCommand or leave the feature off
            console.log("doesnt")
          }
          insertText("test",document.querySelector('#b2b-footer > div.sc-bczRLJ.sc-iBkjds.eQbtWm.jZrXAY > div.sc-bczRLJ.sc-cKkZIC.kEeNDb.ipOzfw'));
          break;
      default:
          console.log(`Command ${command} not found`);
  }
});

/**
* Gets the current active tab URL and opens a new tab with the same URL.
*/

function insertText(newText, selector) {
  const textarea = document.querySelector(selector);
  textarea.focus();

  let pasted = true;
  try {
    if (!document.execCommand("insertText", false, newText)) {
      pasted = false;
    }
  } catch (e) {
    console.error('error caught:', e);
    pasted = false;
  }

  if (!pasted) {
      console.error('paste unsuccessful, execCommand not supported');
  }
}
function duplicateTab() {
  const query = { active: true, currentWindow: true };
  chrome.tabs.query(query, (tabs) => {
    document.execCommand(selectAll)
  });
}
