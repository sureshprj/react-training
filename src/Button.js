

function Button(props){

    const handleClick= ()=>{
        //some
        console.log("Button Clicked")
    }
    return (
        <div onClick={handleClick}>
            <div>
                <button onClick={handleClick}>
                 {props.children}
                 </button>
            </div>
        </div>
      )
}
export default Button;

