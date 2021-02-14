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

Many mental health apps put much of the onus on the user, often either supplying large-scale questionnaires, or prescribing specific routines to help.  With an app like notOK, the user must add their own trusted contacts who will be notified if the user decides they are in dire need of help. Another app called “What’s up” prescribes routines and a long questionnaire to try to gauge a baseline.

The goal of the product is to off-load much of this via a chatbot, which links accountability partners (i.e other users) automatically. The chatbot will detect when the user's response deviates from the norm, notifying accountability partners automatically.  This helps relieve the burden of self-diagnosis, or explicitly messaging an individual for help.

A personal timeline in the style of social media is also employed in hopes of increasing the low retention rates found among many mental health apps, with a study showing less than 4% median retention rate by 15 days.  The intention here is for users to share strategies that may work for them, their mental health progress, or share personal experiences.

Some of the target users discussed previously, like “Passionate Julie”, share a common goal related to reaching out to others in need. Importantly, many of these users also require help for themselves, so they would benefit from being able to fulfill both needs simultaneously. This product captures this desire by establishing a safe place for individuals to not only seek out help, but to offer help as well, thus providing a sense of community not found on other mental health apps.

With regards to the web app itself, making a website to complement the existing mobile application provides flexibility to users that wish to spend time using the service on a computer. It also helps to expand the service to those without mobile devices, which may encourage more individuals to use it. Finally, having both a website and a mobile app helps to provide the impression of a fleshed-out and legitimate service, thus improving the reputation of the product from the perspective of both current and potential users.

Hence, the app relates to MHAPy’s mission of making mental health help accessible to young people by using the platform to build a mental health support community.


#### Q4: How will you build it?

The main languages used will be React, mongoDB, firebase for chatbot interaction, mySQL, Python Django, node.js.

There is a mobile application of the project already along development, so much of the server-side infrastructure already exists.  Much of the project will take primarily in React, creating all of the relevant UI and features. Firebase was used to implement the chatbot, so we will need to create the relevant webhooks in our application.  MongoDB and MySQL are already being utilized to store user information, and node.js will be used to handle the primary back-end API calls of the website, with some occasional Python Django as that's what the client mobile app was built with.

On a high level, we will divide the work into components by web functionality. Since our focus is on the front-end UI, the components will include timeline, messaging, notifications, chat bot, and analytics.

The third party APIs we will use is Google DialogFlow for the chatbot, as this is the API currently used by our partner MHAPy.
The goal will be to create small unit tests that align with our weekly meetings, as to ensure continuous integration.  The testing will primarily use Jest, and will run automatically on pushes to the Developer/main branch.


#### Q5: What are the user stories that make up the MVP?

User Story 1:
As someone with anxiety, I want to regularly check in with the chat bot, in order to better track my mental health
Given the user opens the app on the homepage, when user clicks on the chatbot button and talk to the chat bot, then chat bot will record the users' mood, substance use so that user can check a historical report of their mood at any time

User Story 2:
As someone who just had a something bad happened, I want to reach out to my accountability partner, in order to vent, talk to them, and improve my mood
Given the user opens the app, when I search for my accountability partner, then I can message them directly

User Story 3:
As someone who wrote something out of the ordinary in the chatbot, I want someone to recognize I'm in crisis, in order to let my accountability partners reach out
Given the user messages the chat bot, when the chat bot detects something out of the norm, then the app notifies the user's accountability partners so they can reach out

User Story 4:
As a psychiatrist (a special user), I want to track my patient's mental health through the app, in order to better help them
Given the psychiatrist opens their patient's home page, when they click on their historical report, then they get access to their patient's historical moods

User Story 5:
As a mental health organization (a special user), I want to spread education about mental health issues, in order to better help people
Given the organizational homepage, when the organization post, then everyone can see their posts globally even if they don't follow the organization

User Story 6:
As a person with anxiety, I want to talk to the chat bot and have it generate a journal for me, in order to speed things up
Given the user chats to the chat bot, when the chat bot detects something worth posting, then the chat bot asks user if they want to post it as a journal (automatically generates)


