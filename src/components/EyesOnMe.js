
function EyesOnMe() {
    //function to handle focus.
  function  handleFocus() {
    console.log("Good");
  }

  //function to handle blur.
  function  handleBlur() {
    console.log("Hey! Eyes on me!");
  }

return( 
    <>
    <button onFocus={ handleFocus} onBlur={handleBlur} >Eyes on me</button>
    </>
)
}
export default EyesOnMe;