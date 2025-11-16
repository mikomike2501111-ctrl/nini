import ImageCarousel from './ImageCarousel';

interface CategoryHeroProps {
  category: 'men' | 'women' | 'unisex';
}

const categoryData = {
  men: {
    title: "Men's Clothing",
    images: [
      'https://images.pexels.com/photos/3622617/pexels-photo-3622617.jpeg?auto=compress&cs=tinysrgb&w=1920',
      'https://images.pexels.com/photos/3026811/pexels-photo-3026811.jpeg?auto=compress&cs=tinysrgb&w=1920',
      'https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=1920',
      'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1920',
    ],
  },
  women: {
    title: "Women's Clothing",
    images: [
      'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1920',
      'https://images.pexels.com/photos/3622622/pexels-photo-3622622.jpeg?auto=compress&cs=tinysrgb&w=1920',
      'https://images.pexels.com/photos/1391487/pexels-photo-1391487.jpeg?auto=compress&cs=tinysrgb&w=1920',
      'https://images.pexels.com/photos/4210867/pexels-photo-4210867.jpeg?auto=compress&cs=tinysrgb&w=1920',
    ],
  },
  unisex: {
    title: 'Unisex Collection',
    images: [
      'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=1920',
      'https://images.pexels.com/photos/3369362/pexels-photo-3369362.jpeg?auto=compress&cs=tinysrgb&w=1920',
      'https://images.pexels.com/photos/3622622/pexels-photo-3622622.jpeg?auto=compress&cs=tinysrgb&w=1920',
      'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1920',
    ],
  },
};

export default function CategoryHero({ category }: CategoryHeroProps) {
  const data = categoryData[category];

  return (
    <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
      <ImageCarousel images={data.images} height="h-[500px]" autoPlayInterval={2000} />
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/50"></div>

      <div className="relative z-10 text-center">
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white drop-shadow-2xl">
          {data.title}
        </h2>
      </div>
    </section>
  );
}
