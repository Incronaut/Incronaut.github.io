---
layout: blog
number: "007"
title: "2021-2022 Warirors Season Predictions"
short_description: "I asked my friends some VERY specific questions about the upcoming Warriors season, and here's what I got."
author: Incronaut
---

With the 2021-2022 NBA Season on the horizon, I asked my friends to predict some very specific Warriors-related scenarios.  Here's what I got!  Final statistics and thoughts at the bottom:

{% for answer in site.data.21dubspredictions %}
<h3>{{ answer.name }}</h3>
<p style="margin: 0;">1. Who on the Dubs will be named All Star?:<b> {{ answer.answer1 }}</b></p>
<p style="margin: 0;">2. Will Steph win MVP?:<b> {{ answer.answer2 }}</b></p>
<p style="margin: 0;">3. Will Steph score the hightest PPG?:<b> {{ answer.answer3 }}</b></p>
<p style="margin: 0;">4. Will steph avg 30ppg+ for third time in his career?:<b> {{ answer.answer4 }}</b></p>
<p style="margin: 0;">5. When will Klay play his first game?:<b> {{ answer.answer5 }}</b></p>
<p style="margin: 0;">6. How healthy will Klay be by playoffs?:<b> {{ answer.answer6 }}</b></p>
<p style="margin: 0;">7. Warriors regular season seed?:<b> {{ answer.answer7 }}</b></p>
<p style="margin: 0;">8. Warriors regular season record (82 games)?:<b> {{ answer.answer8 }}</b></p>
<p style="margin: 0;">9. How far will we get in the playoffs?:<b> {{ answer.answer9 }}</b></p>
<p style="margin: 0;">10. Will a Rookie (Wiseman, Kuminga, Moody) start by the playoffs?:<b> {{ answer.answer10 }}</b></p>
<p style="margin: 0;">11. Which Rookie (Wiseman, Kuminga, Moody) will have the highest PPG (regular season)?:<b> {{ answer.answer11 }}</b></p>
<p style="margin: 0;">12. Which Vet (Iggy, Otto, Bjelica) will have the highest PPG (regular season)?:<b> {{ answer.answer12 }}</b></p>
<p style="margin: 0;">13. Which Vet (Iggy, Otto, Bjelica) will have the highest MPG (regular season)?:<b> {{ answer.answer13 }}</b></p>
<p style="margin: 0;">14. Over/Under: Curry 3s -> 384:<b> {{ answer.answer14 }}</b></p>
<p style="margin: 0;">15. Over/Under: Draymond Technicals -> 17:<b> {{ answer.answer15 }}</b></p>
<p style="margin: 0;">16. Over/Under: Poole PPG -> 16.0ppg:<b> {{ answer.answer16 }}</b></p>
<p style="margin: 0;">17. Over/Under: JTA 3pt % -> 39%:<b> {{ answer.answer17 }}</b></p>
<p style="margin: 0;">18. Will there be a blockbuster trade?:<b> {{ answer.answer18 }}</b></p>
<p style="margin: 0;">19. Will Andrew Wiggins stay with the Warriors after 21-22 season?:<b> {{ answer.answer19 }}</b></p>
<p style="margin: 0;">20. Will either Poole or Kuminga posterize LeBron at least once this season (regular or playoffs)?:<b> {{ answer.answer20 }}</b></p>
<p style="margin: 0;">21. Will Poole win the "Most Improved Player" award?:<b> {{ answer.answer21 }}</b></p>
<p style="margin: 0;">22. Does anyone on the Warriors make more than 14 3s in a regular season game and break the NBA record?:<b> {{ answer.answer22 }}</b></p>
<p style="margin: 0;">23. Do the Warriors win their opening game? (Lakers):<b> {{ answer.answer23 }}</b></p>
<p style="margin: 0;">24. Do the Warriors win their Christmas game? (Suns):<b> {{ answer.answer24 }}</b></p>
<br/>
{% endfor %}