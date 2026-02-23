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


document.addEventListener("DOMContentLoaded", () => {

    const links = document.querySelectorAll("nav ul li a");
    const sections = document.querySelectorAll(".page-section");

    document.querySelector("#about").classList.add("active-section");

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            sections.forEach(section => {
                section.classList.remove("active-section");
            });

            links.forEach(l => l.classList.remove("active"));

            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            targetSection.classList.add("active-section");
            link.classList.add("active");
        });
    });
});
