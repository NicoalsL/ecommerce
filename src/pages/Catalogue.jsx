import { useState, useEffect } from "react"
import axios from "axios"
import '../assets/css/App.css'
import { Link } from "react-router-dom"

export default function Catalogue(){
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
  
    useEffect( () => {
      const fetchData = async() => {
          try{
              const response = await axios.get('https://restcountries.com/v3.1/all')
              const formatData = response.data.map((item, index) => ({
                ...item,
                id: index
              }))
              console.log(formatData)
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
  
    return (
      <>
        <h1>Bonjour</h1>
      {loading ? (
          <div>Chargement ...</div>
        ) : (
          <>
          <h1> population totale : 
            {data && data.reduce((accumulateur, item) =>{
              return accumulateur + item.population
            }, 0).toLocaleString()}
          </h1>
            <div className="contenaire">
  
          {data && data.map( item => (
            <Link to={`/pays/${item.name.official}`} key={item.id} className="card">
             <p>{item.translations.fra.common}</p>
             {/* <p>Population : {item.population.toLocaleString()}</p> */}
             <img src={item.flags.png} alt={"le drapeau de" + item.translations.fra.common} />
             </Link>
            ))}
            </div>
            </>
        )
      }
      
      </>
    )
  }