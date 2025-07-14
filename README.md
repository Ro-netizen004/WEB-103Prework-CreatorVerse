# WEB103 Prework - CreatorVerse

Submitted by: Rodela Ghosh

About this web app: 
CreatorVerse is a React web application that allows users to explore, save, and manage their favorite content creators. Users can browse a list of featured creators, add or remove them to their personal collection, and view detailed pages for each creator. The app supports search by name, category, or description, and allows full CRUD (Create, Read, Update, Delete) functionality. Built with Supabase as a backend and styled with Tailwind CSS, CreatorVerse offers a smooth, responsive, and interactive user experience.

Time spent: 20 hours

## Required Features

The following **required** functionality is completed:

<!-- 👉🏿👉🏿👉🏿 Make sure to check off completed functionality below -->
- [x] **A logical component structure in React is used to create the frontend of the app**
- [x] **At least five content creators are displayed on the homepage of the app**
- [x] **Each content creator item includes their name, a link to their channel/page, and a short description of their content**
- [x] **API calls use the async/await design pattern via Axios or fetch()**
- [x] **Clicking on a content creator item takes the user to their details page, which includes their name, url, and description**
- [x] **Each content creator has their own unique URL**
- [x] **The user can edit a content creator to change their name, url, or description**
- [x] **The user can delete a content creator**
- [x] **The user can add a new content creator by entering a name, url, or description and then it is displayed on the homepage**

The following **optional** features are implemented:

- [ ] Picocss is used to style HTML elements
- [x] The content creator items are displayed in a creative format, like cards instead of a list
- [x] An image of each content creator is shown on their content creator card

The following **additional** features are implemented:

* [x] List anything else that you added to improve the site's functionality!
 Search bar that filters creators by name, category, or description (case-insensitive)
 Responsive card layout with hover effects
 Featured Creators section with add/remove functionality
 Real-time UI updates without page reload after adding or deleting creators
 Visual loading spinner while data is being fetched
 Styled with Tailwind CSS for clean design and mobile responsiveness
 Custom empty state for when no creators are added
 Footer with external links

## Video Walkthrough

Here's a walkthrough of implemented required features:

👉🏿<img src='http://i.imgur.com/link/to/your/gif/file.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

Link to video walkthrough: https://youtu.be/A_GaZTFDaWw
Link to site: https://web-103prework-creatorverse.onrender.com/

## Notes

Describe any challenges encountered while building the app or any additional context you'd like to add.

Building this app was a rewarding learning experience. Some of the key challenges I encountered included:

Learning Supabase: It was my first time integrating a backend-as-a-service platform like Supabase. Setting up tables, handling permissions, and managing async API calls took some experimentation.

State Management: Keeping the UI in sync with the database, especially when adding/removing creators, required careful use of useEffect and useState.

Deploying with Render: Understanding how to configure build and publish settings (especially the frontend/ root directory and dist folder from Vite) was initially confusing, but I learned how to troubleshoot build logs and fix directory structure issues.

## License

Copyright [👉🏿 2025] [👉🏿 Rodela Ghosh]

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.