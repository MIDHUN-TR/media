import React,{useState,useEffect} from 'react'
import Videocard1 from './Videocard1'
import { getVideosApi } from '../service/allapis'

function Videolist1() {
  const [videos,setVideos]=useState([])
    const [deleteResponse,setDeleteResponse]=useState("")

    useEffect(()=>{
        // console.log("Components Loading");
        getData()
        
    },[add,deleteResponse])

    const getData=async()=>{
        const result =await getVideosApi()
        console.log(result.data);
        if(result.status==200){
            setVideos(result.data)
        }
        
    }
  return (
    <>
    <div className="border p-2 mb-4">
        {
            videos.length > 0?
            <div className="d-flex flex-wrap justify-content-around p-2">
                {
                    videos.map(item=>(
                        <Videocard1 vid={item} delres={setDeleteResponse}/>
                    ))
                }
            </div>
            :
            <h2>No Videos Added</h2>
        }
    </div>
    </>
    
  )

}

export default Videolist1
