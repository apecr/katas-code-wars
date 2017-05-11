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
		Map<Integer, List<Integer>> mapResults = new ConcurrentHashMap<>();
		mapResults.put(0, new ArrayList<Integer>());
		mapResults.put(1, new ArrayList<Integer>());
		for (int a : exampleTest1) {
			mapResults.get(Math.abs(a % 2)).add(a);
			salida = getResultFromMapIfExistCondition(mapResults, 0, 1);
			if (salida == 0) {
				salida = getResultFromMapIfExistCondition(mapResults, 1, 0);
			}
			if (salida != 0) {
				break;
			}
		}
		return salida;
	}
	
	//Best solution:
	// Since we are warned the array may be very large, we should avoid counting values any more than we need to.

    // We only need the first 3 integers to determine whether we are chasing odds or evens.
    // So, take the first 3 integers and compute the value of Math.abs(i) % 2 on each of them.
    // It will be 0 for even numbers and 1 for odd numbers.
    // Now, add them. If sum is 0 or 1, then we are chasing odds. If sum is 2 or 3, then we are chasing evens.
//    int sum = Arrays.stream(integers).limit(3).map(i -> Math.abs(i) % 2).sum();
//    int mod = (sum == 0 || sum == 1) ? 1 : 0;
//
//    return Arrays.stream(integers).parallel() // call parallel to get as much bang for the buck on a "large" array
//            .filter(n -> Math.abs(n) % 2 == mod).findFirst().getAsInt();

	private static int getResultFromMapIfExistCondition(Map<Integer, List<Integer>> mapResults, int condition,
			int notCondition) {
		int salida = 0;
		if (mapResults.get(notCondition).size() > 1) {
			if (mapResults.get(condition).size() == 1) {
				salida = mapResults.get(condition).get(0);
			}
		}
		return salida;
	}

}
