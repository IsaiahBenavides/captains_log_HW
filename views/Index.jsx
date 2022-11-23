const React = require("react")

class Index extends React.Component {
    render(){
        const { logs } = this.props
        return(
            <div>
                <nav>
                    <a href="/new">Create New Entry</a>
                </nav>
                <ul>
                    {
                        logs.map((log, i)=>{
                            return (
                                <li key={i}>
                                    Entry Title:
                                    <a href={`/logs/${log._id}`}>{log.title}</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

module.exports = Index