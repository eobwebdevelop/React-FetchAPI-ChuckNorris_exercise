import  React  from  'react';


const  DisplayQuotes = ({ quote }) => {
    return (
        <div  className="DisplayQuotes">

            <ul>
                
                <li>
                       Here is your ChuckNorris 's Quote : {quote}  

                </li>

            </ul>
        </div>
    );
};

export  default  DisplayQuotes;

