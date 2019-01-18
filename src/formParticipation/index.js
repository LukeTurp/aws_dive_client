import React from 'react';

import Grid from '@material-ui/core/Grid';
import { TextField } from '@material-ui/core';

export default () =>
    <Grid container>
        <form name="participation-form">
            <TextField 
                type="text"
                autoComplete="username"
                placeholder="Please choose a username"
            
            />
        </form>
    </Grid>