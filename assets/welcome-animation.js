(function(){"use strict";
    if (navigator.cookieEnabled && document.cookie.split(/[;=\s]+/).indexOf("welcome-animation") == -1) {
        const welcomeContainer = document.createElement("div");
        welcomeContainer.setAttribute("style", "display: flex; justify-content: center; align-items: center; position: fixed; top: 0; left: 0; right: 0; bottom: 0; z-index: 10000; width: 100%; height: 100%; cursor: none; background: #fff;");
        const welcomeSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        welcomeSvg.setAttribute("version", "1.0");
        welcomeSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        welcomeSvg.setAttribute("baseProfile", "full");
        welcomeSvg.setAttribute("viewBox", "0 0 400.000000 272.000000");
        welcomeSvg.setAttribute("preserveAspectRatio", "xMidYMid meet");
        welcomeSvg.setAttribute("style", "width:90%; height:90%; transition: all .3s ease-out;");
        const welcomeSvgG = document.createElementNS("http://www.w3.org/2000/svg", "g");
        welcomeSvgG.setAttribute("transform", "translate(0.000000,272.000000) scale(0.100000,-0.100000)");
        welcomeSvgG.setAttribute("fill", "#000");
        welcomeSvgG.setAttribute("stroke", "none");
        const welcomeSvgPath = document.createElementNS("http://www.w3.org/2000/svg", "path");

        welcomeSvgG.appendChild(welcomeSvgPath);
        welcomeSvg.appendChild(welcomeSvgG);
        welcomeContainer.appendChild(welcomeSvg);
        document.body.appendChild(welcomeContainer);


        let pathD = ["M322 1363", "l3 -1038", "5 1030", "5 1030", "833 3", "832 2", "0 -1021", "0 -1022", "-57 71", "c-1291 1583 -1599 1959 -1601 1957", "-2 -2 366 -456 818 -1010", "452 -554 824 -1013 827 -1021", "7 -18 29 -18 36 0", "3 8 366 468 807 1021", "441 554 800 1008 798 1010", "-2 1 -230 -283 -508 -633", "-278 -349 -641 -806 -807 -1014", "l-303 -380", "0 1021", "0 1021", "813 -2", "812 -3", "5 -1030", "5 -1030", "3 1038", "2 1037", "-1665 0", "-1665 0", "2 -1037z"]
        document.querySelector("path").setAttribute("d", "");
        
        let index = 0;
        let elementToPath = "";
        function addToPath() {
            elementToPath = document.querySelector("path").getAttribute("d") + " " + pathD[index];
            welcomeSvgPath.setAttribute("d", elementToPath);
            if (index < pathD.length - 1) {
            index++
            window.setTimeout(addToPath, 40);
            } else {
            welcomeSvg.style.transform = "scale(1.03)";
            window.setTimeout(function() {welcomeSvg.style.transform = "";}, 300);
            window.setTimeout(function() {welcomeSvg.style.opacity = "0";}, 800);
            window.setTimeout(function() {welcomeContainer.parentNode.removeChild(welcomeContainer);}, 1100);
            }
        };
        addToPath();
        if (navigator.cookieEnabled) {
            document.cookie = "welcome-animation=true; max-age=" + 60*60*24 + "; path=/; SameSite=None; Secure";
        };
    };
})();