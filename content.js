window.onload = () => {
    console.log("content.js");
    $('.talk-element').each((i, li) => {
        var title = $(li).find('.element-title > a')
        var p = $(li).find('.element-comment')
        var commentText = $(p).text().replace(/コメント/, "")
        var comment = parseInt(commentText, 10)
        setNewMessage(title, comment)
    })
}

function setNewMessage(title, num) {
    chrome.storage.sync.get($(title).text(), (value) => {
        //debugger;
        if (Object.keys(value).length === 0 || value < num) {
            // New
            var data = {}
            data[$(title).text()] = num
            chrome.storage.sync.set(data)
            $(title).prepend('【New!】')
        }
    })
}
