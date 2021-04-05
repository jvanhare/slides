import React from "react"
import { Grid, Box } from 'spectacle'
import 'katex/dist/katex.min.css'
import TeX from '@matejmazur/react-katex';

export default class TexDisplay extends React.Component {
    render() {
        return (
            <Grid gridTemplateColumns="auto min-content">
                <Box><TeX math={this.props.math} block style={{ fontSize: "1.5em" }} /></Box>
                <Box><TeX math={'(' + this.props.eqIndex + ')'} block style={{ fontSize: "1.5em" }} /></Box>
            </Grid >
        )
    }
}
