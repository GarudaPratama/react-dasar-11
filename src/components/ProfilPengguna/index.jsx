import React from "react";
import styleProfil from './ProfilPengguna.module.css';
import { Calendar } from "@/components/ui/calendar"

export default function ProfilPengguna({nama, peran}) {
    
    const [date, setDate] = React.useState(new Date())
    
    return (
        <section className='border p-6 mb-2 text-xl font-semibold'>
            <h1 className={styleProfil.box}>Nama Saya : {nama}</h1>
            <h1>Peran Saya : {peran}</h1>
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-lg border mt-10"
            />
        </section>
    )
}