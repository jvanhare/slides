import React from "react"
import { Text } from 'spectacle';

export default class MyText extends React.Component {
    render() {
        return (
            <Text {...this.props} textAlign={this.props.textAlign ? this.props.textAlign : 'left'} >{this.props.children}</Text>
        )
    }
}
