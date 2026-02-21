async function init() {
    let num = 1;
    let info_active = true;

    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`);
    let poke_data = await response.json();

    let poke_name = document.getElementById('pokemon-name');
    poke_name.innerText = poke_data.name;

    let poke_img = document.getElementById('pokemon-img');
    poke_img.src = poke_data.sprites.front_default;

    const types_container = document.getElementById("types-container")
    let poke_types = poke_data.types

    function loadTypes(poke_types) {
        types_container.innerHTML = "";
        poke_types.map((type) => {
            const type_button = document.createElement("button");
            type_button.className = "button-type";
            type_button.innerText = type.type.name;
            switch (type_button.innerText) {
                case "normal":
                    type_button.style.backgroundColor = "#A8A77A";
                    break;
                case "fire":
                    type_button.style.backgroundColor = "#EE8130";
                    break;
                case "water":
                    type_button.style.backgroundColor = "#6390F0";
                    break;
                case "electric":
                    type_button.style.backgroundColor = "#F7D02C";
                    break;
                case "grass":
                    type_button.style.backgroundColor = "#7AC74C";
                    break;
                case "ice":
                    type_button.style.backgroundColor = "#96D9D6";
                    break;
                case "fighting":
                    type_button.style.backgroundColor = "#C22E28";
                    break;
                case "poison":
                    type_button.style.backgroundColor = "#A33EA1";
                    break;
                case "ground":
                    type_button.style.backgroundColor = "#E2BF65";
                    break;
                case "flying":
                    type_button.style.backgroundColor = "#A98FF3";
                    break;
                case "psychic":
                    type_button.style.backgroundColor = "#F95587";
                    break;
                case "bug":
                    type_button.style.backgroundColor = "#A6B91A";
                    break;
                case "rock":
                    type_button.style.backgroundColor = "#B6A136";
                    break;
                case "ghost":
                    type_button.style.backgroundColor = "#735797";
                    break;
                case "dragon":
                    type_button.style.backgroundColor = "#6F35FC";
                    break;
                case "dark":
                    type_button.style.backgroundColor = "#705746";
                    break;
                case "steel":
                    type_button.style.backgroundColor = "#B7B7CE";
                    break;
                case "fairy":
                    type_button.style.backgroundColor = "#D685AD";
                    break;
                default:
                    type_button.style.backgroundColor = "#777";
            }
            types_container.appendChild(type_button)
        })
    }

    InfoMovesBox = document.getElementById("info-moves-box");
    function getInfo(poke_data) {
        InfoMovesBox.innerHTML = "";
        const height = document.createElement("p");
        height.innerText = "height: " + poke_data.height + "m";
        InfoMovesBox.appendChild(height);

        const weight = document.createElement("p");
        weight.innerText = "weight: " + poke_data.weight + "kg";
        InfoMovesBox.appendChild(weight);

        poke_stats = poke_data.stats;
        poke_stats.map((stat) => {
            const stat_point = document.createElement("p")
            stat_point.innerText = stat.stat.name + ": " + stat.base_stat;
            InfoMovesBox.appendChild(stat_point);
        })
    }
    getInfo(poke_data);

    function getMoves(poke_data) {
        InfoMovesBox.innerHTML = "";
    
        poke_moves = poke_data.moves;
        poke_moves.map((move) => {
            const move_name = document.createElement("p")
            move_name.innerText = move.move.name;
            InfoMovesBox.appendChild(move_name);
        })
    }
    


    const right_btn = document.getElementById('right-arrow');
    const left_btn = document.getElementById('left-arrow');
    const info_btn = document.getElementById("info-btn");
    const moves_btn = document.getElementById("moves-btn");

    right_btn.addEventListener("click", async () => {
        num++;
        response = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`);
        poke_data = await response.json();
        poke_name.innerText = poke_data.name;
        poke_img.src = poke_data.sprites.front_default;
        poke_types = poke_data.types;
        loadTypes(poke_types);
        if (info_active) {
            getInfo(poke_data);
        } else {
            getMoves(poke_data)
        }
    });

    left_btn.addEventListener("click", async () => {
        if (num > 1) {
            num--;
            response = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`);
            poke_data = await response.json();
            poke_name.innerText = poke_data.name;
            poke_img.src = poke_data.sprites.front_default;
            poke_types = poke_data.types;
            loadTypes(poke_types);
            if (info_active) {
                getInfo(poke_data);
            } else {
                getMoves(poke_data)
            }
        }
    });

    info_btn.addEventListener("click", () => {
        info_btn.style.backgroundColor = "#7CFF79";
        moves_btn.style.backgroundColor = "#E8E8E8";
        info_active = true;
        getInfo(poke_data);
    })

    moves_btn.addEventListener("click", () => {
        moves_btn.style.backgroundColor = "#7CFF79";
        info_btn.style.backgroundColor = "#E8E8E8";
        info_active = false;
        getMoves(poke_data);
    })
}

init();
