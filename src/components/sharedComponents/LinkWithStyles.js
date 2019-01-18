import React from 'react';
import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';

const linkStyles = theme => ({
    linkStyles : {
        textDecoration: "none",
        color: "#EF6C00"
    }
})

export const LinkWithStyles = withStyles(linkStyles)(
    props => {
        const { classes } = props;
        return (
            <Link
                to={props.to}
                className={
                    (!props.customStyles) ? classes.linkStyles : props.customStyles
                }
            >{props.linkText}</Link>
        );
    }
)
    