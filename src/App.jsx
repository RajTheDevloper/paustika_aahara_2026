import React, { useState, useEffect, useRef } from 'react';
import { 
  Phone, 
  ShoppingBag, 
  Utensils, 
  Award, 
  Flame, 
  MapPin, 
  Clock, 
  Sparkles, 
  Search, 
  Filter, 
  X, 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  Quote, 
  CheckCircle2, 
  Users, 
  HeartHandshake, 
  ExternalLink,
  PlusCircle,
  MessageSquarePlus,
  Send,
  Sparkle
} from 'lucide-react';

const PHONE_NUMBER = "916363594612"; 
const INSTAGRAM_URL = "https://www.instagram.com/paustika_aahaara?stkn=MTE3YXlkaTFxZTN2OQ==";

// SVG Instagram Icon Component
const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const ALL_MEALS = [
  {
    id: 1,
    title: "Ragi Mudde & Sprouted Saaru Bowl",
    kannadaTitle: "ರಾಗಿ ಮುದ್ದೆ ಮತ್ತು ಕೆಂಪು ಅಕ್ಕಿ ಮೀಲ್",
    category: "Weight Loss",
    categoryColor: "bg-emerald-600",
    description: "Traditional organic Ragi Mudde served with high-protein sprouted lentil saaru and steamed green veggies.",
    calories: 390,
    protein: "18g Protein",
    price: 189,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600"
  },
  {
    id: 2,
    title: "Bengaluru Fitness Kosambari Salad",
    kannadaTitle: "ನಮ್ಮ ಬೆಂಗಳೂರು ಫಿಟ್ನೆಸ್ ಕೋಸಂಬರಿ",
    category: "High Protein",
    categoryColor: "bg-amber-600",
    description: "Soaked moong dal, pomegranate, grated coconut, paneer cubes, and fresh lemon dressing. Light & refreshing!",
    calories: 320,
    protein: "24g Protein",
    price: 169,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600"
  },
  {
    id: 3,
    title: "Foxtail Millet (Navane) Vegetable Biryani",
    kannadaTitle: "ನವಣೆ ತರಕಾರಿ ಬಿರಿಯಾನಿ",
    category: "Low GI",
    categoryColor: "bg-purple-600",
    description: "Aromatic millet biryani cooked with fresh veggies, herbs, ghee drizzle, and served with cucumber raita.",
    calories: 410,
    protein: "16g Protein",
    price: 199,
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600"
  },
  {
    id: 4,
    title: "Grilled Paneer & Veggie Protein Plate",
    kannadaTitle: "ಗ್ರಿಲ್ಲೆಡ್ ಪನೀರ್ ಮತ್ತು ತರಕಾರಿ ಪ್ಲೇಟ್",
    category: "High Protein",
    categoryColor: "bg-amber-600",
    description: "Spicy marinated low-fat paneer blocks grilled with bell peppers, onions, and green mint chutney.",
    calories: 450,
    protein: "30g Protein",
    price: 229,
    image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=600"
  },
  {
    id: 5,
    title: "Keto Avocado & Walnut Energy Bowl",
    kannadaTitle: "ಆವಕಾಡೊ ಕೀಟೋ ಸಾಲಡ್",
    category: "Keto",
    categoryColor: "bg-indigo-600",
    description: "Sliced organic avocados, roasted walnuts, cucumber, spinach, and extra virgin olive oil drizzle.",
    calories: 360,
    protein: "12g Protein",
    price: 249,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600"
  }
];

