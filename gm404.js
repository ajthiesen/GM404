// ==UserScript==
// @name         Internet Archive 404 Link
// @namespace    http://tampermonkey.net/
// @version      1
// @description  Display a link to the Internet Archive when a page is not found (404)
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    
    // Check if the page contains "404" and "Not Found"
    if (document.title.includes("404") && document.body.innerText.includes("Not Found")) {
        
        // Create a link to the Internet Archive with the current URL
        const archiveLink = document.createElement("a");
        archiveLink.href = "https://web.archive.org/web/*/" + window.location.href;
        archiveLink.target = "_blank";
        archiveLink.innerText = "View this page on the Internet Archive";
        
        // Append the link to the body of the page
        document.body.appendChild(archiveLink);
    }
})();

// This script should run on all pages (@match *://*/*) and checks if the page contains the text "404" in the title and "Not Found" in the body. If those strings are found, the script creates a link to the Internet Archive with the current URL and appends it to the body of the page. The link will open in a new tab (target="_blank") when clicked.

// Note that this script only works if the page content is loaded in the DOM, which may not always be the case for dynamic pages or pages that are loaded asynchronously.