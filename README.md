# Portfolio Website

This is a portfolio website created using React.js by Chirag Agarwal. My website is live at https://chiragagarwal.xyz/

Clone this repo & make the changes detailed below to personalize the website for yourself.

## Run the website locally

### 1. Clone the repository

    git clone https://github.com/Mcverickk/portfolio-website-frontend.git
  
### 2. Install dependencies

    cd portfolio-website-frontend
    npm i

### 3. Run on localhost

    npm start
    
## Personalize the website

Make the following changes mentioned below to personalize the website according to your portfolio.

### 1. Add your resume & image files.

- Replace your resume file with my file inside `../public/custom/`
- Replace the display picture with your .webp picture inside `../public/custom/` and name it `dp.webp`
- Replace all the tech stack images inside `../public/tech-stack/`



### 2. Change the personal details inside `../src/constants.js`

Replace the following with your details:

`NAME` : Name

`INSTAGRAM`, `TWITTER`, `GITHUB`, `LINKEDIN`, `MEDIUM` : Social media links

`EMAIL` : Email ID

`PHONE` : Phone number

`LOCATION` : Your location

`RESUME_FILENAME` : Exact filename of your resume(Example: "ChiragAgarwal_Resume_v2.pdf")

`TYPOGRAPHY` :  Change the profession names and time delay of the typography in the cover page

`BIO` : About you


#### PROJECTS

There are 9 project constants such as `PROJECT1`, `PROJECT2`, `PROJECT3`, etc. You can create more if you want to add more projects. Change the following details inside these projects:
   
    TYPE : Type of your project
    TITLE : Title of your Project(Keep it short)
    DETAILS : Description of your project.
    LINK : Social link of the project such as GitHub, Medium, etc.
    TAGS : Tags you want to show at the bottom of the project
    
    
#### WORK

This object contains your work experience. Edit your work experience inside `WORK.ONE`, `WORK.TWO`, `WORK.THREE` objects, etc. You can create more such objects inside `WORK` object if you want to add more work experience.

    COMPANY : Name of your comapany
    ROLE : Your position in that company
    TIME : Duration when you worked there
    DETAILS : Array of strings containing your work details
    
##### Don't forget to export the new constants from `constants.js` and import inside `App.js`

### 3. Make changes inside `../src/App.js`

### 3.1. To add more work experience

1. Inside `App.js` go to `Experience` function and add the following code inside `<nav>` along with the others.

        <Nav.Item className="companyItemTab2">
            <Nav.Link eventKey="tab5" className="companyLinkTab2">
                    {WORK.FIVE.COMPANY}
            </Nav.Link>
        </Nav.Item>
    
- Change eventKey to "tab6" for the sixth tab
- Change `WORK.FIVE.COMPANY` to `WORK.SIX.COMAPANY` for the sixth company you added inside WORK.SIX object in `constants.js`

2. Add the following code inside `<Tab.Content>` along with the other.

        <Tab.Pane eventKey="tab5">
            <GetWorkDetails info="tab5" />
        </Tab.Pane>
    
- Change eventKey to the same "tab6" to connect to the navigation pill we created above.
- Similarly info to the same "tab6" to fetch content for this tab from <GetWorkDetails>

3. Add the following `else if` condition to display your work details handled through the navigation we created

        else if (props.info === "tab5") {
            const details = WORK.FIVE.DETAILS.map((t) => (
                <li class="workDetailItem">
                    <p class="workDetails">{t}</p>
                </li>
            ));
            result = (
                <div class="workDetailBox">
                    <h3 class="comapanyNameHeader">{WORK.FIVE.ROLE}</h3>
                    <p class="workPeriod">{WORK.FIVE.TIME}</p>
                    <ul class="workDetailList">{details}</ul>
                </div>
            );
        }
    
- Change "tab5" to "tab6"
- Change `WORK.FIVE` to `WORK.SIX` for showing the details of WORK.SIX object in `constants.js`

##### Woah! You have added some great work experience already.


### 3.2. To add more projects

We have developed 3 color cards which are named `<BlockchainCard/>`, `<ArticleCard>` & `<WebDevCard>`. You can use any of these to add new projects according to your preferred color. Let's see how can we do that.

In `App.js` go to `Projects` function and add the following code inside `<div class="projectCollection">`

        <WebDevCard
            projectType={PROJECT7.TYPE}
            projectTitle={PROJECT7.TITLE}
            projectDetails={PROJECT7.DETAILS}
            projectLink={PROJECT7.LINK}
            projectIcon={websiteIcon}
            tags={PROJECT7.TAGS}
          />
          
- Change `PROJECT7` to the new project name you have added in `constants.js`
- You can change projectIcon to `websiteIcon`, `githubIcon` & `mediumIcon`.

##### Nice! You added some cool projects. 

### 3.3. To add/remove skills

I have created 3 sections for my skills, `<LanguageSkills />` , `<BlockchainSkills />` & `<WebDevSkills />` .

You can go in any of these function in `App.js` to change the section tittle & add/remove skills.

To add your skill add the following code inside `<ul class="skilllist">` inside these functions `<LanguageSkills />` , `<BlockchainSkills />` & `<WebDevSkills />`.

        <SkillItem
            src="./tech-stack/javascript.svg"
            width="75px"
            titleName="Javascript"
          />
       
- Change the `src` to the image path of your logo. Make sure to write the path as `./tech-stack/`imageFilename
- Every logo has different dimentions, change the width of the logo accordingly.
- Change the titleName to the skill name which will display when you hover.

To remove a skill, just remove the `<SkillItem/>` code of a particular skill from `<ul class="skilllist">`




 







