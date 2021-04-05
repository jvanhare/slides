import React from "react"

export default class Conference extends React.Component {
    render() {
        var authors = []
        var authors_list = []
        var data = this.props.data
        data['author'].forEach(function (author) { authors.push(author["given"].concat(' ', author["family"])) });
        authors_list = authors.slice(0, -1).join(', ') + ', and ' + authors.slice(-1)
        return (
            <span>
                {authors_list}.&nbsp;
                <b>{data['title']}.</b>&nbsp;
                <i>{data['container-title']}</i>.&nbsp;
                {data["publisher-place"]},&nbsp;
                {data["issued"]["date-parts"][0][0]}.&nbsp;
                <a href={"https://doi.org/" + data['DOI']}>[{data['DOI']}]</a>
            </span>
        )
    }
}
