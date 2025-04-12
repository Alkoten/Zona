// Инициализация
let energy = 100;
const maxEnergy = 100;

// Обновление показателя энергии
function updateEnergy() {
    document.getElementById('energy').textContent = `Энергия: ${energy}`;
}

// Восстановление энергии
document.getElementById('restore-energy').addEventListener('click', function() {
    const cost = 10; // Стоимость восстановления энергии в долларах
    if (energy < maxEnergy) {
        energy = Math.min(energy + cost, maxEnergy);
        updateEnergy();
    }
});

// Инициализация энергии при загрузке
updateEnergy();
