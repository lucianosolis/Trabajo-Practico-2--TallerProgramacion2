import estudiantesModel from "../models/estudiantes.model.js";

const getAllEstudiantes=async()=>{
    return estudiantesModel.getAllEstudiantes()
}

const postEstudiantes=async(estudiante)=>{
    return estudiantesModel.postEstudiantes(estudiante)
}

const putEstudiantes=async(id,data)=>{
    return estudiantesModel.putEstudiantes(id,data)
}

const patchEstudiantes=async(id,data)=>{
    return estudiantesModel.patchEstudiantes(id,data)
}

const deleteEstudiantes=async(id)=>{
    return estudiantesModel.deleteEstudiantes(id)
}

export default{
    getAllEstudiantes,
    postEstudiantes,
    deleteEstudiantes,
    putEstudiantes,
    patchEstudiantes
}