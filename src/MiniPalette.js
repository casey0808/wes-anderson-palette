import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles/MiniPaletteStyles';

class MiniPalette extends PureComponent {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.props.goToPalette(this.props.id);
    }
    render(){
        const { classes, paletteName, colors} = this.props;
        const miniColorBoxes = colors.map(color => (
            <div 
                className={classes.miniColor}
                style={{backgroundColor: color.color}}
                key={color.name}
            />
        ))
        return(
            <div className={classes.root} onClick={this.handleClick} >
                <div className={classes.colors}>
                    {miniColorBoxes}
                </div>
                <h5 className={classes.title}>
                    {paletteName}
                </h5>
            </div>
        )
    }  
}

export default withStyles(styles)(MiniPalette);