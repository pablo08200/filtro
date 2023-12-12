import { useEffect, useState } from "react";


function Characters(){
    const [characters , setCharacters] = useState([]);
    const [buscarTermino , setBuscarTermino] = useState('');
    
    useEffect(() => {
        const fetchDatos = async () => {
            try{
                const respuesta = await fetch('https://hp-api.onrender.com/api/characters');
                const data = await respuesta.json();
                console.log(data);
                setBuscarTermino(data);
            }catch(error){
                console.error('error de datos', error);
            }
        };
        fetchDatos(); 
    },[])

    return(
        <div>
            <h1>Characters</h1>
            <input type="text" placeholder="ingrese el nombre: " value={buscarTermino}
            onChange={(e)=>{
                setBuscarTermino(e.target.value)
            }}/>
            
            {characters.map((character) =>(
                <div>
                    <p>Nombre</p>
                    <h2>{character.name}</h2>
                    <p>alternate_names : {character.alternate_names}</p>
                    <p>species : {character.species}</p>
                    <p>gender:{character.gender}</p>
                    <p>house : {character.gender}</p>
                    <p>dateOfBirth : {character.dateOfBirthday}</p>
                    <p>yearOfBirth : {character.yearOfBirth}</p>
                    <p>wizard : {character.wizard}</p>
                    <p>ancestry : {character.ancestry}</p>
                    <p>eyeColour : {character.eyeColour}</p>
                    <p>hairColour : {character.hairColour}</p>
                    <p>wand {character.wand}</p>
                    <p>patronus : {character.patronus}</p>
                    <p>hogwartsStudent : {character.hogwartsStudent}</p>
                    <p>hogwartsStaff : {character.hogwartsStaff}</p>
                    <p>actor : {character.actor}</p>
                    <p>alternate_actors : {character.alternate_actors}</p>
                    <p>alive : {character.alive}</p>
                    <p>image : {character.img}</p> 

                </div>
            )
          )
        }

        </div>
    );
}
export default Characters;