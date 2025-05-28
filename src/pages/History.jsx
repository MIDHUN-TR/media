import React, { useEffect, useState } from 'react'
import { getHistoryApi,deleteHistoryApi } from '../service/allapis'

function History() {


  const [history, setHistory] = useState([])


  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const result = await getHistoryApi()
    console.log(result);
    if (result.status == 200) {
      setHistory(result.data)
    }
  }


  const handleDelete = async (id) => {
    const result = await deleteHistoryApi(id)
    if (result.status == 200) {
      getData()
    } else {
      alert("Something Went Wrong !!")
    }
  }

  return (
    <>
      <div className='container-fluid'>
        <h2>Watch History</h2>

        {

          history.length > 0 ?

            <table className="table table-dark my-5">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Title</th>
                  <th>URL</th>
                  <th>Date And Time </th>
                  <th></th>
                </tr>
              </thead>


              <tbody>
                {history.map((item, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.title}</td>
                    <td>
                      <img src={item.imageUrl} className='w-75' alt="" />
                    </td>
                    <td>{item.watchUrl}</td>
                    <td>{item.currentDateTime}</td>
                    <td>
                      <button className='btn btn-outline-danger' onClick={() => { handleDelete(item.id) }}>
                        <i class="  fa-solid  fa-trash  fa-lg "></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            : <h2 className='text-center text-primary p-5 border border-dark'>No Watch History </h2>

        }
      </div>
    </>
  )
}

export default History
