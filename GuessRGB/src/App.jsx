import React, { Component } from 'react'
import './App.css'

/*
Author: _beta admin team

## Aufgabe / Task

### Deutsch/German:
Ablauf des Programms soll es sein, sich 6 verschiedene Farben per Zufallsprinzip generieren zu lassen (rgb(0-255, 0-255, 0-255)).
Diese 6 Farben werden dazu benutzt, die 6 <div class="square"></div> einzufärben, sodass jedes "square" jeweils eine zufällige Farbe repräsentiert.

Eine der zuvor generierten Farben wird als Zeichenkette in das <h1> tag geschrieben (Beispiel: rgb(100, 50, 40)) und ersetzt den Text "Replace with color to guess".
Klickt der Benutzernun auf ein "square" wird überprüft, ob Farbe des gewählten "square" mit der zu erratenen Farbe übereinstimmt. 
Stimmt sie überein ist das Spiel gewonnen, wenn nicht, wird das "square" ausgeblendet und der Benuzter erhält einen erneuten Versuch.

Zusammenfassung:
1. Generieren Sie beim Klick des <button id="new_color"> sechs zufällige Farben (RGB-Farbraum).
2. Ordnen Sie jedem <div class="square"> eine dieser Farben zu und färben sie den "square" dementsprechend ein.
3. Zeigen Sie einen der generierten Farben als Zeichenkette im <h1 id="colorToGuess"> an: z.B.: "rgb(100, 50, 40)".
4. Prüfen Sie beim Klick auf eine Farbe im <div class="square"> ob die Farbe mit der zu erratenden Farbe übereinstimmt.
  a. Stimmen überein - Spiel gewonnen
  b. Stimmen nicht überein - Geklickten <div class="square"> auslenden und erneuten Versuch abwarten. (Schritt 4)
5. Das Spiel kann durch einen Klick auf <button id=new"color"> erneut gestartet werden.

Hinweis:
- Ein Beispiel als Animiertes GIF finden Sie unter /src/example/rgbGuess.gif
- Die Visualisierung kann Ihrerseits geändert/gewählt werden.


### Englisch/English:

The program should be able to generate 6 different colors randomly (rgb(0-255, 0-255, 0-255)).
These 6 colors are used to colorize the 6 <div class="square"></div> so that each "square" represents a random color.

One of the previously generated colors is written as a string into the <h1> tag (example: rgb(100, 50, 40)) and replaces the text "Replace with color to guess".
If the user clicks on a square it is checked if the color of the selected square matches the color to guess. 
If it matches, the game is won, if not, the square is hidden and the user gets another try.

Summary:
  1. Generate six random colors (RGB color space) when clicking the <button id="new_color">.
  2. Assign one of these colors to each <div class="square"> and colorize the "square" accordingly
  3. Display one of the generated colors as a string in the <h1 id="colorToGuess">: e.g: "rgb(100, 50, 40)".
  4. When you click on a color in <div class="square"> check if the color matches the color you want to guess.
    a. Match - game won
    b. Not match - Hide clicked <div class="square"> and wait for a new attempt. (Step 4)
  5. The game can be restarted by clicking on <button id=new "color">.

Hint:
- An example as animated GIF can be found at /src/example/rgbGuess.gif
- The visualization can be changed/selected by you.

 */

class App extends Component {
  render() {
    return (
      <div className="App">
        <header class="text-center" id="nav_header">
            <div class="headline">
                <h1 id="colorToGuess">Replace with color to guess</h1>
            </div>
        </header>
        <div class="flex_container">
            <div class="flex">
                <button id="new_color">New colors</button>
                <h1 id="reaction"><b>GUESS!</b></h1>
            </div>
        </div>
        <div id="main_section">
            <div class="squares_container">
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
            </div>
        </div>
      </div>
    )
  }
}

export default App