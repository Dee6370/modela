


export async function getModelById(id:string){
    let result  = null
    try{
        result  = await fetch(`https://test-api-8oep.onrender.com/models/${id}`)
    }
    catch(error){
        console.error("oops soething went wrong while loading the model",error)
    }


    return result
}