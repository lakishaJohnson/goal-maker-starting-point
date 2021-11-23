import Note from "./Note"

class Notes extends React.Component {
    constructor() {
        super() 

        this.state = {
            userInput: "",
        }
    }
    
    render () {
        return (
            <div> 
            <Note handleUserInput={this.userInput}/>   
            </div>
            )
        }
    }
            
            
export default Notes
    