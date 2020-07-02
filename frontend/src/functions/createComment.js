import React, {useState, useEffect} from 'react';



const CreateComment = ({handleComment, setMakeComment}) => {
    const [comment, setComment] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        handleComment(comment)
        setMakeComment(false)
    }

    return (
            <form onSubmit ={handleSubmit} className="UserFeed">
                <textarea placeholder="Enter A comment!" value ={comment} onChange ={(e) => setComment(e.target.value)} />
                 <br/>
                <button type="submit" > Post Comment </button>
            </form>
    )
}
export default CreateComment;
