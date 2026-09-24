import React from 'react';
import { Phone, ShoppingBag, Utensils, Award, Flame } from 'lucide-react';

const PHONE_NUMBER = "+916363594612"; // Replace with your phone number (with country code, no + or spaces)

const meals = [
  {
    id: 1,
    title: "Grilled Chicken & Quinoa Bowl",
    category: "High Protein",
    categoryColor: "bg-red-500",
    description: "Herb-marinated chicken breast served with organic quinoa, roasted veggies, and lemon drizzle.",
    calories: "450 kcal",
    protein: "42g Protein",
    price: "$12.99",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600"
  },
  {
    id: 2,
    title: "Keto Avocado & Walnut Salad",
    category: "Keto Friendly",
    categoryColor: "bg-purple-600",
    description: "Fresh avocado, mixed greens, walnuts, cherry tomatoes, and cold-pressed extra virgin olive oil.",
    calories: "380 kcal",
    protein: "12g Protein",
    price: "$10.99",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600"
  },
  {
    id: 3,
    title: "Tofu & Chickpea Power Bowl",
    category: "100% Vegan",
    categoryColor: "bg-green-600",
    description: "Grilled organic tofu, spicy roasted chickpeas, fresh avocado, kale, and lemon-tahini dressing.",
    calories: "410 kcal",
    protein: "22g Protein",
    price: "$11.49",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600"
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pb-20 md:pb-0 font-sans">
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2 font-bold text-2xl text-emerald-600">
            <Utensils className="w-7 h-7 text-emerald-500" />
            <span>ಪೌಷ್ಟಿಕ_<span className="text-amber-500">ಆಹಾರ</span></span>
          </div>

          <div className="hidden md:flex gap-3">
            <a
              href={`tel:+${PHONE_NUMBER}`}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 hover:bg-slate-100 font-semibold text-slate-700 transition"
            >
              <Phone className="w-4 h-4 text-emerald-600" /> Call Us
            </a>
            <a
              href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent("Hi! I want to order a diet meal.")}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold transition shadow-md hover:shadow-emerald-200"
            >
              WhatsApp Order
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-900 to-slate-900 text-white py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs px-3 py-1 rounded-full uppercase tracking-wider font-semibold">
            <Award className="w-4 h-4" /> Fresh & Healthy Meal Subscriptions
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Delicious Fitness Meals Delivered to Your Door
          </h1>
          <p className="text-lg text-slate-300 max-w-xl mx-auto">
            Customized calorie-counted meal plans tailored to your goal—High Protein, Keto, Weight Loss, or Vegan.
          </p>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-emerald-400">
            Order Now and Start Your Healthy Journey!
          </h1>
          <div className="pt-2">
            <a
              href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent("Hi! I am interested in your diet meal plans.")}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-8 py-4 rounded-full font-bold text-lg transition transform hover:-translate-y-0.5 shadow-xl shadow-emerald-900/50"
            >
              Order via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Meals Showcase */}
      <main className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Our Signature Diet Meals</h2>
          <p className="text-slate-600 mt-2">Chef-crafted, nutritionist-approved, and prepped fresh daily.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {meals.map((meal) => (
            <div key={meal.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition border border-slate-100 flex flex-col">
              <div className="relative">
                <img src={meal.image} alt={meal.title} className="w-full h-52 object-cover" />
                <span className={`absolute top-3 left-3 text-xs font-bold text-white uppercase px-3 py-1 rounded-full shadow ${meal.categoryColor}`}>
                  {meal.category}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-800">{meal.title}</h3>
                  <p className="text-slate-600 text-sm mt-2">{meal.description}</p>
                </div>

                <div>
                  <div className="flex items-center gap-4 text-xs font-medium text-slate-500 my-4 pt-3 border-t border-slate-100">
                    <span className="flex items-center gap-1"><Flame className="w-4 h-4 text-amber-500" /> {meal.calories}</span>
                    <span>•</span>
                    <span>{meal.protein}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-emerald-600">{meal.price}</span>
                    <a
                      href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(`Hi! I'd like to order: ${meal.title}`)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition"
                    >
                      <ShoppingBag className="w-4 h-4" /> Order
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Floating Sticky Actions for Mobile Screen */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 flex md:hidden z-50 shadow-lg">
        <a
          href={`tel:+${PHONE_NUMBER}`}
          className="flex-1 py-3 text-slate-700 bg-slate-100 font-semibold text-center flex items-center justify-center gap-2 border-r border-slate-200"
        >
          <Phone className="w-4 h-4 text-slate-600" /> Call
        </a>
        <a
          href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent("Hi! I would like to inquire about your diet meals.")}`}
          target="_blank"
          rel="noreferrer"
          className="flex-1 py-3 bg-emerald-500 text-white font-semibold text-center flex items-center justify-center gap-2"
        >
          WhatsApp
        </a>
      </div>

    </div>
  );
}