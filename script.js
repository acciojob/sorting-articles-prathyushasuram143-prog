//your JS code here. If required.
const bands = [
    'The Plot in You',
    'The Devil Wears Prada',
    'Pierce the Veil',
    'Norma Jean',
    'The Bled',
    'Say Anything',
    'The Midway State',
    'We Came as Romans',
    'Counterparts',
    'Oh, Sleeper',
    'A Skylit Drive',
    'Anywhere But Here',
    'An Old Dog'
];

const band = document.getElementById("band");

// Function to remove A, An, The
function removeArticle(name) {
    let words = name.split(" ");

    if (
        words[0].toLowerCase() === "a" ||
        words[0].toLowerCase() === "an" ||
        words[0].toLowerCase() === "the"
    ) {
        words.shift();
    }

    return words.join(" ");
}

// Sort the bands alphabetically
bands.sort((a, b) => {
    return removeArticle(a).localeCompare(removeArticle(b));
});

// Display the sorted bands
bands.forEach((item) => {
    const li = document.createElement("li");
	li.style.height="40px";
	li.style.width="45";
	li.style.padding="1px"
	li.style.borderWidth = "1px";
    li.style.borderStyle = "solid";
    li.textContent = item;
    band.appendChild(li);
});