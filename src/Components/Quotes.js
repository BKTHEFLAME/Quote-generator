import React ,{useState, useEffect} from 'react';
import twitterIcon from '../Components/twitter.svg';
import tumblrIcon from '../Components/tumblr.svg';


const Quotes = () => {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');

    useEffect(() =>{
        getQuote()
    },[]);

    const getQuote = () =>{
        let url =`https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`
        fetch(url)
        .then(res => res.json())
        .then(data =>{
            let dataQuotes = data.quotes;
            let randomNum = Math.floor(Math.random() * dataQuotes.length);
            let randomQuote = dataQuotes[randomNum];
            setQuote(randomQuote.quote);
            setAuthor(randomQuote.author);
        }
            )
    }
    const handleClick = () =>{
        getQuote();
    }
    return(
        <div id="quote-box">
        <div id="text"><p>{quote}</p></div>
        <div id="author"><p>{author}</p></div>
        
        <div id="buttons">
             <div className='social-media'>
                 <a target={'_blank'} href="https://twitter.com/home?lang=en" id="tweet-quote">
                 <span><img src='https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/2012/png/iconmonstr-twitter-1.png&r=0&g=0&b=0' alt=""/></span></a>
                 <a href="#" id="tumblr-quote">
                 <span><img src='https://cdns.iconmonstr.com/wp-content/releases/preview/2012/240/iconmonstr-tumblr-4.png' alt=''/></span></a>
             </div>
             <button onClick={handleClick} id='new-quote'>New quote</button>
        </div>
        
        </div>
     )
}
    
    



export default Quotes;