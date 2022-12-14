import React from 'react';

function Story({showStory, story, setStory}) {
    const restart = () => {
        showStory(false);
        setStory([]);
    }

    return (
		<div className='Story'>
			<p>
				There was a {story.color} {story.noun} who loved a {story.adjective} {story.noun2}.
			</p>
			<button onClick={restart}>Restart</button>
		</div>
    );
}

export default Story;