import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import '../static/Carousle.css';
const Preview = () => {
  return (
    <>
    <Header/>
   
    <div div className="centered-box">
      <a href="#" class="block rounded-lg p-20 shadow-sm shadow-indigo-100">
  <img
    alt="Home"
    src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    class="h-60 w-full rounded-md object-cover"
  />

  <div class="mt-6">
    <dl>
      <div>
        <dt class="sr-only">Price</dt>

        <dd class="text-sm text-gray-500">PKR 24 Lakh</dd>
      </div>

      <div>
        <dt class="sr-only">Address</dt>

        <dd class="font-medium">123 Wallaby Avenue, Park Road</dd>
      </div>
    </dl>

    <div class="mt-6 flex items-center gap-8 text-xs">
      <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
        <svg
          class="h-4 w-4 text-indigo-700"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
          />
        </svg>

        <div class="mt-1.5 sm:mt-0">
          <p class="text-gray-500">Parking</p>

          <p class="font-medium">2 spaces</p>
        </div>
      </div>

      <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
        <svg
          class="h-4 w-4 text-indigo-700"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>

        <div class="mt-1.5 sm:mt-0">
          <p class="text-gray-500">Bathroom</p>

          <p class="font-medium">2 rooms</p>
        </div>
      </div>

      <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
        <svg
          class="h-4 w-4 text-indigo-700"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>

        <div class="mt-1.5 sm:mt-0">
          <p class="text-gray-500">Bedroom</p>

          <p class="font-medium">4 rooms</p>
        </div>
      <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
        <svg
          className="h-4 w-4 text-indigo-700"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
        </svg>
        <div className="mt-1.5 sm:mt-0">
          <p className="text-gray-500">Shares</p>
          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-green-500 bg-green-200">
                  67% {/* Replace with your percentage */}
                </span>
              </div>
            </div>
            <div className="relative w-full bg-gray-200 rounded-full">
              <div className="h-2 bg-green-500 rounded-full" style={{ width: '67%' }}></div> {/* Adjust the width based on your percentage */}
            </div>
          </div>
        </div>
        </div>
        
      </div>
    </div>
  </div>
  <div className="text-center mt-8"> {/* Centered button */}
          <button className="bg-blue-700 hover:bg-blue-500 text-white font-medium py-2 px-4 rounded-full">
            Contact
          </button>
        </div>
</a>

    </div>
    <Footer/>
    </>
    
  )
}

export default Preview
