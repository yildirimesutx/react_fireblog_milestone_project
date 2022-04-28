import { createContext, useState } from "react";

import { useFunc, EditBlog } from "../helpers/firebase";

export const BlogContext = createContext()

// const initialvalue = [
//     title :"",


// ]

// 

const BlogContextProvider = ({children}) =>{
    const [detail,setDetail] = useState([])
    const [update, setUpdate] = useState(false)





    return (
        <BlogContext.Provider value={{detail,setDetail, useFunc, update, setUpdate }}>
    
          {children}

     
     
        </BlogContext.Provider>
         )
     }
     
     export default BlogContextProvider    