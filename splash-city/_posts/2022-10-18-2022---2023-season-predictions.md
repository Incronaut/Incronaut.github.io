---
layout: blog
number: "007"
title: "2021-2022 Warriors Season Predictions"
short_description: "I asked my friends some VERY specific questions about the upcoming Warriors season, and here's what I got"
author: Incronaut
---

With the 2022-2023 NBA Season on the horizon, I once again asked my friends to predict some very specific Warriors-related scenarios.  Here we go towards another amazing season!  Final statistics and thoughts at the bottom:

{% for answer in site.data.dubspredictions21 %}
<h3>{{ answer.name }}</h3>
<div style="color: {{ answer.color }};">
<p style="margin: 0;">1. Who on the Dubs will be named All Star?:<b style="color:black;"> {{ answer.answer1 }}</b> <div style="color: #88001b;">{{ answer.answer1b }}</div></p>
<p style="margin: 0;">2. Will Steph win MVP?:<b style="color:black;"> {{ answer.answer2 }}</b> <div style="color: #88001b;">{{ answer.answer2b }}</div></p>
<p style="margin: 0;">3. Will Steph score the hightest PPG?:<b style="color:black;"> {{ answer.answer3 }}</b><div style="color: #88001b;">{{ answer.answer3b }}</div></p>
<p style="margin: 0;">4. Will steph avg 30ppg+ for third time in his career? (Last Year: 25.5 PPG):<b style="color:black;"> {{ answer.answer4 }}</b><div style="color: #88001b;">{{ answer.answer4b }}</div></p>
<p style="margin: 0;">5. Warriors regular season seed?:<b style="color:black;"> {{ answer.answer5 }}</b><div style="color: #88001b;">{{ answer.answer5b }}</div></p>
<p style="margin: 0;">6. Warriors regular season record (82 games)?:<b style="color:black;"> {{ answer.answer6 }}</b><div style="color: #88001b;">{{ answer.answer6b }}</div></p>
<p style="margin: 0;">7. How far will we get in the playoffs? (May add who we lose to, if any):<b style="color:black;"> {{ answer.answer7 }}</b><div style="color: #88001b;">{{ answer.answer7b }}</div></p>
<p style="margin: 0;">8. Over/Under: Klay's 3pt% -> 38.5% (Last Year: 38.5%):<b style="color:black;"> {{ answer.answer8 }}</b><div style="color: #88001b;">{{ answer.answer8b }}</div></p>
<p style="margin: 0;">9. Over/Under: Curry 3s -> 300 (Last Year: 285):<b style="color:black;"> {{ answer.answer9 }}</b><div style="color: #88001b;">{{ answer.answer9b }}</div></p>
<p style="margin: 0;">10. Over/Under: Draymond Technicals -> 17 (Last Year: 18):<b style="color:black;"> {{ answer.answer10 }}</b><div style="color: #88001b;">{{ answer.answer10b }}</div></p>
<p style="margin: 0;">11. Over/Under: Poole PPG -> 18.5ppg (Last Year: 18.5ppg):<b style="color:black;"> {{ answer.answer11 }}</b><div style="color: #88001b;">{{ answer.answer11b }}</div></p>
<p style="margin: 0;">12. Over/Under: Andrew Wiggins PPG -> 17.2ppg  (Last Year: 17.2ppg):<b style="color:black;"> {{ answer.answer12 }}</b><div style="color: #88001b;">{{ answer.answer12b }}</div></p>
<p style="margin: 0;">13. Over/Under: Iggy Total Minutes Played -> 500min (Last Year: 603min):<b style="color:black;"> {{ answer.answer13 }}</b><div style="color: #88001b;">{{ answer.answer13b }}</div></p>
<p style="margin: 0;">14. Will there be a blockbuster trade?:<b style="color:black;"> {{ answer.answer14 }}</b><div style="color: #88001b;">{{ answer.answer14b }}</div></p>
<p style="margin: 0;">15. Will either Poole or Kuminga posterize LeBron at least once this season (regular or playoffs)?:<b style="color:black;"> {{ answer.answer15 }}</b><div style="color: #88001b;">{{ answer.answer15b }}</div></p>
<p style="margin: 0;">16. Does anyone on the Warriors make more than 14 3s in a regular season game and break the NBA record?:<b style="color:black;"> {{ answer.answer16 }}</b><div style="color: #88001b;">{{ answer.answer16b }}</div></p>
<p style="margin: 0;">17. Kuminga/Moody/Wiseman- Who will take the biggest step forward this year? (subjective):<b style="color:black;"> {{ answer.answer17 }}</b><div style="color: #88001b;">{{ answer.answer17b }}</div></p>
<p style="margin: 0;">18. Kuminga/Moody/Wiseman- Who will have the most MPG?:<b style="color:black;"> {{ answer.answer18 }}</b><div style="color: #88001b;">{{ answer.answer18b }}</div></p>
<p style="margin: 0;">19. Kuminga/Moody/Wiseman- Who will have the most PPG?:<b style="color:black;"> {{ answer.answer19 }}</b><div style="color: #88001b;">{{ answer.answer19b }}</div></p>
<p style="margin: 0;">20. Donte DiVincenzo vs JaMychal Green MPG?:<b style="color:black;"> {{ answer.answer20 }}</b><div style="color: #88001b;">{{ answer.answer20b }}</div></p>
<p style="margin: 0;">21. Who will be the starting Center at end of season?:<b style="color:black;"> {{ answer.answer21 }}</b><div style="color: #88001b;">{{ answer.answer21b }}</div></p>
<p style="margin: 0;">22. Who is leaving the Warriors after this season, if anyone? :<b style="color:black;"> {{ answer.answer22 }}</b><div style="color: #88001b;">{{ answer.answer22b }}</div></p>
<p style="margin: 0;">23. Will Draymond Green start the season in shape?:<b style="color:black;"> {{ answer.answer23 }}</b><div style="color: #88001b;">{{ answer.answer23b }}</div></p>
<p style="margin: 0;">24. Who will have the nastiest block this year?:<b style="color:black;"> {{ answer.answer24 }}</b><div style="color: #88001b;">{{ answer.answer24b }}</div></p>
<p style="margin: 0;">25. Will Wiseman stay healthy all season?:<b style="color:black;"> {{ answer.answer25 }}</b><div style="color: #88001b;">{{ answer.answer25b }}</div></p>
<p style="margin: 0;">26. Patrick Baldwin vs Ryan Rollins: Who will spend less time in the G-League?:<b style="color:black;"> {{ answer.answer26 }}</b><div style="color: #88001b;">{{ answer.answer26b }}</div></p>
<p style="margin: 0;">27. Curry vs Poole: Who will have the higher FT%?:<b style="color:black;"> {{ answer.answer27 }}</b><div style="color: #88001b;">{{ answer.answer27b }}</div></p>
<p style="margin: 0;">28. Will Poole win 6MOTY?:<b style="color:black;"> {{ answer.answer28 }}</b><div style="color: #88001b;">{{ answer.answer28b }}</div></p>
<p style="margin: 0;">29. Does Draymond stay on the Warriors the entire 22-23 season?:<b style="color:black;"> {{ answer.answer29 }}</b><div style="color: #88001b;">{{ answer.answer29b }}</div></p>
<p style="margin: 0;">30. Does Poole sign a rookie extension with Warriors before Oct 17? If yes, how much will he get paid total?:<b style="color:black;"> {{ answer.answer30 }}</b><div style="color: #88001b;">{{ answer.answer30b }}</div></p>
</div>
<br/>
{% endfor %}

All right everyone! That should do it for our 2021-2022 Warriors Season Predictions!  I'll post an article at the end of the regular season with the real statistics and we'll see who the winner is!  Thanks for reading!