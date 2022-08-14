import React, {useState} from "react";
import { v4 as uuid } from 'uuid';
import './MadlibForm.css'

function Form ({createStory, setShowStory}){
    const INITIAL_STATE = { noun: '', noun2: '', adjective: '', color: ''};
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(formData => ({
          ...formData,
          [name]: value
        })
        
        );
      };
      const gatherInput = evt => {
        evt.preventDefault();
        createStory({ ...formData, id: uuid() });
        setFormData(INITIAL_STATE);
        setShowStory(true);
      };

      return (
		<div className='MadlibForm'>
			<form onSubmit={gatherInput}>
				<input
					required
					id='noun'
					type='text'
					name='noun'
					placeholder='Noun'
					value={formData.noun}
					onChange={handleChange}
				/>
				<input
					required
					id='noun2'
					type='text'
					name='noun2'
					placeholder='Noun 2'
					value={formData.noun2}
					onChange={handleChange}
				/>
				<input
					required
					id='adjective'
					type='text'
					name='adjective'
					placeholder='Adjective'
					value={formData.adjective}
					onChange={handleChange}
				/>
				<input
					required
					id='color'
					type='text'
					name='color'
					placeholder='Color'
					value={formData.color}
					onChange={handleChange}
				/>
				<button>Get Story</button>
			</form>
		</div>
	);
}

export default Form;