const React = require("react")
const DefaultLayout = require(`./layout/Default`)

class Index extends React.Component {
    render(){
        const { logs } = this.props
        return(
            <DefaultLayout title="Log Index Page">
                <nav>
                    <a href="/logs/new">Create New Entry</a>
                </nav>
                <ul>
                    {
                        logs.map((log, i)=>{
                            return (
                                <li key={i}>
                                    Entry Title:
                                    <a href={`/logs/${log._id}`}>{log.title}</a>
                                    <br />
                                    <a href={`/logs/${log._id}/edit`}>Edit this entry</a>
                                    <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
                                        <input type="submit" value="DELETE"/>
                                    </form>
                                </li>
                            )
                        })
                    }
                </ul>
            </DefaultLayout>
        )
    }
}

module.exports = Index