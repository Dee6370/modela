'use client'
import { Button, Input } from '@material-tailwind/react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { ModelCard } from './ModelCard'

const ModelList = () => {
    const [models,setModels]= useState<Array<any>>([])
    const [search, setSearch] =useState("");
    const [searchText,setSearchText]=useState("")
    const onChange = ({ target }:{target:any}) => setSearch(target.value);
 
    const fetchModel  = async ()=>{
            
        try{
            const result = await fetch(`https://test-api-8oep.onrender.com/models?name_like=${searchText}&description_like=${searchText}`)
            
            const data  = await result.json()
            console.log("so jthis is the result",result)
            console.log(data)
            setModels(data)
        }
        catch(error){
            console.error(error)
           
        }
    }
    useEffect(()=>{
        
        fetchModel()
    },[])
    
    function handleSearch(){
        setSearchText(search)
        fetchModel()
    }

  return (
    <div className=' my-20 w-full flex flex-col gap-4 items-center'>
    <h1 id='explore' className="text-2xl font-semibold w-full text-start py-2 ">Explore All Models</h1>
    <div className="relative flex w-full max-w-[32rem] items-center my-10">
      <Input
                  placeholder={undefined}
                  type="search"
                  size='lg'
                  label="search Models"
                  value={search}
                  onChange={onChange}
                  className="pr-20 min-h-14 text-xl"
                  containerProps={{
                      className: "min-w-0",
                  }} crossOrigin={undefined}      />
      <Button
        placeholder={undefined}
        size="lg"
        color={search ? "gray" : "blue-gray"}
        disabled={!search}
        onClick={handleSearch}
        className="!absolute right-1 top-1 rounded"
      >
        search
      </Button>
    </div>
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

export default ModelList