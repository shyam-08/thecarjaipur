// // import { useState, useEffect } from 'react';

// // const MyForm = () => {
// //   const [showForm, setShowForm] = useState(false);
// //   const [formData, setFormData] = useState({
// //     // Initialize form data fields here
// //     // For example:
// //     name: '',
// //     email: '',
// //   });

// //   useEffect(() => {
// //     // This function will be called when the component mounts
// //     // You can use it to show an alert or form on window load

// //     // For demonstration purposes, let's show the form after 3 seconds
// //     const timeoutId = setTimeout(() => {
// //       setShowForm(true);
// //     }, 3000);

// //     // Cleanup the timeout to avoid memory leaks
// //     return () => clearTimeout(timeoutId);
// //   }, []); // Empty dependency array means this effect runs only once on mount

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prevData) => ({
// //       ...prevData,
// //       [name]: value,
// //     }));
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     // Handle form submission logic here
// //     // You can send the data to your server or perform any other action
// //     console.log('Form submitted:', formData);
// //     // Reset form data
// //     setFormData({
// //       name: '',
// //       email: '',
// //     });
// //     // Hide the form
// //     setShowForm(false);
// //   };

// //   return (
// //     <div>
// //       {/* Alert or form */}
// //       {showForm ? (
// //         <form onSubmit={handleSubmit}>
// //           <label>
// //             Name:
// //             <input type="text" name="name" value={formData.name} onChange={handleChange} />
// //           </label>
// //           <br />
// //           <label>
// //             Email:
// //             <input type="email" name="email" value={formData.email} onChange={handleChange} />
// //           </label>
// //           <br />
// //           <button type="submit">Submit</button>
// //         </form>
// //       ) : (
// //         <div>
// //           {/* You can show an alert or any other content while the form is hidden */}
// //           <p>Loading...</p>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default MyForm;
// // pages/index.js
// import { useEffect } from 'react';

// const myForm = () => {
 

   
//     window.alert(
      
      
//     // `);

    
  
//   return (
//     <div>
//       .
//     </div>
//   );
// };

// export default myForm;
