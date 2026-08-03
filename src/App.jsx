import React from "react";
import ProfilPengguna from "./components/ProfilPengguna";


function app() {
  return (
    <div>
      <ProfilPengguna
        nama="Azki"
        peran="FrontEnd" />

      <ProfilPengguna
        nama="Azka"
        peran="BackEnd" />

        <ProfilPengguna
        nama="Avrijal"
        peran="Bodyguard Acho" />
    </div>
  )
}

export default app;