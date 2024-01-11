import logoimg from "../logo.svg";
const reactDescription = ['Fundamental', 'Crucial', 'Core']

function randomNum(max) {
    return Math.floor(Math.random() * (max + 1))
}


export default function Headers() {
    const description = reactDescription[randomNum(2)];
    return (
        <header>
            <img src={logoimg} className="App-logo" alt="logo" />
            <p>
                {description} React concepts you will need for almost any app you are going to build!
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </header>

    );
}