document.addEventListener("DOMContentLoaded", function() {
    const blogList = document.getElementById("blog-list");

    const blogPosts = [
        { title: "My First Blog Post", date: "February 6, 2025", url: "posts/first-post.html" },
        { title: "How to Learn Effectively", date: "February 7, 2025", url: "posts/learn-effectively.html" }
    ];

    blogPosts.forEach(post => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<a href="${post.url}">${post.title}</a> - ${post.date}`;
        blogList.appendChild(listItem);
    });
});
