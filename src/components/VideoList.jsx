import React,{useEffect, useState} from 'react'
import Videocard from './Videocard'
import { getVideosApi } from '../service/allapis'

function VideoList({add}) {

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
                        <Videocard vid={item} delres={setDeleteResponse}/>
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

export default VideoList
