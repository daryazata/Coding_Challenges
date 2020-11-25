import React, { Component } from 'react'
import './App.css'


/*
Author: _beta admin team

## Aufgabe / Task

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
*/


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


export default class App extends Component {

  state = {
  }

  /* Possible Solution */
  render = () => {
    return (
      <div>
        Add your solution here
      </div>
    )
  }
}