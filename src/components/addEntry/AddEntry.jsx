import { useState } from "react";
import './AddEntry.css'


const AddEntry = (props) => {

    const [name, setName] = useState('')
    const [post, setPost] = useState('')
  
    function handleSubmit(event) {
        event.preventDefault()
        let newEntry = {
            name: name,
            post: post
        }
        props.addNewEntry(newEntry)
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input type='text' value={name} onChange={(event) => setName(event.target.value)} />
            </div>
            <div>
                <label>Post</label>
                <input type='text' value={post} onChange={(event) => setPost(event.target.value)} />
            </div>
            <button type="submit">Create</button>
        </form>
     );
}
 
export default AddEntry;
