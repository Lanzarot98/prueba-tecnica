

export const CocktailItem = ({ title, url, instruction }) => {
  return (
    <div className="card">
        <h3>{ title }</h3>
        <img src={ url } alt={ title } />
        <p><strong>Instructions:</strong> { instruction }</p>
    </div>
  )
}
