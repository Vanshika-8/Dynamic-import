//we are importing here app.js by using async as we use promises 

document.getElementById("button").addEventListener("click", async() => {
    const {app}=await import("./app.js");
    app();
});
