async function fetchHeaderPage(endpoint) {
  const response = await fetch(`${endpoint}`);
  const html = await response.text();
  const header = document.getElementById('header');
  header.innerHTML = html;
}
