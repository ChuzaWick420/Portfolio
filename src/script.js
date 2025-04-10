async function init() {
    let githubProfileData = await fetch("https://api.github.com/user/114288630");
    let jsonData = await githubProfileData.json();

    updateImage(jsonData["avatar_url"]);

    //debug
    console.log(jsonData);
}

function updateImage(image_url) {
    document.getElementById("pfp").src = image_url;
}

init();
