<div align ="center">

# Note Taker

![License Badge](https://shields.io/badge/license-MIT-blue)
</div>

## Table of Contents
- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshot](#screenshot)
- [Contributions](#contributions)
- [Tests](#tests)
- [Links](#links)
- [Contact Information](#contact-information)
- [License](#license)

## Description
In this week's challenge, as a transitional web developer I was tasked with creating a note taker application. Note Taker is your go-to solution for effortless note-taking and organization. Powered by Express.js, this application simplifies the process of jotting down and storing notes, all while offering a user-friendly interface. With seamless integration between front and back ends, Note Taker ensures a smooth experience for users. 

## User Story
```
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```

## Acceptance Criteria
```
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a "Save Note" button and a "Clear Form" button appear in the navigation at the top of the page
WHEN I click on the Save button
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes and the buttons in the navigation disappear
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column and a "New Note" button appears in the navigation
WHEN I click on the "New Note" button in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column and the button disappears

```
## Technologies
The technologies I used in this challenge includes:

1. Node.js
2. Express.js
3. Uuid-npm package
4. Visual Studio Code(VS-code)
5. Github: Github was used to create a repository which includes the links to the projects, index.js, package.json, inquirer package, jest package and the README file.
6. Gitlab: Gitlab was used to clone the project to our laptop.

## Installation
1. To install the challenge#11 , first create a new repository in your Github account, and then clone this repository to your local computer. 
```
To clone: git clone https://github.com/your-username/repository-name.git   
```           
2. Install Express.js [v4.16.4]

3. Install uuid [v9.0.1](optional)

4. Open the cloned repository in a visual studio code.
 
5. Open integrated terminal on server.js in order to run "npm install" on the command line to install dependencies, uuid packing (optional) using the command "npm install uuid". In addition, create a gitignore file, which should includes node_modules.

## Usage
1. Click the live application link from the links section.

2. Click "Get Started" to open the Note Taker application.

3. Insert the necessary information into the "title" and "description" fields.

4. Click the save icon (top right) to save the note.

5. Additionally, to remove note click "Clear Form" to clear the note.

6. Click the "New Note" (top right) to add another note.

7. To delete notes: Click the "trash icon" to delete saved notes.

## Screenshot
![Note Taker GIF](/Assets/note_taker.gif)

![Note Taker first](/Assets/note_taker_first.jpeg)

![Note Taker second](/Assets/note_taker_second.jpeg)

![Note Taker third](/Assets/note_taker_third.jpeg)

![Note Taker fourth](/Assets/note_taker_fourth.jpeg)

## Contributions
Contributions to the SVG Logo Maker are welcome and encouraged. Here are some ways you can contribute:

1. **Bug Reports and Feature Requests:**
  - If you encounter any issues or have suggestions for new features, please open an issue on the GitHub repository.
    
2. **Enhancements to Note Taker Application:**
  -  We welcome contributions aimed at improving Note Taker aaplication. If you find ways to enhance the application or identify any limitations, feel free to submit a pull request.

3. **Documentation Improvements:**
  - Help improve the clarity and completeness of this documentation. If you find areas that need clarification or additional information, submit a pull request with your suggested changes.

## Tests
There are no tests required for this project.

## Links
- Deployed Link Heroku: [Note Taker]()
- [GitHub repository]()
  

## Contact Information
I appreciate and encourage any questions you may have. Feel free to reach out for further information.

- GitHub: [MunibaP](https://github.com/MunibaP)
- Email: munibapervez596@gmail.com

## License
![License Badge](https://shields.io/badge/license-MIT-blue)

Please refer to [MIT]() to acquire details about this license

### Copyright © 2024 Muniba Pervez

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
