const React = require('react')
const Def = require('./default')

function home (){
    return(
        <Def>
            <main>
                <h1>REST-rant</h1>
                <div>
                    <img src="\images\ImgRestRant.avif" alt="cloudsodem"></img>
                    <div>
                        Photo by <a href="https://unsplash.com/@jae462">Jae Bano</a> on <a href="https://unsplash.com/photos/Xbf_4e7YDII">Unsplash</a>
                    </div>

                </div>

                <div>Chicken link</div>
                <a href="/home">
                    <button className='btn-primary'>404 Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home