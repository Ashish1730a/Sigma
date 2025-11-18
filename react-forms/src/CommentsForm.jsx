import { useState } from "react"
import {useFormik} from 'formik'


const validate = values => {
   const errors = {};
 
   if (!values.username) {
     errors.username = 'Username can not be empty!';
   }
 
   return errors;
 };

export default function CommentsForm({addNewComment}) {
    // let [formData, setFormData] = useState({
    //     username: "",
    //     remarks: "",
    //     rating: 5
    // })

    const formik = useFormik({
        initialValues: {
            username: '',
            remarks: '',
            rating: 5,
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    })

    // let handelInputChange = (event) => {
    //    setFormData((currData) => {
    //     return {...currData, [event.target.name] : event.target.value}
    //    })
    // }

    // let handelSubmit = (event) => {
    //     console.log(formData);
    //     addNewComment(formData)
    //     event.preventDefault();
    //     setFormData({
    //     username: "", remarks: "", rating: ""
    // })
    // }

    return (
        <div>
            <h3>Give a comment!</h3>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="username">username</label>
                <input type="text" placeholder="username" id="username" value={formik.values.username} onChange={formik.handleChange} name="username"/>
                {formik.touched.username && formik.errors.username ? (
         <div>{formik.errors.username}</div>
       ) : null}
                <br /><br />

                <label htmlFor="remarks">Remarks</label>
                <textarea name="remarks" id="remarks" value={formik.values.remarks} onChange={formik.handleChange} >Remarks</textarea>
                <br /> <br />

                <label htmlFor="rating">Rating</label>
                <input type="number" min={0} max={5} id="rating" placeholder="rating" value={formik.values.rating} onChange={formik.handleChange} name="rating"/>
                <button type="submit">Add Comment</button>
            </form>
        </div>
    )
}