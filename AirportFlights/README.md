# AirportFlights

Author: _beta admin team

## Aufgabe/Task

### Deutsch/German:

Gegeben sind zwei Arrays mit Objekten. Jedes Objekt des ersten Arrays (airports) stellt die Eigenschaften eines Flughafens dar.
Jedes Objekt des zweites Arrays (flights) spiegelt die Eigenschaften eines Fluges zwischen zwei Flughäfen wieder.
Ziel der Aufgabe ist es, für jeden Flug die dazugehörigen Flughafen-Informationen anzuzeigen und zu visualisieren.

Hinweise:
- Es gibt Flüge, dessen referenzierten Flughafen-Information nicht verfügbar sind.
- Die Art der Visualisierung ist frei wählbar.

Zusatz: 
- Gibt es Verbesserungsmöglichkeiten bezüglich der Datenhaltung in Hinsicht auf Geschwindigkeit und Übersichtlichkeit?



### Englisch/English:

There are two arrays of objects. Each object of the first array (airports) represents the properties of an airport.
Each object of the second array (flights) reflects the properties of a flight between two airports.
The goal of the task is to display and visualize the corresponding airport information for each flight.

Hints:
- There are flights whose referenced airport information is not available.
- The type of visualization is freely selectable.

Addition: 
- Would you use the same type of data storage in terms of speed and clarity?


```javascript
const airports = [
    {
        "name": "Schönefeld",
        "city": "Berlin",
        "country": "Germany",
        "iata_code": "SXF",
    },
    {
        "name": "Dublin",
        "city": "Dublin",
        "country": "Ireland",
        "iata_code": "DUB",
    },
    {
        "name": "Ronald Reagan Washington Natl",
        "city": "Washington",
        "country": "United States",
        "iata_code": "DCA",
    }
]


const flights = [
    {
        from: "Schönefeld",
        to: "Dublin",
        when: "24th Nov. 2020",
        status: "Landed"
    },
    {
        from: "Schönefeld",
        to: "Malpensa",
        when: "24th Nov. 2020",
        status: "Canceled"
    },
    {
        from: "Dublin",
        to: "Ronald Reagan Washington Natl",
        when: "25th Nov. 2020",
        status: "Traveling"
    }
]
```

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
