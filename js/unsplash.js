class Unsplash {
    constructor() {
        this.key = config.unsplash_key;
    }

    getPhoto = async (query) => {
        const photo = await fetch(`https://api.unsplash.com/photos/random?client_id=${this.key}&page=2&query=${query}`);
        const res = await photo.json();
        return res;
    }

}