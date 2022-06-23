import React, { useEffect, useState } from 'react'
import './Main.scss'
import { cards } from '../../mockData/cards.js'

const Main = () => {
  const [page, setPage] = useState(9)
  let start = cards.slice(0, page)
  const [targetCard, setTargetCard] = useState()
  const [filtred, setFiltred] = useState(start)
  const [selectedTitle, setSelectedTitle] = useState('Show All')

  const loadMore = () => {
    setPage(page + page)
    setFiltred(start)
  }

  const handleTarget = (id) => {
    setTargetCard(id)
  }

  const handleCategory = (e) => {
    console.log(e);
    const select = e.target.value
    const type = e.target.innerText
    if (type === 'Show All' || select === 'Show All') {
      setFiltred(start)
      setSelectedTitle(type)
    } else {
      let filt = start.filter(card => card.type === type || card.type === select)
      setFiltred(filt)
      setSelectedTitle(type)
    }
  }

  const del = (e) => {
    if (e.key === "Delete" || e.keyCode === 110) {
      const index = filtred.filter(n => n.id !== targetCard);
      setFiltred(index)
      if (index !== -1) {
        cards.splice(index, 1);
      }
    }
  }

  useEffect(() => {

    window.addEventListener("keydown", del);
    return () => {
      window.removeEventListener("keydown", del);
    };
  }, [del]);

  const filteTitle = ['Show All','Design','Branding','Illustration','Motion']

  return (
    <div className='places'>
      <nav className='main__nav'>
     <form >
     <select className='selected__nav'   onChange={(e) => handleCategory(e)} >
  <option  value='Show All'>Show All</option>
  <option  value='Design'>Design</option>
  <option  value='Branding'>Branding</option>
  <option  value='Illustration'>Illustration</option>
  <option  value='Motion'>Motion</option>
</select>
     </form>
        <ul className='nav__list'>
          {
            filteTitle.map((title, index) =>(
              <li className='nav__item' key={index}  >
            <button 
            className={selectedTitle === title ? 'item__btn--active' : 'item__btn'} 
            onClick={(e) => handleCategory(e)}
            >{title}
            </button>
            </li>
            ))
          }
        </ul>
      </nav>
      <div className="wrapper__full">
        <div className="places__cards">
          {
           filtred.length ? filtred.map((card, id) => (
                <div 
                className={targetCard === card.id ? 'target' : 'card'} 
                key={id}
                onClick={() => handleTarget(card.id)}
                onKeyDown={() => del(card.id)}>
                  <img src={card.img} alt="card" className='cards__img' />
                  <button className='card__btn' onClick={(e) => handleCategory(e)}>{card.type}</button>
                  <span className='card__name'>{card.name}</span>
                </div>
            ))

            :

            <h1>No image</h1>
          }
        </div>
        <div className='footer'><button className='footer__btn' onClick={() => loadMore()}>Load More</button></div>
      </div>

    </div>
  )
}

export default Main