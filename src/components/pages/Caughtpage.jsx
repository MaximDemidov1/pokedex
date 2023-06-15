import classes from "../../modules/PokemonList.module.css"
import {
    Container,
    Grid,
    Card,
    Box,
    CardContent,
    Typography,
    Button,
    CardActions,
    CardMedia,
    createTheme,
    ThemeProvider
} from "@mui/material";

export function Caughtpage(props) {

    const theme = createTheme({
        palette: {
            primary: {
                main: '#ff0000',
                darker: '#fff',
            },
        },
    });

    return (
        <Container>
            <Grid container spacing={3}>
                {props.caughtresult.map((res) => (
                    <Grid item md="3">
                        <Card sx={{height: 350}}>
                            <Box
                                display="flex"
                                flexDirection="column"
                                alignItems="center"
                            >
                                <CardContent
                                    sx={{mt: 1, minHeight: 215, minWidth: "265px"}}
                                    onClick={() => props.getPokemonData(res.id)}
                                >
                                    <CardMedia
                                        sx={{ml: "75px"}}
                                    >
                                        <img className={classes.img}
                                             src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${res.id}.png`}
                                             alt="pokemon"/>
                                    </CardMedia>
                                    <Box
                                        display="flex"
                                        flexDirection="column"
                                        justifyContent="center"
                                        alignItems="center"
                                    >
                                        <Typography
                                            variant="h6"
                                            componenet="h3"
                                        >
                                            {res.name}</Typography>
                                        <Typography
                                            variant="body1"
                                        >
                                            id: {res.id}</Typography>
                                    </Box>
                                </CardContent>
                                <CardActions>
                                    <ThemeProvider theme={theme}>
                                        <Button
                                            variant="contained"
                                            onClick={() => props.releaseFunc(res)}
                                            sx={{fontFamily: 'Courier New', fontSize: 16}}
                                        >
                                            Release
                                        </Button>
                                    </ThemeProvider>
                                </CardActions>
                            </Box>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}