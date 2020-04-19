function updateStrings(){
    if (localStorage.test_1 != $("#text_1").val()) {localStorage.test_1 = $("#text_1").val(); chrome.storage.sync.set({text_1: $("#text_1").val()});}
    if (localStorage.test_2 != $("#text_2").val()) {localStorage.test_2 = $("#text_2").val(); chrome.storage.sync.set({text_2: $("#text_2").val()});}
    if (localStorage.test_3 != $("#text_3").val()) {localStorage.test_3 = $("#text_3").val(); chrome.storage.sync.set({text_3: $("#text_3").val()});}
    if (localStorage.test_4 != $("#text_4").val()) {localStorage.test_4 = $("#text_4").val(); chrome.storage.sync.set({text_4: $("#text_4").val()});}
    if (localStorage.test_5 != $("#text_5").val()) {localStorage.test_5 = $("#text_5").val(); chrome.storage.sync.set({text_5: $("#text_5").val()});}
    if (localStorage.test_6 != $("#text_6").val()) {localStorage.test_6 = $("#text_6").val(); chrome.storage.sync.set({text_6: $("#text_6").val()});}
    if (localStorage.test_7 != $("#text_7").val()) {localStorage.test_7 = $("#text_7").val(); chrome.storage.sync.set({text_7: $("#text_7").val()});}
    if (localStorage.test_8 != $("#text_8").val()) {localStorage.test_8 = $("#text_8").val(); chrome.storage.sync.set({text_8: $("#text_8").val()});}
    if (localStorage.test_9 != $("#text_9").val()) {localStorage.test_9 = $("#text_9").val(); chrome.storage.sync.set({text_9: $("#text_9").val()});}
    if (localStorage.test_a != $("#text_a").val()) {localStorage.test_a = $("#text_a").val(); chrome.storage.sync.set({text_a: $("#text_a").val()});}
    if (localStorage.test_b != $("#text_b").val()) {localStorage.test_b = $("#text_b").val(); chrome.storage.sync.set({text_b: $("#text_b").val()});}
    if (localStorage.test_d != $("#text_d").val()) {localStorage.test_d = $("#text_d").val(); chrome.storage.sync.set({text_d: $("#text_d").val()});}
    if (localStorage.test_e != $("#text_e").val()) {localStorage.test_e = $("#text_e").val(); chrome.storage.sync.set({text_e: $("#text_e").val()});}
    if (localStorage.test_f != $("#text_f").val()) {localStorage.test_f = $("#text_f").val(); chrome.storage.sync.set({text_f: $("#text_f").val()});}
}

$(document).ready(function() { bindOptions(); });

function bindOptions(){
    $("#text_1").bind({keyup: function(){updateStrings();}, change: function(){updateStrings();}});
    $("#text_2").bind({keyup: function(){updateStrings();}, change: function(){updateStrings();}});
    $("#text_3").bind({keyup: function(){updateStrings();}, change: function(){updateStrings();}});
    $("#text_4").bind({keyup: function(){updateStrings();}, change: function(){updateStrings();}});
    $("#text_5").bind({keyup: function(){updateStrings();}, change: function(){updateStrings();}});
    $("#text_6").bind({keyup: function(){updateStrings();}, change: function(){updateStrings();}});
    $("#text_7").bind({keyup: function(){updateStrings();}, change: function(){updateStrings();}});
    $("#text_8").bind({keyup: function(){updateStrings();}, change: function(){updateStrings();}});
    $("#text_9").bind({keyup: function(){updateStrings();}, change: function(){updateStrings();}});
    $("#text_a").bind({keyup: function(){updateStrings();}, change: function(){updateStrings();}});
    $("#text_b").bind({keyup: function(){updateStrings();}, change: function(){updateStrings();}});
    $("#text_c").bind({keyup: function(){updateStrings();}, change: function(){updateStrings();}});
    $("#text_d").bind({keyup: function(){updateStrings();}, change: function(){updateStrings();}});
    $("#text_e").bind({keyup: function(){updateStrings();}, change: function(){updateStrings();}});
    $("#text_f").bind({keyup: function(){updateStrings();}, change: function(){updateStrings();}});
    $("#text_1").val(localStorage.text_1);
    $("#text_2").val(localStorage.text_2);
    $("#text_3").val(localStorage.text_3);
    $("#text_4").val(localStorage.text_4);
    $("#text_5").val(localStorage.text_5);
    $("#text_6").val(localStorage.text_6);
    $("#text_7").val(localStorage.text_7);
    $("#text_8").val(localStorage.text_8);
    $("#text_9").val(localStorage.text_9);
    $("#text_a").val(localStorage.text_a);
    $("#text_b").val(localStorage.text_b);
    $("#text_c").val(localStorage.text_c);
    $("#text_d").val(localStorage.text_d);
    $("#text_e").val(localStorage.text_e);
    $("#text_f").val(localStorage.text_f);

    setInterval(updateStrings, 1000);
}