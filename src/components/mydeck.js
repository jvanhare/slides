import React from "react"
import { Deck } from 'spectacle'
import theme from './theme'
import template from './template'
import Figure from './figure'
import TexDisplay from './texDisplay'
import First from './first'
import Last from './last'

export default class MyDeck extends React.Component {
    constructor(props) {
        super(props)
        this.figure = 0
        this.equation = 0
    }
    recursiveCloneChildren(children) {
        return React.Children.map(children, (child) => {
            if (!React.isValidElement(child)) return child;
            let childProps = {};
            if (child.type.name === Figure.name)
                childProps = { figIndex: ++(this.figure) };
            if (child.type.name === TexDisplay.name)
                childProps = { eqIndex: ++(this.equation) };
            childProps.children = this.recursiveCloneChildren(child.props.children);
            return React.cloneElement(child, childProps);
        });
    }
    render() {
        const ChildrenWithProps = this.recursiveCloneChildren(this.props.children)
        return (
            <Deck theme={theme} template={template} useAnimations={false} >
                <First />
                {ChildrenWithProps}
                <Last />
            </Deck>
        )
    }
}