Consegna:
L'utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

- creo degli elementi in HTML che poi selezionerò in JS
- creo un ciclo for per avere il numero desiderato di elementi poi da creare
CREAZIONE, PERSONALIZZAZIONE E VISUALIZZAZIONE ELEMENTO CREATO IN JS
- 1. creo l'elemento dentro il ciclo for 
- 2. creo la classe e la personalizzo in CSS
- 3. aggiungo la classe all'elemento creato, in modo che vengano visualizzate le proprietà CSS
- 4. richiamo l'elemento a cui desidero collegarlo e dove venga visualizzato e vi appendo l'elemento creato
- ripeto gli step precedenti processo, per aggiungere contenuto alle celle, e vi collego l'indice del ciclo for, cosi verranno visualizzati i numeri (+1 in modo che l'indice parta da 1, altrimenti vedremmo da 0 a 99)
- creo un event listener che quando clicco sulla cella, cambia colore e appare il contenuto (richiamo la cella dentro l'event listener e ci aggiungo la classe) [per far funzionare la nuova classe personalizzata in CSS, nel CSS devo richiamare l'elemento insieme alla prima classe creata ed aggiungervi la nuova classe creata, con le proprie proprietà, es. : square.article lo vedremo con le sue proprietà, square.article.active è come lo vedremo una volta cliccato, e di conseguenza tutti gli altri elementi che sono figli diretti di article.square.active, verranno visualizzati col proprio stile una volta cliccati]
- creo un secondo event listener in cui richiamo il bottone creato in HTML e lo "sommo" all'elemento desiderato, ma questa volta rimuovendo la classe, per simulare la nuova generazione del campo


Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7