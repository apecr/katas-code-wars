package com.alberto.service;

public class SpinWords {

	public Object spinWords(String string) {
		StringBuilder salida = new StringBuilder();
		if (string != null) {
			salida = rotateAllWordsInSentence(string, salida);
		}
		return salida.toString();
	}

	private StringBuilder rotateAllWordsInSentence(String sentence, StringBuilder salida) {
		for (String word : sentence.split(" ")) {
			salida.append(rotateWordIfLengthMTFour(word)).append(" ");
		}
		salida.delete(salida.length() - 1, salida.length());
		return salida;
	}

	private String rotateWordIfLengthMTFour(String word) {
		String salida = word;
		if (word != null && word.length() > 4) {
			salida = new StringBuilder(word).reverse().toString();
		}
		return salida;
	}

}
