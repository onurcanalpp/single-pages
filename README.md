# default-template
Hi everyone,
I have made hundreds of starter templates for a long time.
I have added the structure that I have used in the works that I have learned and experienced all this time.
I do not claim to be very good. but it is useful for me and I use it actively.
I created a starter template both for my own github projects and for those who want to use it.
I feel like I should explain some of the things I've done and added here.
-- Let's go into the details after so many self-sentences :) 

Libraries
--
First of all, the libraries I added can be changed completely depending on your request, but these are the fixed libraries that I generally use when making a website.

HTML
--

File Structure
--
A starter was prepared as clear as I could.
I'm sure you have better ones in mind, you can even use it, we can say it's optional :)

More detail for file structure
--
if you are using a better filing structure you can skip this. I will give details about this structure. // and please don't hesitate to give information if there are structures you know better. I'll have learned too.

assets/ --> this includes libraries, fonts, icons, images and more that we call in the background.

assets/css/ --> if you're using scss The default-template.min.js file that scss compiles.

assets/js/ --> all js codes in here not minified.

dist/projectName.min.css --> compiled scss file - located here as min.css.
dist/projectName.min.js --> compiled js file - located here as min.js.

dist/custom.js & custom.css/ --> I hope you don't have to use this. above /css and /js normal css and js files already do what you want. but why we need this dist/custom files? let me explain it - Since we cannot compile scss on the server after the project is published. we can interfere with the css and js codes we wrote here. If you have any questions about this place, I can explain it in more detail.

assets/fonts/ --> You can keep the source files of the fonts you want to add from the outside here and call them.

assets/images/ & icons --> Images and icons used in the website

assets/scss/ --> Our theme_default.scss file contains the properties of the elements on the page by default. We look at the design and shape it first according to the details in the design.




git

