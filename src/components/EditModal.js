import React from 'react'

export default function EditModal({editId, notes, setNotes}) {

    const updateNote=()=>{
        console.log(editId);
        const updateNote = notes.map((elem)=>{
            console.log(elem);
            
            if(editId === elem.id){
            
                return(
                {...elem, title : document.getElementById("editTitle").value,
                desc : document.getElementById("editDesc").value}
                  )
            }
            else{
                return elem;
            }
          
        })
    console.log(updateNote);
    setNotes(updateNote);
    }

  return (
    <>
       
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Notes</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <form>
                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input type="title" className="form-control" id="editTitle" placeholder='Enter Your Title' />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Description</label>
                        <textarea name="description" id="editDesc" rows="3" className='form-control' placeholder='Enter Your Note Description'></textarea>
                    </div>
                </form>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={updateNote}>Edit Note</button>
            </div>
            </div>
        </div>
        </div>
    </>
  )
}
