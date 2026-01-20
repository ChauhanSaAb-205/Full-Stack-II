import { useState } from "react";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div>
      {/* Navigation Bar */}
      <nav style={styles.navbar}>
        <button style={styles.btn} onClick={() => setPage("home")}>
          Home
        </button>
        <button style={styles.btn} onClick={() => setPage("about")}>
          About
        </button>
      </nav>

      {/* Page Content */}
      <div style={{ padding: "20px", marginTop: "60px" }}>
        {page === "home" && (
          <div>
            <h1>Home Page</h1>
            <>Welcome to the simple single-page React website!</p>
          </div>
        )}

        {page === "about" && (
          <div>
            <h1>About Page</h1>
            <p>This is the About section of the website.</p>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  navbar: {
    display: "flex",
    gap: "20px",
    padding: "15px",
    backgroundColor: "#9b0c0c",
    position: "fixed",
    top: 0,
    width:"100%",
  },
  btn: {
    padding: "8px 15px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default App;