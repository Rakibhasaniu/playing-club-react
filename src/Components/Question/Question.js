import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div>
            <div className='question-header'>
                <h1>Question Answer</h1>
            </div>
            <div className='quesone'>
                <h2>Question 1 : How does react work??</h2>
                <p>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes</p>
            </div>
            <div className='questwo'>
                <h2>Question 2 : Difference between props and state??</h2>
                <p>
                    PROPS: <br />
                    The Data is passed from one component to another. <br />	
                    It is Immutable (cannot be modified). <br />	
                    Props can be used with state and functional components.
    
                </p>
                <p>
                    STATE: <br />
                    The Data is passed within the component only. <br />
                 	It is Mutable ( can be modified). <br />
	                State can be used only with the state components/class component.
                </p>

                <p>
                POINT DISCUSSED : <br />
                Props are used to pass data from one component to another. <br />
                The state is a local data storage that is local to the component only and cannot be passed to other components. <br />
                The this.setState property is used to update the state values in the component.
                </p>
            </div>
            <div className='questhree'>
                <h2>Question 3 : What does useEffect do without data load??</h2>
                <p>
                    1. Reading from local storage. <br />
                   2. Registering and deregistering event listeners.
                </p>
            </div>
        </div>
    );
};

export default Question;
