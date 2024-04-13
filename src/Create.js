import { useState } from "react";
import { useHistory, Link } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body1, setBody1] = useState('');
  const [body2, setBody2] = useState('');
  const [body3, setBody3] = useState('');
  const [body4, setBody4] = useState('');
  const [body5, setBody5] = useState('');
  const [body6, setBody6] = useState([]);
  const [author, setAuthor] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Concatenate all bodies into one
    const combinedBody = `Name: ${title}\n\nMobile: ${body1}\n\nemail: ${body2}\n\nAmount Paid: ${body3}\n\nDepartment: ${body4}\n\nSection: ${body5}\n\nEvents: ${body6.join(", ")}`;
    
    // Create a single blog object
    const blog = { title, body: combinedBody, author };

    // Send the single blog to the server
    fetch('http://localhost:8000/blogs/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      // Redirect to the registered page after successful submission
      history.push('/registered');
    }).catch(error => {
      console.error("Error occurred:", error);
    });
  };

  return (
    <div className="create">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label><span style={{ color: '#f1356d' }}>Name:</span></label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ height: '40px', width: '500px', backgroundColor:'azure',borderRadius: '8px',borderBlockColor:'#f1356d'}}
        />
        <label><span style={{ color: '#f1356d' }}>Mobile:</span></label>
        <input 
          type="text" 
          required 
          value={body1}
          onChange={(e) => setBody1(e.target.value)}
          style={{ height: '40px', width: '500px', backgroundColor:'azure',borderRadius: '8px',borderBlockColor:'#f1356d'}}
        />
        <label><span style={{ color: '#f1356d' }}>email:</span></label>
        <input 
          type="email" 
          required 
          value={body2}
          onChange={(e) => setBody2(e.target.value)}
          style={{ height: '40px', width: '500px', backgroundColor:'azure',borderRadius: '8px',borderBlockColor:'#f1356d'}}
        />
        <label><span style={{ color: '#f1356d' }}>Amount Paid:</span></label>
        <input 
          type="text" 
          required 
          value={body3}
          onChange={(e) => setBody3(e.target.value)}
          style={{ height: '40px', width: '500px', backgroundColor:'azure',borderRadius: '8px',borderBlockColor:'#f1356d'}}
        />
        <label><span style={{ color: '#f1356d' }}>Department:</span></label>
<select
  onChange={(e) => setBody4(e.target.value)}
  style={{ height: '40px', width: '500px', backgroundColor:'azure',borderRadius: '8px',borderBlockColor:'#f1356d'}}
  required
> 
  <option value="">Select Department</option>
  <option value="CSD">CSD</option>
  <option value="CSE">CSE</option>
  <option value="ECE">ECE</option>
  <option value="AIDS">AIDS</option>
  <option value="MECH">MECH</option>
  <option value="CIVIL">CIVIL</option>
</select>

<label><span style={{ color: '#f1356d' }}>Section:</span></label>
<select
  onChange={(e) => setBody5(e.target.value)}
  style={{ height: '40px', width: '500px', backgroundColor:'azure',borderRadius: '8px',borderBlockColor:'#f1356d'}}
  required
>
  <option value="">Select Section</option>
  <option value="A">A</option>
  <option value="B">B</option>
  <option value="C">C</option>
  <option value="D">D</option>
</select>

        <label><span style={{ color: '#f1356d' }}>Events:</span></label>
       
        <div>
          <input 
            type="checkbox"
            value="Coding Contest"
           
            checked={body6.includes("Coding Contest")}
            onChange={(e) => setBody6(prevState => [...prevState, e.target.value])}
          />
          <label>Coding Contest</label>
        </div>
        <div>
          <input 
            type="checkbox"
            value="Online Housie"
            checked={body6.includes("Online Housie")}
            onChange={(e) => setBody6(prevState => [...prevState, e.target.value])}
          />
          <label>Online Housie</label>
        </div>
        <div>
          <input 
            type="checkbox"
            value="Treasure Hunt"
            checked={body6.includes("Treasure Hunt")}
            onChange={(e) => setBody6(prevState => [...prevState, e.target.value])}
          />
          <label>Treasure Hunt</label>
        </div>
        <div>
          <input 
            type="checkbox"
            value="Virtual Reality"
            checked={body6.includes("Virtual Reality")}
            onChange={(e) => setBody6(prevState => [...prevState, e.target.value])}
          />
          <label>Virtual Reality</label>
        </div>
        <div>
          <input 
            type="checkbox"
            value="Spot IT"
            checked={body6.includes("Spot IT")}
            onChange={(e) => setBody6(prevState => [...prevState, e.target.value])}
          />
          <label>Spot IT</label>
        </div>
        {/* Add more checkboxes for other events */}
        <label><span style={{ color: 'pink' }}>Payment:</span></label>
        <select
          value={author}
          required
          style={{ height: '40px', width: '500px', backgroundColor:'azure',borderRadius: '8px',borderBlockColor:'#f1356d'}}
          onChange={(e) => setAuthor(e.target.value)}
        > 
        
          <option value="">Select Payment</option>
          <option value="Online">Online</option>
          <option value="Cash">Cash</option>
        </select>
        <button
          style={{
            height: '40px',
            width: '150px',
            borderRadius: '8px',
          }}
          type="submit" // Ensure button submits the form
        >
          <Link to="/registered" style={{ textDecoration: 'none', color: 'inherit' }}>Submit</Link>

        </button>
      </form>

      {/* Display entered data */}
      <div className="entered-data">
        <h3>Entered Data:</h3>
        <p><strong>Name:</strong> {title}</p>
        <p><strong>Mobile:</strong> {body1}</p>
        <p><strong>email:</strong> {body2}</p>
        <p><strong>Amount Paid:</strong> {body3}</p>
        <p><strong>Department:</strong> {body4}</p>
        <p><strong>Section:</strong> {body5}</p>
        <p><strong>Events:</strong> {body6.join(", ")}</p>
        <p><strong>Payment:</strong> {author}</p>
      </div>
    </div>
  );
};

export default Create;
