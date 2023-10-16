// import React from 'react'
// import Rood from './rood';
// const Square = ({onClick,value}) => {
//   return (
//     <div
//     onClick={onClick}
//      style={{ border:"1px solid", 
//      height: "100px", width: "100%",
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center", 
//     }} 
//      className='square'>
//         <h5>{value}</h5>
//     </div>
//   )
// }

// export default Square;

import React from 'react'
import Rood from './rood';
const Square = ({onClick,value}) => {
  return (
    <div
    onClick={onClick}
     style={{ border:"1px solid", 
     height: "100px", width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center", 
    }} 
     className='square'>
        <h5>{value}</h5>
    </div>
  )
}

export default Square;