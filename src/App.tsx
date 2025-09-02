import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import { Toolbar, Typography } from "@mui/material";

function App() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Exatas Dashboard</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Typography variant="h4" gutterBottom>
          Welcome to Exatas Dashboard
        </Typography>
      </Container>
    </>
  );
}

export default App;
