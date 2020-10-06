![Logo of the project](https://github.com/akshaypalekar/tasker-front-end/blob/phase_1/src/assets/images/tasker_logo_new.png)

# Tasker

The To Do List is a simple web application that allows users to maintain a list of tasks.

## Phase 1 (Proof of Concept)

* **Phase 1** we implement a proof-of-concept (POC) that someone can actually use and get a feel for the product. It gives them something to explore and see what they like and dislike, helping them potentially adjust their requirements.

Your goal is create a proof-of-concept where each user visit to the page show a temporary task list that allows the addition and removal of tasks. There is no persistent storage or backend server. 

### Functional Requirements

* Task List
  * Upon loading the app for the first time the user should be presented with a single empty task list
  * If the user refreshes the page then the entire task list is expected to be cleared
* Create Task
  * When the user enters a task in the textbox and clicks the add button or hits the enter key it should get added to the list
* Delete Task
  * The user should have the ability to remove a task from the task list 
* Out-of-scope
  * The user does not need the ability to edit a task in this phase

### Non-functional Requirements
* The app will be [client-side](https://en.wikipedia.org/wiki/Client-side) only and will not connect to any mid-tier or data store server
* The app must be web based and rendered in a [web browser](https://en.wikipedia.org/wiki/Web_browser)
* The app does not need to be [cross browser compatible](https://medium.com/@sarahelson81/what-is-cross-browser-compatibility-and-why-we-need-it-b41423c3501a)
* The app does not need to be [responsive](https://medium.com/swlh/everything-you-need-to-know-about-responsive-web-design-54c2059a7e99)
* You do not need to use a [JavaScript Framework](https://raygun.com/blog/popular-javascript-frameworks/) but can if you want
* You are not expected to have any kind of test coverage in this phase

## Prerequisites

You use the Angular CLI to create projects, generate application and library code, and perform a variety of ongoing development tasks such as testing, bundling, and deployment.
To install the Angular CLI, open a terminal window and run the following command:

```
npm install -g @angular/cli
```

## Installing / Getting started

This project was generated with Angular CLI version 10.1.2. Use github to clone the directory using https://github.com/akshaypalekar/tasker-front-end.git or download the the file directly onto your computer. Once the folder is downloaded or cloned open a terminal (Mac/Ubuntu) or Command Prompt (Windows) and navigate to this project directory.

This command will generate all the needed node modules
```
npm install
```

These commands will build and run the angular application
```
ng build
ng serve
```



