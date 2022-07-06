import './Main.css'
function Main (){
    return (
     <>
  <div className="site-main__form">
    <input className="site-main__form-search" type="search" name="search" placeholder="Search for a country…" />
    <select className="site-main-select">
      <option disabled selected>Filter by Region</option>
    </select>
  </div>
  </>
    )
}

export default Main;