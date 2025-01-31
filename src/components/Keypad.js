// Code Keypad Component Here

function Keypad (){
    //function to handle change.
    function handleChange(){
console.log("Entering password...");
    }

    return (
        <div>
            
            <input type="password" onChange={handleChange
            } />
        </div>
    )
}

export default Keypad;