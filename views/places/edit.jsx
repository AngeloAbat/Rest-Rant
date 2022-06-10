const React = require('react')
const Def = require('../default.jsx')

function edit_form (data) {
    console.log(`This is data id = ${data.id}`)
    return (
        <Def>
          <main>
            <h1>Edit Place</h1>
            <form method="POST" action={`/places/${data.id}?_method=PUT`}>
                <div className='row'>
                    <div className='form-group col-sm-6'>
                        <label htmlFor='name'>PlaceName</label>
                        <input className='form-control' id="name" name="name" value={data.place.name} required></input>
                    </div>
                    <div className='form-group col-sm-6'>
                        <label htmlFor='pic'>Place Picture</label>
                        <input className='form-control'  id="pic" name="pic" value={data.place.pic}></input>
                    </div>
                    <div className='form-group col-sm-6'>
                        <label htmlFor='city'>City</label>
                        <input className='form-control' id="city" name="city" value={data.place.city}></input>
                    </div>
                    <div className='form-group col-sm-6'>
                        <label htmlFor='state'>State</label>
                        <input className='form-control' id="state" name="state" value={data.place.state}></input>
                    </div>
                    <div className='form-group col-sm-6'>
                        <label htmlFor='Cuisines'>Cuisines</label>
                        <input className='form-control' id="cuisines" name="cuisines" value={data.place.cuisines} required></input>
                    </div>
                </div>
                <div>
                  <input type="submit" value="Submit Place" className="btn-primary btn"></input>
                </div>
            </form>
          </main>
        </Def>
    )
}

module.exports = edit_form
