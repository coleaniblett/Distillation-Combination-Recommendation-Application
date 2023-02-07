import './Recommendation.css';

export const Recommendation = ({name}) => {
  return (
    <li className="recommendation" key={name}>{name}</li>
  );
}