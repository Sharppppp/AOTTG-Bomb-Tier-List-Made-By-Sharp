// Function to save data to local storage
function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

// Function to load data from local storage
function loadData(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}

// Function to navigate to another page
function navigateTo(page) {
    window.location.href = page;
}

// Fetch and parse the .txt file from GitHub
async function fetchPlayerDataFromGitHub() {
    const response = await fetch('https://raw.githubusercontent.com/Sharppppp/AOTTG-Bomb-Tier-List-Made-By-Sharp/main/PlayerData.txt');
    const text = await response.text();
    return parsePlayerData(text);
}

async function fetchOpinionDataFromGitHub() {
    const response = await fetch('https://raw.githubusercontent.com/Sharppppp/AOTTG-Bomb-Tier-List-Made-By-Sharp/main/OpinionPlayers.txt');
    const text = await response.text();
    return parseOpinionData(text);
}

function parsePlayerData(text) {
    const lines = text.trim().split('\n');
    
    const players = lines.map(line => {
        const match = line.match(/Name: ([^,]+), Description: ([^,]+), AvgPoints: ([^,]+), Rank: ([^,]+), Speed: ([^,]+), Endurance: ([^,]+), Combat: ([^,]+), Tactical: ([^,]+), Adaptability: ([^,]+), Experience: ([^,]+), Duel Score: (\d+), Wins: (\d+), Losses: (\d+), Draws: (\d+)/);
        if (match) {
            return {
                name: match[1].trim(),
                description: match[2].trim(),
                avgPoints: parseFloat(match[3].trim()), // Changed to parseFloat for avgPoints
                rank: match[4].trim(),
                speed: match[5].trim(),
                endurance: match[6].trim(),
                combat: match[7].trim(),
                tactical: match[8].trim(),
                adaptability: match[9].trim(),
                knowledge: match[10].trim(),
                duelScore: parseInt(match[11].trim(), 10),
                win: parseInt(match[12].trim(), 10),
                loss: parseInt(match[13].trim(), 10),
                draw: parseInt(match[14].trim(), 10)
            };
        }
        return null;
    }).filter(player => player !== null);
    
    return players;
}

function parseOpinionData(text) {
    const lines = text.trim().split('\n');
    
    const players = lines.map(line => {
        const match = line.match(/Name: ([^,]+), Rank: ([^,]+), Speed: ([^,]+), Endurance: ([^,]+), Combat: ([^,]+), Tactical: ([^,]+), Adaptability: ([^,]+), Experience: ([^,]+), Duel Score: (\d+), Wins: (\d+), Losses: (\d+), Draws: (\d+)/);
        if (match) {
            return {
                name: match[1].trim(),
                rank: match[2].trim(),
                speed: match[3].trim(),
                endurance: match[4].trim(),
                combat: match[5].trim(),
                tactical: match[6].trim(),
                adaptability: match[7].trim(),
                knowledge: match[8].trim(),
                duelScore: parseInt(match[9].trim(), 10),
                win: parseInt(match[10].trim(), 10),
                loss: parseInt(match[11].trim(), 10),
                draw: parseInt(match[12].trim(), 10)
            };
        }
        return null;
    }).filter(player => player !== null);
    
    return players;
}
