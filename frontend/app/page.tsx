import HeroSection from "@/components/HeroSection";
import FlashSaleSection from "@/components/FlashSaleSection";
import BestSellersSection from "@/components/BestSellersSection";
import NewArrivalsSection from "@/components/NewArrivalsSection";
import CategoriesSection from "@/components/CategoriesSection";
import StatsSection from "@/components/StatsSection";

// Flash Sale Data
const flashSaleComics = [
  { id: 1, title: "Shadow City #1", price: 4.99, originalPrice: 9.99, discount: 50, image: "/comic-slider1.png" },
  { id: 2, title: "Night Watch Annual", price: 6.99, originalPrice: 12.99, discount: 46, image: "/comic-slider5.png" },
  { id: 3, title: "Skybound Titans", price: 8.99, originalPrice: 14.99, discount: 40, image: "/comic-slider3.png" },
  { id: 4, title: "Oceanbound Vol.1", price: 7.99, originalPrice: 15.99, discount: 50, image: "/comic-slide4.png" },
  { id: 5, title: "Crimson Rogue #1", price: 5.99, originalPrice: 11.99, discount: 50, image: "/comic-slider1.png" },
  { id: 6, title: "Amazon Sentinel", price: 6.49, originalPrice: 12.99, discount: 50, image: "/comic-slider5.png" },
  { id: 7, title: "Mutant Dawn #1", price: 5.99, originalPrice: 11.99, discount: 51, image: "/comic-slider3.png" },
  { id: 8, title: "Solar Guardian", price: 7.49, originalPrice: 14.99, discount: 50, image: "/comic-slide4.png" },
];

// Best Sellers Data
const bestSellersComics = [
  { id: 1, title: "Golden Age Anthology", author: "Alex Rowan", price: 19.99, rating: 4.9, sold: "2.5k", image: "/comic-slider1.png" },
  { id: 2, title: "DC Black Label", author: "Various", price: 16.99, rating: 4.7, sold: "1.8k", image: "/comic-slider5.png" },
  { id: 3, title: "Manga Classics Box Set", author: "Various", price: 44.99, rating: 4.8, sold: "3.2k", image: "/comic-slider3.png" },
  { id: 4, title: "Graphic Novel Bundle", author: "Various", price: 29.99, rating: 4.6, sold: "1.5k", image: "/comic-slide4.png" },
  { id: 5, title: "Indie Collection", author: "Various Artists", price: 22.99, rating: 4.8, sold: "900", image: "/comic-slider1.png" },
  { id: 6, title: "Watchmen Absolute", author: "Drew Ellis", price: 29.99, rating: 5.0, sold: "2.1k", image: "/comic-slider5.png" },
  { id: 7, title: "The Walking Dead", author: "Casey Morgan", price: 24.99, rating: 4.9, sold: "1.9k", image: "/comic-slider3.png" },
  { id: 8, title: "Saga Deluxe", author: "Mira Collins", price: 34.99, rating: 4.9, sold: "1.7k", image: "/comic-slide4.png" },
];

// New Arrivals Data
const newArrivals = [
  { id: 1, title: "The Walking Dead Vol.1", author: "Casey Morgan", price: 12.99, rating: 4.8, image: "/comic-slider1.png", tag: "NEW" },
  { id: 2, title: "Saga Deluxe Edition", author: "Mira Collins", price: 24.99, rating: 4.9, image: "/comic-slider5.png", tag: "HOT" },
  { id: 3, title: "Invincible Compendium", author: "Casey Morgan", price: 39.99, rating: 4.7, image: "/comic-slider3.png", tag: "NEW" },
  { id: 4, title: "Watchmen Absolute", author: "Drew Ellis", price: 29.99, rating: 5.0, image: "/comic-slide4.png", tag: "CLASSIC" },
  { id: 5, title: "Sin City Library", author: "Riley Stone", price: 34.99, rating: 4.8, image: "/comic-slider1.png", tag: "SALE" },
  { id: 6, title: "Preacher Omnibus", author: "Taylor James", price: 49.99, rating: 4.9, image: "/comic-slider5.png", tag: "BESTSELLER" },
  { id: 7, title: "Y: The Last Man", author: "Mira Collins", price: 19.99, rating: 4.8, image: "/comic-slider3.png", tag: "NEW" },
  { id: 8, title: "Sandman Omnibus", author: "Avery Lane", price: 44.99, rating: 5.0, image: "/comic-slide4.png", tag: "CLASSIC" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <HeroSection />

      {/* Flash Sale Section */}
      <FlashSaleSection comics={flashSaleComics} />

      {/* Best Sellers Section */}
      <BestSellersSection comics={bestSellersComics} />

      {/* New Arrivals Section */}
      <NewArrivalsSection comics={newArrivals} />

      {/* Categories Section */}
      <CategoriesSection />

      {/* Stats Section */}
      <StatsSection />
    </div>
  );
}
