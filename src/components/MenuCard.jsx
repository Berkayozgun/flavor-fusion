import { data } from "../jsonfiles/dataset.js";

function MenuCard() {
  return (
    <div>
      <h1 className='text-3xl font-bold text-center my-4'>Menü</h1>
      <div className='flex flex-wrap justify-center'>
        {data.menu.map((post) => {
          return (
            <a
              href={post.address}
              style={{ textDecoration: "none" }}
              key={post.id} // Her bir öğeye benzersiz bir anahtar eklemeyi unutmayın
            >
              <div className='max-w-sm rounded overflow-hidden shadow-lg m-4'>
                <img
                  className='w-full h-48 object-cover rounded-t-lg'
                  src={post.image}
                  alt={post.categoryName}
                />
                <div className='p-4'>
                  <div className='font-bold text-xl mb-2'>
                    {post.categoryName}
                  </div>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default MenuCard;
