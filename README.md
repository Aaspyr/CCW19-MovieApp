# Kino Daria App  
is simple cinema app to get information about repertoir in Kino Daria. This app also give you an opportunity to reserve places for choosen movie.

## Comends to start:

`npm start`

## technologies used:

-React,
-CSS, 
-MongoDB,
-mongoose,
-ExpressJs.

## how it look:
 Start page of app show repertoir for the current day. There are bookmarks for evryday repertoires at the top, so you can swich days, and watch repertoirs fo next seven days.

![start screen](./screens/start.png)

Panel with day bookmarks:

![day bookmarks](./screens/panel.png)

When you click on choosen hour, you will be directed to the page where you will be able to choose seats for the screening.

![hour of screening](./screens/hour.png)
![seates to choos](./screens/seats.png)

You can choose seats by click on them, and then confirm it by clicking "zarezerwuj".

![reserve place](./screens/reserve.png)


## API Endpoints:

1. GET api/repertoires - list of movies for 7 days,
2. GET api/repertoires/:id  - repertoir of movies for one, specific day with the given id,
3. GET api/repertoir/:id/:movie/:showTime - list off occupied placesc for specific screening,
4. PUT api/repertoir/:id/:movie/:showTime - adding selected places for screening to occupied places.

## Current structure of project

- node_modules..
- public
    - index.html - base html structure
    - logo.svg
    - robots.txt
- src
    - components - folder with components used in app and files with styling these components. Components are simply                named to give direct information about their purpose.
        - App.js (function that returns start page of App)
        - ApproveReservation.js (function to approve reservation, it confirms choosen places)
        - AvailableShowTimes.js (component with available show times for choosen movie on choosen day)
        - AvailableShowTimes.css ( styling for AvailableShowTimes component )
        - DaysBookmarks.js (component with showing bookmarks for available days)
        - DaysBookmarks.css (styling for dayBookmarks component)
        - Movie.js (component with showing available movies)
        - Movie.css (styling for Movie component)
        - MovieInfo.js (component with showing available movies)
        - MovieInfo.css (styling for MovieInfo component)
        - Place.js (component with setting status for seats)
        - Place.css (styling for Place component)
        - PlaceGrid.js (component with showing full spacing os seats with their status)
        - PlaceGrid.css (styling for PlaceGrid component)
        - PlaceSelectionPanel.js (component with panel to select places)
        - PlaceSelectionPanel.css (styling for PlaceSelectionPanel component)
    - icons - folder with icons used in app
        - kalendarz.svg
        - logo.svg
    - style - folder for some marks in app and files with styling them
        - confirmmemail.css
        - confirmmemail.html
        - index.css
        - index.html
        - indexplus.css
        - indexplus.html
        - movie.css
        - movie.html
        - venue.css
        - venue.html
    - index.js





