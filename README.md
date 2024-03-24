[UK](README-uk.md)

# LearnLingo

![Home page](./public/learn-ligo.png)

**LearnLingo** - a digital product from a company specializing in language
learning through the Internet. The main task of this program is to help users in
finding and choosing the right teacher for their educational needs.

## Overview

The site structure consists of three pages:

Home Page: Here visitors can find a brief overview of the benefits company and
go to the main page of the program.

Teachers: On this page, guests can view a large list of available teachers
teachers They can use filters by language of instruction, level students and the
cost of an hour of classes. Initially, the page only displays teacher cards are
limited, but guests can download additional cards by clicking the "Show more"
button. Also they can add teachers to "favorite" by pressing the button with a
"heart" sign. If the visitor is not authorized, he will be shown a message that
this feature is available to authorized users only.

Private Favorites Page: Only authorized users can see this page users Here they
can view all the teachers they have added to the "chosen one". The design of the
page is similar to the "Teachers" page.

## Contents

- [LearnLingo](#learnlingo)
  - [Overview](#overview)
  - [Contents](#contents)
  - [Technologies](#technologies)
  - [Functional](#functional)
    - [Authorization:](#authorization)
    - [Forms:](#forms)
    - [Database:](#database)
    - [Modal windows:](#modal-windows)
    - [Functionality of the selected:](#functionality-of-the-selected)
    - ["Read more" functionality:](#read-more-functionality)
    - [Routing:](#routing)
  - [Installation](#installation)
  - [Useful links](#useful-links)

## Technologies

- **_General_**

  - ![VSCode](https://img.shields.io/badge/vscode-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white)
    ![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
    ![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)
  - ![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)

- **_Front-end_**

  - ![HTML5](https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
    ![CSS3](https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
  - ![JavaScript](https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white)
  - ![React](https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white)
  - ![Redux](https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white)
  - ![Styled Components](https://img.shields.io/badge/styled_components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white)

- **_Back-end_**
  ![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white)

## Functional

#### Authorization:

The app will use Firebase to register, sign in, manage current user data, and
log out.

#### Forms:

There must be forms for registration, login and booking a trial class filled in
all required fields.

#### Database:

Firebase Realtime Database will be used to store information about teachers
Information about instructors will include their first name, last name,
languages, qualification level, rating, reviews, price per hour, number of
classes, Avatar URL, class information, terms and experience.

#### Modal windows:

Modal windows for registration, login, booking and alerts about unauthorized
access will be implemented. They can be closed by clicking on the cross icon, on
a darkened background, or the Esc key.

#### Functionality of the selected:

Authorized users will be able to add and remove teachers from their favorites.
The heart icon button will change color when added or removed the teacher The
information about the selected teacher will be saved, even after the update
pages

#### "Read more" functionality:

Users will be able to view additional information about the teacher and his
feedback students by clicking the "Read more" button.

#### Routing:

The React Router library will be used to navigate between pages

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
