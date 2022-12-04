import { Component } from "react";
import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import quotes from './quotes.json';

export default class Card extends Component {
    constructor(props){
        super(props);
        this.state = {
            quote: '',
            author: '',
        }
        this.getQuote = this.getQuote.bind(this);
    }
    getQuote(){
        const quote = quotes[Math.floor(Math.random() * quotes.length)];
        this.setState({
            quote: quote.quote,
            author: quote.author
        });
        let random_color = { r: Math.random() * 200, g: Math.random() * 200, b: Math.random() * 200 };
        let random_color_string = "rgb(" + random_color.r + "," + random_color.g + "," + random_color.b + ")";
        this.props.onParentThemeChange(random_color_string);    
    }

    componentWillMount(){
        this.getQuote();
    }
    render() {
        const textStyles = {color : this.props.theme};
        const buttonStyles = {backgroundColor : this.props.theme, color : '#fff'};
        return (
            <div id="quote-box">
                <div id="text" style={textStyles}>
                    <FontAwesomeIcon icon={faQuoteLeft} />
                    <span>{this.state.quote}</span>
                </div>
                <div id="author" style={textStyles}>
                    - {this.state.author}
                </div>
                <div id="buttons">
                    <a id="tweet-quote" 
                    href={"https://twitter.com/intent/tweet?hashtags=quotes&text=%22" + this.state.quote + "%22%20-%20" + this.state.author}
                    target="_blank" rel="noreferrer" style={buttonStyles}>
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <button id="new-quote" onClick={this.getQuote} style={buttonStyles}>New Quote</button>
                </div>
            </div>  
        );
    }
}