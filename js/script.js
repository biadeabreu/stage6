
const routes = {
    "/" : "/pages/home.html",
    "/universo" : "/pages/universo.html",
    "/exploracao" : "/pages/exploracao.html"
}




function route(event){
    event = event || window.event
    event.preventDefault()

    //window.history.pushState({}, "", event.target.href)

    handle()
}


function handle() {
    const pathname = window.location.pathname

    console.log(pathname)
   // const route = routes[pathname] || routes["/"] 

    
    

    //fetch(route)
   // .then(data => data.text())
    //.then(html => {document.querySelector('#app').innerHTML = html})    
   // console.log(route)
   // handle()
    
    //window.onpopstate = () => handle()
    //window.route = () => route()
}