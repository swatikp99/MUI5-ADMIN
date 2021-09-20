import React from "react";

import { Toolbar, Box, Grid } from "@mui/material";

const PageWrapper = (props) => {
  return (
    <Grid container>
      <Grid item xs={1} md={1}></Grid>
      <Grid item xs={8} md={11}>
        <Toolbar />
        <Box
          style={{ backgroundColor: "#ffffff" }}
          component="main"
          sx={{ boxShadow: 1, p: 4, my: 4, mx: 4 }}
        >
          <span style={{ color: "#404040", fontSize: "2rem" }}>
            <b>{props.pageName}</b>
            {props.children}
          </span>
        </Box>
      </Grid>
      <Grid item xs={0} md={0}></Grid>
    </Grid>
  );
};

export default PageWrapper;