import React from "react";

export default function ProfilPengguna({nama, peran}) {
    const employee = [{
        nama: "Garuda",
        peran: "FrontEnd"
    },
    {
        nama: "Acho",
        peran: "BackEnd"
    },
    {
        nama: "Avrijal",
        peran: "Bodyguard Acho"
    }]
    return (
        <React.Fragment>
            <h1>Nama Saya : {nama}</h1>
            <h1>Peran Saya : {peran}</h1>
        </React.Fragment>
    )
}