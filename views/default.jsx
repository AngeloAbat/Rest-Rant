const React = require('react')

function Def (html){
    return(
        <html>
            <head>
                <title>Rest-rant</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"></link>
                <link rel="stylesheet" href="/css/styles.css"></link>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
}

module.exports = Def