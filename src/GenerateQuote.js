import  React  from  'react';

const  GenerateQuote = ({ generateQuote }) => {
    return (
        <div  className="GenerateQuote">
            <button  onClick={generateQuote}>Get quote</button>
        </div>
    );
};

export  default  GenerateQuote;