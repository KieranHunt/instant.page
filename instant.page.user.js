// ==UserScript==
// @name         instant.page
// @namespace    casa.kieran
// @version      3.0.0
// @description  Adds https://instant.page to every page
// @author       Kieran Hunt
// @match        https://*/*
// @match        http://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var instantSrc = document.getElementsByTagName("body")[0].lastChild;

    var scriptElement = document.createElement("script");
    scriptElement.type = "module";
    scriptElement.src = "//instant.page/3.0.0";
    scriptElement.integrity = "sha384-OeDn4XE77tdHo8pGtE1apMPmAipjoxUQ++eeJa6EtJCfHlvijigWiJpD7VDPWXV1";

    if (instantSrc !== scriptElement) {
        document.body.appendChild(scriptElement);
    }
})();
