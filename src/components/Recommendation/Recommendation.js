import './Recommendation.css';

export const Recommendation = ({name}) => {
  return (
    <li class="recommendation" key={name}>{name}</li>
  );
}