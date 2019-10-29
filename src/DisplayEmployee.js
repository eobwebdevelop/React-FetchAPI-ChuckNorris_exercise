import  React  from  'react';


const  DisplayEmployee = ({ quote }) => {
    return (
        <div  className="DisplayEmployee">

            <ul>
                
                <li>
                       Here is your ChuckNorris 's Quote : {quote}  

                </li>

            </ul>
        </div>
    );
};

export  default  DisplayEmployee;

