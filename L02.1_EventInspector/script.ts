namespace EventInspector {

    window.addEventListener("load", handleload);

    let div0: HTMLElement = document.querySelector("#div0");
    let div1: HTMLElement = document.querySelector("div1");
    let body: HTMLElement = document.querySelector("body");

    function handleload(): void {
        document.addEventListener("mousemove", setInfobox);
        document.addEventListener("click", setInfobox);
        document.addEventListener("keyup", setInfobox);

        body.addEventListener("click", setInfobox);
        body.addEventListener("keyup", setInfobox);

        div0.addEventListener("click", setInfobox);
        div0.addEventListener("keyup", setInfobox);
        div1.addEventListener("click", setInfobox);
        div1.addEventListener("keyup", setInfobox);

    }

    function setInfobox(_event: MouseEvent): void {
       
       let posX: number = _event.screenX;
       let posY: number = _event.screenY;

       document.querySelector("span").innerHTML = posX + ", " + posY;

    }







}