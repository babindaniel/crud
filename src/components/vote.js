import React, { useCallback, useState, useEffect } from 'react';
import * as actions from './../Store/Actions/index';
import { connect } from 'react-redux';
import { DataGrid } from "@material-ui/data-grid";
import Button from '@material-ui/core/Button';

const Vote = (props) => {  
    useEffect(() => {
        console.log('first')
        props.voteData()
    }, [])

    const rows = props.cadidateList;
    const columns = [
        { field: 'id', headerName: 'Id', width: 130 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'age', headerName: 'Age', type: 'number', width: 130 },
        { field: 'voteCount', headerName: 'Count', width: 130 },
        {
            field: "",
            headerName: "Action",
            width: 150,
            disableClickEventBubbling: true,
            renderCell: (params: CellParams) => {
                const deleteClick = (event) => {
                    const api: GridApi = params.api;
                    const fields = api
                        .getAllColumns()
                        .map((c) => c.field)
                        .filter((c) => c !== "__check__" && !!c);
                    const thisRow = {};
                    fields.forEach((f) => {
                        thisRow[f] = params.getValue(f);
                    });

                    // setSelection([thisRow.id]);                    
                };
                const editClick = (event) => {

                    const api: GridApi = params.api;
                    const fields = api
                        .getAllColumns()
                        .map((c) => c.field)
                        .filter((c) => c !== "__check__" && !!c);
                    const thisRow = {};
                    fields.forEach((f) => {
                        thisRow[f] = params.getValue(f);
                    });

                    // setSelection([thisRow.id]);



                 
                }
                return (
                    <div>
                        <Button>Vote</Button>                        
                    </div>
                );
            }
        }
    ];
    return (
        <div>
            <h2>Vote Summary</h2>   
            <div className="dataTable">
                <DataGrid rows={rows} columns={columns} pageSize={10} />                
            </div>                   
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cadidateList: state.voteData.voteData,
        isDeleted: state.userData.isDeleted,
        msg: state.userData.msg,
        isUpdated: state.userData.isUpdated
    };
}

const mapDispatchToProps = dispatch => {
    return {
        voteData: () => dispatch(actions.get_all_voteList())
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Vote);

