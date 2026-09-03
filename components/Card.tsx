import Image from "next/image";

interface CabinCardProps {
  name: string;
  location: string;
  price: number;
  capacity: number;
  rating: number;
  weather: string;
  image: string;
  amenities: string[];
}

export default function CabinCard({
  name,
  location,
  price,
  capacity,
  rating,
  weather,
  image,
  amenities,
}: CabinCardProps) {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">

      {/* Imagen */}
      <div className="relative h-56 w-full">

        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />

        {/* Favorito */}
        <button className="absolute right-4 top-4 rounded-full bg-white/90 p-2">
          ♡
        </button>

        {/* Calificación */}
        <div className="absolute bottom-4 left-4 rounded-full bg-white px-3 py-1 text-sm font-medium">
          ⭐ {rating}
        </div>
      </div>

      {/* Información */}
      <div className="p-5">

        <div className="mb-2">
          <h2 className="text-xl font-bold text-gray-900">
            {name}
          </h2>

          <p className="text-sm text-gray-500">
            📍 {location}
          </p>
        </div>

        {/* Datos principales */}
        <div className="my-4 flex justify-between border-y border-gray-100 py-3 text-sm text-gray-600">

          <span>👥 {capacity} personas</span>

          <span>☀️ {weather}</span>

        </div>

        {/* Comodidades */}
        <div className="mb-4 flex flex-wrap gap-2">
          {amenities.slice(0, 3).map((amenity) => (
            <span
              key={amenity}
              className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600"
            >
              {amenity}
            </span>
          ))}
        </div>

        {/* Precio + botón */}
        <div className="flex items-center justify-between">

          <div>
            <span className="text-xl font-bold">
              ${price.toLocaleString()}
            </span>

            <span className="text-sm text-gray-500">
              / noche
            </span>
          </div>

          <button className="rounded-xl bg-blue-800 px-4 py-2 font-medium text-white transition hover:bg-green-800">
            Reservar
          </button>

        </div>

      </div>
    </div>
  );
}