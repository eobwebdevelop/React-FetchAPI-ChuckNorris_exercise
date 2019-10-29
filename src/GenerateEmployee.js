import  React  from  'react';

const  GenerateEmployee = ({ generateQuote }) => {
    return (
        <div  className="GenerateEmployee">
            <button  onClick={generateQuote}>Get quote</button>
        </div>
    );
};

export  default  GenerateEmployee;