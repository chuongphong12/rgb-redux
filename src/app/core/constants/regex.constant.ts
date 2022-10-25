export const RegexHelper = {
	NUMBER: /^[0-9]*$/,
	PASSWORD: /(?=.*[0-9])(?=.*[a-zA-Z]).{8,}/, //'^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
	RGB_PASSWORD: /^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
	ONLY_ALPHABET: /^[a-zA-Z]+$/,
	ALPHA_SPACE: /^[a-zA-Z\\s]+$/,
	ALPHA_NUMBER: /^[a-zA-Z0-9\\s]+$/,
	SERIAL_NUMBER: /^[0-9]{7}[a-z0-9]{8,15}$/,
	EMAIL: /^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$/,
	AlPHABETIC_NUMBER_SPACE: /^[\w\s]*$/,
	Letters_Special_Letters: /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?\s]*$/,
};

