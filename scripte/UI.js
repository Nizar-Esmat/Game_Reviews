export class UI {
    constructor() {}

    dispalydata(data) {
        let gameBox = '';
        for (let i = 0; i < data.length; i++) {
            gameBox +=
                `
                <div class="col-md-3 py-3 ">
                    <div data-id="${data[i].id}" class="card" style="width: 18rem; background-color: #3A497B; color: white; transition: all 1.1s ; cursor: pointer">
                        <img src="${data[i].thumbnail}" class="card-img-top" alt="${data[i].title}">
                        <div class="card-body">
                            <div class="d-flex justify-content-between py-3">
                                <h5 class="card-title">${data[i].title}</h5>
                                <span class="badge text-bg-primary p-2">Free</span>
                            </div>
                            <p class="card-text">${data[i].short_description}</p>
                        </div>
                        <footer class="card-footer small d-flex justify-content-between">
                            <span class="badge badge-color">${data[i].genre}</span>
                            <span class="badge badge-color">${data[i].platform}</span>
                        </footer>
                    </div>
                </div>
                `;
        }
        $('.row').html(gameBox);
    }


    displayDetals(data){
        const content = `
      <div class="col-md-4">
      <img src="${data.thumbnail}" class="w-100" alt="image details" />
   </div>
   <div class="col-md-8">
      <h3>Title: ${data.title}</h3>
      <p>Category: <span class="badge text-bg-info"> ${data.genre}</span> </p>
      <p>Platform: <span class="badge text-bg-info"> ${data.platform}</span> </p>
      <p>Status: <span class="badge text-bg-info"> ${data.status}</span> </p>
      <p class="small">${data.description}</p>
      <a class="btn btn-outline-warning" target="_blank" href="${data.game_url}">Show Game</a>
   </div>
      
      `;

        $('#detailsContent').html(content);
    }
}
