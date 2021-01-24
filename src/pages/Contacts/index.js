import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
//import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { ContactsTable } from "./ContactsTable";
import { useContacts } from "./useContacts";

import { ToggleDataViewMode } from "./ToggleDataViewMode";
import { getInitialDataViewMode, useDataViewMode } from "./useDataViewMode";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(4),
    },
    headContainer: {
      marginBottom: theme.spacing(3),
    },
  })
);
export const DATA_VIEW_MODES = {
  TABLE: "table",
  GRID: "grid",
};

export const Contacts = () => {
  const classes = useStyles();
  const contacts = useContacts();

  const [dataViewMode, setDataViewMode] = useDataViewMode();

  return (
    <Container className={classes.root}>
      <Grid container>
        <Grid item xs={12} className={classes.headContainer}>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="h3" component="h1">
              Contacts
            </Typography>
            <ToggleDataViewMode
              dataViewMode={dataViewMode}
              setDataViewMode={setDataViewMode}
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          {(() => {
            if (contacts.isLoading) {
              return <CircularProgress />;
            }
            if (contacts.isError) {
              return <div>...error</div>;
            }

            if (dataViewMode === DATA_VIEW_MODES.TABLE) {
              return <ContactsTable data={contacts.data} />;
            }
            if (dataViewMode === DATA_VIEW_MODES.GRID) {
              return "grid";
            }
            return null;
          })()}
        </Grid>
      </Grid>
    </Container>
  );
};
