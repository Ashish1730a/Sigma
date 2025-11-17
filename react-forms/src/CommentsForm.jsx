import { useState } from "react"
export default function CommentsForm({addNewComment}) {
    let [formData, setFormData] = useState({
        username: "",
        remarks: "",
        rating: 5
    })

    let handelInputChange = (event) => {
       setFormData((currData) => {
        return {...currData, [event.target.name] : event.target.value}
       })
    }

    let handelSubmit = (event) => {
        console.log(formData);
        addNewComment(formData)
        event.preventDefault();
        setFormData({
        username: "", remarks: "", rating: ""
    })
    }

    return (
        <div>
            <h3>Give a comment!</h3>
            <form onSubmit={handelSubmit}>
                <label htmlFor="username">username</label>
                <input type="text" placeholder="username" id="username" value={formData.username} onChange={handelInputChange} name="username"/>
                <br /><br />

                <label htmlFor="remarks">Remarks</label>
                <textarea name="remarks" id="remarks" value={formData.remarks} onChange={handelInputChange} >Remarks</textarea>
                <br /> <br />

                <label htmlFor="rating">Rating</label>
                <input type="number" min={0} max={5} id="rating" placeholder="rating" value={formData.rating} onChange={handelInputChange} name="rating"/>
                <button>Add Comment</button>
            </form>
        </div>
    )
}