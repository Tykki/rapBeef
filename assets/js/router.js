const routes = {
    404: {
        template: './assets/page/404.html',
        title: '404',
        description: 'Page not found',
        img: 'https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    },
    '/': {
        template: './assets/page/home.html',
        title: 'Home',
        description: 'This is the home page',
        img: 'https://variety.com/wp-content/uploads/2024/04/featured_diss_tracks.jpg',
    },
    bnp: {
        template: './assets/page/biggiePac.html',
        title: 'Biggie vs Pac',
        description: 'This is the about page',
        img: 'https://20627419.fs1.hubspotusercontent-na1.net/hubfs/20627419/The%20Hustle/Assets/Images/326830170-biggiepac_og_image.webp',
    },
    pnd: {
        template: './assets/page/pushaDrake.html',
        title: 'Pusha T vs. Drake',
        description: 'This is the contact page',
        img: 'https://nowtoronto.com/wp-content/uploads/2020/05/Pusha-T-Drake.jpg',
    },mnn: {
        template: './assets/page/megNicki.html',
        title: 'Meg vs. Nicki',
        description: 'This is the contact page',
        img: 'https://assets.teenvogue.com/photos/65b92050ddd99dbdb18ca269/3:2/w_2560%2Cc_limit/THIS%2520ONE%2520(1).jpg',
    },
};

const locationHandler = async () => {
    // get the url path, replace hash with empty string
    var location = window.location.hash.replace("#", "");
    // if the path length is 0, set it to primary page route
    if (location.length == 0) {
        location = "/";
    }
    // get the route object from the routes object
    const route = routes[location] || routes["404"];
    // get the html from the template
    const html = await fetch(route.template).then((response) => response.text());
    // set the content of the content div to the html
    document.getElementById("content").innerHTML = html;
    // set the title of the document to the title of the route
    document.title = route.title;
    // set the description of the document to the description of the route
    document
        .querySelector('meta[name="description"]')
        .setAttribute("content", route.description);
};

// const route = (event) => {
//     event = event || window.event; // get window.event if event argument not provided
//     event.preventDefault();
//     // window.history.pushState(state, unused, target link);
//     window.history.replaceState({}, '', event.target.href);
//     locationHandler();
// };

// const locationHandler = async () => {
//     let location = window.location.pathname; // get the url path
//     // if the path length is 0, set it to primary page route
//     if (location.length == 0) {
//         location = '/';
//     }
//     // get the route object from the urlRoutes object
//     const route = routes[location] || routes['404'];
//     // get the html from the template
//     const html = await fetch(route.template).then((response) => response.text());
//     // set the content of the content div to the html
//     document.getElementById('content').innerHTML = html;
//     // set the title of the document to the title of the route
//     document.title = route.title;
//     // set the description of the document to the description of the route
//     document
//         .querySelector('meta[name="description"]')
//         .setAttribute('content', route.description);
// };

export { locationHandler, routes}