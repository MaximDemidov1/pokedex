import classes from "../../modules/PokemonList.module.css";
import {Container, Box, CardContent, Card, Typography, CardActions, IconButton, CardMedia} from "@mui/material";
import {Cancel} from "@mui/icons-material";
import {NavLink} from "react-router-dom";
import {useNavigate} from "react-router-dom";


export function Pokemonpage(props) {

    const navigate = useNavigate()

    return (
        <Container
            display="flex"
            flexDirection="row"
            justifyContent="center"
            sx={{width: 300}}>
            <Box
                sx={{width: 300, fontFamily: 'Courier New', fontSize: 20}}>
                {props.pokemonData.map((res, index) => (
                        <div key={index}>
                            <Card>
                                <Box display="flex"
                                     flexDirection="column"
                                     alignItems="center">
                                <CardContent>
                                    <CardMedia
                                        sx={{ml: "20px"}}
                                    >
                                    <img className={classes.img}
                                         src={res.sprites.other['official-artwork'].front_default}
                                         alt="pokemon"/>
                                    </CardMedia>
                                    <Typography
                                        variant="h6"
                                    >
                                        Abilities:
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{ml: 6}}
                                    >
                                        {res.abilities.map((ability) =>
                                            <p key={ability.ability.name}>{ability.ability.name}</p>)}
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                    >
                                        Types:
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{ml: 6}}
                                    >
                                        {res.types.map((type) =>
                                            <p key={type.type.name}>{type.type.name}</p>)}
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                    >
                                        Weight:
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{ml: 6}}
                                    >
                                        {res.weight}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <NavLink onClick={navigate(-1)}>
                                        <IconButton
                                            color="error"
                                            size="large"
                                        >
                                            <Cancel/>
                                        </IconButton>
                                    </NavLink>
                                </CardActions>
                                </Box>
                            </Card>
                        </div>
                    )
                )}
            </Box>
        </Container>
    )
}