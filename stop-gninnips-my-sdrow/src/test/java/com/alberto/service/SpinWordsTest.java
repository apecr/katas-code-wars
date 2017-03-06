package com.alberto.service;

import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class SpinWordsTest {
	@Test
    public void WelcomeShouldReturnemocleW() {
      assertEquals("emocleW", new SpinWords().spinWords("Welcome"));
    }
	
	@Test
    public void HeyFellowWarriorsShouldReturnHeywollefsroirraw() {
      assertEquals("Hey wollef sroirraw", new SpinWords().spinWords("Hey fellow warriors"));
    }
    
}