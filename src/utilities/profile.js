// Simulated database query function (you would use a real database in production)
async function queryDatabase(query, params) {
  // Simulating database response
  const database = [
    { id: 1, name: 'Alice', age:24, interests: 'music,movies', university: 'UCLA' },
    { id: 2, name: 'Bob', age:23, interests: 'sports,music', university: 'Harvard' },
    { id: 3, name: 'Charlie', age:29, interests: 'movies,sports', university: 'UCLA' },
    { id: 4, name: 'David', age:26, interests: 'books,music', university: 'Imperial College' },
    { id: 5, name: 'Eve', age:24, interests: 'movies,books', university: 'UCLA' },
    { id: 6, name: 'Frank', age:30, interests: 'music,travel', university: 'MIT' },
    { id: 7, name: 'Grace', age:21, interests: 'music,movies', university: 'UCLA' },
    { id: 8, name: 'Heidi', age:28, interests: 'music,movies', university: 'Harvard' },
    { id: 9, name: 'Ivan', age:27, interests: 'sports,technology', university: 'Imperial college' },
    { id: 10, name: 'Judy', age:25, interests: 'travel,movies', university: 'UCLA' },
    { id: 11, name: 'Kyle', age:25, interests: 'music,sports', university: 'UCLA' },
    { id: 12, name: 'Laura', age:22, interests: 'books,cooking', university: 'Harvard' }
  ];

  return database.filter(user => user.id !== params[0]);
}

// Function to calculate similarity score between two users
function calculateSimilarity(user1, user2) {
  let score = 0;

  // Convert interests to arrays
  const interests1 = user1.interests.split(',');
  const interests2 = user2.interests.split(',');

  // Check for common interests
  const commonInterests = interests1.filter(interest => interests2.includes(interest));
  score += commonInterests.length;

  // Check for location proximity
  if (user1.university === user2.university) {
    score += 2; // Arbitrary score for being in the same city
  }

  return score;
}

// Function to shuffle an array (Fisher-Yates algorithm)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}



// Function to recommend matches for a given user with a daily limit of 10

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const recommendMatches  = async () => {
  const currentUser = { id: 1, name: 'Alice', interests: 'music,movies', location: 'Harvard' };
  // Fetch user data from database excluding the current user
  const query = `SELECT id, name, interests, location FROM users WHERE id != ${currentUser.id}`;
  await delay(3000); // to simulate loader
  const users = await queryDatabase(query, [currentUser.id]);

  const recommendations = users
    .map(user => {
      const similarityScore = calculateSimilarity(currentUser, user);
      return { ...user, similarityScore };
    })
    .sort((a, b) => b.similarityScore - a.similarityScore); // Sort by similarity score

  shuffleArray(recommendations); // Shuffle recommendations for randomness
  return recommendations.slice(0, 10); // Return top 10 matches
}
