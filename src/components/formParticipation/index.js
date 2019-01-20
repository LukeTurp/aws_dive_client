import React from 'react';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

import FormParent from './formParent';


const formStyles = ({ spacing: { unit }, mixins: { gutters } }) => ({
    formRoot : gutters({
        padding: unit * 4,
        minWidth: '50%',
        textAlign: 'center'
    })
})

export default withStyles(formStyles)(
    props => {
        const { classes } = props;
        return (
           
            <Grid 
                container 
                direction='row' 
                justify='center' 
                alignContent='center'
                spacing={24}
            >
                <Paper elevation={4} className={classes.formRoot}>
                    <FormParent  />
                </Paper>
            </Grid>
        );
    }
) 