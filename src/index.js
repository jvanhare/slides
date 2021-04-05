import React from 'react';
import ReactDOM from 'react-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import dracula from './components/dracula'
import TeX from '@matejmazur/react-katex';
import 'katex/dist/katex.min.css';

import "./scss/main.scss";
import MyDeck from './components/mydeck';
import MySlide from './components/myslide';
import Cite from './components/cite';
import Alert from './components/alert';
import Info from './components/info';
import Figure from './components/figure';
import TexDisplay from './components/texDisplay';
import MyText from './components/mytext';

import { UnorderedList } from 'spectacle';
import { OrderedList } from 'spectacle';
import { ListItem } from 'spectacle';
import { Appear } from 'spectacle';
import { Grid } from 'spectacle';
import { Box } from 'spectacle';

import panel_dsp from '../assets/figs/panel_dsp.png';
import covo_sd5 from '../assets/movies/covo_sd5.mp4';


class Presentation extends React.Component {
  render() {
    return (
      <MyDeck>

        <MySlide middle title="One figure layout">
          <Figure src={panel_dsp} width={'50%'} height={'50%'} >
            <span>Panel displacement <TeX math="\delta u ~ [mm]" />.</span>
          </Figure>
        </MySlide >

        <MySlide title="One figure layout with text above">
          <Grid gridTemplateColumns="1fr">
            <Box>
              <MyText>
                Citation example <Cite bib_entry="vanharen_phd" />.
        </MyText>
            </Box>
            <Box>
              <Figure src={panel_dsp} width={'40%'} height={'40%'} >
                <span>Panel displacement <TeX math="\delta u ~ [mm]" />.</span>
              </Figure>
            </Box>
          </Grid>
        </MySlide >

        <MySlide middle title="Two figures layout">
          <Grid gridTemplateColumns="1fr 1fr">
            <Box>
              <Figure src={panel_dsp} width={'90%'} height={'90%'} >
                <span>Panel displacement <TeX math="\delta u ~ [mm]" />.</span>
              </Figure>
            </Box>
            <Box>
              <Figure src={panel_dsp} width={'90%'} height={'90%'} >
                <span>Panel displacement <TeX math="\delta u ~ [mm]" />.</span>
              </Figure>
            </Box>
          </Grid>
        </MySlide >

        <MySlide middle title="Three figures layout">
          <Grid gridTemplateColumns="1fr 1fr 1fr">
            <Box>
              <Figure src={panel_dsp} width={'100%'} height={'100%'} >
                <span>Panel displacement <TeX math="\delta u ~ [mm]" />.</span>
              </Figure>
            </Box>
            <Box>
              <Figure src={panel_dsp} width={'100%'} height={'100%'} >
                <span>Panel displacement <TeX math="\delta u ~ [mm]" />.</span>
              </Figure>
            </Box>
            <Box>
              <Figure src={panel_dsp} width={'100%'} height={'100%'} >
                <span>Panel displacement <TeX math="\delta u ~ [mm]" />.</span>
              </Figure>
            </Box>
          </Grid>
        </MySlide >

        <MySlide middle title="Four figures layout">
          <Grid gridTemplateColumns="1fr 1fr">
            <Box>
              <Figure src={panel_dsp} width={'40%'} height={'40%'} >
                <span>Panel displacement <TeX math="\delta u ~ [mm]" />.</span>
              </Figure>
            </Box>
            <Box>
              <Figure src={panel_dsp} width={'40%'} height={'40%'} >
                <span>Panel displacement <TeX math="\delta u ~ [mm]" />.</span>
              </Figure>
            </Box>
            <Box>
              <Figure src={panel_dsp} width={'40%'} height={'40%'} >
                <span>Panel displacement <TeX math="\delta u ~ [mm]" />.</span>
              </Figure>
            </Box>
            <Box>
              <Figure src={panel_dsp} width={'40%'} height={'40%'} >
                <span>Panel displacement <TeX math="\delta u ~ [mm]" />.</span>
              </Figure>
            </Box>
          </Grid>
        </MySlide >

        <MySlide title="Video" middle>
          <video width="100%" height="100%" loop={true} autoPlay="autoPlay" muted style={{ border: "0px" }}>
            <source src={covo_sd5} type="video/mp4" />
          </video>
        </MySlide>

        <MySlide middle title="Code">
          <SyntaxHighlighter language="c" style={dracula} showLineNumbers={true}>
            {`#include <stdio.h>
int main() {
   // printf() displays the string inside quotation
   printf("Hello, World!");
   return 0;
}`}
          </SyntaxHighlighter>
        </MySlide>

        <MySlide title="One centered text layout" middle>
          <Alert fontSize="40px">
            Centered text
        </Alert>
        </MySlide>

        <MySlide title="Introduction">
          <MyText>
            First citation example <Cite bib_entry="vanharen_phd" />.
          Second citation example <Cite bib_entry="vanharen_jcp_285_2015" />.
        </MyText>
          <MyText><TeX math="\LaTeX" /> equations examples:</MyText>
          <TexDisplay math="e^{i \pi} + 1 = 0" />
          <TexDisplay math="\int_{-\infty}^{+\infty} \exp \left( -x^2 \right) \, \mathrm{d}x" />
          <TexDisplay math="\sum_{i=1}^n i^2 = \frac{n(n+1)(2n+1)}{6}" />
          <MyText>Somme text properties:</MyText>
          <UnorderedList>
            <ListItem><Alert>Alert code</Alert>,</ListItem>
            <ListItem><Info>Info code</Info>,</ListItem>
            <ListItem>Inline math formula <TeX math="x^2 = -1" />.</ListItem>
          </UnorderedList>
        </MySlide>

        <MySlide middle title="Two-columns layout text-figure">
          <Grid gridTemplateColumns="1fr 1fr">
            <Box>
              <br />
              <MyText textAlign='justify' >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse laoreet, mi ut pretium imperdiet, elit est feugiat erat,
                vel mollis metus felis a elit. Donec vel velit convallis, dignissim arcu eu, commodo leo.
                Vestibulum sodales consequat risus, et efficitur nunc. Aenean aliquam interdum cursus.
                Sed tincidunt, massa in efficitur auctor, enim lacus eleifend ex,
                quis pulvinar neque nunc at erat. Aliquam venenatis ornare dolor, et pulvinar odio eleifend et.
                Aenean sed pretium lorem. Suspendisse potenti. Etiam vulputate quis enim vel venenatis.
            </MyText>
              <br />
              <MyText >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse laoreet, mi ut pretium imperdiet, elit est feugiat erat,
                vel mollis metus felis a elit. Donec vel velit convallis, dignissim arcu eu, commodo leo.
            </MyText>
            </Box>
            <Box>
              <Figure src={panel_dsp} width={'90%'} height={'90%'} >
                <span>Panel displacement <TeX math="\delta u ~ [mm]" />.</span>
              </Figure>
            </Box>
          </Grid>
        </MySlide>

        <MySlide title="Unordered list">
          <UnorderedList>
            <ListItem>
              First item
        </ListItem>
            <ListItem>
              Second item
        </ListItem>
            <ListItem>
              Third item
        </ListItem>
          </UnorderedList>
        </MySlide>

        <MySlide middle title="Centered unordered list">
          <UnorderedList>
            <ListItem>
              First item
        </ListItem>
            <ListItem>
              Second item
        </ListItem>
            <ListItem>
              Third item
        </ListItem>
          </UnorderedList>
        </MySlide>

        <MySlide title="Ordered list">
          <OrderedList>
            <ListItem>
              First item
        </ListItem>
            <ListItem>
              Second item
        </ListItem>
            <ListItem>
              Third item
        </ListItem>
          </OrderedList>
        </MySlide>

        <MySlide middle title="Centered ordered list">
          <OrderedList>
            <ListItem>
              First item
        </ListItem>
            <ListItem>
              Second item
        </ListItem>
            <ListItem>
              Third item
        </ListItem>
          </OrderedList>
        </MySlide>

        <MySlide title="Appear">
          <MyText>This is also a slide fragment.</MyText>
          <Appear>
            <MyText>This item shows up!</MyText>
          </Appear>
          <Appear>
            <MyText>This item also shows up!</MyText>
          </Appear>
        </MySlide>

      </MyDeck>
    )
  }
}

ReactDOM.render(<Presentation />, document.getElementById('root'));
