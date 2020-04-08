$(document).ready(function(){
    //Slider
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200,
        responsive: true
    });

    //Posts
    var posts = [{
        title: 'Prueba de titulo 1',
        date: 'Publicado el día: ' + moment().format("D MMMM YYYY"),
        content: 'Lorem, ipsum 1'
    },{
        title: 'Prueba de titulo 2',
        date: 'Publicado el día: ' + moment().format("D MMMM YYYY"),
        content: 'Lorem, ipsum 2'
    },{
        title: 'Prueba de titulo 3',
        date: 'Publicado el día: ' + moment().format("D MMMM YYYY"),
        content: 'Lorem, ipsum 3'
    },{
        title: 'Prueba de titulo 4',
        date: 'Publicado el día: ' + moment().format("D MMMM YYYY"),
        content: 'Lorem, ipsum 4'
    },{
        title: 'Prueba de titulo 5',
        date: 'Publicado el día: ' + moment().format("D MMMM YYYY"),
        content: 'Lorem, ipsum 5'
    }]
    
    posts.forEach((item, index)=> {
        var post = `
            <article class="post">
                <h2>${item.title}</h2>
                <span class="date">${item.date}</span>
                <p>${item.content}</p>
                <a href="" class="btn-more">Leer más</a>
            </article>
        `
        $("#posts").append(post);
    })
})