[UK](README-uk.md)
# LearnLingo

![Home page](./public//Знімок%20екрана%202024-01-28%20о%2011.16.34.png)

**LearnLingo**  - is a company application that provides online language learning services. The main goal of the program is to help users find and select the right teacher for their educational needs.

## Overview

The structure of the program consists of three pages:

Home page: On this page, users can familiarize themselves with the benefits of the company and go to the main page of the program.

Teachers Page: On this page, users can view a list of teachers available for training. Users can filter teachers by the language of instruction, the level of knowledge of students and the price of an hour of a lesson. By default, only 4 teacher flashcards are displayed on the page, but users can download more flashcards by clicking the "Download More" button. Users can also add teachers to "favorites" by clicking on the button with the "hearts" icon. If the user is not authorized, they will be shown a warning that this feature is not available to authorized users.

Private Favorites page: This page is only available to authorized users. On it, they can view all the teachers they have added to their "favorites". The page is designed similarly to the "Teachers" page.

## Contents
- [Review](#review)
- [Content](#content)
- [Technologies](#technologies)
- [Function](#functional)
- [Installation](#installation)
- [Useful links](#useful-links)

## Technologies

- ***General***
  - ![VSCode](https://img.shields.io/badge/vscode-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white) ![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)
  - ![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)

- ***Front-end***
  - ![HTML5](https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
  - ![JavaScript](https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white)
  - ![React](https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white)
  - ![Redux](https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white)
  - ![Styled Components](https://img.shields.io/badge/styled_components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white)

- ***Back-end***
![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white)

## Functional

#### Authorization:
Application using Firebase for registration, login, current user data and logout.

#### Forms:
Forms for registration, login and booking a trial class, all fields are mandatory and must be filled.

#### Database:
Firebase Realtime Database is used to store information about teachers. Information about instructors includes their first name, last name, languages, skill level, rating, reviews, hourly rate, number of applications, avatar URL, class information, terms and experience.

#### Modal windows:
Windows for registration, login, reservation and warning about unauthorized access are implemented in the form of fashionable windows. They are closed when you click on the "cross", on the next background or when you press the Esc key.

#### Functionality of the selected:
Authorized users can independently add and remove teachers to/from their "favorites". The heart button changes color when a teacher is added or removed. Information about the selected teacher will be saved even if the user refreshes the page.

#### "Read more" functionality:
Users open additional information about a teacher and view their students using the Read More button.

#### Routing:
The React Router library will be used to navigate between pages.

## Installation

1. Repository fork.
2. Install the dependency: `npm install`.
3. Run the application: `npm run dev`.
4. Create a new branch for your function: git checkout -b function-name
5. Commit your changes: git commit -m "Add new feature"
6. Push to branch: git push origin function
7. Create a pickup request.



## Useful links

[**Figma Layout**](https://www.figma.com/file/dewf5jVviSTuWMMyU3d8Mc/%D0%9F%D0%B5%D1%82-%D0%BF%D1%80%D0%BE%D1%94%D0%BA%D1%82-%D0%B4%D0%BB%D1%8F-%D0%9A%D0%A6?type=design&node-id=0-1&mode=design&t=jCmjSs9PeOjObYSc-0)