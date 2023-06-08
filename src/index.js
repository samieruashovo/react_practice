import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';


const firstBook = {
    author: 'Jordan Moore',
    title: 'interesting facts for curious',
    img: 'https://buddhify.com/wp-content/uploads/2018/07/iStock-689785084.jpg',

}
const secondBook = {
    author: 'James clear',
    title: 'Atomic habits',
    img: 'https://images.pexels.com/photos/1005324/literature-book-open-pages-1005324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',

}
// const thirdBook = {
//     author: 'Jordan Moore',
//     title: 'interesting facts for curious',
//     img: './images/https://www.bing.com/images/search?view=detailV2&ccid=mvDZn4tD&id=96053B34473229D7235A75238078203302DA78D8&thid=OIP.mvDZn4tDZSZyo9EUaIXiIAHaLH&mediaurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.9af0d99f8b43652672a3d1146885e220%3Frik%3D2HjaAjMgeIAjdQ%26riu%3Dhttp%253a%252f%252fcrossexamined.org%252fwp-content%252fuploads%252f2014%252f04%252fstack_of__books.jpg%26ehk%3Dhq%252fGj93DmHJo8P0hL%252b3aCuPJre%252bfu3DzW8r2nreB%252b3c%253d%26risl%3D1%26pid%3DImgRaw%26r%3D0&exph=3888&expw=2592&q=book&form=IRPRST&ck=8DE4DA566345F0B3F94693D58B30E1B0&selectedindex=0&ajaxhist=0&ajaxserp=0&vt=0&sim=11&pivotparams=insightsToken%3Dccid_mvDZn4tD*cp_0DBC83A1B3D7DC5B421F5E480CF2B73B*mid_F49D29F61D8DB1B7CE9875238078203302DA78D8*simid_608051646039415103*thid_OIP.mvDZn4tDZSZyo9EUaIXiIAHaLH&iss=VSIx.jpg',

// }
const BookList = () => {
    return <section className="booklist">
        <Book author={firstBook.author} title={firstBook.title} img={firstBook.img} />
        <Book author={secondBook.author} title={secondBook.title} img={secondBook.img} />
    </section>
}

const Book = (props) => {

    return (<article className="book">
        <img src={props.img} alt={props.title} />
        <h2>{props.title}</h2>
        <h4  >{props.author.toUpperCase()}</h4>
        <p>{props.title}</p>
        <p>{props.number}</p>
    </article>);
}


const root
    = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList></BookList>)