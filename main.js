const header = document.querySelector('header h1');

header.addEventListener('click', () => {
    header.textContent = 'Hello, Welcome To My Portfolio!';
});

/*
const toggleSkillSection = document.getElementById('tog-skill');
const skills = document.querySelector('#skills ul');

toggleSkillSection.addEventListener('click', () => {
    skills.style.display = skills.style.display === 'none' ? 'block' : 'none';
});
*/

document.addEventListener('DOMContentLoaded', () => {
    const avatar = document.getElementById('avatar');

    avatar.addEventListener('click', () => {
        alert("That's definitely me:)");
    });
});

document.addEventListener('DOMContentLoaded', () => {

    const projectImg = document.querySelectorAll('#projects img');

    projectImg.forEach(img => {
        img.addEventListener('mouseenter', () => {
            img.style.transform = 'scale(1.1)';
            img.style.transition = 'transform 0.3s ease, border 0.3s ease';
        });
        
        img.addEventListener('mouseleave', () => {
            img.style.transform = 'scale(1)';
            img.style.border = 'none';
        });
    });
});
window.addEventListener("scroll", function() {
    const nav = document.querySelector("nav");
    if (window.scrollY > 50) {
        nav.classList.add("sticky-header");
    } else {
        nav.classList.remove("sticky-header");
    }
});

