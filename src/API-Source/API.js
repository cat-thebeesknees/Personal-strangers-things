const COHORT_NAME = "2302-ACC-PT-WEB-PT-A";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

//fetch posts

export async function fetchPosts() {
  try {
    const response = await fetch(`${BASE_URL}/posts`);
    const responseJson = await response.json();
    const posts = responseJson.data.posts;
    console.log(posts);
    return posts;
  } catch (error) {
    console.error(error);
  }
}
export default fetchPosts;
