import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CategoryList from './CategoryList';
import { addCategoryApi } from '../service/allapis';



function Category() {
    const [show, setShow] = useState(false);

    const [addResponse,setAddResponse]=useState("")

    const [cat,setCat]=useState({
        name:"",videos:[]
    })

    const handleSubmit=async()=>{
        const {name}=cat
        if(!name){
            alert("Enter Valid Input ")
        }
        else{
            const result=await addCategoryApi(cat)
            console.log(result);
            if(result.status==201){
                alert("Category Added!!")
                setCat({
                    name:"",videos:[]
                })
                handleClose()
                setAddResponse(result)
            }
            
        }
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>

            <div className="d-grid">
                <button className="btn btn-info" onClick={handleShow} >Add Category</button>
            </div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input type="text" onChange={(e)=>{setCat({...cat,name:e.target.value})}} placeholder='Enter New Category Name' className='form-control' />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>Add</Button>
                </Modal.Footer>
            </Modal>
            <CategoryList addres={addResponse}/>

        </>
    )
}

export default Category
