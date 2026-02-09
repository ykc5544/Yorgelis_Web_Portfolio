const header = document.querySelector('header h1');

header.addEventListener('click', () => {
    header.textContent = 'Hello, Welcome To My Portfolio!';
});

const toggleSkillSection = document.getElementById('tog-skill');
const skills = document.querySelector('#skills ul');

toggleSkillSection.addEventListener('click', () => {
    skills.style.display = skills.style.display === 'none' ? 'block' : 'none';
});