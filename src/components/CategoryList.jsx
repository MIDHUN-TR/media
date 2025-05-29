import React, { useEffect, useState } from 'react'
import { addVideoToCategoryList } from '../service/allapis'
import { deleteCategoriesApi } from '../service/allapis'
import { getCategoriesApi } from '../service/allapis'
import Videocard1 from './Videocard1'


function CategoryList({ addres }) {

    const [list, setList] = useState([])

    useEffect(() => {
        getData()
    }, [addres])

    const getData = async () => {
        const result = await getCategoriesApi()
        if (result.status == 200) {
            setList(result.data)
            console.log(list);

        }
    }

    const handleDelete = async (id) => {
        const result = await deleteCategoriesApi(id)
        if (result.status == 200) {
            getData()
        }
        else {
            alert("Category Deletion Failed!!")
        }
    }

    const handleDragOver = (e) => {
        console.log("Drag Over");
        e.preventDefault()
    }

    const handleDrop = async (e, cat) => {
        console.log("Dropping");
        e.preventDefault()
        const videoData = JSON.parse(e.dataTransfer.getData("video"))
        // console.log(videoData);
        // console.log(cat); 
        const existing = cat.videos.find(item => item.id == videoData.id)
        if (existing) {
            alert("Video Already Exists ,Video Cannot Be Added")
        }
        else {
            cat.videos.push(videoData)
            console.log(cat);
            const result = await addVideoToCategoryList(cat.id, cat)
            console.log(result);
            if (result.status == 200) {
                alert("Video Successfully Added to Category")
                getData()
            }
            else {
                alert("Video Adding To Category Failed")
            }
        }
        console.log(cat.videos);


    }
    return (
        <>
            <div className="border border-2">

                {list.length > 0 ?
                    <>
                        {list.map(item => (
                            <div className='m-3 border-info border'>
                                <div className=" p-3 d-flex justify-content-between" onDragOver={(e) => handleDragOver(e)} onDrop={(e) => handleDrop(e, item)}>
                                    <h3>{item.name}</h3>
                                    <button className='btn btn-outline-danger' onClick={() => (handleDelete(item.id))}>
                                        <i class="fa-solid fa-trash fa-md "></i>
                                    </button>
                                </div>
                                <div>
                                    {
                                        item.videos.length>0 &&
                                        <>
                                        {
                                            item.videos?.map(video=>(
                                                <Videocard1 vid={video} delStatus={true}/>
                                            ))
                                        }
                                        </>
                                    }
                                </div>
                            </div>

                        ))}

                    </>
                    : <h2 className="text-center text warning">No Categories Added</h2>

                }
            </div>
        </>
    )
}

export default CategoryList
