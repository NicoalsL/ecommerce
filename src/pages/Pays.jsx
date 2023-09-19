import { useParams } from "react-router";
import axios  from "axios";
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import Catalogue from "./Catalogue";

export default function Pays(){
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const params = useParams()
    
  
    useEffect( () => {
      const fetchData = async() => {
          try{
              const response = await axios.get('https://restcountries.com/v3.1/name/'+ params.name)

              console.log(response.data[0])
              setData(response.data[0])
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
        <>
        <h1>Pays</h1>
        <Link to='/'>Retour</Link>
        { loading ? (<p>Chargement</p>) :
            (<>
                <h2>{data.name.common}</h2>
                <img src={data.flags.png} alt={"le drapeau de" + data.translations.fra.common} />
                <p>{data.languages.fra}</p>

                <p>Population : {data.population.toLocaleString()}</p>
                <p>Capitale : {data.capital}</p>
                <p>Indepandant : {data.independent ? '✅' : 'Non'}</p>
                <p>Region : {data.region}</p>
                <p>Languages : {Object.values(data.languages).join(", ")}</p>
                <p>Continent : {Object.values(data.continents).join(", ")}</p>
            </>)
        }
    
        </>
        )
}