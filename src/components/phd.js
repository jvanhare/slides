import React from "react"

export default class PhD extends React.Component {
    render() {
        var data = this.props.data
        return (
            <span>
                {data['author'][0]["given"].concat(' ', data['author'][0]["family"])}.&nbsp;
                <b>{data['title']}.</b>&nbsp;
                {data["publisher"]},&nbsp;
                {data["issued"]["date-parts"][0][0]}.&nbsp;
                <a href={data['URL']}>[{data['URL']}]</a>
            </span>
        )
    }
}
