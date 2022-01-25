const Utils = {
    // Randomize array in-place using Durstenfeld shuffle algorithm
    shuffleArray: function (array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    },
    // Assumming an array was shuffled, this function just moves its first element
    // to the end, and then returns the new first.
    selectFromShuffled: function (shuffled_array) {
        shuffled_array.push(shuffled_array.splice([0], 1)[0]);
        return shuffled_array[0];
    }
};

export default Utils;
