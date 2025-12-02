import React from "react";

const blogs = [
  {
    id: 1,
    title: "How to Choose the Perfect Toy for Your Child’s Age",
    desc: "Selecting the right toy helps your child learn and grow. Here’s how to choose age-appropriate toys that boost creativity and development.",
    img: "https://picsum.photos/seed/toy1/600/400",
    date: "January 12, 2025",
    readTime: "3 min read",
  },
  {
    id: 2,
    title: "Top 10 Educational Toys Every Parent Should Consider",
    desc: "Educational toys help improve motor skills, problem solving, and imagination. Here are the top picks recommended by experts.",
    img: "https://picsum.photos/seed/toy2/600/400",
    date: "February 2, 2025",
    readTime: "4 min read",
  },
  {
    id: 3,
    title: "Why Playtime is Important for Early Brain Development",
    desc: "Playtime is not just fun — it’s a crucial part of learning. Discover how play supports emotional and cognitive growth.",
    img: "https://picsum.photos/seed/toy3/600/400",
    date: "March 18, 2025",
    readTime: "5 min read",
  },
];

const ParentsBlog = () => {
  return (
    <div className="py-16 bg-base-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-3xl md:text-5xl mt-10 font-bold">
          Blog & Tips for Parents
        </h2>

        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Helpful advice, expert guidance, and fun ideas for raising curious,
          creative, and happy children — powered by <span className="font-semibold text-secondary">FunVille <span className="text-accent">Toys</span></span>.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="card bg-base-200 shadow-xl hover:shadow-2xl transition border"
            >
              <figure>
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
              </figure>

              <div className="card-body">
                <h3 className="card-title">{blog.title}</h3>
                <p className="text-gray-600">{blog.desc}</p>

                <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
                  <p>{blog.date}</p>
                  <p>{blog.readTime}</p>
                </div>

                <div className="card-actions mt-4">
                  <button className="btn btn-primary btn-sm">
                    Read More
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ParentsBlog;
