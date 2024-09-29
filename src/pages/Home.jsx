import { useState } from "react";
import MealCard from "../components/MealCard";
import Input from "../components/Input";
import meals from "../data/meals.json";
import { FaSearch } from "react-icons/fa";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMeals = meals.filter(
    (meal) =>
      meal.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      meal.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='bg-background min-h-screen py-8'>
      <div className='container mx-auto px-4'>
        <h1 className='text-4xl font-bold mb-8 text-center text-text'>
          Our Menu
        </h1>
        <div className='mb-8 max-w-md mx-auto'>
          <div className='relative'>
            <Input
              placeholder='Search for a meal or category...'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className='pl-10 pr-4 py-2 w-full rounded-full bg-white shadow-md text-text placeholder-text placeholder-opacity-75 focus:outline-none focus:ring-2 focus:ring-accent'
            />
            <FaSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-text opacity-50' />
          </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
          {filteredMeals.map((meal) => (
            <MealCard key={meal.id} meal={meal} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
