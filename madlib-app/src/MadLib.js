import React, {useState} from "react";
import Form from "./MadlibForms"
import Story from "./Story"

function Madlib(){
    const INITIAL_STATE = [];
    const [story,setStory] =useState(INITIAL_STATE);
    const [showStory,setShowStory] = useState(false);
    const createStory = newStory => {
        setStory(entries => [...entries, {...newStory}])
    }
    return(
        <div>
            <h1>MADLIBS</h1>
            {showStory ? (<Story story={story[0]} setStory={setStory} showStory={showStory}/>)
            :
            (<Form showStory={showStory} createStory={createStory}/>)
        }
        </div>
    )
}

export default Madlib;