function Card(props) { 
    return (
    <div className="card" style={{ width: 300, border: '1px solid black' ,display:"inline-block"}}> 
    <h2>{props.name}</h2> 
    <p>{props.value}</p> </div>); }

    export default Card