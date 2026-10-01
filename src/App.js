import welcomeImage from "./images/img.jpg";
function App() {
  const name = "Lekshmy";
  const description = "I am a software developer.";

  const externalImage =
    "https://img.freepik.com/premium-photo/vector-illustration-showing-female-software-engineer_1110958-62413.jpg";
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div style={{
            border: "2px solid black",
            padding: "20px",
            backgroundColor: "lightgray",
            textAlign: "center",
            borderRadius: "10px"
          }}><h1>{name}</h1></div>
          <p>{description}</p>
          <h3>Internal Image</h3>
          <img src={welcomeImage} alt={name} className="img-fluid" style={{ width: "200px" }} />
          <h3 className="mt-3">External Image</h3>
          <img src={externalImage} alt={name} className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default App;
