from flask import Flask, render_template, request, send_from_directory
import linkedin_scraper
import json
import os
import output

app = Flask(__name__)
link=""

##to clear cache
def dir_last_updated(folder):
    return str(max(os.path.getmtime(os.path.join(root_path, f))
                   for root_path, dirs, files in os.walk(folder)
                   for f in files))

#homepage
@app.route("/", methods=['POST','GET'])
def home():
     return render_template("homepage.html",last_updated=dir_last_updated('static'))

#formpage
@app.route("/form", methods=['POST','GET'])
def form():
     if request.method=='POST':
          #print("yes")
          link = request.form['profilelink']
          #print(link)  
     #json_string1 = linkedin_scraper.linkedin_scraper1(link)
     with app.open_resource('static/scraped_data.json') as f:
          json_string1 = json.load(f)
     #print (json_string1)
     return render_template("formhtml.html",json_string=json_string1,last_updated=dir_last_updated('static'))

#thankyoupage
@app.route('/handle_data', methods=['POST'])
def handle_data():
     #get all the hidden data
     hidden_basic = request.form['hidden_basic1']
     hidden_education = request.form['hidden_education1']
     hidden_projects = request.form['hidden_projects1']
     hidden_certifications = request.form['hidden_certifications1']
     hidden_experience = request.form['hidden_experience1']
     hidden_skils = request.form['hidden_skils1']
     hidden_volunteer = request.form['hidden_volunteer1']
     hidden_accomplishments = request.form['hidden_accomplishments1']
     hidden_hobbies = request.form['hidden_hobbies1']
     
     #get basic_info_list data
     basic_info_list=[0]*8
     basic_info_list_name=["fname","lname","headline","linkedin","email","phone","age","github"]
     for i in range(0,8):
          basic_info_list[i]=request.form[basic_info_list_name[i]]
     #print(basic_info_list)
     #get education_info_list data
     education_info_list_name=["institute","degree","year","grade"]
     education_info_list=[[0]*4 for i in range(int(hidden_education))]  #[[0,0][0,0], [0,0]]
     for i in range(0,int(hidden_education)):
          education_info_list[i][0]=request.form[education_info_list_name[0]+str(i+1)]
          education_info_list[i][1]=request.form[education_info_list_name[1]+str(i+1)]
          education_info_list[i][2]=request.form[education_info_list_name[2]+str(i+1)]
          education_info_list[i][3]=request.form[education_info_list_name[3]+str(i+1)]
     #print(education_info_list)
     #get projects_info_list data
     projects_info_list_name=["projectname","projectduration","projectdescription"]
     projects_info_list=[[0]*3 for i in range(int(hidden_projects))]
     for i in range(0,int(hidden_projects)):
          projects_info_list[i][0]=request.form[projects_info_list_name[0]+str(i+1)]
          projects_info_list[i][1]=request.form[projects_info_list_name[1]+str(i+1)]
          projects_info_list[i][2]=request.form[projects_info_list_name[2]+str(i+1)]
     #print(projects_info_list)
     #get certifications_info_list data
     certifications_info_list_name=["certificationname","certificationdate","certificationorgan"]
     certifications_info_list=[[0]*3 for i in range(int(hidden_certifications))]
     for i in range(0,int(hidden_certifications)):
          certifications_info_list[i][0]=request.form[certifications_info_list_name[0]+str(i+1)]
          certifications_info_list[i][1]=request.form[certifications_info_list_name[1]+str(i+1)]
          certifications_info_list[i][2]=request.form[certifications_info_list_name[2]+str(i+1)]
     #print(certifications_info_list)
     #get experience_info_list data
     experience_info_list_name=["expname","exprole","expdate","expdescription"]
     experience_info_list=[[0]*4 for i in range(int(hidden_experience))]
     for i in range(0,int(hidden_experience)):
          experience_info_list[i][0]=request.form[experience_info_list_name[0]+str(i+1)]
          experience_info_list[i][1]=request.form[experience_info_list_name[1]+str(i+1)]
          experience_info_list[i][2]=request.form[experience_info_list_name[2]+str(i+1)]
          experience_info_list[i][3]=request.form[experience_info_list_name[3]+str(i+1)]
     #print(experience_info_list)
     #get skills_info_list_name data
     skills_info_list=[0]*int(hidden_skils)
     skills_info_list_name=["skill"]
     for i in range(0,int(hidden_skils)):
          skills_info_list[i]=request.form[skills_info_list_name[0]+str(i+1)]
     #print(skills_info_list)
     #get volunteer_info_list data
     volunteer_info_list_name=["voname","vorole","vodate","vodescription"]
     volunteer_info_list=[[0]*4 for i in range(int(hidden_volunteer))]
     for i in range(0,int(hidden_volunteer)):
          volunteer_info_list[i][0]=request.form[volunteer_info_list_name[0]+str(i+1)]
          volunteer_info_list[i][1]=request.form[volunteer_info_list_name[1]+str(i+1)]
          volunteer_info_list[i][2]=request.form[volunteer_info_list_name[2]+str(i+1)]
          volunteer_info_list[i][3]=request.form[volunteer_info_list_name[3]+str(i+1)]
     #print(volunteer_info_list)
     #get accomplishments_info_list data
     accomplishments_info_list_name=["accname","accyear"]
     accomplishments_info_list=[[0]*2 for i in range(int(hidden_accomplishments))]
     for i in range(0,int(hidden_accomplishments)):
          accomplishments_info_list[i][0]=request.form[accomplishments_info_list_name[0]+str(i+1)]
          accomplishments_info_list[i][1]=request.form[accomplishments_info_list_name[1]+str(i+1)]
     #print(accomplishments_info_list)
     #get skills_info_list_name data
     hobbies_info_list=[0]*int(hidden_hobbies)
     hobbies_info_list_name=["hobby"]
     for i in range(0,int(hidden_hobbies)):
          hobbies_info_list[i]=request.form[hobbies_info_list_name[0]+str(i+1)]
     #print(hobbies_info_list)
     #print(hidden_hobbies)
     json_data = {'basic_info_list' : basic_info_list, 'education_info_list': education_info_list, 'projects_info_list': projects_info_list, 'certifications_info_list': certifications_info_list, 'experience_info_list': experience_info_list, 'skills_info_list': skills_info_list, 'volunteer_info_list': volunteer_info_list, 'accomplishments_info_list': accomplishments_info_list, 'hobbies_info_list': hobbies_info_list}
     final_json_string = json.dumps(json_data)
     #print(final_json_string)
     output.output1(final_json_string)
     #file = get_pdf()
     #print(file)
     filename = "output.pdf"
     return send_from_directory("C:/Users/shrut/OneDrive/Desktop/Resume Scraper/yourapp", filename=filename, as_attachment=True)
     #return render_template("thankyou.html",last_updated=dir_last_updated('static'))



if __name__ == "__main__":
    app.run(debug=True)
