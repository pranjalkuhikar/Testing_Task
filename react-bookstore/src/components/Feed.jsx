const Feed = () => {
  const posts = [
    {
      id: 1,
      title: "Welcome to our store!",
      content: "Check out our latest collection of books.",
    },
    {
      id: 2,
      title: "Summer Sale",
      content: "Get 20% off on all fiction books this month.",
    },
    {
      id: 3,
      title: "New Arrival",
      content: "The latest thriller by John Doe is now in stock.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-8 max-w-7xl mx-auto">
        <h1 className="mb-6 text-3xl font-bold">Activity Feed</h1>
        <div className="space-y-4">
          {posts.map((post) => (
            <div
              key={post.id}
              className="p-6 bg-white rounded-lg shadow-sm border border-gray-200"
            >
              <h2 className="text-xl font-semibold text-blue-600">
                {post.title}
              </h2>
              <p className="mt-2 text-gray-700">{post.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feed;
