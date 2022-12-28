# Installare Flutter su Ubuntu per compilare per Android

[Riferimento documentazione ufficiale Flutter]: https://docs.flutter.dev/get-started/install/linux	"La guida ufficiale"

* Installa flutter da snap `sudo snap install flutter --classic`
* Avvia `flutter doctor` per verificare la correttezza dell'installazione. Manchera' Android studio.
* Installare [Andorid studio]: https://developer.android.com/studio
* Avvia nuovamente `flutter doctor` per verificare la correttezza dell'installazione di Android studio. Mancherano alcune parti da installare con SDK manager di Android Studio.
* Avviare Android Studio -> SDK manager.
* Installare una versione di Android (in genere non serve una troppo recente).
* Da SDK Tools installare `Android SDK Command-line Tools`.
* Lanciare `flutter doctor --android-licenses` per accttare le licenze.
* Lanciare Android Studio -> More actions -> ADV Manager.
* Creare un device di debug.
* Da Android Studio installare i plugin 'Flutter' e 'Dart' (Dart si seleziona in automatico con Flutter)