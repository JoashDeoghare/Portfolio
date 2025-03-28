const counter = document.querySelector(".visitCounter")
async function updateCounter() {
    let response = await fetch("https://ljhtk5ifpnb7bmy7752wkqtvvq0yekpl.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    counter.style.color = "white";
    counter.style.fontSize = "20px";
    counter.style.fontWeight = "500";
    counter.innerHTML = `Views: ${data}`
}

updateCounter();

// font-size: 20px;
//     font-weight: 500;
//     transition: 0.5s;