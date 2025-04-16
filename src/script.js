import { data } from "./data.js";

async function init() {
    let githubProfileData = await fetch("https://api.github.com/user/114288630");
    let jsonData = await githubProfileData.json();

    updateImage(jsonData["avatar_url"]);

    updateName(jsonData["name"], jsonData["login"]);

    //debug
    console.log(jsonData);
    updatePage();
}

function updateName(name, githubName) {
    let contacts = document.getElementById("contact_container");

    let text = document.createElement("p");

    let real_name = document.createTextNode(name);
    let anonymous_name = document.createTextNode(githubName);

    let separator = document.createElement("span");
    separator.id = "name_separator";
    separator.appendChild(document.createTextNode("@"));

    text.appendChild(real_name);
    text.appendChild(separator);
    text.appendChild(anonymous_name);

    contacts.appendChild(text);
}

function updateImage(image_url) {
    document.getElementById("pfp").src = image_url;
}

function updatePage() {

    let isFirst = true;

    const sections_container = document.getElementById("sections_container");

    for (const [key, value] of Object.entries(data)) {
        if (isFirst) {
            isFirst = false;
            continue;
        }

        const separator = document.createElement("hr");
        sections_container.appendChild(separator);

        // TODO: BLUEPRINT
        // DIV
        //      Heading
        //      UL
        //          Heading
        //          UL
        //              content

        const section_div = document.createElement("div");

        const section_heading = document.createElement("h1");
        section_heading.innerText = key;

        section_div.appendChild(section_heading);

        sections_container.appendChild(section_div);
        console.log(key, value);

    }
}

init();
