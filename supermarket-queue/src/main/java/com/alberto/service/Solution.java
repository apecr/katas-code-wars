package com.alberto.service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Solution {

	private static int tiempoTotal = 0;

	public static Object solveSuperMarketQueue(int[] customers, int numberQueues) {
		tiempoTotal = 0;
		List<Integer> listaColas = new ArrayList<>();
		for (int i = 0; i < numberQueues; i++) {
			listaColas.add(0);
		}
		for (int customerTime : customers) {
			int minCola = Collections.min(listaColas);
			tiempoTotal += minCola;
			boolean colaAsignada = false;
			for (int i = 0; i < listaColas.size(); i++) {
				if (listaColas.get(i) == minCola && !colaAsignada) {
					listaColas.set(i, customerTime);
					colaAsignada = true;
				} else {
					listaColas.set(i, listaColas.get(i) - minCola);
				}
			}
		}
		tiempoTotal += Collections.max(listaColas);
		return tiempoTotal;
	}

}
