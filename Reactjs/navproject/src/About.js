import { useNavigate } from "react-router-dom";
function About()
{
    const navigate=useNavigate();
    return(
        <div>
            <h1>This is About</h1>
            <button onClick={()=>navigate("/")}>Home</button>
        </div>
    )
}
export default About;