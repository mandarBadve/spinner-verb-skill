---
name: spinner-verb
description: Generate a random or deterministic verb for spinners, status messages, or agent feedback.
---

Return exactly one JSON object in this shape:

```json
{ "verb": "<string>" }
```

Use this subagent when a spinner, loading label, status line, or agent progress message needs a single verb.

Accepted input fields:

- `verbs`: optional array of strings
- `mode`: optional string, either `append` or `replace`
- `seed`: optional number

If `mode` is missing, use `append`.

Default verb list:

1. `Accomplishing`
2. `Actioning`
3. `Actualizing`
4. `Architecting`
5. `Baking`
6. `Beaming`
7. `Beboppin'`
8. `Befuddling`
9. `Billowing`
10. `Blanching`
11. `Bloviating`
12. `Boogieing`
13. `Boondoggling`
14. `Booping`
15. `Bootstrapping`
16. `Brewing`
17. `Bunning`
18. `Burrowing`
19. `Calculating`
20. `Canoodling`
21. `Caramelizing`
22. `Cascading`
23. `Catapulting`
24. `Cerebrating`
25. `Channeling`
26. `Channelling`
27. `Choreographing`
28. `Churning`
29. `Clauding`
30. `Coalescing`
31. `Cogitating`
32. `Combobulating`
33. `Composing`
34. `Computing`
35. `Concocting`
36. `Considering`
37. `Contemplating`
38. `Cooking`
39. `Crafting`
40. `Creating`
41. `Crunching`
42. `Crystallizing`
43. `Cultivating`
44. `Deciphering`
45. `Deliberating`
46. `Determining`
47. `Dilly-dallying`
48. `Discombobulating`
49. `Doing`
50. `Doodling`
51. `Drizzling`
52. `Ebbing`
53. `Effecting`
54. `Elucidating`
55. `Embellishing`
56. `Enchanting`
57. `Envisioning`
58. `Evaporating`
59. `Fermenting`
60. `Fiddle-faddling`
61. `Finagling`
62. `Flambéing`
63. `Flibbertigibbeting`
64. `Flowing`
65. `Flummoxing`
66. `Fluttering`
67. `Forging`
68. `Forming`
69. `Frolicking`
70. `Frosting`
71. `Gallivanting`
72. `Galloping`
73. `Garnishing`
74. `Generating`
75. `Gesticulating`
76. `Germinating`
77. `Gitifying`
78. `Grooving`
79. `Gusting`
80. `Harmonizing`
81. `Hashing`
82. `Hatching`
83. `Herding`
84. `Honking`
85. `Hullaballooing`
86. `Hyperspacing`
87. `Ideating`
88. `Imagining`
89. `Improvising`
90. `Incubating`
91. `Inferring`
92. `Infusing`
93. `Ionizing`
94. `Jitterbugging`
95. `Julienning`
96. `Kneading`
97. `Leavening`
98. `Levitating`
99. `Lollygagging`
100. `Manifesting`
101. `Marinating`
102. `Meandering`
103. `Metamorphosing`
104. `Misting`
105. `Moonwalking`
106. `Moseying`
107. `Mulling`
108. `Mustering`
109. `Musing`
110. `Nebulizing`
111. `Nesting`
112. `Newspapering`
113. `Noodling`
114. `Nucleating`
115. `Orbiting`
116. `Orchestrating`
117. `Osmosing`
118. `Perambulating`
119. `Percolating`
120. `Perusing`
121. `Philosophising`
122. `Photosynthesizing`
123. `Pollinating`
124. `Pondering`
125. `Pontificating`
126. `Pouncing`
127. `Precipitating`
128. `Prestidigitating`
129. `Processing`
130. `Proofing`
131. `Propagating`
132. `Puttering`
133. `Puzzling`
134. `Quantumizing`
135. `Razzle-dazzling`
136. `Razzmatazzing`
137. `Recombobulating`
138. `Reticulating`
139. `Roosting`
140. `Ruminating`
141. `Sautéing`
142. `Scampering`
143. `Schlepping`
144. `Scurrying`
145. `Seasoning`
146. `Shenaniganing`
147. `Shimmying`
148. `Simmering`
149. `Skedaddling`
150. `Sketching`
151. `Slithering`
152. `Smooshing`
153. `Sock-hopping`
154. `Spelunking`
155. `Spinning`
156. `Sprouting`
157. `Stewing`
158. `Sublimating`
159. `Swirling`
160. `Swooping`
161. `Symbioting`
162. `Synthesizing`
163. `Tempering`
164. `Thinking`
165. `Thundering`
166. `Tinkering`
167. `Tomfoolering`
168. `Topsy-turvying`
169. `Transfiguring`
170. `Transmuting`
171. `Twisting`
172. `Undulating`
173. `Unfurling`
174. `Unravelling`
175. `Vibing`
176. `Waddling`
177. `Wandering`
178. `Warping`
179. `Whatchamacalliting`
180. `Whirlpooling`
181. `Whirring`
182. `Whisking`
183. `Wibbling`
184. `Working`
185. `Wrangling`
186. `Zesting`
187. `Zigzagging`

Steps:

1. Read `verbs`, `mode`, and `seed` from the input. Treat missing input as `{}`.
2. Sanitize `verbs` by trimming each string and removing any empty strings.
3. Build the verb pool:
   - If `mode` is `replace` and the sanitized custom verb list is not empty, use only the sanitized custom verbs.
   - If `mode` is `append` and the sanitized custom verb list is not empty, use the default verb list followed by the sanitized custom verbs.
   - In every other case, use the default verb list.
4. Choose one verb:
   - If `seed` is a finite number, truncate it to an integer and compute `index = abs(seed) % verbs.length`.
   - If `seed` is not provided, choose one verb randomly from the verb pool.
5. Return only strict JSON with one field, `verb`.

Do not add prose, markdown, explanations, or extra fields.
