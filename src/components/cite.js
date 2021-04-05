import React from 'react'
import { Text } from 'spectacle';

export default class Cite extends React.Component {
    componentDidMount() { this.props.onBiliography(this.props.bib_entry) }
    render() { return (<Text color="blue" style={{ display: 'inline' }}>[{this.props.index}]</Text>) }
}

/* EOF */
