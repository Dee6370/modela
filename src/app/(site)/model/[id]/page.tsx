'use client'
import HeroSection from "base/app/components/landing/HeroSection";
import Image from "next/image";
import Featured from "../../featured/Featured";
import { getModelById } from "base/app/lib/helpers";
import { useEffect, useState } from "react";
import { ImageCarousel } from "base/app/components/shared/ImageCarousel";
import { Typography } from "@material-tailwind/react";
import { Implementations } from "base/app/components/shared/Implementations";

export type Implementation = {
  id: string;
  language: string;
  framework:string;
  code: string;
};

export type Model = {
  id: string;
  name: string;
  description: string;
  creator: string;
  rating: string;
  images: string[];
  capabilities: string[];
  applications: string[];
  implementation: Implementation[];
};


export default function Home({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}){

  const [currentModel,setCurrentModel]= useState<Model>({} as Model)
  const [creator,setCreator] = useState<any>({})
  
  useEffect(()=>{
      const getCurrentModel = async ()=>{
        try{
          const result  =await (await fetch(`https://test-api-8oep.onrender.com/models/${params.id}`))
          const model  = await result.json()
        
          console.log("this is the current model",model)
          setCurrentModel(model)
        }
        catch(error){
          console.error("something went wrong while loading model",error)
        }
      }

      const getUserById =async ()=>{
        try{
          const result  =await fetch(`https://test-api-8oep.onrender.com/users/${currentModel.creator}`)
          const user  = await result.json()
        
          console.log("this is the current model",user)
          setCreator(user)
        }
        catch(error){
          console.error("something went wrong while loading model",error)
        }
      }
      getCurrentModel()
      getUserById()
  },[])
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-10">
        {/* <div className="relative w-full md:w-[80%] h-[30rem] rounded-[15px] bg-amber-900 mt-[5rem]">
          <Image src={currentModel.coverImage} alt="No Image Found" objectFit="cover" layout="fill" />
        </div> */}
        <ImageCarousel imageUrls={currentModel.images as string[]}/>
        {/* <h1 className="text-9xl">id:{currentModel.id}</h1>
        {
          currentModel
        }
         */}
         <h1 className="text-4xl w-full font-semibold px-10 mb-8"><small>model: </small>{currentModel.name}</h1>
         <div className="metadata w-full grid grid-cols-2">
              <div className="section1 px-10 border-b border-gray-700">
              
         <h1 className="text-2xl w-full font-semibold ">description</h1>
         <p className="px-10">{currentModel.description}</p>
         <p className="px-10">created by: {creator.username}</p>
         <Typography
                        color="blue-gray"
                        className="flex items-center gap-1.5 font-normal"  placeholder={undefined}>
              <small className="text-xl px-10 font-semibold text-md py-4">rating: </small>
              <svg

                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="-mt-0.5 h-5 w-5 text-yellow-700"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
              {currentModel.rating}
            </Typography> 
              </div>
              <div className="section2 flex flex-col gap-4 border-b border-gray-800">
              <h1 className="text-2xl w-full font-semibold ">capabilities</h1>
                <ul className="flex flex-col gap-4 px-10">
                  {currentModel.capabilities &&
                    currentModel.capabilities.map((capability, ind) => (
                      <li key={ind}>{capability}</li>
                    ))}
                </ul>

                <h1 className="text-2xl w-full font-semibold ">applications</h1>
                <ul className="flex flex-col gap-4 px-10">
                  {currentModel.capabilities &&
                    currentModel.capabilities.map((capability, ind) => (
                      <li key={ind}>{capability}</li>
                    ))}
                </ul>

              </div>


                      <div className="implementation col-span-2 w-full flex flex-col justify-center items-center px-10">
                            <h1 className="w-full text-start text-2xl font-semibold py-10">Implementations</h1>
                            <Implementations  implementationList={currentModel.implementation} />
  
                      </div>
         </div>
         
    </main>
  );
}
