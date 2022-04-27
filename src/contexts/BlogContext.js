import { createContext, useState } from "react";

import { useFunc } from "../helpers/firebase";

export const BlogContext = createContext()

// const initialvalue = [
//     title :"",


// ]

// 

const BlogContextProvider = ({children}) =>{
    const [detail,setDetail] = useState([])



    return (
        <BlogContext.Provider value={{detail,setDetail, useFunc }}>
    
          {children}

     
     
        </BlogContext.Provider>
         )
     }
     
     export default BlogContextProvider    