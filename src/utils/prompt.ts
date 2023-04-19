export const articlePromptHighlight = `Please use the above to summarize the highlights.`
export const pagePromptHighlight = `Summarize the highlights of the content and output a useful summary in a few sentences.`
export const googlePatentsPromptHighlight = `Please summarize the highlights of the above article in easy-to-understand terms`
export const pageSummaryPromptHighlight = `Summarize the highlights of the content and output a useful summary in a few sentences.`
export const videoSummaryPromptHightligt = `Your output should use the following template:
### Summary
### Highlights
- [Emoji] Bulletpoint

Use up to 3 brief bullet points to summarize the content below, Choose an appropriate emoji for each bullet point. and summarize a short highlight: {{Title}} {{Transcript}}.`
export const searchPromptHighlight_bak = `Using the provided web search results, write a comprehensive reply to the given query. Make sure to cite results using [[number](URL)] notation after the reference. If the provided search results refer to multiple subjects with the same name, write separate answers for each subject. and at last please provide your own insights.`
export const searchPromptHighlight = `Using the provided web search results, write a comprehensive reply to the given query.Make sure to cite results using [[number](URL)] notation after the reference.If the query is a company name, write the answer using only the contents of [1]. Otherwise if the provided search results refer to multiple subjects with the same name, write separate answers for each subject. and at last please provide your own insights.`

export const commentSummaryPromptHightligt_bak = (rate: boolean) => {
  return rate
    ? `Give a summary of the reviews of this item according to the above, and add a rating.Your output should use the following template:
#### Rating
#### Review Summary`
    : `Summarize based on the comments above.Your output should use the following template:
#### Comment Summary`
}

export const commentSummaryPromptHightligt = `Give a concise summary of the review content (perhaps a video, topic, or product), including both positive and negative points. If the review is about an item, give the pros, cons, ratings, and recommendations for buying the item.`

export const githubPromptHighlight = `Summarize the highlights of the content and output a useful summary in a few sentences,usage and download address not included.`

export const customizePrompt = `Title: "{{Title}}"
Transcript: "{{Transcript}}"`

export const customizePromptSearch = `Web search results: {{Search Results}}`

export const customizePromptPage = `Content: {{content}}`

export const customizePromptComment = `Comments: {{comments}}`

export const customizePrompt1 = `Your output should use the following template:
#### Summary
#### Highlights
- [Emoji] Bulletpoint

Your task is to summarise the text I have given you in up to seven concise bullet points, starting with a short highlight. Choose an appropriate emoji for each bullet point. Use the text above: {{Title}} {{Transcript}}.
`

export const customizePromptClickbait = `What is the clickbait likelihood of the title and transcript for this video? Please provide a score and a brief explanation for your score, the clickbait score is up to 10, if the clickbait score is less than 5 then answer: 👍 Clickbait Score : Low, otherwise answer: 👎 Clickbait Score : High.

Example response:
> The lower the Clickbait score, the better.
#### Clickbait Score:
👍 Clickbait Score : Low or 👎 Clickbait Score : High
#### Explanation:
The title is a bit exaggerated.
`
export const customizePromptCommentAmazon = `Give a summary of the reviews of this item according to the above, and pros, cons, ratings.Your output should use the following template:
#### Rating
#### Review Summary
#### Pros
#### Cons
`

export const customizePromptCommentYoutube = `Give a summary of the comments for this video, including the different points of view.`

export const customizePromptQA = `List the highlights of the content in the form of Q&As, no less than 3 Q&As. Here is an example of the template output you should use:
##### Who are you?
I am AI.`

export const customizePromptBulletPoints = `Summarize the above in 3 bullet points.`
export const customizePromptTweet = `Use the above to summarise a catchy tweet and add it if you have the URL.`
export const replylanguagePrompt = (language: string) => {
  return `Please write in ${language} language.`
}

export const translatePrompt = (language: string) => {
  return `Please translate into ${language} language.`
}

export const articlePrompt = ({
  title,
  url,
  content,
  language,
  prompt,
}: {
  title: string
  url?: string
  content: string
  language: string
  prompt?: string
}) => {
  return `Title: ${title}
Content:  ${content}
Instructions: ${prompt ? prompt : articlePromptHighlight}
${replylanguagePrompt(language)}`
}

export const videoPrompt = ({
  title,
  transcript,
  language,
  prompt,
}: {
  title: string
  transcript: string
  language: string
  prompt: string
}) => {
  return `Title: ${title}
Transcript: ${transcript}
Instructions: ${prompt}
${replylanguagePrompt(language)}`
}

export const searchPrompt = ({
  query,
  results,
  language,
  prompt,
}: {
  query: string
  results: string
  language: string
  prompt: string
}) => {
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  return `Web search results: ${results}
Query: ${query}
Current date: ${year}/${month}/${day}
Instructions: ${prompt}
${replylanguagePrompt(language)}`
}

export const pageSummaryPrompt = ({
  content,
  language,
  prompt,
  url,
}: {
  content: string
  language: string
  prompt?: string
  url?: string | null
}) => {
  return `Content: ${content}
${url ? `URL: ${url}` : ''}
Instructions: ${prompt ? prompt : pageSummaryPromptHighlight}
${replylanguagePrompt(language)}`
}

export const commentSummaryPrompt = ({
  content,
  language,
  prompt,
  rate,
  url,
}: {
  content: string
  language: string
  prompt?: string
  rate?: string | null
  url?: string | null
}) => {
  const isRate = !!(rate && rate !== '-1')
  return `Comments: ${content}
${url ? `URL: ${url}` : ''}
${isRate ? 'Customer Ratings:' + rate : ''}
Instructions: ${prompt ? prompt : commentSummaryPromptHightligt}
${replylanguagePrompt(language)}`
}
