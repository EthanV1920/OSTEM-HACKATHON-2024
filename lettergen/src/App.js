import './App.css';

function App() {
  return (
    <div className="Banner">
      <h1>Voter Advocate</h1>

      <div className="bottomSection">
        <div className="textbox-container">
          <textarea className="textbox" placeholder="Tell us what happened"></textarea>
        </div>
        
        <div>
          <button className="bottomButton btn-lg">Review Case</button>
          <button className="Form btn-lg">Download Form</button>
        </div>
      </div>
    </div>
  );
}

export default App;
