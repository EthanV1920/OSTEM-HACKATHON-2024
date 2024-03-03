import './App.css';

function App() {
  const handleDownloadForm = () => {
    // Replace the link with your desired URL
    window.open('https://elections.cdn.sos.ca.gov/fraud-complaints/pdfs/english-voter-fraud-complaint-form.pdf', '_blank');
  };

  return (
    <div className="Banner">
      <h1>Voter Advocate</h1>

      <div className="bottomSection">
        <div className="textbox-container">
          <textarea className="textbox" placeholder="Tell us what happened"></textarea>
        </div>
        
        <div>
          <button className="bottomButton btn-lg">Review Case</button>
          <button className="Form btn-lg" onClick={handleDownloadForm}>Download Form</button>
        </div>
      </div>
    </div>
  );
}

export default App;
