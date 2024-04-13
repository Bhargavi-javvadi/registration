import { Link } from "react-router-dom";

const Registered = () => {
  return (
    <div className="Registered">
      <h1 style={{color:'green'}}>Registered successfully!</h1>
      <h3>Congratulations! Your registration was successful.</h3>
      <img src="/happy-dance.gif" alt="Success GIF" height="300" width="400" />


   <br />
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Back to the homepage...</Link>
    </div>
  );
}
 
export default Registered;
