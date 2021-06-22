import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password = "";

  getLength(value: string) {
    const parsedValue = parseInt(value);

    if (!isNaN(parsedValue)) {
      //isNaN -> not a number
      this.length = parsedValue;
    }
  }

  useLetters() {
    this.includeLetters = !this.includeLetters;
  }

  useNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  useSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onButtonClick() {
    /* //this is to check in inspect -> console 

    console.log(`
    Letters : ${this.includeLetters}
    Numbers : ${this.includeNumbers}
    Symbols : ${this.includeSymbols}
    `);

    */
    const numbers = "1234567890";
    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const symbols = "!@#$%^&*()";

    let validChars = "";
    if (this.includeLetters) {
      validChars += letters;
    }
    if (this.includeNumbers) {
      validChars += numbers;
    }
    if (this.includeSymbols) {
      validChars += symbols;
    }

    let generatePassword = "";
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatePassword += validChars[index];
    }
    this.password = generatePassword;
  }
}
