function Header(){
    var style = { margin: "auto", textAlign: "right" }
    var jstyle = { padding: "20px", marginBottom: "0px" }
    return(
        <div className = 'jumbotron col-xs-12 col-sm-5' style = {jstyle}>
            <h2>Cheat Sheet Collection</h2>
        </div>
    )
}

function Footer(){
    var style = {
        textAlign: 'center',
        height: '35px',
        backgroundColor: 'grey',
        fontSize: '1em'
    }
    return(
        <div style = {style}>
            Project available at 
            <a target = '-blank' href = 'http://www.github.com/cheatsheet'>GitHub</a>
        </div>
    )
}