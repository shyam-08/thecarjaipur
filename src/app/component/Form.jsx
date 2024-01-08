// import React from 'react'

// export default function Form() {
//     useEffect(() => {
//         // Function to handle form submission
//         const handleSubmit = (e) => {
//           e.preventDefault();
//           // Your form submission logic here
//           const formData = new FormData(e.target);
//           console.log('Form submitted:', formData);
//         };
//         window.handleSubmit = handleSubmit;
//     }, []);
  
//   return (
//     <div>
//        <form id="myForm" onsubmit="handleSubmit(event)">
//         <label>
//           Name:
//           <input type="text" name="name" required />
//         </label>
//         <br />
//         <label>
//           Email:
//           <input type="email" name="email" required />
//         </label>
//         <br />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   )
// }
