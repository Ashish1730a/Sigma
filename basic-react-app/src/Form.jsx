function handleFormSubmit(event) {
    event.preventDefault();
    console.log("Form was submitted")
}


export default function Frm() {
    return (
        <form onSubmit={handleFormSubmit}>
            <input placeholder="Write Something"/>
            <button >Submit</button>
        </form>
    )
}