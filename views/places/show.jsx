const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{data.place.name}</h1>
            <p className='text-center'>
              {data.place.cuisines}
            </p>
            <img src={data.place.pic} alt={data.place.name}></img>
            <p className='text-center'>
              Located in {data.place.city}, {data.place.state}
            </p>
            <a href={`/places/${data.id}/edit`} className='btn btn-warning'>Edit</a>
            <form method='POST' action={`/places/${data.id}?_method=DELETE`}>
              <button type='submit' className='btn btn-danger'> Delete</button>
            </form>
            <a href="/places">
              <button className='btn-primary'>
                Back
              </button>
            </a>
          </main>
        </Def>
    )
}

module.exports = show
