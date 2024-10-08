import estudiantesService from "../services/estudiantes.service.js";

const getAllEstudiantes=async(req,res)=>{

    const estudiantes=await estudiantesService.getAllEstudiantes()
    res.status(200).send(estudiantes)
}

const postEstudiantes=async(req,res)=>{

    const estudiante=req.body

    if(JSON.stringify(req.body)=="{}"){
        console.log("el objeto esta vacio")
        throw new Error("el objeto no tiene los parametros validos")
    }
    const newEstudiante=await estudiantesService.postEstudiantes(estudiante)
    res.send(newEstudiante)

}

const putEstudiantes=async(req,res)=>{

    const {id}=req.params
    const data=req.body
    const putEstudiante=await estudiantesService.putEstudiantes(id,data)
    res.send(putEstudiante)
}

const patchEstudiantes=async(req,res)=>{

    const{id}=req.params
    const data=req.body
    const patchEstudiante=await estudiantesService.patchEstudiantes(id,data)

    res.send(patchEstudiante)
}

const deleteEstudiantes=async(req,res)=>{

    const{id}=req.params
    const deleteEstudiante=await estudiantesService.deleteEstudiantes(id)
    res.send(deleteEstudiante)
}

export default{
    getAllEstudiantes,
    postEstudiantes,
    deleteEstudiantes,
    putEstudiantes,
    patchEstudiantes
}


