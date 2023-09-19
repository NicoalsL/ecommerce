import { useParams } from "react-router";
import axios  from "axios";
import { useState, useEffect } from "react"

export default function Pays(){
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const params = useParams()
    console.log(params)
    
  
    useEffect( () => {
      const fetchData = async() => {
          try{
            console.log(params)

              const response = await axios.get('https://restcountries.com/v3.1/name/'+ params.name)

              console.log(response)
              setData(formatData)
              setLoading(false)
          } catch(error) {
            setLoading(false)
  
              console.log(error)
          }
      }
      fetchData()
      return () => {
          // netoyage
      }
  }, [])    

    return(
        <h1>Pays</h1>
    )
}