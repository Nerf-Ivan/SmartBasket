import './App.css'

export default function App() {
  return (
    <div className="grid place-items-center bg-black">
      <div className="rounded-2xl shadow p-6 bg-white max-w-sm w-full text-center">
        <h1 className="text-3xl font-bold">Smart Basket</h1>
        <p className="mt-2 text-sm text-red-600">
          If this card looks styled, Tailwind is alive 🎉
        </p>
        <button className="mt-4 px-4 py-2 rounded-xl bg-emerald-600 text-white hover:bg-emerald-500">
          Compare Prices
        </button>
      </div>
    </div>
  )
}

