import { Card, CardContent, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@material-ui/core";
import numeral from "numeral";
import React from "react";
import '../TableCountry/table-country.css'
function TableCountry({ tableData }) {
  return (
        <>
        <h3 className="table__title">Live cases by Country</h3>
        <TableContainer className="table__data">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableBody>
              {tableData.map((data , index) => (
                <TableRow
                  key={index}
                >
                  <TableCell align="left">{data.country}</TableCell>
                  <TableCell align="right">{numeral(data.cases).format('0,0')}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </>
  );
}

export default TableCountry;
