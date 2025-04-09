export default function ContentCards({ darkMode }) {
  const cards = [
    {
      id: 1,
      title: "AWS Lambda Deep Dive",
      description: "Learn how to build serverless applications with AWS Lambda",
      category: "AWS",
      type: "article"
    },
    {
      id: 2,
      title: "Azure Kubernetes Service",
      description: "Deploy and manage containers on AKS",
      category: "Azure",
      type: "video"
    },
    {
      id: 3,
      title: "Terraform Best Practices",
      description: "Infrastructure as code patterns for production",
      category: "DevOps",
      type: "article"
    }
  ];

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Latest Content</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card) => (
          <div 
            key={card.id}
            className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600"></div>
            <div className="p-6">
              <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full mb-2 ${
                card.category === 'AWS' ? 'bg-orange-100 text-orange-800' :
                card.category === 'Azure' ? 'bg-blue-100 text-blue-800' :
                'bg-green-100 text-green-800'
              }`}>
                {card.category}
              </span>
              <h3 className="text-xl font-bold mb-2">{card.title}</h3>
              <p className="mb-4">{card.description}</p>
              <button className={`px-4 py-2 rounded-md font-medium ${
                darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'
              } text-white`}>
                {card.type === 'article' ? 'Read More' : 'Watch Now'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
