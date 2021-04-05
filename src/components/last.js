import React from "react"
import MySlide from './myslide'
import config from "../../config.yml"
import theme from './theme'

import { Text, Grid, Box } from 'spectacle'

import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Last extends React.Component {
    render() {
        return (
            <MySlide>
                <Grid gridTemplateColumns="100px auto 100px" gridTemplateRows="100px auto 100px">
                    <Box />
                    <Box />
                    <Box />
                    <Box />
                    <Box>
                        <Text fontSize="50px" fontWeight="bold" textAlign='center' fontFamily={theme.fonts.header} color="blue">
                            Thank you for your attention.
                        </Text>
                        <Text fontSize="50px" fontWeight="bold" textAlign='center' fontFamily={theme.fonts.header} color="blue">
                            Questions?
                        </Text>
                        <br />
                        <br />
                        <Text textAlign='center'>
                            {config.authors[0].name}
                        </Text>
                        <Text textAlign='center'>
                            {config.authors[0].position}
                        </Text>
                        <Text textAlign='center'>
                            <a href={`https://` + config.authors[0].website} target="\_blank">{config.authors[0].website}</a>
                        </Text>
                        <Text textAlign='center'>
                            <a href={config.authors[0].institution_website} target="\_blank">{config.authors[0].institution}</a>
                        </Text>
                        <Text textAlign='center'>
                            <a href={config.authors[0].institution_website} target="\_blank">{config.authors[0].institution_alt}</a>
                        </Text>
                        <Text textAlign='center'>
                            <a href={"mailto:" + config.authors[0].mail} target="\_blank" aria-label="mail"><FontAwesomeIcon icon={faEnvelope} /></a>&nbsp;&nbsp;
                            <a href={config.authors[0].scholar} target="\_blank" aria-label="scholar"><FontAwesomeIcon icon={faGraduationCap} /></a>&nbsp;&nbsp;
                            <a href={config.authors[0].github} target="\_blank" aria-label="github"><FontAwesomeIcon icon={faGithub} /></a>
                        </Text>
                    </Box>
                    <Box />
                    <Box />
                    <Box />
                    <Box />
                </Grid>
            </MySlide>
        )
    }
}
