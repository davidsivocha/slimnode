SlimNode
========
A NodeJS Blogging engine, using flat files and Markdown

Potential Improvements
===========
- Grunt or Gulp Build system for CSS and JS
- Introduction of using .env files and environment variables in general
- Farming the routing out to controllers and parsing the articles and pages as Models

What is SlimNode
========
Slim Node is a blog engine that makes use of Markdown flat files as a blogging engine, making it easy to update and edit, without having to worry about having a chunky CMS like wordpress or Drupal to manage your content. It is quick and light and the entire application logic (not including node dependencies) is only 56kb in size.

It is based off of [SlimBlog](http://davidsivocha.github.com/slimblog), which is a Flat File PHP Blogging system.

You can use Git to push updates to the articles folder, making it easy to update.

How to use
========
To install, copy to your server and run `npm install` to ensure that the dependencies are installed. Then run `node app.js` to start your blog.

Blog articles need to be saved to the Articles folder. The application reads the contents of the folder and the files to generate lists and data for the application. They use the format as shown below.

	{
	   "title" : "Article Title",
	   "date"  : "2012/02/15",
	   "slug"  : "first-article",
	   "author": "Author name"
	}

	Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

You can add as much data as you want into the JSON field data at the top. Feel free to make your own extensions using the data that you provide.
Currently the only _required_ fields are the `title`, `date` and `slug` fields. Articles should be saved using the date combined with the slug. So if you call the article `A guide to blogging online` and you give it the slug `blogging-online` and the date as `2012/02/15` you should save it as `2012-02-15-blogging-online.txt`.

The `date` field should be formatted as `YYYY/MM/DD`.

The slugs are identifiers to point at the file.

Additional notes:
========
The blog articles should be constructed in Markdown. This provides formatting.
If you want to include images in your articles upload them to the `public/images` folder. To link to them use `![Alt Text](/image/yourimage.jpg "Optional title")`

Other than that, enjoy. If you have any issues or need any help raise an issue!

Templating
========
Templates are all controlled by [jade](http://jade-lang.com/) and there are 4 Main files for you to worry about.
- `layout.jade` - This controls the main layout of the page and the stylesheets and JS includes
- `index.jade` - This is the article list page
- `article.jade` - This is a page that displays the articles
- `about.jade` - This is a static page that is used for the about.

Url Structure
========
- `/` - This routes to the full list
- `/blog` - This routes to the full list
- `/blog/:year` - This displays an archive listing by year
- `/blog/:year/:month` - This displays an archive listing by month
- `/blog/:year/:month/:day` - This displays an archive listing by day
- `/blog/:year/:month/:day/:article` - This is the permalink structure to an article
- `/page/:page` - This is a link to a static page


About SlimNode
========
Inpsired by an article on [NetTuts](http://net.tutsplus.com) for a static file blog in PHP, I thought to myself "that would be way more badass in node". This is the result.
This repo is maintained by @davidsivocha. [Sivocha.com](http://sivocha.com)/[ThreeHive](http://threehive.co.uk).
