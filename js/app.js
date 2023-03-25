let cities = [
    {
        name: `Edmonton`,
        population: 981000
    },
    {
        name: `Calgary`,
        population: 1336000
    }
];

for(let i = 0; i < cities.length; i++)
{
    if(cities[i][`population`] >= 50000)
    {
        console.log(cities[i][`name`]);
    }
}

function print_even_values(arr)
{
    for(let i = 0; i < arr.length; i = i + 2)
    {
        console.log(arr[i]);
    }
}

let even_strings = print_even_values([`hello`, `bonjour`, `hola`, `ciao`, `ola`]);

let title = document.querySelector(`#page_title`);

function add_p_tag_below(event)
{
    event[`target`].insertAdjacentHTML(`afterend`, `<p>Was clicked</p>`)
}

title.addEventListener(`click`, add_p_tag_below);
