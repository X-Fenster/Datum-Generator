const Datum = document.getElementById('datum');
let tag;
let monat;
Datum.innerHTML = ' \n';

function generieren() {
    tag = Math.ceil(Math.random() * 31);
    monat = Math.round(Math.random() * 11);

    if(tag > 30 && monat === 1 || tag > 30 && monat === 3 ||  tag > 30 && monat === 5 || tag > 30 && monat === 7 || tag > 30 && monat === 9 || tag > 30 && monat === 11) {
        tag--;
    }else if(tag > 28 && monat === 1) {
        tag = 28;
    } else {
        tag = tag;
    }

    switch (monat) {
        case 0: 
        monat = "Januar";
        break;

        case 1:
        monat = "Februar";
        break;

        case 2:
        monat = "März";
        break;

        case 3:
        monat = "April";
        break;

        case 4:
        monat = "Mai";
        break;

        case 5:
        monat = "Juni";
        break;

        case 6:
        monat = "Juli";
        break;

        case 7:
        monat = "August";
        break;

        case 8:
        monat = "September";
        break;

        case 9:
        monat = "Oktober";
        break;

        case 10:
        monat = "November";
        break;

        case 11:
        monat = "Dezember";
        break;

        default:
        monat = "Fehler";
        break;
    }
    
    Datum.innerHTML = `${tag}. ${monat}`;
    // console.log(tag, monat);
}