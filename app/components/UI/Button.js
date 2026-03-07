'use client';

export default function Button({ text, onClick }) {
  return (
    <button 
      onClick={onClick}
      className="mt-10 px-12 py-4 border border-yellow-500/40 text-white rounded-full bg-black/20 backdrop-blur-md hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-all duration-500 uppercase text-sm tracking-widest font-medium"
    >
      {text}
    </button>
  );
}