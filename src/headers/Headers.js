import './Headers.css'


function Headers (){
    return(
       <header className="site-header">
  <div className="site-header__wrraper container">
    <h2 className="site-header__head">
      Where in the world?
    </h2>
    <button className="site-header__page">
      Dark Mode
    </button>   
  </div>         
</header>
    )
}

export default Headers;