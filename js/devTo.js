async function fetchDevToArticles(username) {
  const response = await fetch(
    `https://dev.to/api/articles?username=${username}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const articles = await response.json();
  return articles;
}

export { fetchDevToArticles };
