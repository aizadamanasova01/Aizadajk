const Header = () => {
     
    const menuItems = ['Home', 'About', 'Info']
    return (
        <nav style={{backround: "green"}}>
            <ul>
                {menuItems.map(menu => {
                    return <li key={menu}>{menu}</li>
                }) }
            </ul>
        </nav>
    )
}

export default Header