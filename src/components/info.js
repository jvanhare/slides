import React from "react"
import { Text } from 'spectacle';

export default class Info extends React.Component {
    render() { return (<Text color="blue" style={{ display: 'inline' }}>{this.props.children}</Text>) }
}
