import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { DivCard, ImgCard } from "../Cards/CardsStyles";
import { DefaultButton, ModalDiv } from "../Generalstyles";
import { DivDetail, DivChild } from "./DetailStyles";


export default function Detail(props) {

    const { detailId } = useParams();

    const [character, setCharacter] = useState({
        name: '',
        status: '',
        specie: '',
        gender: '',
        origin: '',
        image: '',

    })

    React.useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
            .then((response) => response.json())
            .then((char) => {
                if (char.name) {
                    setCharacter({
                        name: char.name,
                        status: char.status,
                        specie: char.species,
                        gender: char.gender,
                        origin: char.origin.name,
                        image: char.image,
                    });
                } else {
                    window.alert("No hay personajes con ese ID");
                }
            })
            .catch((err) => {
                window.alert("No hay personajes con ese ID");
            });
        return setCharacter({});
    }, [detailId]);

    return (
        <DivDetail>
            <ModalDiv>
                <Link to={`/home`} >
                    <DefaultButton>x</DefaultButton>
                </Link>
                <p> Nombre: {character.name}</p>
                <p> Especie: {character.specie}</p>
                <p> Estado: {character.status}</p>
                <p> Origen: {character.origin}</p>
                <p> Genero: {character.gender}</p>
                <ImgCard src={character.image} alt="{character.name}" />
            </ModalDiv>
        </DivDetail>
    )
}