package com.alberto.service;

public class BitCounting {

	private static final String BIT_ONE = "1";

	public static int countBits(int number) {
		return recorreBitsAndCountOnes(Integer.toBinaryString(number));
	}

	private static int recorreBitsAndCountOnes(String bit) {
		int count = 0;
		for (int i = 0; i < bit.length(); i++) {
			if (bit.substring(i, i + 1).equals(BIT_ONE)) {
				count++;
			}
		}
		return count;
	}

}
