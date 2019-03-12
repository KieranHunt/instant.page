// ==UserScript==
// @name         instant.page
// @namespace    casa.kieran
// @version      0.2
// @description  Adds https://instant.page to every page
// @author       Kieran Hunt
// @match        https://*/*
// @match        http://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    
    var scriptElement = document.createElement("script")
    scriptElement.type = "module";
    scriptElement.src = "//instant.page/1.2.1";
    scriptElement.integrity = "sha384-/IkE5iZAM/RxPto8B0nvKlMzIyCWtYocF01PbGGp1qElJuxv9J4whdWBRtzZltWn";
    document.body.appendChild(scriptElement);
})();
