import { useEffect } from "react"

const useTitle = title => {
    useEffect(()=>{
        document.title = `${title} - Toy-Kingdom`;
    },[title])
}
export default useTitle