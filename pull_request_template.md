## PR Template
 
 ### Description (Required)
 
 Please provide the context of this PR.
 Here are some questions to help you write this information.


- What does this PR do?
 - Is this a feature or bug fix?
 - Is there any  source of documentation of the feature or the fix? 
 (Add links to Bugherd or Presentation or Zeplin or issue)
 - Any background context you want to provide?



 ### Considerations on Implementation (Optional)
 Add any concerns in your implementation that you want the reviewer to focus or respond to.
 
 ### Reviewing/Testing steps (Required)
 
 Provide any instructions that might be required to test this bug or feature.
Like unit tests, steps, use cases or screenshots of the pages to review.
 
 ------
 
## Frontend Example
 
 ### Description 
 
 closes #1000001 New Alert Bar
 
 New Feature - Alert Bar
 Zeplin - https://zpl.io/29z5k7y
 
 ### Considerations in the implementation
 - Colors are fixed by interface IFeedback, however I think it is better to keep them open.
 
 ### Reviewing/ Testing Steps
 
 You can review this feature in this page
 https://future-standard.github.io/scorer-ui-kit/storybook/?path=/story/alerts-atoms--alert-bar
 
Here are some screenshots of the expected result.




-----

## Backend Example

 ### Description 
 
This PR covers the requirement of obtaining the values of the latest event by Zone Id.
This is a fix, previously we were receiving the first event.
 
You can review the information about it in this bugherd link:

https://www.bugherd.com/projects/248190/tasks/2418273


 ### Considerations in the implementation
 We don’t have the key to this event, it is required to iterate through all the events. 
 
 ### Reviewing/ Testing Steps
 
 You can review this feature by running this test script

Bash ./mytest
