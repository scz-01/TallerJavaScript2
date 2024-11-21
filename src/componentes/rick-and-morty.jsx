import { useEffect, useState } from 'react'
import ActionAreaCard from './card';
import { getAllCharacters } from '../servicios/rymService';
import { Box, Modal, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
 
const CharacterModal = ({character, open, onClose}) => {
    if(!character) return null;
 
    const boxProps = {
        position: 'absolute',
        top: '0%',
        left: '40%',
        width: 400,
        bgcolor: 'background.paper',
        border: '3px solid #0000',
        boxShadow: 24,
        p: 4
    }
 
    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={boxProps}>
                <img src={character.image} width="100%" />
                <Typography variant='h2' component="h2">
                    {character.name}
                </Typography>
                <Typography sx={{mt: 2}}>
                    Tipo: {character.type} 
                    Origen: {character.origin.name}
                </Typography>
            </Box>
        </Modal>
    )
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));
 
 
export default function RickAndMorty(){
    const [data, setData] = useState([]);
    const [selectedCharacter, setSelectedCharacter] = useState(null);
    const [info, setInfo] = useState(null);
    const apiUrl = "https://rickandmortyapi.com/api";
    const fetchMoreData = async (url) => {
        const response = await getAllCharacters(url);
        console.log(response);
        setData(response.results);
        setInfo(response.info);
    };

    useEffect(() => {
        async function fetchData(){
            const response = await getAllCharacters(`${apiUrl}/character`);
            setData(response.results);
            setInfo(response.info);
        }
        fetchData();
    }, [])
 
    const handleOpenModal = (character) => {
        setSelectedCharacter(character);
    }
 
    const handleCloseModal = () => {
        setSelectedCharacter(null);
    }
 
    return(
        <>
            <h1>API de Rick and Morty</h1>
            <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
            {data.map( (element) => (
                            <Grid size="auto">
                              <Item>
                              <ActionAreaCard 
                                    imagen= {element.image}
                                    titulo={element.name} 
                                    cuerpo={`Status: ${element.status} Especie: ${element.species}`}
                                    onClick = { () => handleOpenModal(element)}
                                /> 
                              </Item>
                            </Grid>
                ) )
            }
            </Grid>
            </Box>

            <div>
                <Stack spacing={2} direction="row">
                     <Button variant="contained" onClick={ () => fetchMoreData(info.prev) } >Pagina Anterior</Button>
                    <Button variant="contained" onClick={ () => fetchMoreData(info.next) } >Pagina Siguiente</Button>
                </Stack>
            </div>

            <CharacterModal
                character={selectedCharacter}
                open={!!selectedCharacter}
                onClose={handleCloseModal}
            />
        </>
    )
}