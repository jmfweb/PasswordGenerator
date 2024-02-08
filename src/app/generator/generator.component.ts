import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-generator",
	standalone: true,
	templateUrl: "./generator.component.html",
	styleUrls: ["./generator.component.css"],
})
export class GeneratorComponent implements OnInit {
	constructor() {}

	ngOnInit() {
		function generatePassword(): string {
			const length: number = Math.floor(Math.random() * (12 - 8 + 1)) + 8; // Generates a random length between 8 and 12 characters
			const characters: string =
				"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}[]|\\;:'\",.<>?";
			let password: string = "";
			for (let i: number = 0; i < length; i++) {
				const randomChar: string = characters.charAt(Math.floor(Math.random() * characters.length));
				password += randomChar;
			}
			return password;
		}

		function showPassword() {
			const generatedPassword: string = generatePassword();
			const passwordInput: HTMLInputElement = document.getElementById(
				"password"
			) as HTMLInputElement;
			passwordInput.value = generatedPassword;
		}

		// Get the button and add a listener for the click event
		const generateButton: HTMLButtonElement = document.getElementById(
			"generateButton"
		) as HTMLButtonElement;
		generateButton.addEventListener("click", showPassword);
	}
}
