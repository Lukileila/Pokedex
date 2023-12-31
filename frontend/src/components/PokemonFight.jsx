import PropTypes from 'prop-types';


const Pokemon = (props) => {
  const { name, image, attack, defense, speed, type } = props;

  return (
    <div className="bg-white rounded p-4 shadow-lg">
      <h1 className="text-xl font-semibold">{name.toUpperCase()}</h1>
      <img src={image} alt={name} className="w-full h-auto mt-2" />
      <h5>Type: {type}</h5>
      <h3 className="text-lg mt-2">Stats</h3>
      <div className="flex space-x-4 mt-2">
        <span className="text-sm">Attack: {attack}</span>
        <span className="text-sm">Defense: {defense}</span>
        <span className="text-sm">Speed: {speed}</span>
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

export default Pokemon;

