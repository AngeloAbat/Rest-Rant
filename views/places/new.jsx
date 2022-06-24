const React = require('react')
const Def = require('../default')

function new_form(data){
    let message = ``
    if(data.message){
      message = (
        <h4 className='alert-danger'>
          {data.message}
        </h4>
      )
    }
    return(
        <Def>
            <main>
                <h1>Add a New Place</h1>
                {message}
                <form method="POST" action="/places">
                    <div className='form-group'>
                        <label htmlFor='name'>PlaceName</label>
                        <input className='form-control' id="name" name="name" required></input>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='pic'>Place Picture</label>
                        <input className='form-control'  id="pic" name="pic"></input>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='city'>City</label>
                        <input className='form-control' id="city" name="city" ></input>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='state'>State</label>
                        <input className='form-control' id="state" name="state" ></input>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='Cuisines'>Cuisines</label>
                        <input className='form-control' id="cuisines" name="cuisines" required></input>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="founded">Founded Year</label>
                        <input type="number" className="form-control" id="founded" name="founded" value={new Date().getFullYear}></input>
                    </div>
                    <input type="submit" value="Submit Place" className="btn-primary btn"></input>
                </form>
            </main>
        </Def>
    )
}

module.exports = new_form