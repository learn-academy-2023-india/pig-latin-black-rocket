import React, { useState } from "react"
import "./App.css"
import butcherPigImage from "./assets/butcherPig.jpeg"

const App = () => {
  // ACTION ITEM: to make the development process easier there are some preassigned words in the input field, when you are ready for your full user experience delete the test words passed to useState and pass an empty string
  const [userInput, setUserInput] = useState(
    "apple through queen squeal fry fluent"
  )
  const [inputTranslated, setInputTranslated] = useState("")

  // ACTION ITEM: the "myPigLatinCodeHere" function is where you will put your logic to translate the sentence entered by the user into Pig Latin
  const myPigLatinCodeHere = () => {
    // NO MODIFICATION NEEDED: the variable "arrayOfUserInput" will contain the text input from the user split into an array of words
    /* const splitting the string to individual strings, or string into characters */
    /* this is where our split array is located */
    const arrayOfUserInput = userInput.split(" ")
    console.log("arrayOfUserInput:", arrayOfUserInput)

    // NO MODIFICATION NEEDED: now that we have an array of words, we can map over the array and look at each word
    const translatedWordsArray = arrayOfUserInput.map((eachWord) => {
      console.log("eachWord:", eachWord)
      console.log(translatedWordsArray)

      // NO MODIFICATION NEEDED: this code will look at each word and identify the vowels
      const vowelsArray = eachWord.split("").filter((vowel) => {
        return (
          vowel === "a" ||
          vowel === "e" ||
          vowel === "i" ||
          vowel === "o" ||
          vowel === "u"
        )
      })
      console.log("vowelsArray:", vowelsArray)

      // ACTION ITEM: your Pig Latin logic goes here!
      // Pseudo code:
      // input: vowel
      // output: vowel + suffix + ay or way
      // for loop: i = 0; i > eachWord.length; i++
      // if([vowel] === first vowel) 
      // prefix: eachWord.vowel[0].split()
      // suffix: 
      // join prefix + suffix or letter
      // else if this.vowel + suffix or letter + "ay"
      // else if "qu" + suffix  or letter + "ay"
      // else if "y" + (suffix) + "ay"
      // else if eachWord.vowel[eachWord.length - 1] === y
      // else vowel + "way" 
      // action needed for onClick()

      const selectWord = (vowel) => {
        for(let i = 0; i > eachWord.length; i++)
        if(eachWord.vowel[0] ===  "a") {
          return true
        }
      }
      console.log(selectWord)

      // const letterOnly = (array) => {
      //   let onlyStringsArray = array.filter(value => {
      //     console.log(typeof value)
      //     return typeof value === "string"
      //   }).join("") // .toUpperCase 
      // }

//       var greetings = ["hello", "yo", "hola", "hey"]
// var cohorts = ["alpha", "bravo", "echo", "india"]

const upcasingArrayOfStrings = (arrayOfStrings) => {
	let collectionArray = [ ]
	for(let i = 0; i < arrayOfStrings.length; i++){
		return vowel[0].push(prefixArray)
	}
}	

      var beverage = ["lemonade", "water", "Grey Goose", "Arnold Palmer"]
console.log(dinner.concat(beverage))
console.log(dinner)

      // ACTION ITEM: this return will be the output of your Pig Latin'd code
      return eachWord
    })

    // NO MODIFICATION NEEDED: once the code has been modified it gets joined from an array back to a string
    const translatedWords = translatedWordsArray.join(" ")
    console.log("translatedWords:", translatedWords)

    // NO MODIFICATION NEEDED: this will update the inputTranslated variable in state
    setInputTranslated(translatedWords)
  }

  // ACTION ITEM: this method restarts the game by setting the original state, when you are ready for your full user experience delete the test words in setUserInput and pass an empty string
  const restartGame = () => {
    setUserInput("apple through queen squeal fry fluent")
    setInputTranslated("")
  }

  // NO MODIFICATION NEEDED: this method prevents React from refreshing the page unnecessarily
  const setUpPreventDefault = (e) => {
    e.preventDefault()
    myPigLatinCodeHere()
  }

  // NO MODIFICATION NEEDED: this method takes the value of the input and saves it in state
  const handleInput = (e) => {
    setUserInput(e.target.value)
  }

  return (
    <div className="page-container">
      <div className="body-container">
        <h1>Pig Latin Translator</h1>
        <img
          src={butcherPigImage}
          alt="drawing of pig with butcher cut names in pig latin"
          className="butcher-pig-image"
        />

        <div className="input-section">
          <h4>Enter phrase to be translated:</h4>
          <input
            type="text"
            className="user-input"
            onChange={handleInput}
            value={userInput}
          />
          <br />
          <button onClick={setUpPreventDefault}>Submit</button>
          <button onClick={restartGame}>Clear</button>
        </div>
        <p>{inputTranslated}</p>
      </div>
      <footer>&copy; 2023 | Coded by: Isaac V and Jeremie J!</footer>
    </div>
  )
}

export default App
