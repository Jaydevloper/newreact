import './Cards.css'


function Cards({title,Population,Region,Capital}){
    return (
      <>
      <li className="site-main-list__item">
          <img src="https://source.unsplash.com/random/800x600" alt=".." width={267} height={160} />
          <h2 className="site-main-list__item-title">{title}</h2>
          <div className="site-main-list__item-wrraper">
            <dt className="site-main-list__item-info">Population: </dt><dd className="site-main-list__item-number">{Population}</dd>
          </div>
          <div className="site-main-list__item-wrraper">
            <dt className="site-main-list__item-info">Region:</dt><dd className="site-main-list__item-number">{Region}</dd>
          </div>
          <div className="site-main-list__item-wrraper">
            <dt className="site-main-list__item-info">Capital:</dt><dd className="site-main-list__item-number">{Capital}</dd>
          </div>
        </li>
      </>
        
    )
}
export default Cards;