import { data } from "./data.js";

async function init() {
    // let githubProfileData = await fetch("https://api.github.com/user/114288630");
    // let jsonData = await githubProfileData.json();
    //
    updateImage("../assets/pfp.png");

    updateName(
        "Muhammad Zaid", "ChuzaWick420"
    );

    updatePage();
    updateContacts();
}

function updateContacts() {

    const contacts_section = document.getElementById("contact_container");

    const contact_list = document.createElement("ul");

    for (const contact of Object.entries(data["Socials"])) {
        const parentText = document.createElement("span");
        const platformName = document.createElement("span");
        const platformLink = document.createElement("a");

        platformName.innerText = contact[0] + ": ";

        platformLink.innerText = contact[1]["placeholder"];
        platformLink.href = contact[1]["url"];

        platformName.id = "platform_name";

        parentText.appendChild(platformName);
        parentText.appendChild(platformLink);

        const list_item = document.createElement("li");

        list_item.appendChild(parentText);
        contact_list.appendChild(list_item);
    }

    contacts_section.appendChild(contact_list);

}

function updateName(name, githubName) {
    let contacts = document.getElementById("contact_container");

    let text = document.createElement("p");

    let separator = document.createElement("span");
    let real_name = document.createElement("h1");
    let anonymous_name = document.createElement("h3");

    real_name.id = "real_name";
    anonymous_name.id = "anonymous_name";

    real_name.innerText = name;

    separator.id = "name_separator";
    separator.innerText = "@ ";

    anonymous_name.appendChild(separator);
    anonymous_name.appendChild(document.createTextNode(githubName));

    text.appendChild(real_name);
    text.appendChild(anonymous_name);

    contacts.appendChild(text);

    // separator
    const separator_bar = document.createElement("hr");
    contacts.appendChild(separator_bar);
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

    section_div.className = "section_div";

    return section_div;
}

function createSectionElements(section_elements) {

    const list = document.createElement("ul");

    for (const element of Object.entries(section_elements)) {

        const element_div = document.createElement("div");

        // element heading
        const element_name = document.createElement("h3");
        element_name.innerText = element[0];
        element_div.appendChild(element_name);

        // element contents
        const contents = extractElementContents(element[1]);
        element_div.appendChild(contents);

        const item_list = document.createElement("li");
        item_list.appendChild(element_div);

        list.appendChild(item_list);
    }

    return list;
}

function extractElementContents(section_element) {
    const contents_list = document.createElement("ul");

    // All comments
    for (let i = 0; i < section_element["comments"].length; i++) {
        const list_item = document.createElement("li");

        const text = document.createElement("span");
        text.innerText = section_element["comments"][i];

        list_item.appendChild(text);

        contents_list.appendChild(list_item);
    }

    // append optional data
    if (section_element["code"]) {
        const list_item = document.createElement("li");
        const parentText = document.createElement("span");

        const text = document.createElement("span");
        text.innerText = "Code: ";

        const link = document.createElement("a");
        link.href = section_element["code"]["url"];
        link.innerText = section_element["code"]["placeholder"];

        parentText.appendChild(text);
        parentText.appendChild(link);

        list_item.appendChild(parentText);

        contents_list.appendChild(list_item);
    }

    if (section_element["source"]) {
        const list_item = document.createElement("li");

        const parentText = document.createElement("span");
        const text = document.createElement("span");
        text.innerText = "Source: ";

        const link = document.createElement("a");
        link.href = section_element["source"];
        link.innerText = section_element["source"];

        parentText.appendChild(text);
        parentText.appendChild(link);

        list_item.appendChild(parentText);

        contents_list.appendChild(list_item);
    }

    return contents_list;
}

init();