const INITIAL_REVIEWS = [
  {
    id: "rev-1",
    name: "Rahul Gowda",
    area: "Basaveshwaranagar",
    kannadaTag: "ಸೂಪರ್ ಟೇಸ್ಟ್!",
    mealOrdered: "Foxtail Millet Biryani",
    review: "Best healthy food option in Basaveshwaranagar! Loved the Foxtail Millet Biryani. The portion size is perfect for gym goers and calories are properly balanced.",
    rating: 5,
    date: "Just now",
    // avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150",
    isRealTime: false
  },
  {
    id: "rev-2",
    name: "Priya Sharma",
    area: "Rajajinagar",
    kannadaTag: "ತುಂಬಾ ಚೆನ್ನಾಗಿದೆ",
    mealOrdered: "Ragi Mudde & Sprouted Saaru",
    review: "Ordering Ragi Mudde & Sprouted Saaru almost daily now. Perfect home-cooked authentic Karnataka style without any oily grease!",
    rating: 5,
    date: "2 hours ago",
    // avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    isRealTime: false
  },
  {
    id: "rev-3",
    name: "Kiran Kumar",
    area: "Vijayanagar",
    kannadaTag: "ಉತ್ತಮ ಗುಣಮಟ್ಟ",
    mealOrdered: "Fitness Kosambari",
    review: "The Fitness Kosambari is a high protein gem. Fresh ingredients and super fast delivery around Vijayanagar & Basaveshwaranagar. Highly recommended!",
    rating: 5,
    date: "1 day ago",
    // avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150",
    isRealTime: false
  },
  {
    id: "rev-4",
    name: "Anusha N.",
    area: "Malleshwaram",
    kannadaTag: "ಆರೋಗ್ಯಕರ ಆಹಾರ",
    mealOrdered: "Keto Avocado Bowl",
    review: "Very hygienic packing and friendly WhatsApp ordering process. Perfect meal prep solution for busy IT professionals living near Bengaluru West.",
    rating: 5,
    date: "2 days ago",
    // avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
    isRealTime: false
  },
  {
    id: "rev-5",
    name: "Santhosh V.",
    area: "Mahalakshmi Layout",
    kannadaTag: "ಅತ್ಯುತ್ತಮ ಸೇವೆ",
    mealOrdered: "Grilled Paneer Plate",
    review: "Tried their Grilled Paneer protein bowl after workout. 30g protein clean meal right to my doorstep. Super quick delivery!",
    rating: 5,
    date: "3 days ago",
    // avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    isRealTime: false
  }
];

