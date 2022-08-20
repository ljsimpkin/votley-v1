// for generating unique keys
import { v4 as uuid } from 'uuid';

function Drafting(props) {
  const {game, setIdea, addIdea, vote, hasVoted, changeRound} = props.state
  const ideas = Object.keys(game.ideas)

  return (
      <>
      <button onClick={()=>{changeRound("back")}}>Back</button>
      <div>
        <h1 className="gameTitle">Select and Submit</h1>

        {ideas.map(idea =>
          <button onClick={() => {vote(idea)}} className={ hasVoted(idea) ? "tile hasVoted" : "tile"} key={uuid()}>
            <div className="tileChild">
              {idea} {game.ideas[idea].length}
            </div>
          </button>
        )}
            
        <div className='messageBox'>
          <input className='ideaTextBox'
            placeholder="Enter your awesome idea here..."
            onChange={(event) => {
              setIdea(event.target.value);
            }}
          />
  
          <button className="submitIdea" onClick={addIdea}>💡</button>
        </div> 

        </div>
      </>
  );
}

export default Drafting;