import ReactCountryFlag from "react-country-flag"
import Rating from "./Rating"

export default function MediaCard({ title, original, vote, lang, overview, poster }) {


  return (
    <div className="col" style={{ borderBottom: '1px solid black', marginBottom: '1rem' }}>


      <div className="media_card">

        {
          poster ? <img className="img-fluid" src={`https://image.tmdb.org/t/p/w342/${poster}`} alt="" /> : <img className="img-fluid" src={`https://placehold.co/342x513?text=${title}`} alt="" />
        }


        <div className="media_card_details">

          <h6>{original}</h6>
          <h3>{title}</h3>

          <Rating vote={vote} />


          <div>Laanguage:  {lang}</div>

          <ReactCountryFlag className="emojiFlag" countryCode={lang === 'en' ? 'us' : lang} svg style={{
            width: '2em',
            height: '2em',
          }} />


          <p>
            {overview}
          </p>
        </div>

      </div>


    </div>
  )
}