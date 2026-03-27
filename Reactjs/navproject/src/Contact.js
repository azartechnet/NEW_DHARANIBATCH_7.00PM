import { useNavigate } from "react-router-dom";
function Contact()
{
    const navigate=useNavigate();
    return(
        <div>
            <h1>This is Contact</h1>
            <button onClick={()=>navigate("/")}>Home</button>
        </div>
    )
}
export default Contact;