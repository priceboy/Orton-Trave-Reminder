// SIMULATED EXTRACTION
function uploadTicket()
{
let status = document.getElementById("status");

status.innerText="Extracting ticket...";

setTimeout(()=>{

document.getElementById("name").value="John Doe";
document.getElementById("phone").value="670000000";
document.getElementById("pnr").value="ABC123";
document.getElementById("ticketNumber").value="0711234567890";
document.getElementById("airline").value="Ethiopian Airlines";
document.getElementById("flight").value="ET908";
document.getElementById("departure").value="Douala (DLA)";
document.getElementById("arrival").value="Paris (CDG)";
document.getElementById("departureTime").value="2026-03-10T14:30";
document.getElementById("cabin").value="7KG";
document.getElementById("checked").value="23KG";

calculateCheckin();

highlight();

status.innerText="Ticket extracted successfully";

},1000);

}


// CALCULATE CHECKIN

function calculateCheckin()
{

let dep=document.getElementById("departureTime").value;

if(!dep)return;

let d=new Date(dep);

d.setHours(d.getHours()-4);

document.getElementById("checkinTime").value=
d.toISOString().slice(0,16);

}


// GENERATE MESSAGE

function generateMessage()
{

let name=nameField("name");
let airline=nameField("airline");
let flight=nameField("flight");
let dep=nameField("departure");
let arr=nameField("arrival");
let time=nameField("departureTime");
let check=nameField("checkinTime");
let cabin=nameField("cabin");
let checked=nameField("checked");

let msg=
`Dear ${name},

Flight: ${airline} ${flight}
Route: ${dep} → ${arr}

Departure: ${time}
Check-in opens: ${check}

Cabin baggage: ${cabin}
Checked baggage: ${checked}

Thank you.`;

document.getElementById("message").value=msg;

}


// SEND WHATSAPP

function sendWhatsApp()
{

let phone=cleanPhone(nameField("phone"));

let message=document.getElementById("message").value;

if(!phone)return;

let url=
`https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

window.open(url,"_blank");

}


// CLEAN PHONE

function cleanPhone(phone)
{

phone=phone.replace(/\D/g,'');

if(phone.startsWith("0"))
phone=phone.substring(1);

if(!phone.startsWith("237"))
phone="237"+phone;

return phone;

}


// HELPER

function nameField(id)
{
return document.getElementById(id).value;
}


// HIGHLIGHT AUTO

function highlight()
{

document.querySelectorAll("input").forEach(input=>{

if(input.value)
input.classList.add("autofilled");

});

}
