
function Square(props) {
  return (
      <div
      onClick={props.onClick}
        style={{ borderWidth: props.border, borderStyle:"solid", height:"150px", width:"100%",display:"flex", justifyContent:"center", alignItems:"center", color:"#E2E8DD",  }} 
        className="square">
       <h1>{props.value}</h1>
     </div>
  )
}

export default Square