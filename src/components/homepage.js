// import React, { useState, useEffect } from 'react';
// import { connect } from 'react-redux';
// // import * as actions from '../../Store/Actions/index';
// import { DataGrid } from "@material-ui/data-grid";
// // import EditIcon from '@material-ui/icons/Edit';
// // import DeleteIcon from '@material-ui/icons/Delete';
// import Button from '@material-ui/core/Button';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/core/Menu';

// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import Input from '@material-ui/core/Input';

// // import classes from './Dashboard.css';
// // import DataTable from './DataTable/DataTable';

// const Dashboard = (props) => {

//     const [open, setOpen] = React.useState(false);
//     const [select, setSelection] = useState([]);
//     const [post, setPost] = useState({});
//     const [name, setUsername] = useState("");
//     const [email, setUseremail] = useState("");
//     const [address, setAddress] = useState("");
//     const [phone, setPhone] = useState("");
//     const [removePOpUpOpen, setremovePOpUpOpen] = useState(false);
//     const [selectPOpUpOpen, setselectPOpUpOpen] = useState(false);

//     const nameinputsHandler = (event) => {
//         setUsername(event.target.value);
//     };

//     const emailinputsHandler = (event) => {
//         setUseremail(event.target.value);
//     };

//     const addressinputsHandler = (event) => {
//         setAddress(event.target.value);
//     };

//     const phoneinputsHandler = (event) => {
//         setPhone(event.target.value);
//     };

//     const rows = props.userData;
//     const columns = [
//         { field: 'name', headerName: 'Name', width: 130 },
//         { field: 'email', headerName: 'Email', type: 'number', width: 130 },
//         { field: 'address', headerName: 'Address', width: 130 },
//         { field: 'phone', headerName: 'Phone', width: 130 },
//         {
//             field: "",
//             headerName: "Action",
//             disableClickEventBubbling: true,
//             renderCell: (params: CellParams) => {
//                 const deleteClick = (event) => {
//                     const api: GridApi = params.api;
//                     const fields = api
//                         .getAllColumns()
//                         .map((c) => c.field)
//                         .filter((c) => c !== "__check__" && !!c);
//                     const thisRow = {};
//                     fields.forEach((f) => {
//                         thisRow[f] = params.getValue(f);
//                     });
//                     setSelection([thisRow.id]);
//                     setremovePOpUpOpen(true);
//                 };

//                 return (
//                     <div>
//                         {/* <Button><EditIcon color="secondary" /></Button> */}
//                         <Button><DeleteIcon onClick={deleteClick} color="secondary" /></Button>
//                     </div>
//                 );
//             }
//         }
//     ];

//     const handleClickOpen = () => {
//         setOpen(true);
//     };

//     const handleClose = () => {
//         setPost({});
//         setOpen(false);
//     };

//     const handleremovePOpUpOpen = () => {
//         if (select.length == 0) {
//             handleselectPOpUpOpen(true);
//         } else {
//             setremovePOpUpOpen(true);
//         }
//     };

//     const handleremovePOpUpClose = () => {
//         setremovePOpUpOpen(false);
//     };

//     const handleselectPOpUpOpen = () => {
//         setselectPOpUpOpen(true);
//     };

//     const handleselectPOpUpClose = () => {
//         setselectPOpUpOpen(false);
//     };

//     useEffect(() => {
//         props.getData()
//     }, [])

//     const addEmployee = (event) => {
//         const data = {
//             "name": name,
//             "email": email,
//             "address": address,
//             "phone": phone
//         }
//         props.add_Employee(data);
//         props.getData();
//         handleClose();
//         console.log("Form Data", data);
//     }

//     const removeEmployee = () => {
//         var selectedId = select.map(Number);
//         console.log('Select id', selectedId);
//         props.remove_Employee(selectedId);
//         props.getData();
//         handleremovePOpUpClose();
//     }

