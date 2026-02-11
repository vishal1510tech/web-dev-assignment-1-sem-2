
const form = document.getElementById('form');
const eventTitleInput = document.getElementById('eventTitle');
const eventDateInput = document.getElementById('eventDate');
const categoryInput = document.getElementById('category');
const descriptionInput = document.getElementById('description');
const cardsContainer = document.querySelector('.cards');
const clearBtn = document.querySelectorAll('.btn-secondary')[0];
const sampleBtn = document.querySelectorAll('.btn-secondary')[1];
const keyDisplay = document.querySelector('.key');

const createEventCard = (title, date, category, desc) => {

    const card = document.createElement('div');
    card.className = 'event-card';
    
     card.innerHTML=`
        <h2>${title}</h2>
        <p>📅${date}</p>
        <button>${category}</button>
        <p>${desc}</p>
        <div class="deleteCard">x</div>
    `

    cardsContainer.appendChild(card);
};
form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    const title = eventTitleInput.value;
    const date = eventDateInput.value;
    const category = categoryInput.value;
    const desc = descriptionInput.value;
    if (title === '' || date === '') {
        alert("Please fill in the title and date!");
        return;
    }

    createEventCard(title, date, category, desc);
    form.reset();
});
clearBtn.addEventListener('click', () => {
    cardsContainer.innerHTML = '<p class="empty-msg">No events yet. Add your first event!</p>';
});
sampleBtn.addEventListener('click', () => {
    const samples = [
        { t: "Tech Conference 2026", d: "2026-05-12", c: "Conference", de: "Annual gathering of tech enthusiasts." },
        { t: "UI/UX Workshop", d: "2026-06-20", c: "Workshop", de: "Learning the basics of Figma and design systems." }
    ];

    samples.forEach(s => createEventCard(s.t, s.d, s.c, s.de));
});
document.addEventListener('keydown', (event) => {
    keyDisplay.textContent = event.key === " " ? "Space" : event.key;
});
