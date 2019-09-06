# _Galactic Age Calculator_

#### _A program that will inform users of their age on other planets, 6-September-2019_

#### By _**Jason Huels**_

## Description

_Website where users can input their age in Earth years and get their age on other planets, the number of years they have left to live on that planet, and if they have surpassed their life expectancy on that planet let them know how many years past their life expectancy they've lived on that planet _

## Specifications

| Behavior | Input | Output|
|:------|:---------:|:------:|
|User inputs an empty string and receives an error message | "" | "Inputs must be a whole number greater than 0" |
|User inputs a non-numerical value and receives an error message| "Thiry-two", "eighty-five"| "Inputs must be a whole number greater than 0"|
|User inputs an age less than 1 and receives an error message | "0", "85"| "Inputs must be a whole number greater than 0"|
|User inputs a their age in Earth years and gets their age on a single alternate planet|"32", "85"|"Age on Mercury: 132"|
|User inputs a their age in Earth years and gets their age on a single alternate planet and their remaining life expectancy on that planet|"32", "85"|"Age on Mercury: 132, Your average life expectancy in Mercury years is: 352, Years left to live on Mercury: 220 years"|
|If user has lived beyond their life expectancy, output will be formatted to tell them how many years past their life expectancy they lived|"86", "85"|"Age on Mercury: 356, Your average life expectancy in Mercury years is: 352, You outlived your life expectancy on Mercury by: 4 years"|
|User inputs a their age in Earth years and gets their age and life expectancy on multiple planets|"32", "85"|"Age on Mercury: 132, Your average life expectancy in Mercury years is: 352, Years left to live on Mercury: 220 years", "Age on Venus: 52, Your average life expectancy in Venus years is: 137, Years left to live on Venus: 85 years"|


## Setup/Installation Requirements

*_Clone this repository_
*_Run "npm install" command to install necessary packages_
*_Open index.html in browser of your choosing_

## Known Bugs

_N/A_

## Support and contact details

_jasonhuels@yahoo.com_

## Technologies Used

_HTML, CSS, JavaScript, jQuery, Bootstrap, Node.js, npm, webpack, popper.js, eslint, babel, karma, jasmine_

### License

*open source*

Copyright (c) 2019 **_Jason Huels_**
