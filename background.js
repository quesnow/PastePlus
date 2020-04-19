// background.js

chrome.commands.onCommand.addListener(function(command) {
    chrome.tabs.executeScript({file: "inject.js"}, function() {
        chrome.runtime.lastError ? alert("Operation not supported! Shortcut combination has already been taken!"): func();
     });
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var result = "";
        if      (command === "text_1_paste") result = localStorage.text_1;
        else if (command === "text_2_paste") result = localStorage.text_2;
        else if (command === "text_3_paste") result = localStorage.text_3;
        else if (command === "text_4_paste") result = localStorage.text_4;
        else if (command === "text_5_paste") result = localStorage.text_5;
        else if (command === "text_6_paste") result = localStorage.text_6;
        else if (command === "text_7_paste") result = localStorage.text_7;
        else if (command === "text_8_paste") result = localStorage.text_8;
        else if (command === "text_9_paste") result = localStorage.text_9;
        else if (command === "text_a_paste") result = localStorage.text_a;
        else if (command === "text_b_paste") result = localStorage.text_b;
        else if (command === "text_c_paste") result = localStorage.text_c;
        else if (command === "text_d_paste") result = localStorage.text_d;
        else if (command === "text_e_paste") result = localStorage.text_e;
        else                                result = localStorage.text_f;
        chrome.tabs.sendMessage(tabs[0].id, {content: result});
    });
});


chrome.storage.onChanged.addListener(function(changes, namespace) {
    for (var key in changes) {
        var storageChange = changes[key];
        if ("text_1" == key && localStorage.text_1 != storageChange.newValue) {localStorage.text_1 = storageChange.newValue; break;}
        if ("text_2" == key && localStorage.text_2 != storageChange.newValue) {localStorage.text_2 = storageChange.newValue; break;}
        if ("text_3" == key && localStorage.text_3 != storageChange.newValue) {localStorage.text_3 = storageChange.newValue; break;}
        if ("text_4" == key && localStorage.text_4 != storageChange.newValue) {localStorage.text_4 = storageChange.newValue; break;}
        if ("text_5" == key && localStorage.text_5 != storageChange.newValue) {localStorage.text_5 = storageChange.newValue; break;}
        if ("text_6" == key && localStorage.text_6 != storageChange.newValue) {localStorage.text_6 = storageChange.newValue; break;}
        if ("text_7" == key && localStorage.text_7 != storageChange.newValue) {localStorage.text_7 = storageChange.newValue; break;}
        if ("text_8" == key && localStorage.text_8 != storageChange.newValue) {localStorage.text_8 = storageChange.newValue; break;}
        if ("text_9" == key && localStorage.text_9 != storageChange.newValue) {localStorage.text_9 = storageChange.newValue; break;}
        if ("text_a" == key && localStorage.text_a != storageChange.newValue) {localStorage.text_a = storageChange.newValue; break;}
        if ("text_b" == key && localStorage.text_b != storageChange.newValue) {localStorage.text_b = storageChange.newValue; break;}
        if ("text_c" == key && localStorage.text_c != storageChange.newValue) {localStorage.text_c = storageChange.newValue; break;}
        if ("text_d" == key && localStorage.text_d != storageChange.newValue) {localStorage.text_d = storageChange.newValue; break;}
        if ("text_e" == key && localStorage.text_e != storageChange.newValue) {localStorage.text_e = storageChange.newValue; break;}
        if ("text_f" == key && localStorage.text_f != storageChange.newValue) {localStorage.text_f = storageChange.newValue; break;}
    }
});
