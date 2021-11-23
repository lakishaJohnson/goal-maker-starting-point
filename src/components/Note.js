import React from "react"

class Note extends React.Component {
    constructor() {
      super()  

      this.state = {
          userInput: "",
          noteList: []
      }
    }
 
    handleUserInput = (event) => {
        this.setState({
            userInput: event.target.value,
        })
    }

    handleAddNote = (event) => {
        event.preventDefault()
        this.setState({
            noteList: [...this.state.noteList, event.target.value]
        })
    }
    
    render() {
        // console.log(this.state)
        return (
        <div>
            <h3>Notes</h3>
            <form>
                <textarea
                type="text"
                value={this.state.userInput}
                onChange={this.handleUserInput}></textarea>
                <button onClick={this.handleAddNote}>ADD NOTE</button>
            </form>
        </div>
        )
    }
}

export default Note