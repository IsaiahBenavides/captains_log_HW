const React = require(`react`);

class New extends React.Component {
    render(){
        return(
            <form action="/logs" method="POST">
                <input type="text" name="title"/>
                <input type="textarea" name="entry"/>
                <input type="checkbox" name="shipIsBroken"/>
                <input type="submit" />
            </form>
        )
    }
}

module.exports = New