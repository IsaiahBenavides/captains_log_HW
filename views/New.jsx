const React = require(`react`);
const DefaultLayout = require("./layout/Default");

class New extends React.Component {
    render(){
        return(
            <DefaultLayout title="New Log Page">
                <nav>
                    <a href="/logs">Back</a>
                </nav>
                <form action="/logs" method="POST">
                    <input type="text" name="title"/>
                    <input type="textarea" name="entry"/>
                    <input type="checkbox" name="shipIsBroken"/>
                    <input type="submit" />
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = New