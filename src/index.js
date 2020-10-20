import React from "react";
import ReactDom from "react-dom";

import "./index.css";
//named export/import
import {books} from './books';

//default export/import - Renaming without changes in the other js-file
import SpecificBook from './Book'

//easy version: HTML
//nested components: separate Junks
// function Greeting() {
//   return (
//     <div>
//       <h4>Hello Manolita</h4>
//       <Person/>
//       <Message/>
//       <ul>
//         <li><a href='#'>Hello World</a></li>
//       </ul>
//       <img src="" alt=""/>
//       <input type="text"/>
//     </div>
//   );
// }

// JSX Rules
// return single Element
// div /sction /article or Fragment
// className instead of class
// camelCase ofr html attribute: eg onClick
// close every element: <img src="" alt=""/> <input type="text"/>
// formatting

//version with JSX: Arrow-Function
// const Greeting = () =>{
//   return React.createElement('h1',{},'hello world dearest manu');
// }

//version with JSX: Arrow-Function and div and html
// const Greeting = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "hello again")
//   );
// };

// const Person = () => <h2>john doe</h2>;
// const Message = ()=> {
//   return <p>This is my message</p>;
// }

// ReactDom.render(<Greeting />, document.getElementById("root"));

//LAST STANDING BEFORE ITERATION START
//one booklist with Book
//PROPS: setup vars
// const firstBook = {
//   author: "André Aciman",
//   title: "Find me",
//   img:
//     "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTBMjYZ6T6WsNjW4sNH8_eMk-6Kb--BZYNp1O-xxjMN1EVMTajYjy53HyBVh14x120377EsT3rcZSwDWvwBHKWs4I9iMWPr8SfYLjokA7Uh&usqp=CAE",
// };
// const secondBook = {
//   author: "Robb Pearlman, Melanie Demmer",
//   title: "The Office",
//   img:
//     "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780316428385_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
// };

// function Booklist() {
//   return (
//     <section className="booklist">
//       {/* props name and value */}
//       {/* <Book job='developer'/> */}
//       <Book
//         img={firstBook.img}
//         author={firstBook.author}
//         title={firstBook.title}
//       >
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ipsa
//           commodi, neque vel odit harum aliquid. Provident commodi sint
//           veritatis.
//         </p>
//       </Book>
//       {/* <Book title='random title' number={15}></Book> */}

//       <Book
//         img={secondBook.img}
//         author={secondBook.author}
//         title={secondBook.title}
//       />
//     </section>
//   );
// }
//LAST STANDING BEFORE ITERATION END

//Version: book with 3 components
// const Book = () => {
//   return <article className='book'><Image /><Title/><Author/></article>;
// };

// const Image = () => <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTBMjYZ6T6WsNjW4sNH8_eMk-6Kb--BZYNp1O-xxjMN1EVMTajYjy53HyBVh14x120377EsT3rcZSwDWvwBHKWs4I9iMWPr8SfYLjokA7Uh&usqp=CAE" alt=""/>
// const Title = () => <h2>Find me</h2>;
// const Author = () => <h4 style = {{color: 'green', fontSize:'0.75rem', marginTop:'0.25rem',letterSpacing: '3px'}}>André Aciman</h4>;

//Version: book: all in one
// const Book = () => {
//   //const title = "Find me";
//   //const author = "André Aciman";
//   return (
//     <article className="book">
//       <img
//         src={img}
//       />
//       <h2>{title}</h2>
//       <h4>{author.toUpperCase()}</h4>
//       <p>{/*let x = 6*/}</p>
//       <p>{6 + 6}</p>
//     </article>
//   );
// };

//Book with props
// const Book = (props) => {
//   console.log(props);
//   return (
//     <article className="book">
//       <img
//         src={props.img} alt=''
//       />
//       <h2>{props.title}</h2>
//       <h4>{props.author.toUpperCase()}</h4>
//       {/* {console.log(props)} */}
//   {/* <p>{props.job}</p>
//   <p>{props.number, props.title}</p>
//   <p>{props.number}</p> */}
//     </article>
//   );
// };

