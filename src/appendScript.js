export const appendScript = (scriptToAppend) => {
    const script = document.createElement("script");
    script.src = scriptToAppend;
    script.async = true;
    document.getElementsByClassName('myBody')[0].appendChild(script);
}