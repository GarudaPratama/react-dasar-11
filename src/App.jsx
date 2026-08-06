import React from "react";
import ProfilPengguna from "./components/ProfilPengguna";
import LoginForm from "./components/LoginForm";
import { Button } from "@/components/ui/button";

function App() {

  const employee = [{
        id: 1,
        nama: "Garuda",
        peran: "FrontEnd"
    },
    {
        id: 2,
        nama: "Acho",
        peran: "BackEnd"
    },
    {
        id: 3,
        nama: "Avrijal",
        peran: "Bodyguard Acho"
    }]

  return(
    <div>
      {employee.map((employees) => {
        return <ProfilPengguna key={employees.id} nama={employees.nama} peran={employees.peran} />
      })}
      <LoginForm />
      <Button />
    </div>
  )

  
}

export default App;