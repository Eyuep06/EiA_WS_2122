namespace sequenzmemory {

    //var sign = prompt("What's your sign?");

    function shuffle(array) {
        let currentIndex = array.length, randomIndex;

        // While there remain elements to shuffle...
        while (currentIndex != 0) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    let eingabe: string[] = ["a", "b", "c", "d", "e"];
    shuffle(eingabe);
    console.log(eingabe);


}
