import React from "react"
import Container from 'react-bootstrap/Container'
import { Slide, Heading } from 'spectacle'
import Manager from './manager'

export default class MySlide extends React.Component {
    render() {
        return (
            <Slide backgroundColor='#FFFFFF'>
                <Manager>
                    <Container fluid style={{ position: "absolute", height: "100%", width: "100%" }}>
                        <Heading textAlign='left' margin="1%">
                            {this.props.title}
                        </Heading>
                        <Container
                            fluid style={{
                                display: this.props.middle !== undefined ? "flex" : null,
                                alignItems: "center", justifyContent: "center",
                                height: "82%", width: "100%",
                                marginTop: "1%", marginBottom: "50px"
                            }}>
                            {this.props.children}
                        </Container>
                    </Container>
                </Manager>
            </Slide>
        )
    }
}