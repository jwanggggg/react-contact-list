import React from "react"
import { useFetch } from 'react-fetch-hook'
import { useState } from 'react-fetch-hook'
import { useEffect } from 'react-fetch-hook'
import ContactCards from './ContactCards'

const App = () => {
  return (
    <div className="bg-gray-100">
      <section>
        <form>
          <input
            type="text"
            className="ml-20 mt-6 rounded-md p-2"
            placeholder="type here to filter..."
          />
        </form>
      </section>
      <section className="p-20 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        <ContactCards />
      </section>
    </div>
  );
}

export default App;
