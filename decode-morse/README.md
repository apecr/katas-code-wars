<div class="markdown" id="description"><p></p><div style="border:1px solid;position:relative;padding:1ex 1ex 1ex 11.1em;"><div style="position:absolute;left:0;top:0;bottom:0; width:10em; padding:1ex;text-align:center;border:1px solid;margin:0 1ex 0 0;color:#000;background-color:#eee;font-variant:small-caps">Part of Series 1/3</div><div>This kata is part of a series on the Morse code. After you solve this kata, you may move to the <a href="/kata/decode-the-morse-code-advanced" target="_blank">next one</a>.</div></div><br>In this kata you have to write a simple <a href="https://en.wikipedia.org/wiki/Morse_code" target="_blank">Morse code</a> decoder. While the Morse code is now mostly superceded by voice and digital data communication channels, it still has its use in some applications around the world.<p></p>
<p>The Morse code encodes every character as a sequence of "dots" and "dashes". For example, the letter <code>A</code> is coded as <code>·−</code>, letter <code>Q</code> is coded as <code>−−·−</code>, and digit <code>1</code> is coded as <code>·−−−</code>. The Morse code is case-insensitive, traditionally capital letters are used. When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words. For example, the message <code>HEY JUDE</code> in Morse code is <code>···· · −·−−   ·−−− ··− −·· ·</code>.</p>
<p><strong>NOTE:</strong> Extra spaces before or after the code have no meaning and should be ignored.</p>
<p>In addition to letters, digits and some punctuation, there are some special service codes, the most notorious of those is the international distress signal <a href="https://en.wikipedia.org/wiki/SOS" target="_blank">SOS</a> (that was first issued by <a href="https://en.wikipedia.org/wiki/RMS_Titanic" target="_blank">Titanic</a>), that is coded as <code>···−−−···</code>. These special codes are treated as single special characters, and usually are transmitted as separate words.</p>
<p>Your task is to implement a function <code>decodeMorse(morseCode)</code>, that would take the morse code as input and return a decoded human-readable string.</p>
<p>For example:</p>
<pre style="display: none;"><code class="lang-coffeescript">decodeMorse(<span class="hljs-string">'.... . -.--   .--- ..- -.. .'</span>)
<span class="hljs-regexp">//</span>should <span class="hljs-keyword">return</span> <span class="hljs-string">"HEY JUDE"</span>
</code></pre>
<pre style="display: none;"><code class="lang-cpp">decodeMorse('.... . -.--   .--- ..- -.. .')
//should return "HEY JUDE"
</code></pre>
<pre style="display: none;"><code class="lang-csharp">MorseCodeDecoder.Decode(<span class="hljs-string">'.... . -.--   .--- ..- -.. .'</span>)
<span class="hljs-comment">//should return "HEY JUDE"</span>
</code></pre>
<pre style="display: none;"><code class="lang-elixir">MorseCode.decode(<span class="hljs-string">'.... . -.--   .--- ..- -.. .'</span>)
<span class="hljs-comment">#=&gt; "HEY JUDE"</span>
</code></pre>
<pre style="display: none;"><code class="lang-haskell"><span class="hljs-title">decodeMorse</span> <span class="hljs-string">".... . -.--   .--- ..- -.. ."</span>
<span class="hljs-comment">--should return "HEY JUDE"</span>
</code></pre>
<pre style="display: none;"><code class="lang-java">MorseCodeDecoder.decode(<span class="hljs-string">".... . -.--   .--- ..- -.. ."</span>)
<span class="hljs-comment">//should return "HEY JUDE"</span>
</code></pre>
<pre><code class="lang-javascript">decodeMorse(<span class="hljs-string">'.... . -.--   .--- ..- -.. .'</span>)
<span class="hljs-comment">//should return "HEY JUDE"</span>
</code></pre>
<pre style="display: none;"><code class="lang-php">decode_morse(<span class="hljs-string">'.... . -.--   .--- ..- -.. .'</span>)
<span class="hljs-comment">//should return "HEY JUDE"</span>
</code></pre>
<pre style="display: none;"><code class="lang-python">decodeMorse(<span class="hljs-string">'.... . -.--   .--- ..- -.. .'</span>)
<span class="hljs-comment">#should return "HEY JUDE"</span>
</code></pre>
<pre style="display: none;"><code class="lang-ruby">decodeMorse(<span class="hljs-string">'.... . -.--   .--- ..- -.. .'</span>)
<span class="hljs-comment">#should return "HEY JUDE"</span>
</code></pre>
<pre style="display: none;"><code class="lang-typescript">decodeMorse(<span class="hljs-string">'.... . -.--   .--- ..- -.. .'</span>)
<span class="hljs-comment">//should return "HEY JUDE"</span>
</code></pre>
<p>The Morse code table is preloaded for you as a dictionary, feel free to use it. In CoffeeScript, C++, JavaScript, PHP, Python, Ruby and TypeScript, the table can be accessed like this: <code>MORSE_CODE['.--']</code>, in Java it is <code>MorseCode.get('.--')</code>, in C# it is <code>MorseCode.Get('.--')</code>, in Haskell the codes are in a <code>Map String String</code> and can be accessed like this: <code>morseCodes ! ".--"</code>, in Elixir it is <code>morse_codes</code> variable.</p>
<p>All the test strings would contain valid Morse code, so you may skip checking for errors and exceptions. In C#, tests will fail if the solution code throws an exception, please keep that in mind. This is mostly because otherwise the engine would simply ignore the tests, resulting in a "valid" solution.</p>
<p>Good luck!</p>
<p>After you complete this kata, you may try yourself at <a href="http://www.codewars.com/kata/decode-the-morse-code-advanced" target="_blank">Decode the Morse code, advanced</a>.</p>
</div>