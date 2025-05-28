import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addVideoApi } from '../service/allapis';




function Addvideo({addres}) {

    const [show, setShow] = useState(false);

    const [video,setVideo]= useState({
        title:"",imageUrl:"",watchUrl:""
    })

    const handleSubmit=async()=>{
        // console.log(video);
        const{title,imageUrl,watchUrl}=video
        if(!title || !imageUrl || !watchUrl){
            alert("Enter Valid Inputs!!")
        }
        else{
            const videoChar=watchUrl.split("v=")[1]
            // console.log(videoChar);
            const embedUrl=`https://www.youtube.com/embed/${videoChar}?si=-Ps3c5EIog7yp3bY`
            // console.log(embedUrl);
            video.watchUrl=embedUrl
            const result=await addVideoApi(video)
            console.log(result);
            if(result.status==201){
                alert("Video Added Successfully!!")
                addres(result)
                setVideo({
                    title:"",imageUrl:"",watchUrl:""
                })
                handleClose()
            }
            else{
                alert("Video Uploading Failed!!")
            }
        }
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>

            <div className="d-flex justify-content-center align-items-center" style={{height:'40vh'}}>
                <button className="btn btn-outline-success mb-2 p-3  fs-5 fw-bold"  onClick={handleShow}>+</button>

            </div>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Upload Video</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FloatingLabel controlId="title" label="Video Label" className='mb-3'>
                        <Form.Control type="text" onChange={(e)=>{setVideo({...video,title:e.target.value})}} placeholder="title" />
                    </FloatingLabel>
                    <FloatingLabel controlId="img" label="Video Thumbnail URL" className='mb-3'>
                        <Form.Control type="text" onChange={(e)=>{setVideo({...video,imageUrl:e.target.value})}} placeholder="thumbnail" />
                    </FloatingLabel>
                    <FloatingLabel controlId="video" label="Youtube Video URL" className='mb-3'>
                        <Form.Control type="text" onChange={(e)=>{setVideo({...video,watchUrl:e.target.value})}} placeholder="video" />
                    </FloatingLabel>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>Submit</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Addvideo
