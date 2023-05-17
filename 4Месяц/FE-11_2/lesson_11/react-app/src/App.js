import Button from "./Button";
import Footer from "./Footer";
import Header from "./Header";
import Div from './Div'

const App = () => {
    const footerText = "Footer Component"
    const color = "green"
    return(
        <div>
            <Header />
            <Div />
            <Button name='Primary' bgColor="blue" />
            <Button name='Secondary' bgColor='gray' />
            <Button name='Success' bgColor='green'/>
            
            <div style={{backround: " , height: 500"}}></div>
            <h2>App Component</h2>
            <Footer  text={footerText} tColor={color} />
        </div>
    );
};

export default App
