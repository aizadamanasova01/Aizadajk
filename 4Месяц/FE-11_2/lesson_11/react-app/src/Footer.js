const Footer = (props) => {
const Comtacts = ["Contacts", " +996 502 45-45-45", "test@gmail.com" ];
// props = {}
/*
props = {
 text: "......"
}

*/
console.log(props);
    return (
<div>
    <h3 style={{color: props.tColor}}>{props.text}</h3>
    <ul>
    {Comtacts.map(el => {
     return <li key={el}>{el}</li>;
     }) }
    </ul>
</div>
    );
};

export default Footer