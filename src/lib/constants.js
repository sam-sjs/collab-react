// Production variables
const prod = {
  url: {
    API_URL: 'heroku placeholder'
  }
};

// Development variables
const dev = {
  url: {
    API_URL: 'http://localhost:8000'
  }
};

export const config = process.env.NODE_ENV === 'development' ? dev : prod;
