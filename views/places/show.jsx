const React = require('react')
const Def = require('../default')

function show (data) {
  let comments = (
    <h3 className='inactive'>
      No comments yet!
    </h3>
  )
  let rating = (
    <h3 className='inactive'> Not yet rated</h3>
  )
  if (data.place.comments.length) {
    let sumRatings = data.place.comments.reduce((tot, c) => {
      return tot + c.stars
    }, 0)
    let averageRating = Math.round(sumRatings / data.place.comments.length)
    let stars = ""
    for(let i = 0; i < averageRating; i++){
      stars += '+'
    }

    rating = (
      <h3>
        {stars} stars
      </h3>
    )
    comments = data.place.comments.map(c => {
      return (
        <div className="border">
          <h2 className="rant">{c.rant ? 'Rant!' : 'Rave!'}</h2>
          <h4>{c.content}</h4>
          <h3>
            <stong>Written By: {c.author}</stong>
          </h3>
          <h4>Rating: {c.stars}/5</h4>
        </div>
      )
    })
  }
    return (
        <Def>
          <main>
            <h1>{data.place.name}</h1>
            <p className='text-center'>
              {data.place.cuisines}
            </p>
            <img src={data.place.pic} alt={data.place.name}></img>
            <h3>
              Located in {data.place.city}, {data.place.state}
            </h3>
            <div>
              <h1>
                Description
              </h1>
              <h3>
                {data.place.showEstablished()}
              </h3>
              <div>{rating}</div>
              <h4>
                Serving Cuisine: {data.place.cuisines}
              </h4>
            </div>
            <a href={`/places/${data.place.id}/edit`} className='btn btn-warning'>Edit</a>
            <form method='POST' action={`/places/${data.place.id}?_method=DELETE`}>
              <button type='submit' className='btn btn-danger'> Delete</button>
            </form>
            <a href="/places">
              <button className='btn-primary'>
                Back
              </button>
            </a>
            <hr/>
            <h1>Comments</h1>
            <div> {comments}</div>
              <h1> Want to add a comment? </h1>
              <form method="POST" action={`/places/${data.place.id}/comments`}>
                <div className='form-group'>
                  <textarea className='form-control' name="content" placeholder='Enter your comment here' min="15" max="350"></textarea>
                </div>
                <div className='form-group'>
                  <label htmlFor='author'>Author</label>
                  <input className='form-control' id="author" name="author"></input>
                </div>
                <div className='form-group'>
                  <label htmlFor='stars'>Rating 0-5</label>
                  <input className='form-control' id="stars" name="stars" type="range" min="0" max="5" step="0.5"></input>
                </div>
                <div className='form-group'>
                  <label htmlFor='rant'>Is this a Rant?</label>
                  <input className='form-control' id="rant" name="rant" type="checkbox"></input>
                  <input type="submit" value="Comment" className="btn-primary btn"></input>
                </div>
              </form>
          </main>
        </Def>
    )
}

module.exports = show

