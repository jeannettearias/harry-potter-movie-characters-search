
export const translateSpecie = (specie) => {
    if (specie === 'human') {
        return 'Humano/a';
    }
    else if (specie === 'half-giant') {
        return 'Medio Gigante';
    }
    else if (specie === 'werewolf') {
        return 'Hombre Lobo/Mujer Loba';
    }
    else {
        return 'Otro';
    }
}