----
## Intellectual Property Confidentiality Agreement 
> Note this section is **not marked** but must be completed briefly if you have a partner. If you have any questions, please contact David and Adam.
>  
**By default, you own any work that you do as part of your coursework.** However, some partners may want you to keep the project confidential after the course is complete. As part of your first deliverable, you should discuss and agree upon an option with your partner. Examples include:
1. You can share the software and the code freely with anyone with or without a license, regardless of domain, for any use.
2. You can upload the code to GitHub or other similar publicly available domains.
3. You will only share the code under an open-source license with the partner but agree to not distribute it in any way to any other entity or individual. 
4. You will share the code under an open-source license and distribute it as you wish but only the partner can access the system deployed during the course.

**We agreed to Option 3, we have agreed to share the code under an open-source license with the partner but agree to not distribute it to other entities or individuals.**

----

## Process Details

#### Q6: What are the roles & responsibilities on the team?

Xi Yu (Kristin) Huang: UI/UX Designer
Create mock ups and adjust front-end style choices
Contribute to front-end development with focus in UI/UX
Strengths: Python, UX design, React
Weaknesses: C, MySQL, Java

Su Young Lee: DevOps
Create a CI via unit tests    -Work on frontend otherwise   
More responsible for checking merges etc., ensuring everything is working as intended
Strengths: Python, Java, React
Weaknesses: MongoDB, C, MySQL

Felix Liu: Back-end Integration/Development
Write functions to link front-end to back-end APIs and access databases
Contribute to front-end as needed
Strengths: React, Javascript, ExpressJS
Weaknesses: Java, DevOps, Responsive Frontend

Magomed Evloev: Front-end Development
Manages user interactions with website, and displays relevant data from database accordingly
Communicate with Back-end developers to ease transfer data from back end to front end
Strengths: React, HTML/CSS, SQL, JS, Python
Weaknesses: Java, DevOps, C


#### Q7: What operational events will you have as a team?

We have organized a weekly schedule where we will meet up every Monday at 2:00pm EST using Google Meet.  The goal of these weekly meetings is to check in on progress, and set up weekly goals for what should be implemented by the next meeting.  It was also important to consider weeks in which the workload may be heavier than normal, in which case the weekly meeting also is where we can discuss when to have an extra meeting for code sessions and the like.

We have scheduled a biweekly meeting schedule with our partner every Sunday at 1:30pm.  Our intention here is to give an overview of progress, clarify details/goals of specific functionality, and to get feedback from our partner.

##### Meeting 1 with the client (Saturday Feb 6, 2021 @ 4:30PM)
###### Purpose
A preliminary meeting to establish expectations and project scope with the client.

###### Discussion
1. The client outlined his background and rationale for MHAPy, and described the existing mobile application and its current functionality.
2. The technologies used in the existing application were outlined, and example use cases or user personas for the project were deliberated.
3. Expectations for project scope and future meeting times were discussed, as well as functionality from the mobile application that should be present in the web application being created.
4. Next steps for future meeting were discussed and a meeting time was set

###### Outcomes
We established a biweekly meeting schedule with the client. A preliminary project scope was agreed to, along with a timeline for the client to provide project resources from the existing mobile app over the next week. A follow-up meeting to review the new resources and clarify project scope is set to take place on Thursday February 11th, at 8:30PM.

##### Meeting 2 (Thursday Feb 11, 2021 @ 8:30PM)
###### Purpose
Follow up to the previous meeting that clarifies the project scope with regards to new resources made available from the existing mobile app.
###### Discussion
1. Team asked questions regarding unclear functionality in the existing mobile app uncovered during testing
2. Missing features were suggested by the team to the client, and client’s primary engineer provided explanations regarding additional scope related to admin dashboard
3. Final project scope was agreed to by client and team, consisting of changes and suggestions discussed in the meeting
###### Outcomes
Missing or unclear features in the mobile app were clarified or resolved. A final project scope was established, barring the admin functionality, and this ruled out any future changes that may arise from updates to the existing mobile app. Proposal to add admin functionality to project scope is being considered by the team. The next meeting will be the first of the biweekly meeting schedule set in Meeting 1, and will take place on Sunday February 21st at 2PM.

  
#### Q8: What artifacts will you use to self-organize?

