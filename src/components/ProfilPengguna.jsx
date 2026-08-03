import React from "react";

export default function ProfilPengguna(props) {
    return (
        <React.Fragment>
            <h1>Nama Saya : {props.nama}</h1>
            <h1>Peran Saya : {props.peran}</h1>
        </React.Fragment>
    )
}