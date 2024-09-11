document.getElementById("blog-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const title = document.getElementById("title").value.trim();
  const content = document.getElementById("content").value.trim();

  if (!username || !title || !content) {
    alert("Please complete all fields.");
    return;
  }

  const blogPost = {
    username: username,
    title: title,
    content: content,
  };

  // retrieves existing blog posts from localStorage
  let blogPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];

  blogPosts.push(blogPost);

  // stores the updated blog posts array back into localStorage
  localStorage.setItem("blogPosts", JSON.stringify(blogPosts));

  // redirects to the blog.html page
  window.location.href = "blog.html";
});
