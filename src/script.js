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

    for (const section of Object.entries(data)) {
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

        const section_div = createSection(section);
        sections_container.appendChild(section_div);

    }
}

function createSection(section) {
    // heading
    const section_div = document.createElement("div");
    const section_heading = document.createElement("h1");
    section_heading.innerText = section[0];
    section_div.appendChild(section_heading);

    // list
    const section_elements = createSectionElements(section[1]);
    section_div.appendChild(section_elements);

    return section_div;
}

function createSectionElements(section_elements) {

    const list = document.createElement("ul");

    for (const element of Object.entries(section_elements)) {
        // element heading
        const element_name = document.createElement("h3");
        element_name.innerText = element[0];
        list.appendChild(element_name);

        // element contents
        const contents = extractElementContents(element[1]);
        list.appendChild(contents);
    }

    return list;
}

function extractElementContents(section_element) {
    const contents_list = document.createElement("ul");

    for (let i = 0; i < section_element["comments"].length; i++) {
        const list_item = document.createElement("li");

        const text = document.createElement("p");
        text.innerText = section_element["comments"][i];

        list_item.appendChild(text);

        contents_list.appendChild(list_item);
    }

    return contents_list;
}

init();
