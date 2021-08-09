const service =  {
    getCarouselItems: async () => {
        const res = await fetch('http://localhost:3000/carouselItems')
        return res.json();
    },
    getThumbnailItems: async () => {
        const res = await fetch('http://localhost:3000/items')
        return res.json();
    }
}

export default service;