//LAST STANDING BEFORE ITERATION START
//Book with props:2nd version with children prop
// const Book = (props) => {
//   const { img, title, author } = props;
//   return (
//     <article className="book">
//       <img
//         src={img} alt=''/>
//         {props.children}
//       <h2>{title}</h2>
//       <h4>{author.toUpperCase()}</h4>

//     </article>
//   );
// };
//LAST STANDING BEFORE ITERATION END

//Book: 3rd version without props and with children prop
// const Book = ({ img, title, author, children }) => {
//   //const { img, title, author } = props;
//   return (
//     <article className="book">
//       <img src={img} alt="" />
//       {children}
//       <h2>{title}</h2>
//       <h4>{author.toUpperCase()}</h4>
//     </article>
//   );
// };

//REFACTORING
//VERSION WITH ITERATION OF ARRAY

//one booklist with Book
//PROPS: setup vars

// export to books.js START []
// const books = [
//   {
//     id: 1,
//     author: "André Aciman",
//     title: "Find me",
//     img:
//       "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTBMjYZ6T6WsNjW4sNH8_eMk-6Kb--BZYNp1O-xxjMN1EVMTajYjy53HyBVh14x120377EsT3rcZSwDWvwBHKWs4I9iMWPr8SfYLjokA7Uh&usqp=CAE",
//   },
//   {
//     id: 2,
//     author: "Robb Pearlman, Melanie Demmer",
//     title: "The Office",
//     img:
//       "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780316428385_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
//   },
//   {
//     id: 3,
//     author: "Aaron Reynolds, Peter Brown",
//     title: "Creepy Carrots",
//     img:
//       "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781442402973_p0_v3%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
//   },
// ];
//export to books.js END

// const names = ["john", "milly", "manu"];
// const newNames = names.map((name)=> {
//   return <h1>{name}</h1>
// });
// console.log(newNames);

//Version object and component book
// function Booklist() {
//   return (
//     <section className="booklist">
//       {books.map((book,index) => {
//         const { img, title, author } = book;
//         console.log(book);
//         return <Book key={book.id} book={book}></Book>;
//       })}
//     </section>
//   );
// }
// const Book = (props) => {
//   const { img, title, author } = props.book;
//   return (
//     <article className="book">
//       <img src={img} alt="" />
//       <h2>{title}</h2>
//       <h4>{author.toUpperCase()}</h4>
//     </article>
//   );
// };



//Version spread operator and recommended book index
function Booklist() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <SpecificBook key={book.id} {...book}></SpecificBook>;
      })}
    </section>
  );
}

//default Export [] START
//const Book = ({img, title, author}) => {
 // events
 // attribute, eventHandler
 //onClick, onMouseOver

 //simple function
// const clickHandler = () => {
//   alert('Griass di!')
// }

//modified function with e and e.target
// const clickHandler = (e) => {
//   console.log(e);
//   console.log(e.target);
//   alert('Griass di!')
// }

// const complexExample = (author) => {
//   console.log(author);
// }

//   return (
//     <article className="book" onMouseOver = {() => {
//       console.log(title);
//     }}>
//       <img src={img} alt="" />
//       {/* Example Inline function */}
//       <h2 onMouseOver = {
//         () => console.log(title)
//       }>{title}</h2>
//       <h4>{author.toUpperCase()}</h4>
//       {/* Example Reference */}
//       <button type="button" onClick={clickHandler}>reference example</button>
//       {/*more complex Example: all three arrive without klicking */}
//       <button type = "button" onClick = {complexExample(author)}>more complex example </button>
//       {/*correct version of complex Example: just the one klicked */}
//       <button type = "button" onClick = {() => complexExample(author)}>correct complex example </button>
//     </article>
//   );
// };
//DEFAULT EXPORT [] END

ReactDom.render(<Booklist />, document.getElementById("root"));
