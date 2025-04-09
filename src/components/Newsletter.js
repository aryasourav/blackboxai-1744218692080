export default function Newsletter({ darkMode }) {
  return (
    <section className={`py-12 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} rounded-xl`}>
      <div className="max-w-2xl mx-auto text-center px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Subscribe for Cloud Tips & Updates</h2>
        <p className="mb-6">Get the latest articles and videos delivered to your inbox</p>
        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            className={`flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              darkMode ? 'bg-gray-700 text-white' : 'bg-white'
            }`}
            required
          />
          <button
            type="submit"
            className={`px-6 py-3 rounded-lg font-medium text-white ${
              darkMode ? 'bg-purple-600 hover:bg-purple-700' : 'bg-blue-600 hover:bg-blue-700'
            } transition-colors`}
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
