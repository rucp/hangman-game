let attempts = 6;
let dinamicList = [];
let secretWordCategory;
let secretRandomWord;

const words = [
    word001 = {
        name: "Alligator",
        category: "Animals"
    },
    word002 = {
        name: "Chimpanzee",
        category: "Animals"
    },
    word003 = {
        name: "Elephant",
        category: "Animals"
    },
    word004 = {
        name: "Hippopotamus",
        category: "Animals"
    },
    word005 = {
        name: "Kangaroo",
        category: "Animals"
    },
    word006 = {
        name: "Otter",
        category: "Animals"
    },
    word007 = {
        name: "Peacock",
        category: "Animals"
    },
    word008 = {
        name: "Turtle",
        category: "Animals"
    },
    word009 = {
        name: "Raccoon",
        category: "Animals"
    },
    word010 = {
        name: "Wolf",
        category: "Animals"
    },
    word011 = {
        name: "Amber",
        category: "Colors"
    },
    word012 = {
        name: "Bronze",
        category: "Colors"
    },
    word013 = {
        name: "Chocolate",
        category: "Colors"
    },
    word014 = {
        name: "Crimson",
        category: "Colors"
    },
    word015 = {
        name: "Fuchsia",
        category: "Colors"
    },
    word016 = {
        name: "Indigo",
        category: "Colors"
    },
    word017 = {
        name: "Lavender",
        category: "Colors"
    },
    word018 = {
        name: "Maroon",
        category: "Colors"
    },
    word019 = {
        name: "Orange",
        category: "Colors"
    },
    word020 = {
        name: "Rose",
        category: "Colors"
    },
    word021 = {
        name: "Afghanistan",
        category: "Countries"
    },
    word022 = {
        name: "Bangladesh",
        category: "Countries"
    },
    word023 = {
        name: "Cambodia",
        category: "Countries"
    },
    word024 = {
        name: "Denmark",
        category: "Countries"
    },
    word025 = {
        name: "Egypt",
        category: "Countries"
    },
    word026 = {
        name: "Georgia",
        category: "Countries"
    },
    word027 = {
        name: "Indonesia",
        category: "Countries"
    },
    word028 = {
        name: "Jamaica",
        category: "Countries"
    },
    word029 = {
        name: "Macedonia",
        category: "Countries"
    },
    word030 = {
        name: "Netherlands",
        category: "Countries"
    },
    word031 = {
        name: "Apricot",
        category: "Fruits"
    },
    word032 = {
        name: "Blackberry",
        category: "Fruits"
    },
    word033 = {
        name: "Damson",
        category: "Fruits"
    },
    word034 = {
        name: "Elderberry",
        category: "Fruits"
    },
    word035 = {
        name: "Huckleberry",
        category: "Fruits"
    },
    word036 = {
        name: "Jackfruit",
        category: "Fruits"
    },
    word037 = {
        name: "Lemon",
        category: "Fruits"
    },
    word038 = {
        name: "Mango",
        category: "Fruits"
    },
    word039 = {
        name: "Nectarine",
        category: "Fruits"
    },
    word040 = {
        name: "Papaya",
        category: "Fruits"
    },
    word041 = {
        name: "Desk",
        category: "Objects"
    },
    word042 = {
        name: "Book",
        category: "Objects"
    },
    word043 = {
        name: "Backpack",
        category: "Objects"
    },
    word044 = {
        name: "Pins",
        category: "Objects"
    },
    word045 = {
        name: "Calculator",
        category: "Objects"
    },
    word046 = {
        name: "Ballpoint",
        category: "Objects"
    },
    word047 = {
        name: "Highlighter",
        category: "Objects"
    },
    word048 = {
        name: "Palette",
        category: "Objects"
    },
    word049 = {
        name: "Beaker",
        category: "Objects"
    },
    word050 = {
        name: "Computer",
        category: "Objects"
    },
    word051 = {
        name: "Bartender",
        category: "Professions"
    },
    word052 = {
        name: "Carpenter",
        category: "Professions"
    },
    word053 = {
        name: "Designer",
        category: "Professions"
    },
    word054 = {
        name: "Educator",
        category: "Professions"
    },
    word055 = {
        name: "Firefighter",
        category: "Professions"
    },
    word056 = {
        name: "Horticulturist",
        category: "Professions"
    },
    word057 = {
        name: "Hairdresser",
        category: "Professions"
    },
    word058 = {
        name: "Journalist",
        category: "Professions"
    },
    word059 = {
        name: "Mathematician",
        category: "Professions"
    },
    word060 = {
        name: "Nurse",
        category: "Professions"
    }
]

