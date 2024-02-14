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
			const length: number = Math.floor(Math.random() * (17 - 15 + 1)) + 15; // Generates a random length between 15 and 17 characters

			const characters: string =
				"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}[]|\\;:'\",.<>?!@#$%^&*()_+{}[]|";
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

		function copyToClipboard(inputElement: HTMLInputElement): void {
			// Select the content of the input
			inputElement.select();

			// Copy to clipboard
			navigator.clipboard
				.writeText(inputElement.value)
				.then(() => {
					alert("Password copied to clipboard!");
				})
				.catch((error) => {
					console.error("Error copying text to clipboard:", error);
				});
		}

		const inputElement = document.getElementById("password") as HTMLInputElement;
		const copyButton = document.getElementById("copyButton") as HTMLButtonElement;

		copyButton.addEventListener("click", () => {
			copyToClipboard(inputElement);
		});
	}
}
