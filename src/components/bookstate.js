// import { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';

// const BookState = ({ addBook }) => {
//   const [title, setTitle] = useState([
//     {
//       id: uuidv4(),
//       title: 'Book Title',
//     },
//   ]);

//   const handleChange = (e) => {
//     setTitle(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (title.trim()) {
//       addBook(title);
//       setTitle('');
//     }
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <h2>ADD NEW BOOK</h2>
//         <input placeholder="Book title" />
//         <select>
//           <option value="fiction">Science Fiction and Fantasy</option>
//           <option value="romance">Romance</option>
//           <option value="thriller">Mystery and Thriller</option>
//           <option value="developement">
//             Self-Help and Personal Development
//           </option>
//           <option value="YO">Young Adult (YA)</option>
//         </select>
//         <input onChange={handleChange} type="submit" value="ADD BOOK" />
//       </form>
//     </>
//   );
// };

// export default BookState;
