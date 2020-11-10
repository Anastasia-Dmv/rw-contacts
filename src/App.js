import React from "react";
import { Contacts } from "./pages/Contacts";

export const App = () => {
  return (
    <div>
      <Contacts />
    </div>
  );
};
// import React from "react";
// import { useState, useEffect } from "react";

// //import { Contacts } from "./pages/Contacts";

// export function Contacts() {
//   const [contacts, setContacts] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isError, setIsError] = useState(false);

//   useEffect(() => {
//     const getContacts = async () => {
//       try {
//         setIsLoading(true);
//         const response = await fetch("https://randomuser.me/api/?results=100");
//         console.log("response", response);
//         const { results } = await response.json();
//         console.log("results", results[0]);
//         setContacts(results);
//         setIsError(false);
//         setIsLoading(false);
//       } catch (error) {
//         setIsError(true);
//         // setIsLoading(false);
//       } finally {
//         // setIsLoading(false);
//       }
//     };
//     getContacts();
//   }, []);
//   // if (isLoading) {
//   //   return <div>...Loading</div>;
//   // }
//   if (isError) {
//     return <div>...error</div>;
//   }
//   return <div>Contacts {contacts}</div>;
// }
