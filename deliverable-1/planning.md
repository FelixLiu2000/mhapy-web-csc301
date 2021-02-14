# MHAPy
> _Note:_ This document is meant to evolve throughout the planning phase of your project.   That is, it makes sense for you commit regularly to this file while working on the project (especially edits/additions/deletions to the _Highlights_ section). Most importantly, it is a reflection of all the planning you work you've done in the first iteration. 
 > **This document will serve as a master plan between your team, your partner and your TA.**

## Product Details
 
#### Q1: What are you planning to build?

We are planning to build a website whose purpose is to provide people a platform for those who want to improve their mental health. The website matches those working on their mental health with other users in order to interact and build a healthy social space.  Users can share what’s on their mind via a timeline on the home page. Via interactions with a chatbot, users can get helpful answers to questions, or suggested mental health routines.  The chatbot automatically links four “accountability partners” (other users of the app) who will see each others’ concerns, status updates, etc through posts on a timeline. There is also an analytics page that displays certain trends and statistics from data collected by the chatbot over time. The accountability partners also have access to group, and individual messaging, for more focused dialogs. Users can message others, create group chats, and receive notifications whenever an accountability partner messages them.

Mockups are included in the deliverable-1 folder.

#### Q2: Who are your target users?

Our main target users are those with, or who are passionate about working on mental health issues.  Another target user would be professionals such as psychiatrists who want access to their patient’s data.  Below, we’ve included three personas to better encapsulate target users.

