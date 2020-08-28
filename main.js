const projects = [
    {
        id: 'HTML/CSS',
        src: 'pic1.PNG'
    },
    {
        id: 'Javascript',
        src: 'song.PNG'
    },
    {
        id: 'HTML/CSS',
        src: 'Work.PNG'
    },
    {
        id: 'HTML/CSS',
        src: 'pic1.PNG'
    },
    {
        id: 'Javascript',
        src: 'song.PNG'
    },
    {
        id: 'API',
        src: 'capture.PNG'
    },
]

window.addEventListener('DOMContentLoaded', function(){
    displayProjects(projects);
    filterProject();
});

function displayProjects(projects){

     const menu = document.getElementById('menu-picture');
     const project = projects.map(function(item){
        return `<div class="item col-md-6 col-sm-6 col-lg-4" style="margin-bottom: 30px"><img src="image/${item.src}"></div>`;
     });
    menu.innerHTML = project.join('');
}

function filterProject(){
    const btns = document.querySelectorAll('.filter');
    btns.forEach(function (btn){
        btn.addEventListener("click", function(e){
            e.preventDefault();
            const typeProject = e.currentTarget.id;
            const filter = projects.filter(function (project){
                if(project.id === typeProject)return project;
            });
            if(typeProject === "All")displayProjects(projects);
            else displayProjects(filter);
        })
    })
}