export default function Rating({ vote }) {
  const rating = vote / 2;

  return (
    <div className="rating">

      {/* print full stars */}
      {[...Array(Math.floor(rating))].map((star, index) => {
        return (<span key={index}>★</span>)

      })}

      {/* Print empty stars */}
      {[...Array(5 - Math.floor(rating))].map((star, index) => {
        return (<span key={index}>☆</span>)
      })}


    </div>
  )
}