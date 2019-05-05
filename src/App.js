import React, { Component } from "react"
import Card from "./Card/Card"
import Draw from "./DrawCard/Draw"
import * as firebase from "firebase/app"
// import firebase from "firebase/app";
import "firebase/database"
import "./App.css"
import { DB_CONFIG } from "./config/firebase/db_config.js"

class App extends Component {
  constructor(props) {
    super(props)
    this.updateCard = this.updateCard.bind(this)
    this.app=firebase.initializeApp(DB_CONFIG)
    this.database=this.app.database().ref().child('cards')
    this.state = {
      cards: [
        { word: "Mumbai", define: "12.4million" },
        { word: "Tianjin", define: "12.7million" },
        { word: "Manila", define: "12.8million" },
        { word: "Moscow", define: "13.1million" },
        { word: "Tokyo", define: "13.6million" },
        { word: "Dhaka", define: "14.5" },
        { word: "Istanbul", define: "14.6million" },
        { word: "Karachi", define: "18million" },
        { word: "Beijing", define: "18.5million" },
        { word: "Shanghai", define: "24.1million" }
      ],
      currentCard: {}
    }
  }
  componentWillMount() {
    const currentCards = this.state.cards
    this.database.on('child_added', snap=>{
      currentCards.push({
          word: snap.val().word
      })
    })
    // console.log(currentCards)
    // console.log(this.getRandom(currentCards))
    this.setState({
      cards: currentCards,
      currentCard: this.getRandom(currentCards)
    })
  }
  getRandom(cc) {
    let card = cc[Math.floor(Math.random() * cc.length)]
    return card
  }
  updateCard() {
    const cc = this.state.cards
    this.setState({
      currentCard: this.getRandom(cc)
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Card
            front={this.state.currentCard.word}
            back={this.state.currentCard.define}
          />
          <Draw drawCard={this.updateCard} />
        </header>
      </div>
    )
  }
}

export default App
