import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { addHistoryApi } from '../service/allapis';
import { deleteVideoApi } from '../service/allapis';



function Videocard({ vid, delres, delStatus }) {
    const [show, setShow] = useState(false);

    // console.log(vid);

    const handleDelete = async () => {
        const result = await deleteVideoApi(vid?.id)
        console.log(result);
        if (result.status == 200) {
            alert("Video Deleted!!")
            delres(result)
        }
        else {
            alert("Video Deletion Failed!!")
        }

    }

    const handleClose = () => setShow(false);

    const handleShow = async () => {
        setShow(true);

        const { id, title, imageUrl, watchUrl } = vid
        const now = new Date()
        const currentDateTime = now.toLocaleString()
        const data = { videoId: id, title, watchUrl, imageUrl, currentDateTime }
        // console.log(data);
        const result = await addHistoryApi(data)
        console.log(result);

    }


    const handleDrag = (e) => {
        console.log("Dragging");
        console.log(vid);
        e.dataTransfer.setData("video", JSON.stringify(vid))


    }

    return (
        <>
            <Card style={{ maxWidth: '18rem' }} className='m-3' draggable onDragStart={(e) => handleDrag(e)}>
                <Card.Img variant="top" style={{ cursor: 'pointer' }} onClick={handleShow} src={vid.imageUrl} />
                <Card.Body className='d-flex justify-content-between'>
                    <Card.Title>{vid.title}</Card.Title>

                    {
                        !delStatus &&
                        <button className='btn btn-outline-danger' onClick={handleDelete} >
                            <i class="fa-solid fa-trash "></i>
                        </button>
                    }

                </Card.Body>
            </Card>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{vid.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <iframe width="100%" height="315" src={`${vid.watchUrl}&autoplay=1`} title="YouTube video player"
                        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                    </iframe>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Videocard