createSecretWord()
function createSecretWord() {
    const indexWord = parseInt(Math.random()* words.length);
    
    secretRandomWord = words[indexWord].name.toUpperCase();
    secretWordCategory = words[indexWord].category.toUpperCase();
    console.log(secretRandomWord);
    console.log(secretWordCategory);

}

setWordOnScreen();
function setWordOnScreen() {
    const category = document.getElementById('category');
    category.innerHTML = secretWordCategory;

    const wordScreen = document.getElementById('secret-word');
    wordScreen.innerHTML = "";

    for(i = 0; i < secretRandomWord.length; i++) {
        if(dinamicList[i] == undefined) {
            dinamicList[i] = "&nbsp;"
            wordScreen.innerHTML = wordScreen.innerHTML + `<div class='letters'>${dinamicList[i]}</div>`
        }
        else {
            wordScreen.innerHTML = wordScreen.innerHTML + `<div class='letters'>${dinamicList[i]}</div>`
        }
    }
}

function verifyChosenWord(letter) {
    document.getElementById("key-" + letter).disabled = true;
    if (attempts > 0) {
        changeColorLetter("key-" + letter);
        compareLists(letter);
        setWordOnScreen()
    }
    
}

function changeColorLetter(key) {
    document.getElementById(key).style.background = "black";
    document.getElementById(key).style.color = "#ffffff";
}

function compareLists(letter) {
    const position = secretRandomWord.indexOf(letter)
    if (position < 0) {
        attempts--
        loadImage();

        if (attempts == 0) {
            openModal("You lost it!", `Try again... The secret word was ${secretRandomWord}.`);
        }
    }
    else {
        for(i = 0; i < secretRandomWord.length; i++) {
            if(secretRandomWord[i] == letter) {
                dinamicList[i] = letter;
            }
        }
    }
    let vitory = true;
    for(i = 0; i < secretRandomWord.length; i++) {
        if(secretRandomWord[i] != dinamicList[i]) {
            vitory = false;
        }
    }
    if (vitory == true) {
        openModal("You won", `Congratulations! `);
        attempts = 0;
    }
}

function loadImage() {
    switch(attempts) {
        case 5:
            document.getElementById("image").style.background = "url('./img/forca01.jpg')"
            break;
        case 4:
            document.getElementById("image").style.background = "url('./img/forca02.jpg')"
            break;
        case 3:
            document.getElementById("image").style.background = "url('./img/forca03.jpg')"
            break;
        case 2:
            document.getElementById("image").style.background = "url('./img/forca04.jpg')"
            break;
        case 1:
            document.getElementById("image").style.background = "url('./img/forca05.jpg')"
            break;
        case 0:
            document.getElementById("image").style.background = "url('./img/forca06.jpg')"
            break;
        default:
            document.getElementById("image").style.background = "url('./img/forca.jpg')"
            break;
    }
}

function openModal(title, message) {
    let modalTitle = document.getElementById('exampleModalLabel');
    modalTitle.innerText = title;

    let modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = message;

    $("#myModal").modal({
        show: true
    });
}

let restart = document.querySelector("#btnRestart")
restart.addEventListener("click", function() {
    location.reload();
});