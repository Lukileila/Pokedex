import PropTypes from 'prop-types';
import Pokemon from './PokemonFight.jsx';


const Card = (props) => {
/*     console.log("Props handed to Card component",props); */
  const { name, image, attack, defense, speed, type } = props;
/*   console.log("name",name) */

  return (
    <div className="bg-white rounded p-4 shadow-lg w-32">
      <h1 className="text-xl font-semibold">{name.toUpperCase()}</h1>
      <img src={image} alt={name} className=" mt-2" />
      <h5>Type: {type}</h5>
      <h3 className="text-lg mt-2">Stats</h3>
      <div className="space-x-4 mt-2 whitespace-normal">
        <ul>
        <li className="text-sm">Attack: {attack}</li>
        <li className="text-sm">Defense: {defense}</li>
        <li className="text-sm">Speed: {speed}</li>
        </ul>
      </div>
    </div>
  );
};

Pokemon.propTypes = {
  name: PropTypes.string.isRequired,
  attack: PropTypes.number.isRequired,
  defense: PropTypes.number.isRequired,
  speed: PropTypes.number.isRequired,
};

export default Card;

