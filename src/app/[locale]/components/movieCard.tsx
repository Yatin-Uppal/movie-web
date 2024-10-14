// components/Card.js
import { IMovie } from '@/interfaces/movie';
// Movie card component for the movies list page
const MovieCard: React.FC<IMovie> = ({id, image_url, title, year}) => {
  
  return (
    <div className="w-full rounded-xl overflow-hidden shadow-lg bg-secondary p-2 pb-2 hover:cursor-pointer">
      <img 
        src={image_url} 
        alt={title} 
        width={400} 
        height={250} 
        className="w-full h-[250px] md:h-96 object-cover rounded-xl"
      />
      <div className="p-4">
        <h2 className="text-xl text-white font-medium mb-2">{title}</h2>
        <p className="text-white  text-sm mb-0">{year}</p>
      </div>
    </div>
  );
};

export default MovieCard;
