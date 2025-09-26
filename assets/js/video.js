document.addEventListener('DOMContentLoaded', () => {
    const projectContainers = document.querySelectorAll(".project-container");

    projectContainers.forEach(project => {
        const video = project.querySelector('.example-video');

        project.addEventListener('mouseenter', () => {
            video.play();
            project.style.cursor = "pointer";
        })

        project.addEventListener('mouseleave', () => {
            video.pause();
            project.style.cursor = "auto";
        })

        const main = project.querySelector('.project-main')
        const github = project.querySelector('.project-github')
        const mainLink = project.dataset.url;
        const githubLink = github.dataset.url;

        project.addEventListener('click', () => {
            window.open(mainLink, '_blank').focus();
        });

        github.addEventListener('click', (event) => {
            event.stopPropagation();
            window.open(githubLink, '_blank').focus();
        });
    })
})