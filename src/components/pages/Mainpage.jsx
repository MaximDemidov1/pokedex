import classes from "../../modules/PokemonList.module.css"
import {
    Card,
    Grid,
    Button,
    Container,
    CardContent,
    CardActions,
    Typography,
    Box,
    createTheme,
    ThemeProvider,
    CardMedia
} from "@mui/material";

export function Mainpage(props) {

    const theme = createTheme({
        palette: {
            primary: {
                main: '#00ff0d',
                darker: '#006605',
            },
            secondary: {
                main: '#000',
                contrastText: '#fff',
            },
        },
    });

    return (
        <Container>
            <Grid container spacing={3}>
                {props.result.map((res) => (
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
                                        >id: {res.id}</Typography>
                                    </Box>
                                </CardContent>
                                <CardActions>
                                    <ThemeProvider theme={theme}>
                                        <Button
                                            variant="contained"
                                            onClick={() => props.caughtFunc(res)}
                                            disabled={props.isPokemonCaptured(res)}
                                            sx={{fontFamily: 'Courier New', fontSize: 16, position: 'sticky'}}
                                        >
                                            <Typography
                                                variant="h7"
                                                component="span"
                                                color="secondary"
                                            >
                                                {props.isPokemonCaptured(res) ? "Captured" : "Catch"}
                                            </Typography>
                                        </Button>
                                    </ThemeProvider>
                                </CardActions>
                            </Box>
                        </Card>
                    </Grid>
                ))}
                <div className={classes.paginationBox}>
                    {props.currentPage.map((pageNumber, index) => {
                        if (pageNumber === 1) {
                            return (
                                <div className={classes.pagination}>
                                    <button
                                        className={classes.buttonPagination}
                                        onClick={() => props.startPageFunc(pageNumber)}
                                    >В начало
                                    </button>
                                    <button
                                        className={classes.buttonPagination}
                                        onClick={() => props.previousPokemonsFunc(pageNumber)}
                                    >Предыдущая
                                    </button>

                                    <button
                                        className={classes.buttonPagination}
                                        onClick={() => props.paginationFunc(pageNumber - 1)}
                                    >{pageNumber}</button>
                                    <button
                                        className={classes.buttonPagination}
                                        onClick={() => props.paginationFunc(pageNumber)}
                                    >{pageNumber + 1}</button>
                                    <button
                                        className={classes.buttonPagination}
                                        onClick={() => props.paginationFunc(pageNumber + 1)}
                                    >{pageNumber + 2}</button>
                                    <button
                                        className={classes.buttonPagination}
                                        onClick={() => props.addMorePokemons(pageNumber)}
                                    >Следующая
                                    </button>
                                    <button
                                        className={classes.buttonPagination}
                                        onClick={() => props.endPageFunc(pageNumber)}
                                    >В конец
                                    </button>
                                </div>
                            )
                        } else if (pageNumber === 65) {
                            return (
                                <div className={classes.pagination}>
                                    <button
                                        className={classes.buttonPagination}
                                        onClick={() => props.startPageFunc(pageNumber)}
                                    >В начало
                                    </button>
                                    <button
                                        className={classes.buttonPagination}
                                        onClick={() => props.previousPokemonsFunc(pageNumber)}
                                    >Предыдущая
                                    </button>

                                    <button
                                        className={classes.buttonPagination}
                                        onClick={() => props.paginationFunc(pageNumber - 2)}
                                    >{pageNumber - 2}</button>
                                    <button
                                        className={classes.buttonPagination}
                                        onClick={() => props.paginationFunc(pageNumber)}
                                    >{pageNumber - 1}</button>
                                    <button
                                        className={classes.buttonPagination}
                                        onClick={() => props.paginationFunc(pageNumber - 1)}
                                    >{pageNumber}</button>
                                    <button
                                        className={classes.buttonPagination}
                                        onClick={() => props.addMorePokemons(pageNumber)}
                                    >Следующая
                                    </button>
                                    <button
                                        className={classes.buttonPagination}
                                        onClick={() => props.endPageFunc(pageNumber)}
                                    >В конец
                                    </button>
                                </div>
                            )
                        } else {
                            return (
                                <div className={classes.pagination}>
                                    <button
                                        className={classes.buttonPagination}
                                        onClick={() => props.startPageFunc(pageNumber)}
                                    >В начало
                                    </button>
                                    <button
                                        className={classes.buttonPagination}
                                        onClick={() => props.previousPokemonsFunc(pageNumber)}
                                    >Предыдущая
                                    </button>

                                    <button
                                        className={classes.buttonPagination}
                                        onClick={() => props.paginationFunc(pageNumber - 2)}
                                    >{pageNumber - 1}</button>


                                    <button
                                        className={classes.buttonPagination}
                                        onClick={() => props.paginationFunc(pageNumber - 1)}
                                    >{pageNumber}</button>


                                    <button
                                        className={classes.buttonPagination}
                                        onClick={() => props.paginationFunc(pageNumber)}
                                    >{pageNumber + 1}</button>

                                    <button
                                        className={classes.buttonPagination}
                                        onClick={() => props.addMorePokemons(pageNumber)}
                                    >Следующая
                                    </button>
                                    <button
                                        className={classes.buttonPagination}
                                        onClick={() => props.endPageFunc(pageNumber)}
                                    >В конец
                                    </button>
                                </div>
                            )
                        }
                    })}
                </div>
            </Grid>
        </Container>
    )
}