import React from 'react'
import Container from 'react-bootstrap/Container'
import { FlexBox, Text, Box } from 'spectacle'
import Onera from "../../assets/logos/onera.svg"
import RF from "../../assets/logos/rf.svg"
import config from "../../config.yml"

var date = new Date(config.date).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })
var author = config.authors[0].name
if (config.authors.length > 1)
    author = author + ' <i>et al.</i>'

const template = ({ slideNumber, numberOfSlides }) => (
    <Container fluid style={{ maxWidth: "100%", padding: "0" }}>
        <div className="BarChart">
            <div className="BarDataLeft" style={{ width: `${(slideNumber - 1) / (numberOfSlides - 1) * 100}%` }}></div>
            <div className="BarDataRight" style={{ width: `${100 - (slideNumber - 1) / (numberOfSlides - 1) * 100}%` }}></div>
        </div>
        <FlexBox justifyContent="space-between" position="absolute" width={1} bottom={0} right={0} >
            <Box>
                <img src={RF} alt="" />
                <img src={Onera} alt="" />
            </Box>
        </FlexBox>
        <FlexBox justifyContent="space-between" position="absolute" bottom={0} left={280} right={0} top={732} style={{ borderTop: '3px solid #5679a3' }} ></FlexBox>
        <FlexBox justifyContent="space-between" position="absolute" bottom={0} left={300} right={10} margin={5}>
            <Box > <Text fontSize="16px"><div dangerouslySetInnerHTML={{ __html: author }} /></Text> </Box>
            <Box > <Text fontSize="16px">{config.title}</Text></Box>
            <Box > <Text fontSize="16px">{date}</Text></Box>
            <Box > <Text fontSize="16px">{slideNumber} / {numberOfSlides}</Text></Box>
        </FlexBox>
    </Container>
);

export default template