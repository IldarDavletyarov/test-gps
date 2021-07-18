export default {
  en: {
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
  },
  ru: {
    languages: {
      en: 'Английский',
      ru: 'Русский',
    },
    header: {
      title: 'Тестовое задание для SquareGps',
    },
    navs: {
      about: 'О задании',
      map: 'Карта',
    },
    map: {
      markersTitle: 'Маркеры:',
      noMarkers: 'Добавьте маркеры',
      marker: 'Маркер'
    },
    about: {
      title: 'Тестовое задание SquareGPS',
      subtitle: 'Необходимо с помощью ​<strong>Vuejs, Vuex, VueRouter, Vuetify</strong> ​написать приложение. Хэдер приложения должен содержать меню из 2-х пунктов: ​<strong>О задании​</strong> и <strong>​Карта</strong>. В основной части приложения должно отображаться содержимое разделов.',
      sectionTaskTitle: 'Раздел "О задании"',
      sectionTaskContent: 'В разделе должен быть текст этого задания, сверстанный аналогично.',
      sectionMapTitle: 'Раздел "Карта"',
      sectionMapContent: 'На экране должны быть карта и список (см пример):</br>1. При клике на кнопку добавления, карта должна перейти в режим добавления маркера: в месте клика должен появится маркер, а в списке - запись с координатами 2. При клике на маркер должна подсвечиваться запись в списке</br>3. При клике на запись в списке карта должна центрироваться на маркере</br>4. Маркеры должны храниться локально и не пропадать после перезагрузки страницы</br>5. В адресной строке должен отображаться id выбранного маркера',
      additional: '<strong>Дополнительно:</strong></br>1. Продумать отображение на мобильных устройствах</br>2. Предусмотреть локализацию</br>3. Необходимо с помощью j​est ​написать 1 модульный тест на любой компонент</br>4. Произвести имитацию сохранения данных на бекенд (асинхронно)',
      notification: '<strong>Напоминание:</strong> тестовое задание призвано показать умение писать хороший модульный код, а также умение пользоваться указанными технологиями и не только. Этим кодом нужно гордиться.',
    },
  },
};
