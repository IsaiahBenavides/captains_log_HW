const React = require("react");

class Show extends React.Component{
    render(){
        const {title, entry, shipIsBroken} = this.props.log
        return(
            <div>
                <h1>{title}</h1>
                <h3>{shipIsBroken ? `The ship is fully operational!` : `The ship needs emergency repairs!`}</h3>
                <p>{entry}</p>
                <a href="/logs">Back</a>
            </div>
        )
    }
}

module.exports = Show