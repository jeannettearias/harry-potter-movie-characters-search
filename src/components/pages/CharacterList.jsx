import PropTypes from 'prop-types';
import CharacterCard from "./CharacterCard";

function CharacterList({ characters }) {

    //global variables

    //events and functions


    //HTML code
    return (

        <section>
            <ul className='cards' >
                {characters.map((character) => (
                    <li key={character.id} className="card">
                        <CharacterCard character={character} />
                    </li>
                ))}
            </ul>
        </section>
    );
}

CharacterList.propTypes = {
    characters: PropTypes.array.isRequired,
};

export default CharacterList;