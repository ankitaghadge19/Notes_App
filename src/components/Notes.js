import React from 'react'

export default function Notes({notes, setNotes, setEditId}) {
  console.log(notes);

  function deleteNote(id){
    setNotes(notes.filter(n => n.id != id))
  }

  const editNote =(id)=>{
    console.log(id);
    setEditId(id);

    notes.filter((elem)=>{
      if(elem.id === id){
        document.getElementById("editTitle").value = elem.title;
        document.getElementById("editDesc").value = elem.desc;
      }
    })
  }

  return (
    <>
         <div className="container my-5">
            <div className="row justify-content-center">
              <div className="col-md-10">
                <h1 className="mb-2">Your Notes</h1>
                 {
                 notes.length===0?
                 <div className="card my-3">
                    <div className="card-body">
                        <h5 className="card-title">Message:</h5>
                        <p className="card-text">No notes are available for reading.</p>
                    </div>
                </div>
                :
                notes.map((element)=>{
                    return(
                  <div className="card my-3">
                      <div className="card-body text-captialiaze" style={{textTransform:"capitalize"}}>
                          <h5 className="card-title">Title: {element.title}</h5>
                          <hr />
                          <br />
                          <h5>Description:</h5>
                          
                          <p className="card-text">{element.desc}</p>
                          <button type="button" className="btn btn-primary" data-bs-toggle="modal" onClick={() => editNote(element.id)}data-bs-target="#exampleModal">
                              Edit
                          </button>

                          <button className="btn btn-danger mx-2" onClick={() => deleteNote(element.id)} >Remove</button>
                      </div>
                  </div>
                  )})}
      
              </div>
            </div>
          </div> 

    </>
  )
}
