// PASSWORD VALIDATION FUNCTION

export default function FormValidation(
  passwd,
  character,
  number,
  symbol,
  characterState,
  numberState,
  symbolState
) {
  const paswdElement = document.getElementById(passwd);
  const charactersLength = document.getElementById(character);
  const numbers = document.getElementById(number);
  const symbols = document.getElementById(symbol);

  if (/[0-9]/.test(paswdElement.value)) {
    numberState(true);
    numbers.style.visibility = "visible";
  } else {
    numberState(false);
    numbers.style.visibility = "hidden";
  }

  if (paswdElement.value.length >= 8) {
    characterState(true);
    charactersLength.style.visibility = "visible";
  } else {
    characterState(true);
    charactersLength.style.visibility = "hidden";
  }
  if (/[!\@\#\&\%\?\*\^\()\_\=\+\-\.\,\<\>]/.test(paswdElement.value)) {
    symbolState(true);
    symbols.style.visibility = "visible";
  } else {
    symbolState(false);
    symbols.style.visibility = "hidden";
  }

  return;
}

