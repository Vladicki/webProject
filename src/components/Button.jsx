import {React,useState, useEffect} from 'react'

const Button = ({children, onClick, default_colour, hover_colour, className}) => {
    //to add custom styles, pass styles to className prop
    
    const [colour,setColour]=useState('blue');
    const [hoverColour,setHoverColour]=useState('blue');


    useEffect(() => {
      if(default_colour){
        setColour(default_colour)
      }
      if(hover_colour){
        setHoverColour(hover_colour);
      }
    }, [])

    const tailwindColour = `bg-${colour}-500`;
    const tailwindHoverColour = `hover:bg-${hoverColour}-600`;
    

    return (
        <button
          className={"px-4 py-2 text-white rounded transition " + tailwindColour + " " + tailwindHoverColour + " " + className}
          onClick={onClick}
        >
          {children}
        </button>
      );
}

export default Button