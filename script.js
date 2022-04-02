const listcamp = [
    {
        campeao: "Bahia",
        vice: "Santos",
        art: "Léo Bliglia (Bahia), 8 gols"
    },
    {
        campeao: "Palmeiras",
        vice: "Fortaleza",
        art: "Bececê (Fortaleza), 7 gols"
    },
    {
        campeao: "Santos",
        vice: "Bahia",
        art: "Pelé (Santos), 7 gols"
    },
    {
        campeao: "Santos",
        vice: "Botafogo",
        art: "Coutinho (Santos), 7 gols"
    },
    {
        campeao: "Santos",
        vice: "Bahia",
        art: "Ruiter (Confiança-SE), 9 gols"
    },
    {
        campeao: "Santos",
        vice: "Flamengo",
        art: "Pelé (Santos) e Gildo (Ceará), 7 gols"
    },
    {
        campeao: "Santos",
        vice: "Vasco da Gama",
        art: "Alcindo (Grêmio), 10 gols"
    },
    {
        campeao: "Cruzeiro",
        vice: "Santos",
        art: "Bita (Náutico) e Toninho Guerreiro (Santos), 10 gols"
    },
    {
        campeao: "Palmeiras (2x)",
        vice: "Internacional e Náutico",
        art: "Chicletes (Treze-PB), 9 gols e Ademar (Flamengo) e César (Palmeiras), 15 gols"
    },
    {
        campeao: "Santos e Botafogo",
        vice: "Internacional e Fortaleza",
        art: "Ferretti (Botafogo), 7 gols e  Toninho Guerreiro (Santos), 18 gols"
    },
    {
        campeao: "Palmeiras",
        vice: "Cruzeiro",
        art: "Edu (América-RJ), 14 gols"
    },
    {
        campeao: "Fluminense",
        vice: "Palmeiras",
        art: "Tostão (Cruzeiro), 12 gols"
    },
    {
        campeao: "Atlético-MG",
        vice: "São Paulo",
        art: "Dario (Atlético-MG), 15 gols"
    },
    {
        campeao: "Palmeiras",
        vice: "Botafogo",
        art: "Dario (Atlético-MG) e Pedro Rocha (São Paulo), 17 gols"
    },
    {
        campeao: "Palmeiras",
        vice: "São Paulo",
        art: "Ramón (Santa Cruz), 21 gols"
    },
    {
        campeao: "Vasco da Gama",
        vice: "Cruzeiro",
        art: "Roberto Dinamite (Vasco da Gama), 16 gols"
    },
    {
        campeao: "Internacional",
        vice: "Cruzeiro",
        art: "Flavio (Internacional), 16 gols"
    },
    {
        campeao: "Internacional",
        vice: "Corinthians",
        art: "Dario (Internacional), 16 gols"
    },
    {
        campeao: "São Paulo",
        vice: "Atlético-MG",
        art: "Reinaldo (Atlético-MG), 28 gols"
    },
    {
        campeao: "Guarani",
        vice: "Palmeiras",
        art: "Paulinho (Vasco da Gama), 19 gols"
    },
    {
        campeao: "Internacional",
        vice: "Vasco da Gama",
        art: "César (América-RJ), 13 gols"
    },
    {
        campeao: "Flamengo",
        vice: "Atlético-MG",
        art: "Zico (Flamengo), 21 gols"
    },
    {
        campeao: "Grêmio",
        vice: "São Paulo",
        art: "Nunes (Flamengo), 16 gols"
    },
    {
        campeao: "Flamengo",
        vice: "Grêmio",
        art: "Zico (Flamengo), 21 gols"
    },
    {
        campeao: "Flamengo",
        vice: "Santos",
        art: "Serginho Chulapa (Santos), 22 gols"
    },
    {
        campeao: "Fluminense",
        vice: "Vasco da Gama",
        art: "Roberto (Vasco da Gama), 16 gols"
    },
    {
        campeao: "Coritiba",
        vice: "Bangu",
        art: "Edmar (Guarani), 20 gols"
    },
    {
        campeao: "São Paulo",
        vice: "Guarani",
        art: "Careca (São Paulo), 25 gols"
    },
    {
        campeao: "Sport",
        vice: "Guarani",
        art: "Muller (São Paulo), 10 gols"
    },
    {
        campeao: "Bahia",
        vice: "Internacional",
        art: "Nilson (Internacional), 15 gols"
    },
    {
        campeao: "Vasco da Gama",
        vice: "São Paulo",
        art: "Tulio (Goiás), 11 gols"
    },
    {
        campeao: "Corinthians",
        vice: "São Paulo",
        art: "Charles (Bahia), 11 gols"
    },
    {
        campeao: "São Paulo",
        vice: "Bragantino",
        art: "Paulinho Mclaren (Santos), 15 gols"
    },
    {
        campeao: "Flamengo",
        vice: "Botafogo",
        art: "Bebeto (Vasco da Gama), 18 gols"
    },
    {
        campeao: "Palmeiras",
        vice: "Vitória",
        art: "Guga (Santos), 15 gols"
    },
    {
        campeao: "Palmeiras",
        vice: "Corinthians",
        art: "Tulio (Botafogo) e Amoroso (Guarani), 13 gols"
    },
    {
        campeao: "Botafogo",
        vice: "Santos",
        art: "Tulio (Botafogo), 23 gols"
    },
    {
        campeao: "Grêmio",
        vice: "Portuguesa",
        art: "Paulo Nunes (Grêmio) e Renaldo (Atlético-MG), 16 gols"
    },
    {
        campeao: "Vasco da Gama",
        vice: "Palmeiras",
        art: "Edmundo (Vasco da Gama), 29 gols"
    },
    {
        campeao: "Corinthians",
        vice: "Cruzeiro",
        art: "Viola (Santos), 21 gols"
    },
    {
        campeao: "Corinthians",
        vice: "Atlético-MG",
        art: "Guilherme (Atlético MG), 28 gols"
    },
    {
        campeao: "Vasco da Gama",
        vice: "São Caetano",
        art: "Adhemar (São Caetano), 22 gols"
    },
    {
        campeao: "Athletico-PR",
        vice: "São Caetano",
        art: "Romario (Vasco da Gama), 21 gols"
    },
    {
        campeao: "Santos",
        vice: "Corinthians",
        art: "Rodrigo Fabri (Grêmio) e Luis Fabiano (São Paulo), 19 gols"
    },
    {
        campeao: "Cruzeiro",
        vice: "Santos",
        art: "Dimba (Goias), 31 gols"
    },
    {
        campeao: "Santos",
        vice: "Athletico-PR",
        art: "Washington (Atlhetico-PR), 34 gols"
    },
    {
        campeao: "Corinthians",
        vice: "Internacional",
        art: "Romário (Vasco), 22 gols"
    },
    {
        campeao: "São Paulo",
        vice: "Internacional",
        art: "Souza (Goiás), 17 gols"
    },
    {
        campeao: "São Paulo",
        vice: "Santos",
        art: "Josiel (Paraná Clube), 20 gols"
    },
    {
        campeao: "São Paulo",
        vice: "Grêmio",
        art: "Kléber Pereira (Santos), Keirrison (Coritiba) e Washington (Fluminense), 21 gols"
    },
    {
        campeao: "Flamengo",
        vice: "Internacional",
        art: "Diego Tardelli (Atlético-MG) e Adriano Imperador (Flamengo), 19 gols"
    },
    {
        campeao: "Fluminense",
        vice: "Cruzeiro",
        art: "Jonas (Grêmio), 23 gols"
    },
    {
        campeao: "Corinthians",
        vice: "Vasco da Gama",
        art: "Borges (Santos), 23 gols"
    },
    {
        campeao: "Fluminense",
        vice: "Atlético-MG",
        art: "Fred (Fluminense), 20 gols"
    },
    {
        campeao: "Cruzeiro",
        vice: "Grêmio",
        art: "Éderson (Athletico-PR), 21 gols"
    },
    {
        campeao: "Cruzeiro",
        vice: "São Paulo",
        art: "Fred (Fluminense), 18 gols"
    },
    {
        campeao: "Corinthians",
        vice: "Atlético-MG",
        art: "Ricardo Oliveira (Santos), 20 gols"
    },
    {
        campeao: "Palmeiras",
        vice: "Santos",
        art: "Diego Souza (Sport), William Pottker (Ponte Preta) e Fred (Fluminense), 14 gols"
    },
    {
        campeao: "Corinthians",
        vice: "Palmeiras",
        art: "Jô (Corinthians) e Henrique Dourado (Fluminense), 18 gols"
    },
    {
        campeao: "Palmeiras",
        vice: "Flamengo",
        art: "Gabigol (Santos), 18 gols"
    },
    {
        campeao: "Flamengo",
        vice: "Santos",
        art: "Gabigol (Flamengo), 25 gols"
    },
    {
        campeao: "Flamengo",
        vice: "Internacional",
        art: "Luciano (São Paulo) e Claudinho (Bragantino), 18 gols"
    },
    {
        campeao: "Atlético-MG",
        vice: "Flamengo",
        art: "Hulk (Atlético-MG), 19 gols"
    }
]

const accordion = document.getElementById("accordionFlushExample")

listcamp.map((item, index) => {

    const htmlaccordionitem = `
        <div class="accordion-item accordion-dark">
            <h2 class="accordion-header" id="flush-heading${index}">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse${index}" aria-expanded="false" aria-controls="flush-collapse${index}">
                    ${index + 1959}
                </button>
            </h2>
            <div id="flush-collapse${index}" class="accordion-collapse collapse" aria-labelledby="flush-heading${index}"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                    <span style="font-weight: bold;">• Campeão:</span> ${item.campeao} <br>
                    <span style="font-weight: bold;">• Vice-campeão:</span> ${item.vice} <br>
                    <span style="font-weight: bold;">• Artilheiro:</span> ${item.art}
                </div>
            </div>
        </div>
    `

    accordion.innerHTML += htmlaccordionitem
})