//     return (
//         <div>
//             <AppBar position="static">
//                 <Toolbar>
//                     <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
//                         <MenuIcon />
//                     </IconButton>
//                     <Typography variant="h6" className={classes.title}>
//                         Manage <strong>Employees</strong>
//                     </Typography>
//                     <div className="AppBarButton">
//                         <Button variant="contained" color="secondary" onClick={handleremovePOpUpOpen}>Delete</Button>
//                         <Button className="btn-success" variant="contained" color="primary" onClick={handleClickOpen}>Add New Employee</Button>
//                     </div>
//                 </Toolbar>
//             </AppBar>

//             <div className="dataTable">
//                 <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection onSelectionModelChange={(newSelection) => {
//                     setSelection((newSelection.selectionModel));
//                 }} />
//             </div>

//             <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
//                 <DialogTitle id="customized-dialog-title" onClose={handleClose}>
//                     Add Employee
//                 </DialogTitle>
//                 <DialogContent dividers>
//                     <form>
//                         <Input placeholder="Name" fullWidth inputProps={{ 'aria-label': 'description' }} defaultValue={post.name} onChange={nameinputsHandler} />
//                         <Input placeholder="Email" fullWidth inputProps={{ 'aria-label': 'description' }} defaultValue={post.email} onChange={emailinputsHandler} />
//                         <Input placeholder="Address" fullWidth inputProps={{ 'aria-label': 'description' }} defaultValue={post.address} onChange={addressinputsHandler} />
//                         <Input placeholder="Phone" fullWidth inputProps={{ 'aria-label': 'description' }} defaultValue={post.phone} onChange={phoneinputsHandler} />
//                     </form>
//                 </DialogContent>
//                 <DialogActions>
//                     <Button color="primary" autoFocus onClick={handleClose}>
//                         Cancel
//                     </Button>
//                     <Button variant="contained" color="primary" autoFocus onClick={addEmployee}>
//                         Add
//                     </Button>
//                 </DialogActions>
//             </Dialog>

//             <Dialog
//                 open={removePOpUpOpen}
//                 onClose={handleremovePOpUpClose}
//                 aria-labelledby="alert-dialog-title"
//                 aria-describedby="alert-dialog-description">
//                 <DialogTitle className="DialogTitle" id="alert-dialog-title">Delete Employee</DialogTitle>
//                 <DialogContent>
//                     <DialogContentText id="alert-dialog-description">
//                         Are you sure you want to delete these Records?<br />
//                         <span className="muted-text Highlight">This action cannot be undone</span>
//                     </DialogContentText>
//                 </DialogContent>
//                 <DialogActions>
//                     <Button onClick={handleremovePOpUpClose} color="primary">
//                         Cancel
//                     </Button>
//                     <Button onClick={removeEmployee} color="primary" autoFocus>
//                         Delete
//                     </Button>
//                 </DialogActions>
//             </Dialog>

//             <Dialog
//                 open={selectPOpUpOpen}
//                 onClose={handleremovePOpUpClose}
//                 aria-labelledby="alert-dialog-title"
//                 aria-describedby="alert-dialog-description">
//                 <DialogTitle className="DialogTitle" id="alert-dialog-title">Select Employee</DialogTitle>
//                 <DialogContent>
//                     <DialogContentText id="alert-dialog-description">
//                         Please select any of the row(s)
//                     </DialogContentText>
//                 </DialogContent>
//                 <DialogActions>
//                     <Button onClick={handleselectPOpUpClose} color="primary">
//                         Ok
//                     </Button>
//                 </DialogActions>
//             </Dialog>

//         </div>
//     );
// };

// const mapStateToProps = state => {
//     return {
//         userData: state.userData.userData
//     };
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         getData: () => dispatch(actions.get_allData()),
//         add_Employee: (data) => dispatch(actions.add_user(data)),
//         remove_Employee: (selectedId) => dispatch(actions.remove_user(selectedId))
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
