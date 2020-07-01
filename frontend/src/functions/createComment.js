import React, {useState, useEffect} from 'react';



const CreateComment = ({handleComment}) => {
    const [comment, setComment] = useState("")

    return (
            <form onSubmit ={(e) => handleComment(e,comment)} className="UserFeed">
                <textarea placeholder="Enter A comment!" value ={comment} onChange ={(e) => setComment(e.target.value)} />
                 <br/>
                <button type="submit" > Post Comment </button>
            </form>
    )
}
export default CreateComment;
