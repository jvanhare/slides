import React from "react"
import { Text } from 'spectacle';

export default class Alert extends React.Component {
    render() { return (<Text {...this.props} color="red" style={{ display: 'inline' }}>{this.props.children}</Text>) }
}
