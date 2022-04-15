import React from 'react'
import { NavLink } from "react-router-dom";
// import icon from '../../../assets/images/plus.svg';

import { makeStyles } from '@material-ui/core';

export const useBtnStyle = makeStyles({
  container: {
    padding: '1.6rem 1.6rem 1.6rem',
    borderTop: '.1rem solid rgba(0, 56, 93, 0.05)',
    backgroundColor: '#fff',
    borderBottomRightRadius: '1.2rem',
    borderBottomLeftRadius: '1.2rem',
  },
  wrapper: {
    display: 'flex',
    width: '100%',
    padding: '1rem',
    borderRadius: '1.2rem',
    border: '.1rem solid rgba(0, 56, 93, 0.1)',
    textAlign: 'left',
  },
  addButton: {
    position: 'relative',
    fontWeight: 600,
    fontSize: '1.6rem',
    color: '#00385d',
    cursor: 'pointer',
    textDecoration: 'none',
    display: "flex",
    alignItems: "center",
    width: "calc(100% + 2rem)",
    margin: '-1rem',
    padding: '1rem',
    lineHeight: '2rem',
    "& > *:not(:last-child)": {
      marginRight: '1rem',
    },
  },
  image: {
    flexShrink: 0,
    width: '1.8rem',
    height: '1.8rem'
  }
});

export const ServiceOption = (props) => {
  const classes = useBtnStyle();


  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <NavLink
          to={{
            pathname: `/${props.path_to}`,
            data: {
              // setRecords: setRecords
            }
          }}
          className={classes.addButton}
        >
          {/* <img src={icon} alt="icon" className={classes.image} /> */}
          {/* <NavLink to="/addRecord" style={{ textDecoration: "none" }}> */}
          <span>{props.title}</span>
        </NavLink>
      </div>
    </div >
  )
}