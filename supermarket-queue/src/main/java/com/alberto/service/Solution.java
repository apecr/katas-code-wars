package com.alberto.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

public class Solution {

	private static int tiempoTotal = 0;
	private static List<Integer> listaColas = new ArrayList<>();
	private static boolean colaAsignada = false;

	public static Object solveSuperMarketQueue(int[] customers, int numberQueues) {
		tiempoTotal = 0;
		listaColas = new ArrayList<>();
		colaAsignada = false;
		for (int i = 0; i < numberQueues; i++) {
			listaColas.add(0);
		}
		Arrays.stream(customers).forEach(customerTime -> {
			int minCola = Collections.min(listaColas);
			tiempoTotal += minCola;
			listaColas = listaColas.stream().map(cola -> {
				if (cola == minCola && !colaAsignada) {
					cola = customerTime;
					colaAsignada = true;
				} else {
					cola = cola - minCola;
				}
				return cola;
			}).collect(Collectors.toList());
			colaAsignada = false;
		});
		tiempoTotal += Collections.max(listaColas);
		Arrays.sort(customers);
		return tiempoTotal;
	}

//	public static int solveSuperMarketQueue(int[] customers, int n) {
//		int[] result = new int[n];
//		for (int i = 0; i < customers.length; i++) {
//			result[0] += customers[i];
//			Arrays.sort(result);
//		}
//		return result[n - 1];
//	}

}
