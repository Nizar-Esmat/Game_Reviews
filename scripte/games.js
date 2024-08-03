import {UI} from "./UI.js";
import {gameDetailsReviews} from "./details.js";
export class GameReviews {
    constructor() {

    this.getgame("mmorpg")

        this.ui = new UI();

        $('.nav-item a').click((e)=>{
            e.preventDefault();

            this.getgame($(e.target).text());
        })

    }



    async getgame(cataogy){

        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'a97f0eb421msh3123c209309f16bp13e90fjsn1956c041da3a',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cataogy}`, options);
        const response = await api.json();
        this.ui.dispalydata(response)
        this.startEvent();
    }
    startEvent() {
        document.querySelectorAll(".card").forEach((item) => {
            item.addEventListener("click", () => {
                const id = item.dataset.id;
                this.showdetails(id);
            });
        });
    }

    showdetails(id){
        const options = new gameDetailsReviews(id)
        $('.details').show(1000)
        $('.dispaly_game').hide(1000)
    }

}