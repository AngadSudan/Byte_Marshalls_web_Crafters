import React from "react";

function Home() {
  return (
    <div className="bg-[#4A6A55] text-white">
      <main class="text-center pt-10 flex-grow">
        <h1 class="text-4xl font-bold mb-4 mt-4">You deserve to be happy.</h1>
        <p class="text-lg mb-10">What type of service are you looking for?</p>
        <center>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
            <div class="patients-bg p-8 bg-[#a75d00] rounded-xl text-center hover:scale-105 transition-transform cursor-pointer shadow-lg">
              <h3 class="text-2xl font-semibold mb-2">For Patients</h3>
              <p class="text-lg">
                Access professional therapy and mental health support tailored
                for your needs.
              </p>
            </div>
            <div class="doctors-bg p-8 bg-[#457777] rounded-xl text-center hover:scale-105 transition-transform cursor-pointer shadow-lg">
              <h3 class="text-2xl font-semibold mb-2">For Doctors</h3>
              <p class="text-lg">
                Join our platform to offer therapy services and reach a broader
                audience.
              </p>
            </div>
          </div>
        </center>
      </main>

      <section class="mt-16 p-8">
        <h2 class="text-3xl font-bold text-center mb-6">
          CareVerse: Revolutionizing Healthcare
        </h2>
        <div class="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          <div class="mb-6 md:mb-0 md:w-1/2">
            <h3 class="text-4xl font-bold">A complete healthcare solution.</h3>
            <p class="text-lg mt-4 text-gray-200">
              Bringing doctors and patients together for seamless healthcare
              services.
            </p>
          </div>
          <div class="md:w-1/2">
            <div class="bg-white p-6 rounded-xl shadow-lg text-gray-800">
              <p class="text-2xl font-bold text-green-600">
                Quality Care, Anytime
              </p>
              <p class="text-lg">
                Chat, call, or video consult with a doctor on your schedule.
              </p>
              <hr class="my-4" />
              <p class="text-2xl font-bold text-green-600">
                Expert Medical Professionals
              </p>
              <p class="text-lg">
                A growing network of licensed doctors, specialists, and
                healthcare providers.
              </p>
              <hr class="my-4" />
              <p class="text-2xl font-bold text-green-600">
                Your Health, Your Way
              </p>
              <p class="text-lg">
                Easy-to-use platform with flexible healthcare options.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="mt-16 p-8">
        <h2 class="text-3xl font-bold text-center mb-6">
          CareVerse vs. Traditional In-Office Healthcare
        </h2>

        <div class="max-w-3xl mx-auto overflow-x-auto">
          <table class="w-full text-left border-collapse border border-white">
            <thead>
              <tr class="bg-#397a4a text-white font-bold">
                <th class="p-4 text-left border border-white">Features</th>
                <th class="p-4 text-center border border-white">CareVerse</th>
                <th class="p-4 text-center border border-white">In-Office</th>
              </tr>
            </thead>
            <tbody class="text-gray-800">
              <tr class="even:bg-gray-100">
                <td class="p-4 border border-white text-white">
                  Provided by a licensed doctor
                </td>
                <td class="p-4 text-center border border-white text-green-500 font-bold">
                  ✅
                </td>
                <td class="p-4 text-center border border-white text-green-500 font-bold">
                  ✅
                </td>
              </tr>
              <tr class="even:bg-gray-100">
                <td class="p-4 border border-white">In-office visits</td>
                <td class="p-4 text-center border border-white text-red-500 font-bold">
                  ✅
                </td>
                <td class="p-4 text-center border border-white text-green-500 font-bold">
                  ✅
                </td>
              </tr>
              <tr class="even:bg-gray-100">
                <td class="p-4 border border-white text-white">
                  Messaging any time
                </td>
                <td class="p-4 text-center border border-white text-green-500 font-bold">
                  ✅
                </td>
                <td class="p-4 text-center border border-white text-red-500 font-bold">
                  ❌
                </td>
              </tr>
              <tr class="even:bg-gray-100">
                <td class="p-4 border border-white">Chat consultations</td>
                <td class="p-4 text-center border border-white text-green-500 font-bold">
                  ✅
                </td>
                <td class="p-4 text-center border border-white text-red-500 font-bold">
                  ❌
                </td>
              </tr>
              <tr class="even:bg-gray-100">
                <td class="p-4 border border-white text-white">
                  Phone consultations
                </td>
                <td class="p-4 text-center border border-white text-green-500 font-bold">
                  ✅
                </td>
                <td class="p-4 text-center border border-white text-red-500 font-bold">
                  ❌
                </td>
              </tr>
              <tr class="even:bg-gray-100">
                <td class="p-4 border border-white">Video consultations</td>
                <td class="p-4 text-center border border-white text-green-500 font-bold">
                  ✅
                </td>
                <td class="p-4 text-center border border-white text-red-500 font-bold">
                  ❌
                </td>
              </tr>
              <tr class="even:bg-gray-100">
                <td class="p-4 border border-white text-white">
                  Easy appointment scheduling
                </td>
                <td class="p-4 text-center border border-white text-green-500 font-bold">
                  ✅
                </td>
                <td class="p-4 text-center border border-white text-red-500 font-bold">
                  ❌
                </td>
              </tr>
              <tr class="even:bg-gray-100">
                <td class="p-4 border border-white">Digital health records</td>
                <td class="p-4 text-center border border-white text-green-500 font-bold">
                  ✅
                </td>
                <td class="p-4 text-center border border-white text-red-500 font-bold">
                  ❌
                </td>
              </tr>
              <tr class="even:bg-gray-100">
                <td class="p-4 border border-white text-white">
                  Prescription management
                </td>
                <td class="p-4 text-center border border-white text-green-500 font-bold">
                  ✅
                </td>
                <td class="p-4 text-center border border-white text-red-500 font-bold">
                  ❌
                </td>
              </tr>
              <tr class="even:bg-gray-100">
                <td class="p-4 border border-white">
                  Remote health monitoring
                </td>
                <td class="p-4 text-center border border-white text-green-500 font-bold">
                  ✅
                </td>
                <td class="p-4 text-center border border-white text-red-500 font-bold">
                  ❌
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Home;
