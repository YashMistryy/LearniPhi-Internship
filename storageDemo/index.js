// Create needed constants
const list = document.querySelector('ul');
const titleInput = document.querySelector('#title');
const bodyInput = document.querySelector('#body');
const form = document.querySelector('form');
const submitBtn = document.querySelector('form button');
let db;
const openRequest = window.indexedDB.open("notes_db", 1);
// error handler for checking errors if database didn't open successfully
openRequest.addEventListener("error", () =>
  console.error("Database failed to open")
);
openRequest.addEventListener("success", () => {
    console.log("Database opened successfully");
  
    // Store the opened database object in the db variable. This is used a lot below
    db = openRequest.result;
  
    // Run the displayData() function to display the notes already in the IDB
    displayData();
  });