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

export async function getAllTeamsReport() {
    let response = await fetch(`${flexoURL}/report/teams`, {
        "method": "GET",
        "headers": {
            "Authorization": "Bearer " + flexoSecret
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

export async function postEvent(data) {
    let response = await fetch(`${flexoURL}/events`, {
        "method": "POST",
        "headers": {
            "Authorization": "Bearer " + flexoSecret
        },
        "data": data
    });

    if (response.ok) {
        return "Attack submission successful."
    } else {
        alert("HTTP-Error: " + response.status)
        return "Attack submission unsuccessful. Reason: " + response.status
    }
}