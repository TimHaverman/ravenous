const apiKey =
  "yfNP5yG-aK68KMarcIvW0Xxb6OkHeDIpx7LPrf5tgEQMr_9d_4_7SEtZXxeAD1qkWN1hEREUWsAI6N7HNmEGb0fA7yZu_2cX8mRumkwmUwKVW9ovixGxPTgE1XgHX3Yx";

const Yelp = {
  searchYelp(term, location, sortBy) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`
        }
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map(business => ({
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zipCode,
              categoty: business.categories[0].title,
              rating: business.rating,
              reviewCount: business.review_count,
              url: business.url
            }));
          };        
      });
  }
};

export default Yelp;
