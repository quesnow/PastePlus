if (window.extensionJSInjected === void 0) {
    function insert(element, content) {
        var temp = element.value;
        var position = element.selectionEnd;
        if (element.selectionStart || element.selectionStart == "0") {
            content = temp.substring(0, element.selectionStart) + content + temp.substring(position, temp.length);
        }
        element.value = content;
    }

    window.extensionJSInjected = 1;

    chrome.runtime.onMessage.addListener(function(message){
        insert(document.activeElement, message.content);
    });
}