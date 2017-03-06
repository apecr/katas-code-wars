package com.alberto.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

public class FindOutlier {

	/**
	 * You are given an array (which will have a length of at least 3, but could
	 * be very large) containing integers. The array is either entirely
	 * comprised of odd integers or entirely comprised of even integers except
	 * for a single integer N. Write a method that takes the array as an
	 * argument and returns N.
	 * 
	 * For example:
	 * 
	 * [2, 4, 0, 100, 4, 11, 2602, 36]
	 * 
	 * Should return: 11
	 * 
	 * [160, 3, 1719, 19, 11, 13, -21]
	 * 
	 * Should return: 160
	 * 
	 * @param exampleTest1
	 * @return
	 */
	public static int find(int[] exampleTest1) {
		
		int salida = 0;
		for (int i = 0; i < exampleTest1.length; i ++) {
			int a0 = exampleTest1[i];
			int a1 = exampleTest1[i+1];
			int a2 = exampleTest1[i+2];
			salida = getNumberNotEqualModAmongOthers(a0, a1, a2);
		}
		return salida;
	}

	private static int getNumberNotEqualModAmongOthers(int a0, int a1, int a2) {
		int salida = 0;
		if (Math.abs(a0 % 2) == Math.abs(a1 % 2)) {
			salida = Math.abs(a2 % 2) == Math.abs(a0 % 2) ? a2 : 0; 
		}
		return salida;
	}


}
