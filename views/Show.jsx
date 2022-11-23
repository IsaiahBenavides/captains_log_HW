const React = require("react");
const DefaultLayout = require(`./layout/Default`)

class Show extends React.Component{
    render(){
        const {title, entry, shipIsBroken} = this.props.log
        return(
            <DefaultLayout title={`${title}`}>
                <h3>{shipIsBroken ? `The ship is fully operational!` : `The ship needs emergency repairs!`}</h3>
                <p>{entry}</p>
                <a href="/logs">Back</a>
            </DefaultLayout>
        )
    }
}

module.exports = Show