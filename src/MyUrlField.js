import React from 'react';
import LaunchIcon from '@material-ui/icons/Launch';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  link: {
    textDecoration: 'none'
  },
  icon: {
    width: '0.5em',
    paddingLeft: 2
  }
}

const MyUrlField = ({record = {}, source, classes}) => (
  <a href={record[source]} className={classes.link}>
    {record[source]}
    <LaunchIcon className={classes.icon}/>
  </a>
);

export default withStyles(styles)(MyUrlField);