We plan to use a product backlog on Trello to keep track of the overarching features we need to implement, and use our weekly monday meetings for sprint planning, where we will each break down features from the product backlog to form the sprint backlog.  Using the roles as guidelines, each member will propose their features to complete for the week, with the group weighing in with the goal of ensuring equal workload. 

We will prioritize tasks by using Trello to mark some tasks more important and urgent.

The key in the sprint backlog is to have concrete, small features that are testable and can be observably determined as completed, as to allow us to assess our progress and completion of said tasks allocated in the previous week.

For general meeting notes and other materials that we won’t hand in, we plan to have a team google drive.


#### Q9: What are the rules regarding how your team works?

We will communicate with our partner biweekly on Sunday from 1:30 PM to 2:30 PM.

The main means of communication is via Facebook Messenger, where we expect messages to be responded to within 2 days.  The weekly monday meetings as well as the biweekly partner meetings on Saturday are with the expectation that all members attend. In general, our philosophy is to be understanding in light of circumstances, and thus the importance lies in following up should any issues arise.

In the event that there are circumstances in which a member is unable to attend a meeting, we expect to be notified in advance of the meetings (ideally the day before), or as soon as possible afterwards (within two days).  Should a team member be unavailable to contact for a week, we consider this an extenuating circumstance and would contact the TA to let them know.  

Especially in regards to our weekly Monday meetings, it’s important that the absent member(s) follow up with their completion of the tasks on the sprint backlog, as well as allocating their new tasks for the week.  If a team member is unavailable to contact for a week, we consider this an extenuating circumstance and would contact the TA to let them know.

In the event that a team member is unable to deliver on their weekly implementation goals, our priority is to first understand why it occurred (e.g short on time due to other classes, unexpected difficulty of task).  If the task was harder/more time-consuming than expected, we will either break the task into smaller subproblems and re-allocate.  If the team member was busier than they expected with other material, we expect a heavier workload for the next week to maintain pace.

If a conflict arises within a team, we expect everyone to remain professional and not let things get personal. Team members should aim to hear the other side out and come to a mutual agreement. 


----
## Highlights

Coming up with how regular the meetings are was difficult, as more frequent meetings would help with faster turnaround times if something came up, but would mean more overhead from constantly creating new sprints/task allocation. We opted for weekly meetings, but noted to regularly check Messenger and create a poll for when to hold an extra meeting if needed.

Since the android application is already being developed, setting ground rules with our partner was important to prevent new mobile features from expanding our project scope beyond what was achievable. So, we reached an agreement with the client to disallow adding new features that weren’t discussed in our first two meetings. 

It was also difficult to do any further planning with regards to how website features should be implemented, since the existing mobile app is not completely functional. To solve this problem we decided that the UI will be thematically similar, but we are not going to make a 1:1 recreation of the mobile application. This helps us adjust scope of project as needed, allows us to add in smaller web-only functionality, and makes sure we are not at risk of having to completely overhaul UI. It also fit the needs of the client, since they ultimately preferred a functional product over a webapp that looked identical to the mobile app.

We had some difficulty deciding what technologies to use to implement the website. The client gave us a lot of freedom in this matter, but the mobile app has existing back-end functionality that must be integrated regardless of our front-end technology choices. We considered completely revamping the back-end to only use the bare minimum of the existing app, like the chatbot functionality, but we quickly realized this would create a lot of redundancy in the backend and would limit our ability to produce a front-end that met the client’s needs. Instead, we decided to integrate most of the backend with the existing one. To facilitate this integration, we requested that the client provide as much back-end documentation as possible when it becomes available so that we could design the back-end of the website to use the existing APIs of the mobile app. Finally, the front-end choice of React was reached due to familiarity with the technology amongst our team members. It also matched the modern, Facebook-inspired feel that the client desired, which we inferred after testing the mobile app.
ctions. 
