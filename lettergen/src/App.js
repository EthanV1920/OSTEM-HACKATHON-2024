import './App.css';
/* <meta name ="viewport" content="width = device-width, initial-scale 
= 1"> */

{/* <link rel="stylesheet" type="text/css" href=""> */}



function App() {
  return (
    <div className="Banner">
      <h1>Letter Gen</h1>

      <div className="bottomSection">
        <div className="textbox-container">
          <textarea className="textbox" placeholder="Tell us what happened"></textarea>
        </div>
          <p class = "topText">AI Voting Right Bot</p>
        <div>
          <button className="bottomButton btn-danger btn-lg">Review Case</button>
        </div>
      </div>
    </div>
  );
}

export default App;
