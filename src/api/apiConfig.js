const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'b9cc12dd273d98307159c78fbc88c918',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};
export default apiConfig;
