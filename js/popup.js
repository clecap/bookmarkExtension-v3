


let btns = ["up", "down", "clearBookmarks", "clearCookies"];
btns.forEach ( ele => { document.getElementById (ele).addEventListener("click", () => { console.log ("sending message ", ele);chrome.runtime.sendMessage ( {action: ele} ) } ) });

document.getElementById('openSidepanel').addEventListener('click', async () => {
  console.log (chrome);
  console.log (chrome.sidePanel);
  let tabs = await chrome.tabs.query ( { active: true, currentWindow: true } );
  console.log ("tabs ", tabs);
  const tabId = tabs[0].id;
  console.log ( "tabId ", tabId);
  await chrome.sidePanel.open ( { tabId} );
});







// document.getElementById("down").addEventListener("click", () => {chrome.runtime.sendMessage({ action: "down" });});
// document.getElementById("up").addEventListener("click", () => {chrome.runtime.sendMessage({ action: "up" });});


/*
document.getElementById("changeIcon").addEventListener("click", () => {
  chrome.runtime.sendMessage({ action: "changeIcon" });
*/

// chrome.action.setBadgeText({ text: "!bababab" });  // up to 4 characters are shown
// chrome.action.setBadgeBackgroundColor({ color: "red" });

/*
chrome.windows.create({
  url: "warning.html",
  type: "popup",
  width: 400,
  height: 300
});
*/

/*
let banner = document.createElement("div");
banner.style.position = "fixed";
banner.style.top = "0";
banner.style.width = "100%";
banner.style.backgroundColor = "red";
banner.style.color = "white";
banner.style.textAlign = "center";
banner.style.padding = "10px";
banner.innerText = "Warning: Something requires your attention!";
document.body.prepend(banner);
*/

// console.log (22);         // do not know where this is written to ?!?
//alert (1);                 // yes, this gets activated upon display of the popup