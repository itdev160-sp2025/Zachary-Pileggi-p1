//story credits
var fName ='Yuto';
var lName = 'Suzuki';
var author = 'Story and ';
var artist = 'Art by ';

var credit = author + artist + fName + ' ' + lName;

var creditEl = document.getElementById('credit');
creditEl.textContent = credit;


//array of chapters
const chapters= [
    "Chapter 1: The Legendary Hit Man",
    "Chapter 2: Sakamoto Family Rules",
    "Chapter 3: Officer Nakase and the Mysterious Hero",
    "Chapter 4: China Invasion!",
    "Chapter 5: Vs. Son Hee and Bacho",
    "Chapter 6: Nagumo",
    "Chapter 7: Welcome to Sugar Park!"
];

function loadChapters() {
  const ulElement = document.getElementById('chapters-list');  // select ul element by ID
  ulElement.innerHTML = ""; // clear existing content in the list

  chapters.forEach(chapter => {
  // make new li for each chapter
  const li = document.createElement('li');
  li.textContent = chapter;
  ulElement.appendChild(li); // append to the ul
  });
}

loadChapters();