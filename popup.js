/**
 * Created by nipunkanade on 16/04/17.
 */

document.addEventListener('DOMContentLoaded', function() {
    var getPageButton = document.getElementById('getPage');
    getPageButton.addEventListener('click', function() {

        chrome.tabs.getSelected(null, function(tab) {
            alert("Current Tab URL is : " + tab.url);
            console.log(tab.url);
        });
    }, false);
}, false);