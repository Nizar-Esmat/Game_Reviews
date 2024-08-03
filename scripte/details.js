import { UI } from './UI.js';

export class gameDetailsReviews {
    constructor(id) {
        this.ui = new UI();

        // Use arrow function to preserve `this` context
        $('#btnClose').click(() => {
            $('.dispaly_game').show(1000);
            $('.details').hide(1000);
        });

        this.getgame(id);
    }

    async getgame(id) {
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'a97f0eb421msh3123c209309f16bp13e90fjsn1956c041da3a',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        try {
            // Use the id parameter in the API call
            const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options);
            const response = await api.json();
            this.ui.displayDetals(response);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
}
