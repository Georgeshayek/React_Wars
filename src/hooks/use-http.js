import { useCallback,useState } from "react";

const useHttp=(url,fn)=>{
        const [isLoading,setIsLoading]=useState(false);

        const ApiHandler=useCallback( async ()=>{
          setIsLoading(true)
            try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const data = await response.json();
        
        fn( data.results.slice(0,3))
        setIsLoading(false)
    }
    catch (error) {
      console.log(error);
       
    }},[url,fn])
    return [isLoading,ApiHandler]

}
export default useHttp