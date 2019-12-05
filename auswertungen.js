/* 
 * Diese Funktion holt sich den Wert, den der User eingegeben hat und vergleicht
 * ihn mit dem erwarteten Wert.
 * Sie schreibt dann das Ergebnis des Vergleichs ins HTML-Dokument, sodass der
 * User es sehen kann.
 * Diese Funktion funktioniert nur fuer die Aufgabe "Einfaches Addieren".
 */
function AuswertungEinfachesAddieren()
{
    var eingabe = document.getElementById("EingabeEinfachesAddieren");
    var ausgabe = document.getElementById("AntwortEinfachesAddieren");

    if (eingabe.value == 4) {
        ausgabe.innerHTML = "Korrekt!";
    }
    else {
        ausgabe.innerHTML = "leider falsch -- probier's nochmal...";
    }
    ausgabe.style.visibility = "visible";
}


/* 
 * Diese Funktion macht das gleiche, aber man kann sieh fuer mehrere Aufgaben
 * verwenden -- man muss nur den Namen des Raetsels angeben (und die Namen im
 * HTML korrekt gesetzt haben), dann spart es Screibarbeit, weil hier nicht fuer
 * jedes Raetse eine neue Funktion geschrieben werden muss.
 */
function Auswertung(raetselName, erwarteteAntwort)
{
    var eingabe = document.getElementById("Eingabe" + raetselName);
    var ausgabe = document.getElementById("Antwort" + raetselName);

    if (eingabe.value == erwarteteAntwort) {
        ausgabe.innerHTML = "Korrekt!";
    }
    else {
        ausgabe.innerHTML = "leider falsch -- probier's nochmal...";
    }
    ausgabe.style.visibility = "visible";
}