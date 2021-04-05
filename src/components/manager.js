import React from 'react'
import { Text, FlexBox } from 'spectacle';
import Cite from './cite'
import FullCite from './fullcite'

export default class Manager extends React.Component {
    constructor(props) {
        super(props);
        this.index = 0;
        this.state = { var: [] };
    }
    handleBibliography = (name) => { this.setState(state => ({ var: [...state.var, name] })) }
    componentDidMount = () => { this.index = 0 }
    recursiveCloneChildren(children) {
        return React.Children.map(children, (child) => {
            if (!React.isValidElement(child)) return child;
            let childProps = {};
            if (child.type.name === Cite.name)
                childProps = { onBiliography: this.handleBibliography, index: ++(this.index) };
            childProps.children = this.recursiveCloneChildren(child.props.children);
            return React.cloneElement(child, childProps);
        });
    }
    render() {
        const ChildrenWithProps = this.recursiveCloneChildren(this.props.children)
        return (
            <div>
                {ChildrenWithProps}
                <FlexBox position="absolute" bottom={55} left={50} right={50}>
                    <Text fontSize="16px">
                        <hr style={{ height: '1px', backgroundColor: 'black', width: "33%", display: "inline-block", margin: "0" }} /><br />
                        {this.state.var.map((data, index) => { return <FullCite key={`fullcite_${index}`} index={index} bib_entry={data} /> })}
                    </Text>
                </FlexBox>
            </div>
        )
    }
}
