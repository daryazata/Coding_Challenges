import React, { Component } from 'react'
import './App.css'


/*

Author: _beta admin team

AUFGABE/TASK

Deutsch/German:

Gegeben sind zwei Arrays. Beide Arrays enthalten auschließlich ganzzahlige numerische Werte.
Beide Arrays sollen zu einem Array zusammengefügt werden. Anschließend soll das Array aufsteigend sortiert werden.
Zum Schluss soll jeder Eintrag des Arrays grafisch in einer Box dargestellt werden.

Hinweise:
  - Ob beide Arrays in eins der existierenden Arrays zusammengefügt wird oder ein neues Array erstellt wird ist nicht 
  vorgeschrieben.
  - Wie die Box gestaltet wird, ist nicht vorgeschrieben.


Englisch/English

Two arrays are given. Both arrays contains only integer numbers. The arrays should be combined. After that,
the result should be sorted in ascending order. At the end, each entry of that combined array should be displayed in a 
box in the browser.

Notes:
  - If both arrays are combined in one existing array or if a new one is created does not matter.
  - It does not matter how the box is styled.

Beispiel UI/UI example:

----------     ----------     ----------     ----------     ----------
|        |     |        |     |        |     |        |     |        |
|   1    |     |    2   |     |    5   |     |    7   |     |    9   |
|        |     |        |     |        |     |        |     |        |
----------     ----------     ----------     ----------     ----------

*/




export default class App extends Component {

  state = {
    arr1: [34, 12, 9, 123, 99, 40, 10],
    arr2: [0, 4, 11, 90, 43, 15, 59, 37, 13, 77]
  }

  render = () => {
    return (
      <div>
        Add your solution here
      </div>
    )
  }
}