import './App.css';

function App() {
  return (
    <div className="Banner">
      <h1>Letter Gen</h1>

      <div className="bottomSection">
        <div className="textbox-container">
          <textarea className="textbox" placeholder="Tell us what happened"></textarea>
        </div>
        
        <div>
          <button className="bottomButton btn-lg">Review Case</button>
        </div>
      </div>
    </div>
  );
}

export default App;
