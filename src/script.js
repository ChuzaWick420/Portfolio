async function init() {
    let githubProfileData = await fetch("https://api.github.com/user/114288630");
    let jsonData = await githubProfileData.json();

    updateImage(jsonData["avatar_url"]);

    updateName(jsonData["name"], jsonData["login"]);

    //debug
    console.log(jsonData);
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

init();
