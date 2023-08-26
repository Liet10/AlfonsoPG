import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FcSearch } from 'react-icons/fc';
import { IsDesktop } from '../../../Hooks/IsDesktop';


export const Search = () => {
  const navigate = useNavigate()
  const searchElement = (e)=>{
    e.preventDefault();
   
    let target = e.target
    const searchText = target.text.value
    navigate('/buscar/'+ searchText);
    target.text.value = ''
  }
  const isDesktop = IsDesktop()
  return (
    <div className='searchComponent'>
        <section className= "search">
                <form onSubmit={searchElement}>
                    <button className="buttonSearch hoverable" type="submit">
                    <FcSearch size={35} className='searchIcon'/>
                    </button>
                    <input type="text" name='text' id="search_field" />                   
                </form>
            </section>
    </div>
  )
}
