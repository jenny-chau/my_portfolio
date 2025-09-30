document.addEventListener('DOMContentLoaded', () => {
    const projectContainers = document.querySelectorAll(".project-container");

    projectContainers.forEach(project => {
        const video = project.querySelector('.example-video');

        // start playing the video when mouse enters the project container
        project.addEventListener('mouseenter', () => {
            video.play();
            project.style.cursor = "pointer";
        })

        // pause the video when mouse leaves the project container
        project.addEventListener('mouseleave', () => {
            video.pause();
            project.style.cursor = "auto";
        })

        const github = project.querySelector('.project-github')
        const mainLink = project.dataset.url;
        const githubLink = github.dataset.url;

        // open the project link in a new tab on mouse click
        project.addEventListener('click', () => {
            window.open(mainLink, '_blank').focus();
        });

        // if mouse clicks the github link, github repo will open in new tab instead of the project link
        github.addEventListener('click', (event) => {
            event.stopPropagation();
            window.open(githubLink, '_blank').focus();
        });
    })
})