//Va a contener a mis favoritos
import Favoritos from '../Favoritos/Favoritos'
import '../FavoritosContainer/FavoritosContainer.css'

function FavoritosContainer() {
  return (
    <div>
        <div className="titleFavs">
        <h1 >Nuestros Favs!</h1>
        </div>
        <Favoritos/>
    </div>
  )
}

export default FavoritosContainer