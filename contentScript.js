const content = []

const hrefTags = document.getElementsByTagName("a")

for(const tag of hrefTags){
        content.push(tag.textContent)
}
chrome.storage.local.set({content})

chrome.runtime.sendMessage(null, content,(respons) => {
    console.log("res func"+ respons)
})