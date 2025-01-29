export default function AboutUs() {
    return (
      <section className="relative bg-[hsl(150.91,25.19%,25.69%)] text-white">
        {/* Top Curve */}
        <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-white to-transparent"></div>
  
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl font-bold">About Us</h1>
          <nav className="flex justify-center space-x-6 text-lg mt-4">
            <a href="#" className="text-green-300 border-b-2 border-green-400 pb-1">About</a>
            <a href="#" className="hover:text-green-200">Careers</a>
            <a href="#" className="hover:text-green-200">Social Impact</a>
          </nav>
  
          <div className="max-w-3xl mx-auto mt-8">
            <h2 className="text-3xl font-semibold">
              Find <span className="text-green-300">Comprehensive Healthcare</span> with CareVerse
            </h2>
            <p className="mt-6 text-lg leading-relaxed">
              CareVerse is revolutionizing healthcare by providing a full-fledged **healthcare management system** 
              that seamlessly connects **patients and doctors**. Our secure platform allows patients to **book 
              appointments, attend virtual sessions, and manage health records**, while healthcare professionals 
              can efficiently **organize schedules and provide consultations**.
            </p>
            <p className="mt-4 text-lg leading-relaxed">
              We go beyond mental health services—offering a holistic healthcare experience that ensures accessibility, 
              security, and quality care for everyone.
            </p>
          </div>
  
          {/* Bottom Button */}
          <div className="mt-10">
            <a href="#" className="bg-green-400 text-green-900 px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-green-500 transition">
              Learn More
            </a>
          </div>
        </div>
  
        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>
    );
  }
  