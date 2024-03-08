'use client'
import { Button } from '@material-tailwind/react'
import { ModelCard } from 'base/app/components/shared/ModelCard'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const Featured = () => {
    const [models,setModels]= useState<Array<any>>([])
    useEffect(()=>{
        const fetchModel  = async ()=>{
            
            try{
                const result = await fetch("https://test-api-8oep.onrender.com/models?rating_gt=5")
                
                const data  = await result.json()
                console.log("so jthis is the result",result)
                console.log(data)
                setModels(data)
            }
            catch(error){
                console.error(error)
               
            }
        }
        fetchModel()
    },[])
  return (
    <div className=' my-20 w-full'>
        <h1 id='featured' className="text-2xl font-semibold w-full text-start py-2 ">Featured Models</h1>
        <div className="grid grid-cols-3 gap-4 w-full justify-between items-center">
            
        {
            models.map((model:any,index:number)=>(
                <ModelCard key={index} model={model}/>
            ))
        }
        </div>
        <div className="viewmore min-h-fit relative flex justify-center items-center w-full my-10 ">
            <Link href="/featured">
                <Button className='absolute -top-1 /2 lowercase' size='sm' placeholder={undefined}><small className="">view more...</small></Button>
            </Link>
        </div>
        

    </div>
  )
}

export default Featured