import {Routes, Route} from 'react-router-dom'
import {Mainpage} from './components/pages/Mainpage';
import {Pokemonpage} from './components/pages/Pokemonpage';
import {Caughtpage} from './components/pages/Caughtpage';
import {useEffect} from "react"
import {useState} from "react"
import {useNavigate} from "react-router-dom";
import {Header} from "./components/pages/Header";

function App() {

    const [result, setResult] = useState([])
    const [caughtresult, setCaughtresult] = useState([])
    const [pokemonData, setPokemonData] = useState([])
    const [loadNextUrl, setLoadNextUrl] = useState()
    const [pages, setPages] = useState([])
    const [previousPokemon, setPreviousPokemon] = useState([])
    const [currentPage, setCurrentPage] = useState([])
    const [maxpage, setMaxPage] = useState(0)

    async function getPokemonData(res) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${res}`)
        const datapokemon = await response.json();
        navigator("/pokemonpage")
        setPokemonData([])
        setPokemonData((prevCatch) => [...prevCatch, datapokemon]);
    }
    const caughtFunc = (pokemon) => {
        setCaughtresult((prevCatch) => [...prevCatch, pokemon])
    }

    const releaseFunc = (pokemon) => {
        setCaughtresult((caughtresult) =>
            caughtresult.filter((p) => p !== pokemon));
    }

    // const isPokemonCaptured = (res) => caughtresult.includes(res)

    const isPokemonCaptured = (res) => {
        for (let i = 0; i < caughtresult.length; i++) {
            if (caughtresult[i].name === res.name) {
                return true;
            }
        }
        return false;
    }


    const navigator = useNavigate()

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon")
            .then(res => (res.json()))
            .then(data => {
                class Pokemon {
                    constructor(name, url) {
                        this.name = name;
                        this.url = url;
                        this.id = this.extractNumberFromUrl(url);
                    }

                    extractNumberFromUrl(url) {
                        const parts = url.split('/');
                        return parseInt(parts[parts.length - 2], 10);
                    }
                }

                const pokemons = data.results.map(p => new Pokemon(p.name, p.url));
                setPages(Array.from(Array((Math.ceil(data.count / 20))).keys()))
                setCurrentPage([1])
                setMaxPage((Math.floor(data.count / 20)))
                setLoadNextUrl(data.next)
                setResult(pokemons);
            })
    }, []);

    const startPageFunc = (pageNumber) => {
        fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20")
            .then(res => (res.json()))
            .then(data => {
                class Pokemon {
                    constructor(name, url) {
                        this.name = name;
                        this.url = url;
                        this.id = this.extractNumberFromUrl(url);
                    }

                    extractNumberFromUrl(url) {
                        const parts = url.split('/');
                        return parseInt(parts[parts.length - 2], 10);
                    }
                }

                const pokemons = data.results.map(p => new Pokemon(p.name, p.url));
                setResult(pokemons);
                setLoadNextUrl(data.next)
                setPreviousPokemon(data.previous)
                setCurrentPage([1])
            })
    };


    const endPageFunc = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon?offset=${maxpage*20}`)
            .then(res => (res.json()))
            .then(data => {
                class Pokemon {
                    constructor(name, url) {
                        this.name = name;
                        this.url = url;
                        this.id = this.extractNumberFromUrl(url);
                    }

                    extractNumberFromUrl(url) {
                        const parts = url.split('/');
                        return parseInt(parts[parts.length - 2], 10);
                    }
                }

                const newpokemons = data.results.map(p => new Pokemon(p.name, p.url));
                setPreviousPokemon(data.previous)
                setResult([...newpokemons]);
                setCurrentPage([maxpage])
            })
    }

    const addMorePokemons = (pageNumber) => {
        fetch(loadNextUrl)
            .then(res => (res.json()))
            .then(data => {
                class Pokemon {
                    constructor(name, url) {
                        this.name = name;
                        this.url = url;
                        this.id = this.extractNumberFromUrl(url);
                    }

                    extractNumberFromUrl(url) {
                        const parts = url.split('/');
                        return parseInt(parts[parts.length - 2], 10);
                    }
                }

                const newpokemons = data.results.map(p => new Pokemon(p.name, p.url));
                setLoadNextUrl(data.next === null ? data.next : data.next.replace('limit=1', 'limit=20'))
                setPreviousPokemon(data.previous.replace('limit=1', 'limit=20'))
                setResult([...newpokemons]);
                setCurrentPage([pageNumber + 1])
            })
    }

    const previousPokemonsFunc = (pageNumber) => {
        fetch(previousPokemon)
            .then(res => (res.json()))
            .then(data => {
                class Pokemon {
                    constructor(name, url) {
                        this.name = name;
                        this.url = url;
                        this.id = this.extractNumberFromUrl(url);
                    }

                    extractNumberFromUrl(url) {
                        const parts = url.split('/');
                        return parseInt(parts[parts.length - 2], 10);
                    }
                }

                const newpokemons = data.results.map(p => new Pokemon(p.name, p.url));
                setLoadNextUrl(data.next === null ? data.next : data.next.replace('limit=1', 'limit=20'))
                setPreviousPokemon(data.previous.replace('limit=1', 'limit=20'))
                setResult([...newpokemons])
                setCurrentPage([pageNumber - 1])
            })
    }

    const paginationFunc = (pageNumber) => {
        fetch(`https://pokeapi.co/api/v2/pokemon?offset=${pageNumber * 20}&limit=20`)
            .then(res => (res.json()))
            .then(data => {
                class Pokemon {
                    constructor(name, url) {
                        this.name = name;
                        this.url = url;
                        this.id = this.extractNumberFromUrl(url);
                    }

                    extractNumberFromUrl(url) {
                        const parts = url.split('/');
                        return parseInt(parts[parts.length - 2], 10);
                    }
                }
                const newpokemons = data.results.map(p => new Pokemon(p.name, p.url));
                setLoadNextUrl(data.next)
                setPreviousPokemon(data.previous)
                setResult([...newpokemons]);
                setCurrentPage([pageNumber === 64 ? pageNumber: pageNumber +1])
            })
    }


    return (
        <div>
            <Header lenght={caughtresult.length}/>
            <Routes>
                <Route path="/" element={<Mainpage result={result} caughtFunc={caughtFunc}
                                                   caughtresult={caughtresult}
                                                   isPokemonCaptured={isPokemonCaptured}
                                                   getPokemonData={getPokemonData}
                                                   addMorePokemons={addMorePokemons}
                                                   pages={pages}
                                                   paginationFunc={paginationFunc}
                                                   currentPage={currentPage}
                                                   previousPokemonsFunc={previousPokemonsFunc}
                                                   endPageFunc={endPageFunc}
                                                   startPageFunc={startPageFunc}
                />}/>
                <Route path="/caughtpage"
                       element={<Caughtpage caughtresult={caughtresult} releaseFunc={releaseFunc}
                                            getPokemonData={getPokemonData}/>}/>
                <Route path="/pokemonpage" element={<Pokemonpage pokemonData={pokemonData}/>}/>
            </Routes>
        </div>
    )
}

export default App;