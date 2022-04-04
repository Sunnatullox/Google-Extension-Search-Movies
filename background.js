chrome.runtime.onInstalled.addListener(() => {
   chrome.contextMenus.create({
       title: "Search Movies shows",
       id:"contextMenu1",
       contexts:["page","selection"]
   })
   chrome.contextMenus.create({
       title:"Read this text",
       id:"contextMenu2",
       contexts:["page","selection"]
   })
   chrome.contextMenus.onClicked.addListener((event) => {
       if(event.menuItemId === 'contextMenu1'){
           fetch(`https://api.tvmaze.com/search/shows?q=${event.selectionText}`)
           .then(res => res.json())
           .then(result=>{
               chrome.storage.local.set({movies:result})
           })
       }else if(event.menuItemId === 'contextMenu2'){
           chrome.tts.speak(event.selectionText,{
               rate:2
           })
       }
   })
})


chrome.runtime.onMessage.addListener(( msg, sender, sendResponse )=> {
    console.log(msg)
    console.log(sender)
    sendResponse("background filedan olindi")
    chrome.tabs.sendMessage( sender.tab.id )
})