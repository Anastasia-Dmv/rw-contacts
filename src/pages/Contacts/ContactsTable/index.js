import React from "react";
import { compareAsc, format } from "date-fns";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { parseISO } from "date-fns";
// import countries from "i18n-iso-countries";
// countries.registerLocale(require("i18n-iso-countries/langs/en.json"));
// var nationalities = require("i18n-nationality");
import nationalities from "i18n-nationality";
nationalities.registerLocale(require("i18n-nationality/langs/en.json"));
const useStyles = makeStyles({
  table: {},
});
export const ContactsTable = ({ data }) => {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="contacts table">
        <TableHead>
          <TableRow>
            <TableCell>Avatar</TableCell>
            <TableCell>Full name</TableCell>
            <TableCell>Birthday</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Nationality</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((contact) => (
            <TableRow key={contact.login.uuid}>
              <TableCell component="th" scope="row">
                <Avatar alt="Remy Sharp" src={contact.picture.thumbnail} />
              </TableCell>
              <TableCell>
                {contact.name.title} {contact.name.first} {contact.name.last}
              </TableCell>
              <TableCell>
                <Typography>
                  {format(parseISO(contact.dob.date), "MM/dd/yyyy")}
                </Typography>
                <Typography>{contact.dob.age}</Typography>
              </TableCell>
              <TableCell>{contact.phone}</TableCell>
              <TableCell>{contact.email}</TableCell>
              <TableCell>
                <Typography>/{contact.location.country}/</Typography>
                {contact.location.street.number} {contact.location.street.name}
                <Typography>
                  {contact.location.city} {contact.location.postcode}
                </Typography>
              </TableCell>
              <TableCell>
                {nationalities.getName(contact.nat, "en", {
                  select: "official",
                })}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
  //< div > contacts { data[0].name.first }</div >;
};
