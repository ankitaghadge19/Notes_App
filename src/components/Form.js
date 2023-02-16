import React, {useState} from 'react'
import './form.css'
import uniqid from 'uniqid'

export default function Form({setNotes, notes}) {                      

    const [note, setNote] = useState({
        title:"",
        desc:""
      });

    const [id, setId] = useState(uniqid())
   

const inputHandler =(e)=>{
    const name = e.target.name;
    const value = e.target.value;

    setNote({...note, [name]:value, id})
    
}

const handleSubmit=(e)=>{
    e.preventDefault();
    if(note.title!=="" && note.desc!==""){
    
        setNotes(notes => [...notes, note]);
        setId(uniqid());
    // console.log(notes);
    }
   
    setNote({title:"", desc:""});

}

  return (
    <>
       <div className=' formCont'>
        <div className='row justify-content-center'>
            <div className='col-md-10'>
                <form className='form' onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input type="title" name="title" className="form-control" id="title" placeholder='Enter Your Title'value={note.title} onChange={inputHandler}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Description</label>
                        <textarea name="desc" id="desc" rows="3" value={note.desc} className='form-control' onChange={inputHandler} placeholder='Enter Your Note Description'></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary" >Add Note</button>
                </form>
            </div>
        </div>

       </div>
    </>
  )
}
