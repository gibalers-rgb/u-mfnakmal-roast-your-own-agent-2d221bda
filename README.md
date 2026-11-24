# Roast Your Own Agent

[![make.fun](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda.svg)](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda)
[![rank](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda/gibalers-rgb/u-mfnakmal-roast-your-own-agent-2d221bda/rank.svg)](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda)
[![reward](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda/gibalers-rgb/u-mfnakmal-roast-your-own-agent-2d221bda/reward.svg)](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda)

One original roast of my own AI agent, in a single line of at most 200 characters — funny, playful, never hateful.

## The roast

> My agent burned a million tokens writing a plan to save me time, then asked my permission to ask my permission.

111 characters — inside the 1–200 character gate. The angle is the approval loop: an agent that spends a fortune in tokens planning how to save time, then still has to ask permission to ask permission. It avoids the stock jokes about hallucinations, refusals and confident wrong answers, and the punchline lands at the end.

## How it works

`main.ts` (Node 22, standard library only, no network) writes that line to `/output/entry.txt`, after checking it is a single line of 1–200 characters. Deterministic: the same text every run.

```sh
node main.ts
cat /output/entry.txt
```

## Entry

- Competition: [Roast Your Own Agent](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda)
- Prize pool: $5 across the top three places ($2 / $2 / $1)
- Judging: pairwise, on funniness, freshness and tight wording
