import React, { useState } from "react";
import {  makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
      border: 0,
      justifyContent: "center",
      alignItems: "center",
      alignItem: "center",
      display: "flex",
      flexDirection: "column",
      margin: "auto",
      width: "50%",
      paddingTop: "40px",
      backgroundColor: "#f5f5f5",
      borderRadius: "10px",
      boxShadow: "0px 0px 10px #000000",
  
  
  
      textAlign: "center",
    }
  });

export default function Layout() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <p>...in progress</p>
           
        </div>
    )
}
