import { sliceSelector, count, setCountAsync } from "./store/slices/slice";
import { useSelector } from "react-redux";
import {
  Button,
  createTheme,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";



import { useAppDispatch } from "./store/store";

function App() {
  const reducer = useSelector(sliceSelector);

  const dispatch = useAppDispatch();

  const theme = createTheme({
    typography: {
      fontFamily: "'Montserrat', sans-serif",
      fontSize: 12,
      h1:{
        fontSize: '5rem',
        '@media (Max-width:600px)': {
              fontSize: '3rem',
          }
      }
    },
  });

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ThemeProvider theme={theme}>
        <Stack alignItems={"center"} spacing={4}>
          <Typography sx = {{
            fontWeight: "bold"
          }} variant="h1">Redux Toolkit</Typography>
          <Stack spacing={2}>
            <Typography variant="h4">Synchronous {reducer.number}</Typography>
            {reducer.loading ? (
              <Typography variant="h4">
                Loading...... {reducer.AsyncNumber}
              </Typography>
            ) : (
              <Typography variant="h4">
                Asynchronous {reducer.AsyncNumber}
              </Typography>
            )}
          </Stack>

          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              onClick={() => {
                dispatch(count(1));
                dispatch(setCountAsync(1));
              }}
            >
              Increase
            </Button>
            <Button
              variant="outlined"
              onClick={() => {
                dispatch(count(-1));
                dispatch(setCountAsync(-1));
              }}
            >
              Decrease
            </Button>
          </Stack>
        </Stack>
      </ThemeProvider>
    </div>
  );
}

export default App;
