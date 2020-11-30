import React, { Component } from 'react'
import './App.css'

/*
Author: _beta admin team

## Aufgabe / Task

### Deutsch/German:
 
Gegeben ist ein String-Array mit beliebig vielen Einträgen.
Die Elemente des Arrays sollen untereinander und alphabetisch sortiert ausgegeben werden.
Erstellen Sie ein Eingabefeld, welches beim Tippen die ausgegebenen Liste filter und nur jene Werte ausgibt, die einen Teil des gesuchten Wertes beinhalten.
  Beispiele: 
    Eingabe "rang" => ausgegebene Liste 
    - Orange
    - Orange Juice
    Eingabe "bana" => ausgegebene Liste:
    - Banana

 Hinweis: 
 - Es müssen keine Sonderzeichen oder Zahlen berücksichtigt werden.
 - Die Werte sollen unahängig der Groß-/Kleinschreibung gefunden werden.


### Englisch/English:
 
Given is a string array with any amount of entries.
The elements of the array shall be output one below the other and sorted alphabetically.
Create an input field, which filters the output list while typing and outputs only those values, which contain a part of the searched value.
  Examples: 
    Input "rang" => output list 
    - Orange
    - Orange Juice
    Input "bana" => output list:
    - Banana

 Note: 
 - There are no special-characters or numbers to be considered.
 - The values should be found case-insensitive.
*/

class App extends Component {
  state = {
    data: [
      'Orange',
      'Orange Juice',
      'Apple',
      'Milk',
      'Banana',
      'Bread',
      'Kellogs',
      'Noodles'
    ]
  }
  render() {
    return (
      <div className="App">
      </div>
    )
  }
}

export default App
