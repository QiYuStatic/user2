class AppShadow extends HTMLDivElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: 'closed'});

        let style = document.createElement("link");
        style.rel = "stylesheet";
        style.type = "text/css";
        style.href = this.getAttribute("data-css");

        shadow.innerHTML = this.innerHTML;
        shadow.appendChild(style);
    }
}


customElements.define("app-shadow", AppShadow, {extends: "div"});
