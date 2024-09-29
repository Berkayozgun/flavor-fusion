import { Link } from "react-router-dom";
import { FaUtensils, FaAward, FaTruck, FaComments } from "react-icons/fa";

const WelcomePage = () => {
  return (
    <div className='min-h-screen bg-background text-text'>
      <div className='container mx-auto px-4 py-8'>
        <header className='text-center mb-12 relative'>
          <h1 className='text-6xl font-bold mb-4 text-text'>
            Welcome to Flavor Fusion!
          </h1>
          <p className='text-2xl text-text opacity-80 mb-8'>
            Delicious meals are just a click away.
          </p>
          <div className='sticky top-4 z-10 text-center'>
            <Link
              to='/home'
              className='inline-block bg-accent text-white font-bold py-4 px-10 rounded-full hover:bg-opacity-90 transition duration-300 transform hover:scale-105 hover:shadow-lg'
            >
              Order Now
            </Link>
          </div>
        </header>

        <main className='flex flex-wrap justify-between'>
          <section className='bg-primary rounded-lg p-6 shadow-md w-full md:w-[48%] mb-8 transform hover:scale-105 transition duration-300'>
            <FaUtensils className='text-4xl mb-4 text-accent' />
            <h2 className='text-3xl font-semibold mb-4 text-text'>
              What We Offer
            </h2>
            <p className='text-lg text-text opacity-80'>
              Fresh ingredients, carefully prepared meals, and fast delivery.
            </p>
          </section>

          <section className='bg-primary rounded-lg p-6 shadow-md w-full md:w-[48%] mb-8 transform hover:scale-105 transition duration-300'>
            <FaAward className='text-4xl mb-4 text-accent' />
            <h2 className='text-3xl font-semibold mb-4 text-text'>
              Featured Items
            </h2>
            <ul className='text-lg text-text opacity-80 list-disc list-inside'>
              <li>Special Burger</li>
              <li>Veggie Pizza</li>
              <li>Chocolate Souffle</li>
            </ul>
          </section>

          <section className='bg-primary rounded-lg p-6 shadow-md w-full md:w-[48%] mb-8 transform hover:scale-105 transition duration-300'>
            <FaTruck className='text-4xl mb-4 text-accent' />
            <h2 className='text-3xl font-semibold mb-4 text-text'>
              How It Works
            </h2>
            <ol className='text-lg text-text opacity-80 list-decimal list-inside'>
              <li>Browse our menu</li>
              <li>Select your favorite dishes</li>
              <li>Place your order</li>
              <li>We deliver to your doorstep</li>
            </ol>
          </section>

          <section className='bg-primary rounded-lg p-6 shadow-md w-full md:w-[48%] mb-8 transform hover:scale-105 transition duration-300'>
            <FaComments className='text-4xl mb-4 text-accent' />
            <h2 className='text-3xl font-semibold mb-4 text-text'>
              What Our Customers Say
            </h2>
            <blockquote className='text-lg italic text-text opacity-80'>
              &quot;The food is always fresh and delicious. Great service!&quot; - Jane D.
            </blockquote>
          </section>
        </main>

        <section className='text-center mt-12 mb-8'>
          <Link
            to='/home'
            className='inline-block bg-accent text-white font-bold py-4 px-10 rounded-full hover:bg-opacity-90 transition duration-300 transform hover:scale-105 hover:shadow-lg'
          >
            Order Now
          </Link>
        </section>
      </div>

      <footer className='text-center py-4 bg-primary text-text'>
        <p>&copy; 2024 Flavor Fusion. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default WelcomePage;
