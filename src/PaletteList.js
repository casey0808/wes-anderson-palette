import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
import { withStyles } from '@material-ui/styles';
import styles from './styles/PaletteListStyles';

// import { Link } from 'react-router-dom';

class PaletteList extends Component {
    constructor(props){
        super(props);
        this.goToPalette = this.goToPalette.bind(this);
    }
    goToPalette(id){
        this.props.history.push(`/palette/${id}`);
    }
    render() {
        const { palettes, classes } = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1 className={classes.heading}>Palette List</h1>
                    </nav>
                    <div className={classes.palettes}>
                        {palettes.map(palette => (
                            <MiniPalette {...palette} key={palette.id} id={palette.id} goToPalette={this.goToPalette} />
                        ))}
                    </div>
                </div>
                
            </div>
        );
    }
}

export default withStyles(styles)(PaletteList);