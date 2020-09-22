# Feature Toggle Kata

## Environment

### Running the app
Run `ng serve` to start the dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Run `ng serve --open` to automatically open your default browser to the app.

### Running unit tests

Run `npm test` to execute the unit tests via Jest.

## Application

The application is based on the standard Angular demo app "Tour of Heroes". The initial state of the app has the following features:

- Help page
- List of heroes
- Change the name of a hero
- Display system level messages
- Clear system level messages
- Navigation between heroes list and help  

## Kata

The purpose of this project is to practice the use of feature toggles, practice a variety of patterns and generate meaningful discussions related to feature toggle patterns.

While not all assignments would warrant the use of a feature toggle in real life, assume that we want to test out any change to the system with a limited audience before enabling it for all users. 

It is important to drive your changes to the system by tests, written in Jest.

### Assignment 1: add a superpower (done)

Introduce the ability to store a superpower with the hero's details. The superpower should be editable in a similar way as the hero's name and stored as a text field.

### Assignment 2: move messages out of the way 

In order to not clutter the screen, move the messages component to a sidebar on the right-hand side of the main page. There is no need at this point to make the messages panel a collapsable drawer.  

### Assignment 3: behold smart messages

The smart message service provides a timestamp for every message. I only stores the 10 most recent messages.

### Assignment 4: add hero

Introduce the ability to add a hero

### Assignment 5: focus while editing

As the information about the heroes grows, as well as the number of heroes itself, we need a specialized screen where we can entirely focus on editing a hero.
