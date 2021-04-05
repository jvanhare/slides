import React from "react"
import { Image, Text } from 'spectacle';

export default class Figure extends React.Component {
    render() {
        return (
            <figure>
                <Image style={{ maxWidth: this.props.width, maxHeight: this.props.height}} src={this.props.src} />
                {
                    this.props.children &&
                    <Text textAlign='center' style={{ fontSize: "1.2em" }}>
                        <b>Fig. {this.props.figIndex}</b>: <i>{this.props.children}</i>
                    </Text>
                }
            </figure>
        )
    }
}
