import { ButtonGroup, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";



const Homepage = () => {
    const navigate = useNavigate();
    return (
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button onClick={() => navigate("/tabsmenu")}>Tabs Menu</Button>
        </ButtonGroup>
    );
}

export default Homepage