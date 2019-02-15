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
    scriptElement.src = "//instant.page/1.1.0";
    scriptElement.integrity = "sha384-EwBObn5QAxP8f09iemwAJljc+sU+eUXeL9vSBw1eNmVarwhKk2F9vBEpaN9rsrtp";
    document.body.appendChild(scriptElement);
})();