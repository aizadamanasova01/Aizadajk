function Button(props) {
    const btnStyle = {
        color: "#fff",
        padding: "8px 12px",
        background: props.bgColor,
        border: 0,
        borderRadius: 3,
        marginRight: 10,
    }
    return <button style={btnStyle}>{props.name}</button>;
}

export default Button;