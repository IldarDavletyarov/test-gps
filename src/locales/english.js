export const en = {
  languages: {
    en: 'English',
    ru: 'Russian',
  },
  header: {
    title: 'SquareGps test task',
  },
  navs: {
    about: 'About task',
    map: 'Map',
  },
  map: {
    markersTitle: 'Markers:',
    noMarkers: 'Add markers',
    marker: 'Marker'
  },
  about: {
    title: 'SquareGPS test task',
    subtitle: `You need to use <strong>Vuejs, Vuex, VueRouter, Vuetify</strong> to write an application. The application's header should contain a menu of 2 items: <strong>About Task</strong> and <strong>Map</strong>. The main part of the application should display the contents of the sections.`,
    sectionTaskTitle: 'Section "About task"',
    sectionTaskContent: 'The section should have the text of this assignment, laid out similarly.',
    sectionMapTitle: 'Section "Map"',
    sectionMapContent: 'There should be a map and list on the screen (see example):</br>1. When you click on the add button, the map should switch to add marker mode: a marker should appear in the place you clicked, and a record with coordinates should appear in the list</br>2. Record in the list should be highlighted when you click on the marker</br>3. When you click on record in the list the map should be centered on marker</br>4. Markers must be stored locally and not disappear after page reload</br>5. In the address bar the id of the selected marker must be displayed',
    additional: '<strong>Additional:</strong></br>1. To think about the display on mobile devices</br>2. Provide localization</br>3. using jest, write one unit test for any component 4. Simulate data saving to the backend (asynchronously)',
    notification: '<strong>Reminder</strong>: the test task is intended to show the ability to write good modular code, as well as the ability to use the mentioned technologies and not only. This code is something to be proud of.',
  },
};
