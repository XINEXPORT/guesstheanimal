# Guess the Animal
Guess the Animal is an online interactive children’s game platform where a user matches a sound to a corresponding animal image. The web platform has additional interactive components, such as favoriting an animal, playing with flashcards, and a dashboard where a user can view their contact information and see a list of their favorite animals.

## Landing Page
![LandingPage](https://github.com/XINEXPORT/guesstheanimal/assets/40744735/f2ff7cd8-6c8d-48e4-9536-e1dea523a420)

## Login and Registration Page
Existing users will be able to login to the site using their email and password credentials <br>

![LoginPage](https://github.com/XINEXPORT/guesstheanimal/assets/40744735/44eea723-c5d8-4342-945a-892e4117cc98)
New visitors will be able to register for an account using the Registration form

![RegisterPage](https://github.com/XINEXPORT/guesstheanimal/assets/40744735/aa713ec2-0c13-4daa-bfc6-8a18eca6ff3b)
![RegisterSubmit](https://github.com/XINEXPORT/guesstheanimal/assets/40744735/295b8e21-222a-4c48-ace3-bad02a4d9eb2)

## Editing Profile Image and Contact Information
The Dashboard will appear in a default state where the user has not favorited any animals and their profile picture will not be populated.
![DashboardView - Registration](https://github.com/XINEXPORT/guesstheanimal/assets/40744735/f9101f00-5a58-4f24-9eb7-9cc55ac7bda2)

A user will be able to edit their profile information by clicking the pencil icon. <br>
From the editing view, a user can upload a profile image and change any contact information in the editable fields. <br>
The floppy disc icon will enable the user to save their info. <br>
![Edit Profile Info](https://github.com/XINEXPORT/guesstheanimal/assets/40744735/6ce76dbb-d18d-49ba-a83a-68e7273da217)
![Saved Profile Image](https://github.com/XINEXPORT/guesstheanimal/assets/40744735/5a2457a9-943c-4ed2-9abd-b94505c53493)

## Flashcards
Flashcards of animal facts will be available to the user. If the user is logged into their account, they will be able to star their favorite animal from the flashcards view.
![flashcards-loggedin](https://github.com/XINEXPORT/guesstheanimal/assets/40744735/9620c0b7-9f5d-4e8d-a1e3-72da22d384fa)
If a user does not have an account, the star will disappear.
![flashcards-loggedout](https://github.com/XINEXPORT/guesstheanimal/assets/40744735/2c0e14cf-e6b6-41e0-a64d-537f20b5bd15)

## Quiz
The Game component will display an image of an animal in which the user will listen to the audio samples by clicking the sound buttons. Based on what they heard, they will have to select the correct answer.
![MainQuiz](https://github.com/XINEXPORT/guesstheanimal/assets/40744735/acb13185-385b-4a6b-b6bc-25a357e84e3e)



---
# Developer Instructions
Perform the following steps to download the project and run it on your local dev environment


Fork the repository
![Forkrepo](https://github.com/XINEXPORT/guesstheanimal/assets/40744735/18bcbd1a-cd3f-44b4-a260-e9473bf60f35)

Clone the repository <br>
Execute the following command: <br>
- git clone https://github.com/XINEXPORT/guesstheanimal

Install Dependencies <br>
Execute the following command: 
- npm i <br>

Create a db instance <br>
Execute the following command:
- createdb animals <br>

Run the seed file <br>
Execute the following command:
- npm run seed <br>

Then Run Dev Environment <br>
Execute the following command:
- npm run dev



# Resources
## Backend
- https://www.youtube.com/watch?v=sVYrH166LXM&ab_channel=GreatAdib
- https://www.npmjs.com/package/multer
## Frontend
- https://www.youtube.com/watch?v=UX5HIrxbRUc
- https://www.npmjs.com/package/confetti-js
- https://codepen.io/arronhunt/pen/WWOOeO
- https://www.joshwcomeau.com/animation/3d-button/
- https://blog.hubspot.com/website/css-hover-animation
