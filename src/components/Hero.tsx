import ImageCarousel from './ImageCarousel';

interface HeroProps {
  onShopClick: (category: string) => void;
}

export default function Hero({ onShopClick }: HeroProps) {
  const heroImages = [
    'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/3622617/pexels-photo-3622617.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=1920',
  ];

  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      <ImageCarousel images={heroImages} height="h-[600px]" autoPlayInterval={2000} />
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/50"></div>

      <div className="relative z-10 text-center max-w-4xl px-4">
        <h2 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight text-white drop-shadow-2xl">
          Redefining Urban Comfort.
        </h2>
        <p className="text-xl md:text-2xl text-white mb-10 font-light drop-shadow-lg">
          Eddjos Collections — where simplicity meets statement.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => onShopClick('men')}
            className="px-8 py-4 bg-black text-white font-medium hover:bg-gray-800 transition-colors"
          >
            Shop Men
          </button>
          <button
            onClick={() => onShopClick('women')}
            className="px-8 py-4 bg-white text-black font-medium border-2 border-black hover:bg-gray-50 transition-colors"
          >
            Shop Women
          </button>
        </div>
      </div>
    </section>
  );
}