[![Screen-Shot-2021-02-14-at-11-44-34.png](https://i.postimg.cc/3xV0VWr7/Screen-Shot-2021-02-14-at-11-44-34.png)](https://postimg.cc/Mn0Gj6jr)

[![Screen-Shot-2021-02-14-at-11-44-42.png](https://i.postimg.cc/xdmN2Yqm/Screen-Shot-2021-02-14-at-11-44-42.png)](https://postimg.cc/8F1zR2Rk)

[![Screen-Shot-2021-02-14-at-11-44-48.png](https://i.postimg.cc/85BF7HRP/Screen-Shot-2021-02-14-at-11-44-48.png)](https://postimg.cc/YG02VQDJ)

#### Q3: Why would your users choose your product? What are they using today to solve their problem/need?

Why choose your product:
- our product has good chat bot functionality, more free flowing conversation with the chat bot
- human interaction through our product - free accountability peer to peer communication in addition to therapists


What are they using today:
- apps with chat bots that are restrictive, can only choose specific choices
- apps with chatbot have CBT
- apps connect with therapist
- apps that journal mental health
- mental health app have bad retention rate


Why does your product (as described in your answer to Q1) fits the needs of your users (as described in your answer to Q2)?
- other mental health apps are tedious, with no human to human interaction
- holistic view, emphasis on social interaction, should help with retention rate
- integrated with journaling to make one app for all
- reducing the burden, user is not responsible for reaching out when they are in a crisis because people reach out to the user on the regular basis because people are notified when the user is in crisis (deviating from norm)
- monthly mental health report from chatbot, variation in mood and substance use, so one can see patterns (e.g. what is your mood, how many cigarettes smoked, hours of sleep)

How does this align with your partner's organization's values/mission/mandate?


> Short (1 - 2 min' read max)
 * We want you to "connect the dots" for us - Why does your product (as described in your answer to Q1) fits the needs of your users (as described in your answer to Q2)?
 * Explain the benefits of your product explicitly & clearly. For example:
    * Save users time (how much?)
    * Provide users with more accurate and/or informative data (what kind of data? Why is it useful to them?)
    * Does this application exist in another form? If so, how does your differ and provide value to the users?
    * How does this align with your partner's organization's values/mission/mandate?

#### Q4: How will you build it?

> Short (1-2 min' read max)
 * What is the technology stack? Specify any and all languages, frameworks, libraries, PaaS products or tools. 
 * How will you deploy the application?
 * Describe the architecture - what are the high level components or patterns you will use? Diagrams are useful here. 
 * Will you be using third party applications or APIs? If so, what are they?
 * What is your testing strategy?

#### Q5: What are the user stories that make up the MVP?

NOTE:if you want to vent to the chatbot, you can talk to them about anything

User Story 1:
- As someone with anxiety, I want to regularly check in with the chat bot, in order to better track my mental health
- Given the user opens the app on the homepage, when user clicks on the chatbot button and talk to the chat bot, then chat bot will record the users' mood, substance use so that user can check a historical report of their mood at any time

User Story 2:
- As someone who just had a something bad happened, I want to reach out to my accountability partner, in order to vent, talk to them, and improve my mood
- Given the user opens the app, when I search for my accountability partner, then I can message them directly

User Story 3:
- As someone who wrote something out of the ordinary in the chatbot, I want someone to recognize I'm in crisis, in order to let my accountability partners reach out
- Given the user messages the chat bot, when the chat bot detects something out of the norm, then the app notifies the user's accountability partners so they can reach out

User Story 4:
- As a psychiatrist (a special user),  I want to track my patient's mental health through the app, in order to better help them
- Given the psychiatrist opens their patient's home page, when they click on their historical report, then they get access to their patient's historical moods

User Story 5:
- As a mental health organization (a special user), I want to spread education about mental health issues, in order to better help people
- Given the organizational homepage, when the organization post, then everyone can see their posts globally even if they don't follow the organization

User Story 6:
- As a person with anxiety, I want to talk to the chat bot and have it generate a journal for me, in order to speed things up
- Given the user chats to the chat bot, when the chat bot detects something worth posting, then the chat bot asks user if they want to post it as a journal (automatically generates)

 * At least 5 user stories concerning the main features of the application - note that this can broken down further
 * You must follow proper user story format (as taught in lecture) ```As a <user of the app>, I want to <do something in the app> in order to <accomplish some goal>```
 * User stories must contain acceptance criteria. Examples of user stories with different formats can be found here: https://www.justinmind.com/blog/user-story-examples/. **It is important that you provide a link to an artifact containing your user stories**.
 * If you have a partner, these must be reviewed and accepted by them

----
## Intellectual Property Confidentiality Agreement 
> Note this section is **not marked** but must be completed briefly if you have a partner. If you have any questions, please contact David and Adam.
>  
**By default, you own any work that you do as part of your coursework.** However, some partners may want you to keep the project confidential after the course is complete. As part of your first deliverable, you should discuss and agree upon an option with your partner. Examples include:
1. You can share the software and the code freely with anyone with or without a license, regardless of domain, for any use.
2. You can upload the code to GitHub or other similar publicly available domains.
3. You will only share the code under an open-source license with the partner but agree to not distribute it in any way to any other entity or individual. 
4. You will share the code under an open-source license and distribute it as you wish but only the partner can access the system deployed during the course.

**Briefly describe which option you have agreed to. Your partner cannot ask you to sign any legally binding agreements or documents pertaining to non-disclosure, confidentiality, IP ownership, etc.**

----

## Process Details

#### Q6: What are the roles & responsibilities on the team?

Describe the different roles on the team and the responsibilities associated with each role. 
 * Roles should reflect the structure of your team and be appropriate for your project. Not necessarily one role to one team member.

List each team member and:
 * A description of their role(s) and responsibilities including the components they'll work on and non-software related work
 * 3 technical strengths and weaknesses each (e.g. languages, frameworks, libraries, development methodologies, etc.)

#### Q7: What operational events will you have as a team?

Describe meetings (and other events) you are planning to have. 
 * When and where? Recurring or ad hoc? In-person or online?
 * What's the purpose of each meeting?
 * Other events could be coding sessions, code reviews, quick weekly sync meeting online, etc.
 * You must have at least 2 meetings with your project partner (if you have one) before D1 is due. Describe them here:
   * What did you discuss during the meetings?
   * What were the outcomes of each meeting?
   * You must provide meeting minutes.
   * You must have a regular meeting schedule established by the second meeting.  
  
#### Q8: What artifacts will you use to self-organize?

List/describe the artifacts you will produce in order to organize your team.       

 * Artifacts can be To-Do lists, Task boards, schedule(s), meeting minutes, etc.
 * We want to understand:
   * How do you keep track of what needs to get done?
   * **How do you prioritize tasks?**
   * How do tasks get assigned to team members?
   * How do you determine the status of work from inception to completion?

#### Q9: What are the rules regarding how your team works?

Describe your team's working culture.

**Communications:**
 * What is the expected frequency? What methods/channels are appropriate? 
 * If you have a partner project, what is your process (in detail) for communicating with your partner?
 
**Meetings:**
 * How are people held accountable for attending meetings, completing action items? Is there a moderator or process?
 
**Conflict Resolution:**
 * List at least three team scenarios/conflicts you discussed in lecture and how you decided you will resolve them. Indecisions? Non-responsive team members? Any other scenarios you can think of?




----
## Highlights

Specify 3 - 5 key decisions and/or insights that came up during your meetings
and/or collaborative process.

 * Short (5 min' read max)
 * Decisions can be related to the product and/or the team process.
    * Mention which alternatives you were considering.
    * Present the arguments for each alternative.
    * Explain why the option you decided on makes the most sense for your team/product/users.
 * Essentially, we want to understand how (and why) you ended up with your current product and process plan.
 * This section is useful for important information regarding your decision making process that may not necessarily fit in other sections. 
