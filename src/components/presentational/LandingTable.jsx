import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import clsx from "clsx";
import { lighten, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import SearchIcon from "@material-ui/icons/Search";
import { TextField } from "@material-ui/core";
import "../styles/LandingTable.css";

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  { id: "url", numeric: false, disablePadding: true, label: "Url" },
  { id: "status", numeric: true, disablePadding: false, label: "Status" },
  {
    id: "delay",
    numeric: true,
    disablePadding: false,
    label: "Avg. Delay (ms)",
  },
];

function EnhancedTableHead(props) {
  const { classes, order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "10px" : "default"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === "light"
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: "1 1 100%",
  },
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography
          className={classes.title}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          className={classes.title}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Websites checked (click for detail):
        </Typography>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
    backgroundColor: "transparent",
  },
  table: {
    minWidth: 250,
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
  statusUp: {
    color: "green",
  },
  statusDown: {
    color: "red",
  },
  statusError: {
    color: "goldenrod",
  },
}));

export default function EnhancedTableLanding({ rawRows }) {
  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("delay");
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const rows = rawRows?.response?.data?.responses;
  const [filter, setFilter] = useState("");

  const handleSearchChange = (event) => {
    setFilter(event.target.value);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows?.length - page * rowsPerPage);

  return (
    <div className="landingTable">
      <div className="landingTable__subtitle">
        <div className="list__search">
          <SearchIcon style={{ fontSize: 30, fill: "#3F51B5" }} />
          <TextField
            label="Search a web from the list"
            InputLabelProps={{
              style: { color: "#000000" },
            }}
            InputProps={{
              style: { color: "#000000" },
            }}
            onChange={handleSearchChange}
          />
        </div>
        <p> Write at least 3 characters (without http or www). If the site doesn't appear, you can register and add it to your profile!</p>
      </div>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <TableContainer>
            <Table
              className={classes.table}
              aria-labelledby="tableTitle"
              size={dense ? "small" : "medium"}
              aria-label="enhanced table"
            >
              <EnhancedTableHead
                classes={classes}
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
                rowCount={rows?.length}
              />
              <TableBody>
                {rows &&
                  stableSort(rows, getComparator(order, orderBy))
                    .map((row, index) => {
                      const labelId = `enhanced-table-checkbox-${index}`;

                      return (
                        <>
                          {filter !== "" && filter.length >= 3 && row.url.split("https://")
                                    .pop()
                                    .split("http://")
                                    .pop()
                                    .split("www.")
                                    .pop().startsWith(filter) && (
                            <TableRow
                              hover
                              role="checkbox"
                              tabIndex={-1}
                              key={row.url}
                            >
                              <TableCell
                                component="th"
                                id={labelId}
                                scope="row"
                                padding="10px"
                              >
                                <Link
                                  to={`/detail/${row.url
                                    .split("https://")
                                    .pop()
                                    .split("http://")
                                    .pop()
                                    .split("www.")
                                    .pop()}`}
                                >
                                  {row.url
                                    .split("https://")
                                    .pop()
                                    .split("http://")
                                    .pop()
                                    .split("www.")
                                    .pop()}
                                </Link>
                              </TableCell>
                              {row.status === 200 ? (
                                <TableCell
                                  className={classes.statusUp}
                                  align="right"
                                >
                                  UP
                                </TableCell>
                              ) : row.status >= 500 && row.status < 600 ? (
                                <TableCell
                                  className={classes.statusDown}
                                  align="right"
                                >
                                  DOWN
                                </TableCell>
                              ) : (
                                <TableCell
                                  className={classes.statusError}
                                  align="right"
                                >
                                  ISSUE {row.status}
                                </TableCell>
                              )}
                              <TableCell align="right">{row.delay}</TableCell>
                            </TableRow>
                          )}
                        </>
                      );
                    })}
                {emptyRows > 0 && (
                  <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
              <TableBody>
                {rows &&
                  stableSort(rows, getComparator(order, orderBy))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => {
                      const labelId = `enhanced-table-checkbox-${index}`;

                      return (
                        <>
                          {filter === "" && (
                            <TableRow
                              hover
                              role="checkbox"
                              tabIndex={-1}
                              key={row.url}
                            >
                              <TableCell
                                component="th"
                                id={labelId}
                                scope="row"
                                padding="10px"
                              >
                                <Link
                                  to={`/detail/${row.url
                                    .split("https://")
                                    .pop()
                                    .split("http://")
                                    .pop()
                                    .split("www.")
                                    .pop()}`}
                                >
                                  {row.url
                                    .split("https://")
                                    .pop()
                                    .split("http://")
                                    .pop()
                                    .split("www.")
                                    .pop()}
                                </Link>
                              </TableCell>
                              {row.status === 200 ? (
                                <TableCell
                                  className={classes.statusUp}
                                  align="right"
                                >
                                  UP
                                </TableCell>
                              ) : row.status >= 500 && row.status < 600 ? (
                                <TableCell
                                  className={classes.statusDown}
                                  align="right"
                                >
                                  DOWN
                                </TableCell>
                              ) : (
                                <TableCell
                                  className={classes.statusError}
                                  align="right"
                                >
                                  ISSUE {row.status}
                                </TableCell>
                              )}
                              <TableCell align="right">{row.delay}</TableCell>
                            </TableRow>
                          )}
                        </>
                      );
                    })}
                {emptyRows > 0 && (
                  <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          {filter === "" && (
            <TablePagination
              rowsPerPageOptions={[10]}
              component="div"
              count={rows?.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          )}
        </Paper>
        <FormControlLabel
          control={<Switch checked={dense} onChange={handleChangeDense} />}
          label="Dense padding"
        />
      </div>
    </div>
  );
}