const INSTA_POSTS = [
  { id: 1, img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400", likes: "248", comments: "18", tag: "Ragi Mudde Bowl" },
  { id: 2, img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400", likes: "312", comments: "24", tag: "Protein Kosambari" },
  { id: 3, img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400", likes: "405", comments: "39", tag: "Navane Biryani" },
  { id: 4, img: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=400", likes: "189", comments: "12", tag: "Grilled Paneer" }
];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('default');
  const [selectedMealForOrder, setSelectedMealForOrder] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [isOpenNow, setIsOpenNow] = useState(true);

  // Real-Time Reviews State & LocalStorage Synchronization
  const [reviews, setReviews] = useState(() => {
    try {
      const saved = localStorage.getItem('paustika_reviews_v1');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error("Failed to load local reviews", e);
    }
    return INITIAL_REVIEWS;
  });

  // Review Form Modal State
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    area: 'Basaveshwaranagar',
    mealOrdered: 'Ragi Mudde & Sprouted Saaru Bowl',
    rating: 5,
    review: ''
  });
  const [reviewSubmitSuccess, setReviewSubmitSuccess] = useState(false);

  // Carousel Navigation State
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoSlideRef = useRef(null);

  // Persist reviews to localStorage when state updates
  useEffect(() => {
    try {
      localStorage.setItem('paustika_reviews_v1', JSON.stringify(reviews));
    } catch (e) {
      console.error("Failed to save review to localStorage", e);
    }
  }, [reviews]);

  // Check Store Open/Closed Status (7 AM - 10 PM IST)
  useEffect(() => {
    const checkOpenStatus = () => {
      const now = new Date();
      const hours = now.getHours();
      setIsOpenNow(hours >= 7 && hours < 22);
    };
    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  // Review Carousel Auto-Slide Logic
  useEffect(() => {
    if (!isPaused && reviews.length > 0) {
      autoSlideRef.current = setInterval(() => {
        setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
      }, 4500);
    }
    return () => {
      if (autoSlideRef.current) clearInterval(autoSlideRef.current);
    };
  }, [isPaused, reviews.length]);

  const handleNextReview = () => {
    setCurrentReviewIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrevReview = () => {
    setCurrentReviewIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!newReview.name.trim() || !newReview.review.trim()) return;

    // const avatars = [
    //   "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
    //   "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    //   "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150",
    //   "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150",
    // ];

    const kannadaTags = ["ಸೂಪರ್!", "ಉತ್ತಮ ರುಚಿ", "ಆರೋಗ್ಯಕರ", "ಅತ್ಯುತ್ತಮ", "ಫ್ರೆಶ್ ಮೀಲ್"];

    const createdReview = {
      id: `rev-user-${Date.now()}`,
      name: newReview.name.trim(),
      area: newReview.area,
      kannadaTag: kannadaTags[Math.floor(Math.random() * kannadaTags.length)],
      mealOrdered: newReview.mealOrdered,
      review: newReview.review.trim(),
      rating: Number(newReview.rating),
      date: "Just now",
      // avatar: avatars[Math.floor(Math.random() * avatars.length)],
      isRealTime: true
    };

    // Prepend new review for real-time display
    setReviews((prev) => [createdReview, ...prev]);
    setCurrentReviewIndex(0); // Jump directly to newly submitted review
    setReviewSubmitSuccess(true);

    setTimeout(() => {
      setReviewSubmitSuccess(false);
      setIsReviewModalOpen(false);
      setNewReview({
        name: '',
        area: 'Basaveshwaranagar',
        mealOrdered: 'Ragi Mudde & Sprouted Saaru Bowl',
        rating: 5,
        review: ''
      });
    }, 1500);
  };

  // Calculate Average Rating dynamically in Real-Time
  const averageRating = reviews.length > 0 
    ? (reviews.reduce((acc, curr) => acc + curr.rating, 0) / reviews.length).toFixed(1)
    : "5.0";

  // Filter & Sort Logic for Meals
  const filteredMeals = ALL_MEALS.filter(meal => {
    const matchesCategory = selectedCategory === 'All' || meal.category === selectedCategory;
    const matchesSearch = meal.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          meal.kannadaTitle.includes(searchQuery);
    return matchesCategory && matchesSearch;
  }).sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'calories-low') return a.calories - b.calories;
    return 0;
  });

  const categories = ['All', 'High Protein', 'Weight Loss', 'Low GI', 'Keto'];

  const handleOpenOrderModal = (meal) => {
    setSelectedMealForOrder(meal);
    setQuantity(1);
    setSpecialInstructions('');
  };

  const handleSendWhatsAppOrder = () => {
    if (!selectedMealForOrder) return;
    const totalPrice = selectedMealForOrder.price * quantity;
    const message = `ನಮಸ್ಕಾರ! I want to order from Paustika Aahaara:
- Item: ${selectedMealForOrder.title} (${selectedMealForOrder.kannadaTitle})
- Quantity: ${quantity}
- Total Price: ₹${totalPrice}
${specialInstructions ? `- Notes: ${specialInstructions}` : ''}

Please confirm my order and estimated delivery time!`;

    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
    setSelectedMealForOrder(null);
  };

  return (
    <div className="min-h-screen bg-amber-50/30 text-slate-800 pb-20 md:pb-0 font-sans">
      
      {/* Top Announcement Bar */}
      {}
      <div className="bg-amber-500 text-slate-950 font-bold text-xs md:text-sm py-2 px-4 text-center flex flex-wrap items-center justify-center gap-4">
        <span className="flex items-center gap-1">
          <Sparkles className="w-4 h-4" /> ಫ್ರೆಶ್ ಮತ್ತು ಪೌಷ್ಟಿಕ ಆಹಾರ!
        </span>
        <span className="hidden sm:inline">•</span>
        <span className="flex items-center gap-1">
          <MapPin className="w-4 h-4" /> Near Basaveshwaranagar, Bengaluru
        </span>
        <span className="hidden sm:inline">•</span>
        <span className="flex items-center gap-1.5">
          <Clock className="w-4 h-4" /> 7 AM - 10 PM
          <span className={`px-2 py-0.5 rounded-full text-[10px] uppercase font-extrabold ${isOpenNow ? 'bg-emerald-800 text-white' : 'bg-red-800 text-white'}`}>
            {isOpenNow ? '• OPEN NOW' : '• CLOSED NOW'}
          </span>
        </span>
      </div>

      {/* Navigation Bar */}
      <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md shadow-sm border-b border-amber-100">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2 font-extrabold text-2xl text-emerald-700">
            <Utensils className="w-7 h-7 text-emerald-600" />
            <span>ಪೌಷ್ಟಿಕ <span className="text-amber-500">ಆಹಾರ</span></span>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setIsReviewModalOpen(true)}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-amber-100 hover:bg-amber-200 text-amber-900 font-bold transition text-xs border border-amber-300"
            >
              <MessageSquarePlus className="w-4 h-4 text-amber-700" /> ವಿಮರ್ಶಿಸಿ (Write Review)
            </button>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 rounded-full border border-pink-200 text-pink-600 hover:bg-pink-50 font-semibold transition text-xs"
            >
              <InstagramIcon className="w-4 h-4" /> Instagram
            </a>
            <a
              href={`tel:+${PHONE_NUMBER}`}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 hover:bg-slate-100 font-semibold text-slate-700 transition text-xs"
            >
              <Phone className="w-4 h-4 text-emerald-600" /> Call Us
            </a>
            <a
              href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent("ನಮಸ್ಕಾರ! I want to order a diet meal.")}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold transition shadow-md hover:shadow-emerald-200 text-xs"
            >
              WhatsApp Order
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-slate-900 to-emerald-950 text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-5">
          <span className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs md:text-sm px-4 py-1.5 rounded-full font-bold">
            <MapPin className="w-4 h-4 text-amber-400" /> ಬಸವೇಶ್ವರನಗರ, ಬೆಂಗಳೂರು
          </span>
          
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
            ನಿಮ್ಮ ಫಿಟ್ನೆಸ್ ಸಫಲತೆಗೆ <br className="hidden md:block"/>
            <span className="text-amber-400">ಪೌಷ್ಟಿಕ ಆಹಾರ</span>
          </h1>
          
          <p className="text-lg text-slate-300 max-w-xl mx-auto">
            Fresh, calorie-counted diet meals prepared daily with organic local ingredients in Bengaluru.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row justify-center items-center gap-3">
            <a
              href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent("ನಮಸ್ಕಾರ! I am interested in your Bengaluru diet meal plans.")}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-8 py-3.5 rounded-full font-bold text-lg transition shadow-xl shadow-emerald-900/50"
            >
              ಈಗಲೇ ಆರ್ಡರ್ ಮಾಡಿ (Order Now)
            </a>
            <button
              onClick={() => setIsReviewModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 bg-amber-400/20 hover:bg-amber-400/30 text-amber-300 border border-amber-400/40 px-6 py-3.5 rounded-full font-bold text-lg transition"
            >
              <Star className="w-5 h-5 fill-amber-400 text-amber-400" /> Give Feedback
            </button>
          </div>
        </div>
      </section>

      {/* Search & Filter Controls */}
      {}
      <section className="max-w-6xl mx-auto px-4 -mt-6 relative z-10">
        <div className="bg-white rounded-2xl p-4 md:p-6 shadow-xl border border-slate-100 space-y-4">
          
          <div className="flex flex-col md:flex-row gap-3 justify-between items-center">
            
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-5 h-5 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                placeholder="Search meal or ಕನ್ನಡ ಹೆಸರು..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="absolute right-3 top-3 text-slate-400 hover:text-slate-600">
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 w-full md:w-auto">
              <Filter className="w-4 h-4 text-emerald-600" />
              <span className="text-xs font-semibold text-slate-500">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-slate-50 border border-slate-200 rounded-lg text-sm px-3 py-2 text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 flex-1 md:flex-initial"
              >
                <option value="default">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="calories-low">Lowest Calories</option>
              </select>
            </div>

          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition ${
                  selectedCategory === cat
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-200'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Meal Grid Section */}
      {}
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-extrabold text-slate-900">
            {selectedCategory === 'All' ? 'ನಮ್ಮ ವಿಶೇಷ ಆಹಾರ ಪಟ್ಟಿ (All Meals)' : `${selectedCategory} Meals`}
          </h2>
          <span className="text-xs font-semibold text-slate-500">{filteredMeals.length} items found</span>
        </div>

        {filteredMeals.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-100 shadow-sm">
            <p className="text-slate-500 font-medium">No meals found matching "{searchQuery}"</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="mt-3 text-sm text-emerald-600 font-bold hover:underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredMeals.map((meal) => (
              <div key={meal.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition border border-slate-100 flex flex-col justify-between">
                <div>
                  <div className="relative">
                    <img src={meal.image} alt={meal.title} className="w-full h-52 object-cover" />
                    <span className={`absolute top-3 left-3 text-xs font-bold text-white uppercase px-3 py-1 rounded-full shadow ${meal.categoryColor}`}>
                      {meal.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                      {meal.kannadaTitle}
                    </span>
                    <h3 className="text-xl font-bold text-slate-800 mt-2">{meal.title}</h3>
                    <p className="text-slate-600 text-sm mt-2">{meal.description}</p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-0">
                  <div className="flex items-center gap-4 text-xs font-medium text-slate-500 my-4 pt-3 border-t border-slate-100">
                    <span className="flex items-center gap-1"><Flame className="w-4 h-4 text-amber-500" /> {meal.calories} kcal</span>
                    <span>•</span>
                    <span>{meal.protein}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-emerald-700">₹{meal.price}</span>
                    <button
                      onClick={() => handleOpenOrderModal(meal)}
                      className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition shadow hover:shadow-md"
                    >
                      <ShoppingBag className="w-4 h-4" /> ಆರ್ಡರ್ ಮಾಡಿ
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* REAL-TIME CUSTOMER REVIEWS & SOCIAL PROOF SECTION */}
      {}
      <section className="bg-gradient-to-b from-amber-50/50 via-emerald-50/30 to-amber-50/50 py-16 px-4 border-y border-amber-100">
        <div className="max-w-6xl mx-auto space-y-12">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full border border-emerald-200">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" /> ನಮ್ಮ ಗ್ರಾಹಕರ ವಿಮರ್ಶೆಗಳು (Real-Time Customer Feedback)
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                Loved by Bengaluru Fitness Lovers
              </h2>
              <p className="text-slate-600 text-sm max-w-lg">
                See what health enthusiasts in Basaveshwaranagar, Rajajinagar & Vijayanagar say about Paustika Aahaara.
              </p>
            </div>

            {/* Write a Review Action Button */}
            <button
              onClick={() => setIsReviewModalOpen(true)}
              className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-3 rounded-full font-bold shadow-lg shadow-emerald-200 hover:shadow-xl transition transform hover:-translate-y-0.5 text-sm"
            >
              <MessageSquarePlus className="w-5 h-5 text-amber-300" /> ವಿಮರ್ಶೆಯನ್ನು ಬರೆಯಿರಿ (Write Review)
            </button>
          </div>

          {/* Social Proof Real-time Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white rounded-2xl p-6 shadow-md border border-emerald-100 text-center">
            <div className="space-y-1">
              <p className="text-2xl md:text-3xl font-black text-emerald-700">{reviews.length + 50}+</p>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Happy Customers</p>
            </div>
            <div className="space-y-1 border-l border-slate-100">
              <p className="text-2xl md:text-3xl font-black text-amber-500 flex items-center justify-center gap-1">
                {averageRating} <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
              </p>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Average Rating</p>
            </div>
            <div className="space-y-1 border-l border-slate-100">
              <p className="text-2xl md:text-3xl font-black text-emerald-700">100%</p>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Fresh Ingredients</p>
            </div>
            <div className="space-y-1 border-l border-slate-100">
              <p className="text-2xl md:text-3xl font-black text-amber-500">Basaveshwaranagar</p>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Local Hub</p>
            </div>
          </div>

          {/* Interactive Auto-Sliding Review Carousel */}
          {reviews.length > 0 && (
            <div 
              className="relative bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-slate-100 max-w-3xl mx-auto overflow-hidden"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <Quote className="w-12 h-12 text-emerald-100 absolute top-4 right-6 pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center text-center space-y-4 min-h-[240px] justify-center transition-all duration-300">
                
                {/* Badges: Star Rating, Kannada Tag, & Real-Time Badge */}
                <div className="flex flex-wrap items-center justify-center gap-2">
                  <div className="flex text-amber-400">
                    {[...Array(reviews[currentReviewIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    {reviews[currentReviewIndex].kannadaTag}
                  </span>
                  {reviews[currentReviewIndex].isRealTime && (
                    <span className="text-[10px] font-extrabold text-white bg-amber-500 px-2 py-0.5 rounded-full animate-pulse">
                      NEW REVIEW
                    </span>
                  )}
                </div>

                {/* Review Text */}
                <p className="text-slate-700 text-base md:text-lg italic font-medium leading-relaxed max-w-xl">
                  "{reviews[currentReviewIndex].review}"
                </p>

                {/* Meal Tag */}
                {reviews[currentReviewIndex].mealOrdered && (
                  <span className="text-xs text-slate-500 font-semibold bg-slate-100 px-3 py-1 rounded-full">
                    Meal: {reviews[currentReviewIndex].mealOrdered}
                  </span>
                )}

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-2">
                  {/* <img 
                    src={reviews[currentReviewIndex].avatar} 
                    alt={reviews[currentReviewIndex].name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-emerald-500 shadow" 
                  /> */}
                  <div className="text-left">
                    <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1">
                      {reviews[currentReviewIndex].name}
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 fill-emerald-100" />
                    </h4>
                    <p className="text-xs text-slate-500 font-medium">
                      {reviews[currentReviewIndex].area}, Bengaluru • <span className="text-slate-400">{reviews[currentReviewIndex].date}</span>
                    </p>
                  </div>
                </div>

              </div>

              {/* Navigation Controls */}
              <div className="flex justify-between items-center mt-6 pt-4 border-t border-slate-100">
                <button 
                  onClick={handlePrevReview}
                  className="p-2 rounded-full bg-slate-50 hover:bg-emerald-50 text-slate-600 hover:text-emerald-700 transition border border-slate-200"
                  aria-label="Previous Review"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Dot Indicators */}
                <div className="flex gap-2 max-w-[200px] overflow-x-auto py-1 scrollbar-none">
                  {reviews.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentReviewIndex(idx)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        currentReviewIndex === idx 
                          ? 'w-7 bg-emerald-600' 
                          : 'w-2.5 bg-slate-200 hover:bg-slate-300'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <button 
                  onClick={handleNextReview}
                  className="p-2 rounded-full bg-slate-50 hover:bg-emerald-50 text-slate-600 hover:text-emerald-700 transition border border-slate-200"
                  aria-label="Next Review"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

            </div>
          )}

          {/* Instagram Feed Grid */}
          <div className="space-y-6 pt-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <InstagramIcon className="w-5 h-5 text-pink-600" />
                  Follow @paustika_aahaara on Instagram
                </h3>
                <p className="text-xs text-slate-500">Check out real daily meal prep videos and healthy recipes!</p>
              </div>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-pink-500 to-amber-500 hover:from-pink-600 hover:to-amber-600 text-white font-bold text-sm shadow-md transition transform hover:-translate-y-0.5"
              >
                Visit Profile <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {INSTA_POSTS.map((post) => (
                <a
                  key={post.id}
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative rounded-2xl overflow-hidden aspect-square shadow-md hover:shadow-xl transition"
                >
                  <img src={post.img} alt={post.tag} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-200 flex flex-col justify-end p-3 text-white">
                    <span className="text-xs font-bold text-amber-300">{post.tag}</span>
                    <div className="flex gap-3 text-xs text-slate-200 mt-1">
                      <span>❤️ {post.likes}</span>
                      <span>💬 {post.comments}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* REAL-TIME REVIEW WRITE MODAL */}
      {}
      {isReviewModalOpen && (
        <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl relative space-y-4 animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setIsReviewModalOpen(false)}
              className="absolute right-4 top-4 text-slate-400 hover:text-slate-600 p-1"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-xs font-bold text-amber-700 bg-amber-100 px-3 py-1 rounded-full border border-amber-200">
                ನಮ್ಮ ಸೇವೆಗೆ ವಿಮರ್ಶೆ ನೀಡಿ
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mt-2">Write a Customer Review</h3>
              <p className="text-xs text-slate-500">Share your experience with Paustika Aahaara to help other Bengaluru fitness lovers!</p>
            </div>

            {reviewSubmitSuccess ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-xl font-bold text-slate-900">ಧನ್ಯವಾದಗಳು! (Thank You!)</h4>
                <p className="text-sm text-slate-600">Your review has been added live to our feedback section.</p>
              </div>
            ) : (
              <form onSubmit={handleReviewSubmit} className="space-y-4">
                
                {/* Full Name Input */}
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Your Name (ನಿಮ್ಮ ಹೆಸರು) *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Kumar"
                    value={newReview.name}
                    onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                    className="w-full text-sm border border-slate-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                {/* Bengaluru Area Selector */}
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Area in Bengaluru *</label>
                  <select
                    value={newReview.area}
                    onChange={(e) => setNewReview({...newReview, area: e.target.value})}
                    className="w-full text-sm border border-slate-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50"
                  >
                    <option value="Basaveshwaranagar">Basaveshwaranagar</option>
                    <option value="Rajajinagar">Rajajinagar</option>
                    <option value="Vijayanagar">Vijayanagar</option>
                    <option value="Malleshwaram">Malleshwaram</option>
                    <option value="Mahalakshmi Layout">Mahalakshmi Layout</option>
                    <option value="Kamakshipalya">Kamakshipalya</option>
                    <option value="Other Bengaluru Area">Other Area in Bengaluru</option>
                  </select>
                </div>

                {/* Meal Ordered Selector */}
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Which meal did you try?</label>
                  <select
                    value={newReview.mealOrdered}
                    onChange={(e) => setNewReview({...newReview, mealOrdered: e.target.value})}
                    className="w-full text-sm border border-slate-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50"
                  >
                    {ALL_MEALS.map((meal) => (
                      <option key={meal.id} value={meal.title}>
                        {meal.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Rating Stars Selection */}
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Rating (ರೇಟಿಂಗ್) *</label>
                  <div className="flex gap-2 text-amber-400 cursor-pointer pt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        onClick={() => setNewReview({...newReview, rating: star})}
                        className={`w-7 h-7 transition ${
                          star <= newReview.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-200'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Review Message Textarea */}
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Your Review / Comments *</label>
                  <textarea
                    required
                    rows="3"
                    placeholder="Tell us about the taste, portion size, packing or delivery..."
                    value={newReview.review}
                    onChange={(e) => setNewReview({...newReview, review: e.target.value})}
                    className="w-full text-sm border border-slate-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  ></textarea>
                </div>

                {/* Submit Action */}
                <div className="pt-2 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsReviewModalOpen(false)}
                    className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-bold text-sm hover:bg-slate-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-2.5 rounded-xl transition flex items-center gap-2 text-sm shadow-md"
                  >
                    <Send className="w-4 h-4" /> Submit Review
                  </button>
                </div>

              </form>
            )}

          </div>
        </div>
      )}

      {/* QUICK WHATSAPP ORDER MODAL */}
      {}
      {selectedMealForOrder && (
        <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl relative space-y-5 animate-in fade-in zoom-in-95 duration-200">
            
            <button
              onClick={() => setSelectedMealForOrder(null)}
              className="absolute right-4 top-4 text-slate-400 hover:text-slate-600 p-1"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                Quick Order
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-2">{selectedMealForOrder.title}</h3>
              <p className="text-xs text-slate-500 font-semibold">{selectedMealForOrder.kannadaTitle}</p>
            </div>

            {/* Quantity Selector */}
            <div className="flex justify-between items-center bg-slate-50 p-4 rounded-xl border border-slate-100">
              <span className="text-sm font-bold text-slate-700">Quantity:</span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 rounded-full bg-white border border-slate-300 font-bold text-slate-700 flex items-center justify-center hover:bg-slate-100"
                >
                  -
                </button>
                <span className="font-bold text-slate-900 text-lg w-4 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 rounded-full bg-white border border-slate-300 font-bold text-slate-700 flex items-center justify-center hover:bg-slate-100"
                >
                  +
                </button>
              </div>
            </div>

            {/* Special Instructions */}
            <div>
              <label className="text-xs font-bold text-slate-600 block mb-1">Special Request / Notes (Optional):</label>
              <input
                type="text"
                placeholder="e.g. Extra spicy, no onions..."
                value={specialInstructions}
                onChange={(e) => setSpecialInstructions(e.target.value)}
                className="w-full text-sm border border-slate-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            {/* Price & Submit Action */}
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-400 font-medium">Total Amount</p>
                <p className="text-2xl font-black text-emerald-700">₹{selectedMealForOrder.price * quantity}</p>
              </div>

              <button
                onClick={handleSendWhatsAppOrder}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-xl transition flex items-center gap-2 shadow-lg shadow-emerald-200 text-sm"
              >
                Confirm on WhatsApp
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Footer */}
      {}
      <footer className="bg-slate-900 text-white py-12 px-4 text-center">
        <div className="max-w-xl mx-auto space-y-4">
          <h3 className="text-2xl font-bold">ನಮ್ಮ ಬೆಂಗಳೂರು, ನಮ್ಮ ಪೌಷ್ಟಿಕ ಆಹಾರ!</h3>
          <p className="text-slate-400 text-sm">
            Located near <strong>Basaveshwaranagar, Bengaluru</strong>. <br />
            Open Every Day: <strong>7:00 AM – 10:00 PM</strong>
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-6 pt-2">
            <a href={`tel:+${PHONE_NUMBER}`} className="text-amber-400 font-bold hover:underline flex items-center gap-2">
              <Phone className="w-4 h-4" /> +91 63635 94612
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="text-pink-400 font-bold hover:underline flex items-center gap-2">
              <InstagramIcon className="w-4 h-4" /> @paustika_aahaara
            </a>
          </div>
        </div>
      </footer>

      {/* Mobile Bottom Sticky Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 flex md:hidden z-30 shadow-lg">
        <button 
          onClick={() => setIsReviewModalOpen(true)}
          className="flex-1 py-3 text-amber-900 bg-amber-100 font-bold text-xs text-center flex items-center justify-center gap-1 border-r border-amber-200"
        >
          <MessageSquarePlus className="w-4 h-4 text-amber-700" /> ವಿಮರ್ಶಿಸಿ
        </button>
        <a href={`tel:+${PHONE_NUMBER}`} className="flex-1 py-3 text-slate-700 bg-slate-100 font-semibold text-xs text-center flex items-center justify-center gap-1 border-r border-slate-200">
          <Phone className="w-4 h-4 text-slate-600" /> Call
        </a>
        <a href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent("ನಮಸ್ಕಾರ! I would like to inquire about diet meals.")}`} target="_blank" rel="noreferrer" className="flex-1 py-3 bg-emerald-600 text-white font-semibold text-xs text-center flex items-center justify-center gap-1">
          WhatsApp
        </a>
      </div>

    </div>
  );
}