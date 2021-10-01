import { useEffect, useRef, useState } from "react"


export const useFetch = ( url ) => {

    const isMountedRef = useRef(true)
    

    const [state, setState] = useState({data:null, loading: true, error:null});

    useEffect( () => {

        return () => {
            isMountedRef.current = false; 
        }

    }, [])

    useEffect( () => {
        

        setState({loading:true, data:null, error:null});

        fetch(url)
            .then( resp => resp.json())
            .then( data => {

                setTimeout(() => {

                    if ( isMountedRef.current){
                        setState({
                            data:data,
                            loading: false, 
                            error:null
                        })
                    }

                },1000);

                

            });
        
        
    }, [url])

    return state;

}
