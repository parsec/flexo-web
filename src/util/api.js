export async function getTeams(secret) {
    let response = await fetch(`https://dev-app.flexo.wtf/teams`, {
        "method": "GET",
        "headers": {
            "Authorization": "Bearer " + secret
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

export async function getCategories(secret) {
    let response = await fetch(`https://dev-app.flexo.wtf/categories`, {
        "method": "GET",
        "headers": {
            "Authorization": "Bearer " + secret
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

export async function getEvents(secret) {
    let response = await fetch(`https://dev-app.flexo.wtf/events`, {
        "method": "GET",
        "headers": {
            "Authorization": "Bearer " + secret
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

export async function getTargets(secret) {
    let response = await fetch(`https://dev-app.flexo.wtf/targets`, {
        "method": "GET",
        "headers": {
            "Authorization": "Bearer " + secret
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

export async function getAllTeamsReport(secret) {
    let response = await fetch(`https://dev-app.flexo.wtf/report/teams`, {
        "method": "GET",
        "origin": "https://dev-app.flexo.wtf",
        "headers": {
            "Authorization": "Bearer " + secret
        }
    });

    if (response.ok) {
        const json = await response.json();
        console.log(json)
        return json;
    } else {
        alert("HTTP-Error: " + response.status);
    }
}

export async function getTeamReport(secret, teamID) {
    let response = await fetch(`https://dev-app.flexo.wtf/report/team/${teamID}`, {
        "method": "GET",
        "headers": {
            "Authorization": "Bearer " + secret
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
