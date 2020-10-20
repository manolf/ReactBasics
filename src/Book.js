//default import/export

import React from 'react'

const Book = ({img, title, author}) => {

   const clickHandler = (e) => {
     console.log(e);
     console.log(e.target);
     alert('Griass di!')
   }
   
   const complexExample = (author) => {
     console.log(author);
   }
   
     return (
       <article className="book" onMouseOver = {() => {
         console.log(title);
       }}>
         <img src={img} alt="" />
         {/* Example Inline function */}
         <h2 onMouseOver = {
           () => console.log(title)
         }>{title}</h2>
         <h4>{author.toUpperCase()}</h4>
         {/* Example Reference */}
         <button type="button" onClick={clickHandler}>reference example</button>
         {/*more complex Example: all three arrive without klicking */}
         <button type = "button" onClick = {complexExample(author)}>more complex example </button>
         {/*correct version of complex Example: just the one klicked */}
         <button type = "button" onClick = {() => complexExample(author)}>correct complex example </button>
       </article>
     );
   };

export default Book
