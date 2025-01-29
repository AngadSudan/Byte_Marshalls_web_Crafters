import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    text: "CareVerse has completely transformed my healthcare experience. The ease of booking appointments and connecting with doctors online is incredible!",
    name: "Emma Johnson",
    title: "CareVerse Patient",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    text: "As a doctor, I appreciate how CareVerse makes it simple to manage my schedule and see patients remotely. It has truly enhanced my practice.",
    name: "Dr. Michael Carter",
    title: "Licensed Therapist",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: "The platform is secure, user-friendly, and highly efficient. I can access quality healthcare without any hassle. Highly recommended!",
    name: "Sophia Martinez",
    title: "Satisfied Patient",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
  },
  {
    text: "CareVerse bridges the gap between doctors and patients seamlessly. The interface is intuitive, and customer support is always helpful.",
    name: "Dr. Andrew Scott",
    title: "Healthcare Professional",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
];

const ReviewCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="bg-[#315242] text-white p-8 flex flex-col items-center rounded-lg shadow-lg max-w-3xl mx-auto">
      <div className="relative w-full text-center">
        <p className="text-2xl italic">“{reviews[currentIndex].text}”</p>
        <div className="flex items-center justify-center mt-4">
          <img
            src={reviews[currentIndex].image}
            alt={reviews[currentIndex].name}
            className="w-12 h-12 rounded-full border-2 border-white mr-3"
          />
          <div className="text-left">
            <p className="font-bold">{reviews[currentIndex].name}</p>
            <p className="text-sm opacity-80">{reviews[currentIndex].title}</p>
          </div>
        </div>
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 cursor-pointer" onClick={prevReview}>
          <ChevronLeft size={32} />
        </div>
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 cursor-pointer" onClick={nextReview}>
          <ChevronRight size={32} />
        </div>
      </div>
      <div className="flex space-x-2 mt-4">
        {reviews.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-white" : "bg-gray-500"}`}
          ></span>
        ))}
      </div>
      <button className="mt-6 bg-white text-[#315242] font-bold px-6 py-2 rounded-full">
        More success stories
      </button>
    </section>
  );
};

export default ReviewCarousel;
