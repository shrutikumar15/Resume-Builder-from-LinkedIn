# Resume-Builder-from-LinkedIn
Builds Resume by scraping information from LinkedIn using Flask 

## Libraries Used:

> BeautifulSoup

> selenium

> re

> json

> time

> docx

> docx2pdf

> flask

> os

## Requirements:

> Python 3.x

> Pip

> chromedriver 

> Microsoft Office 2019

## Installation

### Clone
Clone this repo to your local machine using 
> git clone https://github.com/shrutikumar15/Resume-Builder-from-LinkedIn.git

### Chrome Web Driver
The Chrome Driver can be found here: https://chromedriver.chromium.org/downloads

### Setup
Install BeautifulSoup
```
pip install beautifulsoup4
```

Install Selenium
```
pip install selenium
```

Install docx
```
pip install docx
```

Install docx2pdf
```
pip install docx2pdf
```

Install flask
```
pip install Flask
```


## Usage

* Edit the 'config.txt' file and add your linkedin username and password
> This is required because linkedin requires a login before you can view a profile
 
* Run the Python Program
> python formflask.py

* Enter the link of the profile that is to be scraped.

* Output of the program is saved in pdf file named 'output.pdf'.

## Screenshots
<img width="923" alt="11" src="https://user-images.githubusercontent.com/41858958/79599995-10354400-8104-11ea-89da-34c1b4f9c94c.png">
<img width="949" alt="form11" src="https://user-images.githubusercontent.com/41858958/79599708-9b620a00-8103-11ea-955d-88e0c379f904.PNG">
<img width="948" alt="form12" src="https://user-images.githubusercontent.com/41858958/79599693-9735ec80-8103-11ea-8810-44a1bd35fb24.PNG">
<img width="948" alt="form2" src="https://user-images.githubusercontent.com/41858958/79599697-98ffb000-8103-11ea-8ce3-dbb51c03bdc1.PNG">
<img width="946" alt="form 3" src="https://user-images.githubusercontent.com/41858958/79599696-98671980-8103-11ea-8de1-4c77d3e12a4d.PNG">
<img width="944" alt="form4" src="https://user-images.githubusercontent.com/41858958/79599699-99984680-8103-11ea-92d6-12213ca84293.PNG">
<img width="946" alt="form5" src="https://user-images.githubusercontent.com/41858958/79599700-99984680-8103-11ea-8616-f23a85d968e5.PNG">
<img width="946" alt="form6" src="https://user-images.githubusercontent.com/41858958/79599702-9a30dd00-8103-11ea-9710-cc71018bab17.PNG">
<img width="949" alt="form7" src="https://user-images.githubusercontent.com/41858958/79599704-9a30dd00-8103-11ea-9557-8f627130b742.PNG">
<img width="959" alt="form8" src="https://user-images.githubusercontent.com/41858958/79599705-9ac97380-8103-11ea-8204-a0a8397b2f67.PNG">
<img width="960" alt="form9" src="https://user-images.githubusercontent.com/41858958/79599707-9b620a00-8103-11ea-970c-758842429b8e.PNG">

## Output:
<img width="406" alt="resume2" src="https://user-images.githubusercontent.com/41858958/79599725-a4eb7200-8103-11ea-9d75-200e3dbcf7e7.PNG">
