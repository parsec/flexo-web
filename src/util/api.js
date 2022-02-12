const flexoSecret = process.env.REACT_APP_FLEXO_SECRET;
const flexoURL = process.env.REACT_APP_FLEXO_API;

export async function getTeams() {
    let response = await fetch(`${flexoURL}/teams`, {
        "method": "GET",
        "headers": {
            "Authorization": "Bearer " + flexoSecret
        }
    });

    if (response.ok) {
        let json = await response.json();
        console.log(json)
        return json;
    } else {
        alert("HTTP-Error: " + response.status);
    }
}

export async function getCategories() {
    let response = await fetch(`${flexoURL}/categories`, {
        "method": "GET",
        "headers": {
            "Authorization": "Bearer " + flexoSecret
        }
    });

    if (response.ok) {
        let json = await response.json();
        console.log(json)
        return json;
    } else {
        alert("HTTP-Error: " + response.status);
    }
}

export async function getEvents() {
    let response = await fetch(`${flexoURL}/events`, {
        "method": "GET",
        "headers": {
            "Authorization": "Bearer " + flexoSecret
        }
    });

    if (response.ok) {
        let json = await response.json();
        console.log(json)
        return json;
    } else {
        alert("HTTP-Error: " + response.status);
    }
}

export async function getTargets() {
    let response = await fetch(`${flexoURL}/targets`, {
        "method": "GET",
        "headers": {
            "Authorization": "Bearer " + flexoSecret
        }
    });

    if (response.ok) {
        let json = await response.json();
        console.log(json)
        return json;
    } else {
        alert("HTTP-Error: " + response.status);
    }
}

<<<<<<< HEAD
export async function getAllTeamsReport(secret) {
    const response = await fetch('https://dev-api.flexo.wtf/report/teams', {
        'method': 'GET',
        'headers': {
            'Authorization': 'Bearer ' + secret
=======
export async function getAllTeamsReport() {
    let response = await fetch(`${flexoURL}/report/teams`, {
        "method": "GET",
        "headers": {
            "Authorization": "Bearer " + flexoSecret
>>>>>>> staging
        }
    });

    if (response.ok) {
        const data = await response.json()
        console.log('getAllTeamsReport: ' + data)
        return data
    } else {
        alert("HTTP-Error: " + response.status);
    }
}

export async function getTeamReport(teamID) {
    let response = await fetch(`${flexoURL}/report/team/${teamID}`, {
        "method": "GET",
        "headers": {
            "Authorization": "Bearer " + flexoSecret
        }
    });

    if (response.ok) {
        let json = await response.json();
        console.log(json)
        return json;
    } else {
        alert("HTTP-Error: " + response.status);
    }
}
