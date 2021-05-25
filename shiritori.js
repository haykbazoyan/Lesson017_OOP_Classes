class Shiritori {
  constructor(words = [], game_over = true) {
    this.words = words;
    this.game_over = game_over;
  }

  play(item) {
    if (this.words.length === 0) {
      this.words.push(item);
      return this.words;
    }

    let wordsLastIndex = this.words.length - 1;
    let wordsLastIndexLastLetter = this.words[wordsLastIndex].length - 1;

    if (this.words[wordsLastIndex][wordsLastIndexLastLetter] === item[0]) {
      this.words.push(item);
      return this.words;
    }
    this.game_over = false;
    return `Game Over:: ${item} does not start with ${this.words[wordsLastIndex][wordsLastIndexLastLetter]}`;
  }

  restart() {
    this.game_over = true;
    this.words = [];
    return `Game Restarted`;
  }
}

let myShiritori = new Shiritori();
console.log(myShiritori.play("apple"));
console.log(myShiritori.play("ear"));
console.log(myShiritori.play("rhino"));
console.log(myShiritori.play("corn"));
console.log("words:: ", myShiritori.words);
console.log(myShiritori.restart());
console.log("words:: ", myShiritori.words);
