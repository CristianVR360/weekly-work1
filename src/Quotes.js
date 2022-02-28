import React, { useState } from 'react';
import quotes from './quotes.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft} from '@fortawesome/free-solid-svg-icons'
import { faCircleChevronRight} from '@fortawesome/free-solid-svg-icons'

const Quotes = () => {

  
    const [quote, setQuote]=useState(quotes[getRandom()]);

    const changeQuote = ()=>{
        setQuote(quotes[getRandom()])
        changeColor();
        console.log(classColor);

    }

    const [classColor, setClassColor]=useState("yellow");

    const changeColor = ()=>{
        if (classColor==="yellow"){
            setClassColor("blue");
        }
        else if (classColor==="blue"){
            setClassColor("magenta");
        }
        else if (classColor==="magenta"){
            setClassColor("yellow");
        }
    }




    //const quote=quotes[getRandom()];

    return (
        <div className={`${classColor} AppQuotes`}>
            <div className='card'>
                <div className="containerQuote">
                    <FontAwesomeIcon className='iconQuote' icon={faQuoteLeft} />
                    <p className="paragraphQuote">{quote.quote}</p>
                </div>

                <div className="containerNextButton">
                    <p className="authorQuote">{quote.author}</p>
                    <FontAwesomeIcon onClick={changeQuote}  className='nextButton' icon={faCircleChevronRight} />
                </div>
                
                
            </div>
            </div>
    );
};

const getRandom = ()=> Math.floor(Math.random()*quotes.length);

export default Quotes;