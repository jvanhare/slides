import React from "react"
import MyText from './mytext'
import MySlide from './myslide'
import Theme from './theme'
import config from "../../config.yml"
import {
    Grid,
    Box,
} from 'spectacle';

export default class First extends React.Component {
    render() {
        var date = new Date(config.date).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })
        return (
            <MySlide>
                <Grid gridTemplateColumns="100px auto 100px" gridTemplateRows="200px auto 100px">
                    <Box />
                    <Box />
                    <Box />
                    <Box />
                    <Box>
                        <MyText fontSize="64px" fontWeight="bold" fontFamily={Theme.fonts.header} color="blue">
                            {config.title}
                        </MyText>
                        <br />
                        <div className="BarChart">
                            <div className="BarDataRight" style={{ width: "100%" }}></div>
                        </div>
                        <br />
                        <br />
                        <MyText fontSize="26px" fontWeight="bold" >
                            {config.authors[0].name}
                        </MyText>
                        <MyText>
                            {config.authors[0].position},&nbsp;
                            <a href={config.authors[0].institution_website} target="\_blank">{config.authors[0].institution}</a>,&nbsp;
                            <a href={config.authors[0].institution_website} target="\_blank">{config.authors[0].institution_alt}</a>
                        </MyText>
                        <MyText fontSize="26px" >
                            {config.authors.length > 1 && (`Joint work with ` + config.authors.slice(1).map((rank, i, arr) => {
                                if (arr.length - 1 === i) {
                                    return (` and ` + arr[i].name)
                                }
                                else if (i === 0) {
                                    return (arr[i].name)
                                }
                                else {
                                    return (` ` + arr[i].name)
                                }
                            }))}
                        </MyText>
                        <br />
                        <br />
                        <MyText fontSize="26px" fontWeight="bold" >
                            {config.institution}
                        </MyText>
                        <MyText fontSize="26px" fontWeight="bold">
                            {date}, {config.address}
                        </MyText>
                    </Box>
                    <Box />
                </Grid>
            </MySlide>
        )
    }
}
