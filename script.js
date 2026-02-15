async function init() {
    let num = 1;
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`);
    let poke_data = await response.json();

    let poke_name = document.getElementById('pokemon-name');
    poke_name.innerText = poke_data.name;

    let poke_img = document.getElementById('pokemon-img');
    poke_img.src = poke_data.sprites.front_default;

    let poke_type = document.getElementById('button-type');
    poke_type.innerText = poke_data.type;

    const right_btn = document.getElementById('right-arrow');
    const left_btn = document.getElementById('left-arrow');

    right_btn.addEventListener("click", async () => {
        num++;
        response = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`);
        poke_data = await response.json();
        poke_name.innerText = poke_data.name;
        poke_img.src = poke_data.sprites.front_default;
    });

    left_btn.addEventListener("click", async () => {
        if (num > 1) {
            num--;
            response = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`);
            poke_data = await response.json();
            poke_name.innerText = poke_data.name;
            poke_img.src = poke_data.sprites.front_default;
        }
    });
}

init();
