function saveChanges() {
        // Get a value saved in a form.
        var theValue = "#" + $(".jscolor").val();
        console.log(theValue);
        // Check that there's some code there.
        if (!theValue) {
          message('Error: No value specified');
          return;
        }
        // Save it using the Chrome extension storage API.
        chrome.storage.local.set({'bgcolor': theValue}, function() {
          // Notify that we saved.
          message('Settings saved');
        });
}

$("#save-button").click(saveChanges);