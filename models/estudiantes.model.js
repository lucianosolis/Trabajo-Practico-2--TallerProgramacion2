const estudiantes=[
    {id:1,nombre:"luciano",nota:7,edad:26},
    {id:2,nombre:"johanna",nota:10,edad:29},
    {id:3,nombre:"antonio",nota:8,edad:57},
    {id:4,nombre:"lucas",nota:6,edad:17},
    {id:5,nombre:"mercedes",nota:10,edad:54},
    {id:6,nombre:"agustin",nota:8,edad:38}
]


const getAllEstudiantes=async()=>{

    return estudiantes;
}

const postEstudiantes=async(estudiante)=>{

    estudiante.id=estudiantes[estudiantes.length -1].id +1;
    estudiantes.push(estudiante);
    return estudiante;
}

const putEstudiantes=async(id,data)=>{

    data.id=parseInt(id);
    const index=estudiantes.findIndex((e)=>e.id==id)
    estudiantes.splice(index,1,data)
    return "actualizacion exitosa"
}

const patchEstudiantes=async(id,data)=>{

    const index=estudiantes.findIndex((e)=>e.id==id)
    const newEstudiante={...estudiantes[index],...data}
    estudiantes.splice(index,1,newEstudiante)

    return "Actualizacion parcial completa"
}



const deleteEstudiantes=async(id)=>{

    const index=estudiantes.findIndex((e)=>e.id==id);
    if(index==-1)throw new Error("el id del elemento no se ha encontrado")
    estudiantes.splice(index,1)
    return "El estudiante fue borrado"
}

export default{

    getAllEstudiantes,
    postEstudiantes,
    deleteEstudiantes,
    putEstudiantes,
    patchEstudiantes

}