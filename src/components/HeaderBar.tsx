import { AppBar, Avatar, Box, Toolbar } from "@mui/material";
import dp from "../assets/image/Sourav.jpeg";

export default function HeaderBar() {
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <Box>
                        </Box>
                        <Box>
                            <Avatar alt="Sourav Dutta" sx={{ width: 56, height: 56 }} src={dp} />
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}