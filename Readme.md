# Rätsel mit Auswertung

Hier ist eine einfache Website mit minimalem HTML und CSS, in der man
einfache Fragen beantworten kann, und die Antwort dann automatisch geprüft
wird.


# Hinweise

- Man kann aus dem HTML-/JavaScript-Code direkt die richtige Antwort ablesen.
- Um ein neues Rätsel einzuführen, kopiert man am besten ein altes und passt alle `id=...`-Teile an.
  Die JavaScript-Funktion `Auswertung` erwartet den Input vom User in einem
  Element mit `id="Eingabe..."` und ein Feld für die Ausgabe mit
  `id="Ausgabe..."`.


# Zur Umsetzung

Um die Antwort anzeigen zu können, wird ein `<p>`-Element angelegt, das durch
`style.css` anfangs unsichtbar gemacht ist.
Wenn eine Antwort eingetippt ist, dann wird in diesem Element zuerst per

    ausgabe.innerHTML = "Korrekt!";

die Auswertung beschrieben und es dann per

    ausgabe.style.visibility = "visible";

sichtbar gemacht.