### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?

    #React is a powerl front-end framework developed by Facebook. Compared to other Frameworks, React right now is easier to build modular applications than other frameworks.

- What is Babel?

    #Babel is a translator for React JSX to Javascript. JSX is considered "illegal" so Babel translates JSX to make it "legal" for JavaScript.

- What is JSX?

    #JSX is basically a syntax extension of regular JavaScript and is used to create React elements.

- How is a Component created in React?

    #Components are created in two ways: Class Component and Function Components. With Function Components, we simply create a function that is a React class with a render method. This function can call on JSX using a return value.

- What are some difference between state and props?
    
    #Props are immutable, the can not be changed, useState can be changed when you pass in a initial State and a set State.

- What does "downward data flow" refer to in React?

    The downward data flow refers to the the child components trickling down to the parent component. Child components effect the Parent Component  not vise-versa.

- What is a controlled component?

    #If react is in control, the form elements are handled by a React component.

- What is an uncontrolled component?
    #Uncontrolled components is when React is not in control of the form state but the DOM itself.

- What is the purpose of the `key` prop when rendering a list of components?

    #Keys help React identify which items are changed, added, or removed.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?

    #Key's should be a stable identity and array shouldnt be used since it doesn't uniquely identify your elements.

- Describe useEffect.  What use cases is it used for in React components?

    #useEffect are considered the side effect of React hooks. You may want to use this to fetch data, start a timer, or manually change the DOM. 

- What does useRef do?  Does a change to a ref value cause a rerender of a component?

    #useRef returns a mutable object as an independent of the component but it will continue to exist with in the component. So this means that it does not trigger a rerender of the component.

- When would you use a ref? When wouldn't you use one?

    #Accessing an underlying DOM element, setting up or clearing timers. you shouldnt use it to access the DOM and make changes, React should control the state of the DOM.

- What is a custom hook in React? When would you want to write one?

    #Custom hooks are hooks created as its own seperate function that can help abstract logic or handle repeated tasks.
