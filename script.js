
function fetchPNR()
{
    // TEMPORARY DEMO DATA
    document.getElementById("name").value = "John Doe";
    document.getElementById("phone").value = "237670000000";
    document.getElementById("departure").value = "Douala (DLA)";
    document.getElementById("arrival").value = "Paris (CDG)";
    document.getElementById("flight").value = "ET908";

    document.getElementById("departureTime").value = "2026-02-24T14:30";

    calculateCheckin();
    generateMessage();
}


function calculateCheckin()
{
    let departure = document.getElementById("departureTime").value;

    if (!departure) return;

    let date = new Date(departure);

    date.setHours(date.getHours() - 4);

    let formatted = date.toISOString().slice(0,16);

    document.getElementById("checkinTime").value = formatted;
}


function generateMessage()
{
    let name = document.getElementById("name").value;
    let flight = document.getElementById("flight").value;
    let departure = document.getElementById("departure").value;
    let arrival = document.getElementById("arrival").value;
    let departureTime = document.getElementById("departureTime").value;
    let checkinTime = document.getElementById("checkinTime").value;

    let message =
`Dear ${name},

Your flight ${flight}
From: ${departure}
To: ${arrival}

Departure: ${departureTime}

Check-in opens at: ${checkinTime}

Please arrive early.

Safe travels.`;

    document.getElementById("message").value = message;
}


function sendWhatsApp()
{
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;

    let url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank');
}
