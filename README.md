# _Galactic Age Calculator_

#### _A program that will inform users of their age on other planets, 6-September-2019_

#### By _**Jason Huels**_

## Description

_Website where users can input their age in Earth years and get their age on other planets, the number of years they have left to live on that planet, and if they have surpassed their life expectancy on that planet let them know how many years past their life expectancy they've lived on that planet _

## Specifications

| Behavior | Input | Output|
|:------|:---------:|:------:|
|User inputs an empty string and receives an error message | "" | "Please enter your age as a numerical value" |
|User inputs a non-numerical value and receives an error message| "Thiry-two"| "Please enter your age as a numerical value"|
|User inputs an age less than 1 and receives an error message | "0"| "Please enter your age as a numerical value 1 or higher"|
|User inputs a their age in Earth years and gets their age on a single alternate planet|"32"|"Age on Mercury: 132"|
|User inputs their average life expectancy for their demographic to determine their years left to live on alternate planets |"85"|"Years left to live on Mercury: -47"|
|User inputs a their age in Earth years and gets their age on a single alternate planet and their remaining life expectancy on that planet|"32"|"Age on Mercury: 132, Years left to live on Mercury: -47 years"|
|Program changes negative years left to live into years past your life expectancy|"32"|"Age on Mercury: 132, You outlived your life expectancy on Mercury by: 47 years"|
|User inputs a their age in Earth years and gets their age and life expectancy on multiple planets|"32"|"Age on Mercury: 132, You outlived your life expectancy on Mercury by: 47 years, Age on Venus: 52, Years left to live on Venus: 33 years"|


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
