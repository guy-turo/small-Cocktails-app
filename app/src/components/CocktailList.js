import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
const {cocktails, loading} = useGlobalContext()
console.log(cocktails)
if(loading){
  return <Loading/>
}
if(cocktails?.length <=0){

  return (
    <div>
       <h2 className='section-title'>
    no cocktail matched your search criteria
  </h2>
    </div>
 )
}
  return (
    <section>
      <h2 className='section-title'> cocktails</h2>
    <div className="cocktails-center ">
      {cocktails.map((item)=>{
        return <Cocktail key={item.id} {...item}/>
        
      })}
    </div>
    </section>
  )
}

export default CocktailList
