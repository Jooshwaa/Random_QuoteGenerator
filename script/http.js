


const api_url = 'https://jsonplaceholder.typicode.com/posts';
const RamQuote = [];

const generateQuote = async () => {
  try {
    const response = await fetch(api_url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status:, ${response.status}`);
    }
    const data = await response.json();
    RamQuote.push(data); // Store the quote
    console.log(RamQuote);
  } catch (error) {
    console.error("Fetch error:", error.message);
  }
};

generateQuote();