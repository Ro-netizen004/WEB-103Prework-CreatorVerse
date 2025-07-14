WEB103 Prework - CreatorVerse
Submitted by: Rodela Ghosh

About this web app: CreatorVerse is a content creator catalog app that allows users to browse, add, edit, and delete their favorite content creators. It supports creators from platforms like YouTube, Instagram, TikTok, and Twitter, and provides details such as category, description, and social media links.

Time spent: ~20 hours

✅ Required Features
The following required functionality is completed:

 A logical component structure in React is used to create the frontend of the app

 At least five content creators are displayed on the homepage of the app

 Each content creator item includes their name, a link to their channel/page, and a short description of their content

 API calls use the async/await design pattern via Axios or fetch()

 Clicking on a content creator item takes the user to their details page, which includes their name, url, and description

 Each content creator has their own unique URL

 The user can edit a content creator to change their name, url, or description

 The user can delete a content creator

 The user can add a new content creator by entering a name, url, or description and then it is displayed on the homepage

✨ Optional Features
The following optional features are implemented:

 The content creator items are displayed in a creative format, like cards instead of a list

 An image of each content creator is shown on their content creator card

💡 Additional Features
 Featured creators carousel with quick add/remove buttons

 Responsive design for mobile and desktop

 Search bar to filter creators by name, category, or description

 Live toggle to show “Add” or “Remove” status based on whether creator exists in database

 Smooth animations and transitions for UI interactions

 Custom loading spinner

 Footer with social/email links

🎥 Video Walkthrough
Here's a walkthrough of implemented required features:

👉🏿<img src='http://i.imgur.com/YOUR_GIF_LINK.gif' title='Video Walkthrough' width='700' alt='Video Walkthrough' />

GIF created with: ScreenToGif

🧠 Notes
One challenge was syncing the UI state (e.g., “Add”/“Remove” buttons) with the Supabase database on reload — this was solved with useEffect and a helper function.

Another challenge was ensuring search filtering remained client-side and efficient with state updates.

I explored React’s component reusability and conditional rendering patterns to improve maintainability.

📝 License
Copyright [2025] [Aledor Plays]

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at:

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.

