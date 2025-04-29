import { useState } from 'react'
import './App.css'

export default function App() {

  return (
    <>
    <ul className='flex justify-center gap-8'>
      <li className=' border-black border-2 rounded py-3 px-5 '>
        All
      </li>
      <li className=' border-black border-2 rounded py-3 px-5 '>
        Categoriy
      </li>
      <li className=' border-black border-2 rounded py-3 px-5 '>
        Collektion
      </li>
      <li className=' border-black border-2 rounded py-3 px-5 '>
        Price
      </li>
    </ul>
    
    <div className='grid grid-cols-4 px-70 my-20 gap-7'>
      <div className="border rounded-2xl shadow-lg p-4 max-w-xs bg-white hover:shadow-2xl transition-all">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc2SM-mjZnuxYrGXTuFWUBtfjE7677lR0Bpw&s" alt="Sun Glass" className="w-40 h-40 object-cover rounded-xl mx-auto"/>
        <div className="text-center mt-4 space-y-2">
          <h3 className="text-lg font-semibold text-gray-800">Sun-Glass</h3>
          <p className="text-sm text-gray-500">Hello</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition">APP</button>
        </div>
      </div>
      <div className="border rounded-2xl shadow-lg p-4 max-w-xs bg-white hover:shadow-2xl transition-all">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc2SM-mjZnuxYrGXTuFWUBtfjE7677lR0Bpw&s" alt="Sun Glass" className="w-40 h-40 object-cover rounded-xl mx-auto"/>
        <div className="text-center mt-4 space-y-2 ">
          <h3 className="text-lg font-semibold text-gray-800">Sun-Glass</h3>
          <p className="text-sm text-gray-500">Hello</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition">APP</button>
        </div>
      </div>
      <div className="border rounded-2xl shadow-lg p-4 max-w-xs bg-white hover:shadow-2xl transition-all">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc2SM-mjZnuxYrGXTuFWUBtfjE7677lR0Bpw&s" alt="Sun Glass" className="w-40 h-40 object-cover rounded-xl mx-auto"/>
        <div className="text-center mt-4 space-y-2">
          <h3 className="text-lg font-semibold text-gray-800">Sun-Glass</h3>
          <p className="text-sm text-gray-500">Hello</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition">APP</button>
        </div>
      </div>
      <div className="border rounded-2xl shadow-lg p-4 max-w-xs bg-white hover:shadow-2xl transition-all">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc2SM-mjZnuxYrGXTuFWUBtfjE7677lR0Bpw&s" alt="Sun Glass" className="w-40 h-40 object-cover rounded-xl mx-auto"/>
        <div className="text-center mt-4 space-y-2">
          <h3 className="text-lg font-semibold text-gray-800">Sun-Glass</h3>
          <p className="text-sm text-gray-500">Hello</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition">APP</button>
        </div>
      </div>
      <div className="border rounded-2xl shadow-lg p-4 max-w-xs bg-white hover:shadow-2xl transition-all">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc2SM-mjZnuxYrGXTuFWUBtfjE7677lR0Bpw&s" alt="Sun Glass" className="w-40 h-40 object-cover rounded-xl mx-auto"/>
        <div className="text-center mt-4 space-y-2">
          <h3 className="text-lg font-semibold text-gray-800">Sun-Glass</h3>
          <p className="text-sm text-gray-500">Hello</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition">APP</button>
        </div>
      </div>
      <div className="border rounded-2xl shadow-lg p-4 max-w-xs bg-white hover:shadow-2xl transition-all">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc2SM-mjZnuxYrGXTuFWUBtfjE7677lR0Bpw&s" alt="Sun Glass" className="w-40 h-40 object-cover rounded-xl mx-auto"/>
        <div className="text-center mt-4 space-y-2">
          <h3 className="text-lg font-semibold text-gray-800">Sun-Glass</h3>
          <p className="text-sm text-gray-500">Hello</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition">APP</button>
        </div>
      </div>
      <div className="border rounded-2xl shadow-lg p-4 max-w-xs bg-white hover:shadow-2xl transition-all">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc2SM-mjZnuxYrGXTuFWUBtfjE7677lR0Bpw&s" alt="Sun Glass" className="w-40 h-40 object-cover rounded-xl mx-auto"/>
        <div className="text-center mt-4 space-y-2">
          <h3 className="text-lg font-semibold text-gray-800">Sun-Glass</h3>
          <p className="text-sm text-gray-500">Hello</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition">APP</button>
        </div>
      </div>
      <div className="border rounded-2xl shadow-lg p-4 max-w-xs bg-white hover:shadow-2xl transition-all">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc2SM-mjZnuxYrGXTuFWUBtfjE7677lR0Bpw&s" alt="Sun Glass" className="w-40 h-40 object-cover rounded-xl mx-auto"/>
        <div className="text-center mt-4 space-y-2">
          <h3 className="text-lg font-semibold text-gray-800">Sun-Glass</h3>
          <p className="text-sm text-gray-500">Hello</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition">APP</button>
        </div>
      </div>

    </div>
    </>
  )
}



