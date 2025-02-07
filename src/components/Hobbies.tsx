import { Mountain, Camera, Car, Plane } from "lucide-react";

const hobbies = [
  { id: 1, name: "Hiking", icon: <Mountain size={40} />, description: "Exploring nature and enjoying scenic trails." },
  { id: 2, name: "Car Driving", icon: <Car size={40} />, description: "The thrill of driving and long road trips." },
  { id: 3, name: "Traveling", icon: <Plane size={40} />, description: "Discovering new places and experiencing cultures." },
  { id: 4, name: "Photography", icon: <Camera size={40} />, description: "Capturing moments and telling visual stories." },
];

export default function Hobbies() {
  return (
    <section className="py-16 bg-purple-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800">My Hobbies & Interests</h2>
        <p className="text-gray-600 mt-2">Things I love doing in my free time</p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto px-4">
        {hobbies.map((hobby) => (
          <div
            key={hobby.id}
            className="flex flex-col items-center p-6 bg-white shadow-md rounded-xl transition-transform transform hover:scale-105 text-gray-800"
          >
            <div className="p-3 bg-purple-100 rounded-lg">{hobby.icon}</div>
            <h3 className="text-xl font-semibold mt-4">{hobby.name}</h3>
            <p className="text-center mt-2">{hobby.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
