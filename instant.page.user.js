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
    var instantSrc = document.getElementsByTagName("body")[0].lastChild;

    var scriptElement = document.createElement("script");
    scriptElement.type = "module";
    scriptElement.src = "//instant.page/1.2.2";
    scriptElement.integrity = "sha384-2xV8M5griQmzyiY3CDqh1dn4z3llDVqZDqzjzcY+jCBCk/a5fXJmuZ/40JJAPeoU";

    if (instantSrc !== scriptElement) {
        document.body.appendChild(scriptElement);
    }
})();
