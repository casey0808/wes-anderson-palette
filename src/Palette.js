import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import { withStyles } from '@material-ui/styles';
import styles from './styles/PaletteStyles';

class Palette extends Component {
    constructor(props){
        super(props);
        this.state = {
            format: 'hex'
        }
        this.changeFormat = this.changeFormat.bind(this);
    }
    changeFormat(value){
        this.setState({
            format: value
        })
    }
    render() {
        const colorBoxes = this.props.palette.colors.map(color => (
            <ColorBox background={color[this.state.format]} name={color.name} key={color.name} />
        ))
        const { classes } = this.props;
        return (
            <div className={classes.Palette}>
                <Navbar handleChange={this.changeFormat} />
                <div className={classes.paletteColors}>
                    {colorBoxes}
                </div>
                <footer className={classes.paletteFooter}>
                    {this.props.palette.paletteName}
                </footer>
            </div>
        );
    }
}

export default withStyles(styles)(Palette);