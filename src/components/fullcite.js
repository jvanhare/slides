import React from 'react'
import Biblio from "../../assets/biblio.json"
import Article from "./article"
import Conference from "./conference"
import PhD from "./phd"

export default class FullCite extends React.Component {
    render() {
        return (<span>
            [{this.props.index + 1}]{' '}
            {Biblio.map((data, index) => {
                if (data['id'] === this.props.bib_entry) {
                    if (data['type'] === "article-journal")
                        return <Article key={`span_${index}`} data={data} />
                    if (data['type'] === "paper-conference")
                        return <Conference key={`span_${index}`} data={data} />
                    if (data['type'] === "thesis")
                        return <PhD key={`span_${index}`} data={data} />
                }
                return null
            })}
            <br />
        </span>)
    }
}
