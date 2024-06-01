const routes = {
    404: {
        template: './assets/page/404.html',
        title: '404',
        description: 'Page not found',
        img: 'https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    },
    '/rapBeef/': {
        template: './assets/page/home.html',
        title: 'Home',
        description: 'This is the home page',
        img: 'https://images.unsplash.com/photo-1666091863721-54331a5db52d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    },
    '/rapBeef/bnp': {
        template: './assets/page/biggiePac.html',
        title: 'Biggie vs Pac',
        description: 'This is the about page',
        img: 'https://images.unsplash.com/photo-1666055642230-1595470b98fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=995&q=80',
    },
    '/rapBeef/pnd': {
        template: './assets/page/pushaDrake.html',
        title: 'Pusha T vs. Drake',
        description: 'This is the contact page',
        img: 'https://images.unsplash.com/photo-1666005487638-61f45819c975?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    },'/rapBeef/mnn': {
        template: './assets/page/megNicki.html',
        title: 'Meg vs. Nicki',
        description: 'This is the contact page',
        img: 'https://images.unsplash.com/photo-1665910407771-bc84ad45676b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80',
    },
};

const route = (event) => {
    event = event || window.event; // get window.event if event argument not provided
    event.preventDefault();
    // window.history.pushState(state, unused, target link);
    window.history.pushState({}, '', event.target.href);
    locationHandler();
};

const locationHandler = async () => {
    const location = window.location.pathname; // get the url path
    // if the path length is 0, set it to primary page route
    if (location.length == 0) {
        location = '/';
    }
    // get the route object from the urlRoutes object
    const route = routes[location] || routes['404'];
    // get the html from the template
    const html = await fetch(route.template).then((response) => response.text());
    // set the content of the content div to the html
    document.getElementById('content').innerHTML = html;
    // set the title of the document to the title of the route
    document.title = route.title;
    // set the description of the document to the description of the route
    document
        .querySelector('meta[name="description"]')
        .setAttribute('content', route.description);
};

export {route, locationHandler, routes}