var list_made=[false,false,false,false,false,false,false,false,false];
var education_info_list_name=[];
var projects_info_list_name=[]
var certifications_info_list_name=[]
var experience_info_list_name=[]
var skills_info_list_name=[]
var volunteer_info_list_name=[]
var accomplishments_info_list_name=[]
var hobbies_info_list_name=[]
var ed_str1 = "institute";
var ed_str2 = "degree";
var ed_str3 = "year";
var ed_str4 = "grade";
var pr_str1 = "projectname";
var pr_str2 = "projectduration";
var pr_str3 = "projectdescription";
var cr_str1 = "certificationname";
var cr_str2 = "certificationdate";
var cr_str3 = "certificationorgan";
var ex_str1 = "expname";
var ex_str2 = "exprole";
var ex_str3 = "expdate";
var ex_str4 = "expdescription";
var sk_str1 = "skill";
var vo_str1 = "voname";
var vo_str2 = "vorole";
var vo_str3 = "vodate";
var vo_str4 = "vodescription";
var ac_str1 = "accname";
var ac_str2 = "accyear";
var hb_str1 = "hobby";
//-->Function loads when page loads
function LoadingFunc(){
	//console.log("loadingfunc function works");
	//console.log(json_string);
	//-->which forms have to be visible
	var form1 = document.getElementById("f1"); 
	form1.style.display="block";
	var form2 = document.getElementById("f2");
	form2.style.display="none";
	var form3 = document.getElementById("f3");
	form3.style.display="none";
	var form4 = document.getElementById("f4");
	form4.style.display="none";
	var form5 = document.getElementById("f5");
	form5.style.display="none";
	var form6 = document.getElementById("f6");
	form6.style.display="none";
	var form7 = document.getElementById("f7");
	form7.style.display="none";
	var form8 = document.getElementById("f8");
	form8.style.display="none";
	var form9 = document.getElementById("f9");
	form9.style.display="none";
	//-->declare list to be used in this form
	var basic_info_list=[];
	//-->fill the list from main string
	for(var i in json_string){
		if(i=="basic_info_list"){
			basic_info_list=json_string[i];
		}
	}
	//-->add info from list to the form
	document.getElementById("fname").value=basic_info_list[0];
	document.getElementById("lname").value=basic_info_list[1];
	document.getElementById("headline").value=basic_info_list[2];
	document.getElementById("linkedin").value=basic_info_list[3];
	//console.log(basic_info_list);
	list_made[0]=true;
}
//-->Function loads when you go from form2 -> form1
function clickform1() {
	//console.log("clickform1 fucntion works");
	//-->which forms have to be visible
	var form1 = document.getElementById("f1");
	form1.style.display="block";
	var form2 = document.getElementById("f2");
	form2.style.display="none";
	var form3 = document.getElementById("f3");
	form3.style.display="none";
	var form4 = document.getElementById("f4");
	form4.style.display="none";
	var form5 = document.getElementById("f5");
	form5.style.display="none";
	var form6 = document.getElementById("f6");
	form6.style.display="none";
	var form7 = document.getElementById("f7");
	form7.style.display="none";
	var form8 = document.getElementById("f8");
	form8.style.display="none";
	var form9 = document.getElementById("f9");
	form9.style.display="none";
	//-->remove previous progress
	var progress = document.getElementById("p2");
	progress.classList.remove("active");
	//console.log(basic_info_list2);
}
//-->Funciton to go from form1 -> form2 or from form3 -> form2
function clickform2() {
	//console.log("clickform2 function works");
	//-->which forms have to be visible
	var form1 = document.getElementById("f1");
	form1.style.display="none";
	var form2 = document.getElementById("f2");
	form2.style.display="block";
	var form3 = document.getElementById("f3");
	form3.style.display="none";
	var form4 = document.getElementById("f4");
	form4.style.display="none";
	var form5 = document.getElementById("f5");
	form5.style.display="none";
	var form6 = document.getElementById("f6");
	form6.style.display="none";
	var form7 = document.getElementById("f7");
	form7.style.display="none";
	var form8 = document.getElementById("f8");
	form8.style.display="none";
	var form9 = document.getElementById("f9");
	form9.style.display="none";
	//-->how much of the progress bar is green
	var progress2 = document.getElementById("p2");
	progress2.classList.add("active");
	var progress3 = document.getElementById("p3");
	progress3.classList.remove("active");
	if(list_made[1]==false){
		var lennotzero=true;
		//-->declare list to be used in this form
		var education_info_list=[];
		//-->fill the list from main string
		for (var i in json_string){
			if(i=="education_info_list"){
				if(json_string[i].length>0){
					for(var j=0; j<json_string[i].length; j++){
						//-->add new list to the education_info_list
						education_info_list[j] = new Array(json_string[i][j].length);
						for(var k=0; k<json_string[i][j].length; k++){
							education_info_list[j][k]=json_string[i][j][k];			
						}
						//console.log(education_info_list);
					
					}
				}	
				else{
					lennotzero = false;
				}
			}
		}
		if(lennotzero){
			//-->declare list holding names of of the elements
			var count=1;
			//-->dynamically change each name depeneding on list index 
			for(var i in education_info_list){
				education_info_list_name[i] = new Array(education_info_list[i].length)
				education_info_list_name[i][0] = ed_str1+count;
				education_info_list_name[i][1] = ed_str2+count;
				education_info_list_name[i][3] = ed_str3+count;
				education_info_list_name[i][4] = ed_str4+count;
				count+=1;
			}
			var len_sublist = education_info_list[i].length;
			var label_names = ["Institute:","Degree:","","Year:","% / CGPA :"]
			//-->creating elements 
			for(var i in education_info_list_name){
				var form2 = document.getElementById("f22");
				//-->create subtititle
				var subtititle = document.createElement("h3");
				subtititle.className="fs-subtitle";
				var no = parseInt(i)+1;
				subtititle.id="sub"+education_info_list_name[no-1][0];
				
				var hidden = document.getElementById("hidden_education");
				hidden.innerText=(no);
				subtititle.innerText="Institute "+(no);
				form2.appendChild(subtititle);
				for(var j=0; j<len_sublist; j++){
					//-->not using data at index 2
					if(j==2){

					}
					else{
						//-->create div in which both div of label and input will be present
						var div = document.createElement("div");
						div.className="flex-container";
						form2.appendChild(div);
						//-->create div of label
						var labeldiv = document.createElement("div");
						labeldiv.className="labeldiv";
						labeldiv.id=education_info_list_name[i][j];
						div.appendChild(labeldiv);
						//-->create label
						var label = document.createElement("label");
						label.innerText=label_names[j];		
						labeldiv.appendChild(label);
						//-->create input
						var input = document.createElement("input");
						input.type="text";
						input.value=education_info_list[i][j];
						//-->put value from list into input element
						input.name=education_info_list_name[i][j];
						div.appendChild(input);
					}
				}
			}		
		}
		var form2 = document.getElementById("f22");
		//-->create div in which remove button will be present
		var div = document.createElement("div");
		div.className="flex-container";
		form2.appendChild(div);
		//-->create remove button
		var remove_button = document.createElement("input");
		remove_button.type="button";
		remove_button.name="remove_institute";
		remove_button.className="remove";
		remove_button.onclick=removeinstitute;
		remove_button.value="Remove";
		remove_button.id="edu_remove";
		div.appendChild(remove_button);
		//-->create add button
		var add_button = document.createElement("input");
		add_button.type="button";
		add_button.name="add_institute";
		add_button.className="add";
		add_button.onclick=addinstitute;
		add_button.value="Add";
		add_button.id="edu_add";
		div.appendChild(add_button);
		//-->create div in which both previous and next button will be present
		var div = document.createElement("div");
		div.className="flex-container";
		form2.appendChild(div);
		//-->create previous button
		var previous_button = document.createElement("input");
		previous_button.type="button";
		previous_button.name="previous";
		previous_button.className="previous action-button";
		previous_button.onclick=clickform1;
		previous_button.value="Previous";
		previous_button.id="edu_previous";
		div.appendChild(previous_button);
		//-->create next button
		var next_button = document.createElement("input");
		next_button.type="button";
		next_button.name="next";
		next_button.className="next action-button";
		next_button.onclick=clickform3;
		next_button.value="Next";
		next_button.id="edu_next";
		div.appendChild(next_button);
		list_made[1]=true;
	}
	

	//basic_info_list2.push(document.getElementById("fname").value);
}
function addinstitute(){
	//-->which forms have to be visible
	var form1 = document.getElementById("f1");
	form1.style.display="none";
	var form2 = document.getElementById("f2");
	form2.style.display="block";
	var form3 = document.getElementById("f3");
	form3.style.display="none";
	var form4 = document.getElementById("f4");
	form4.style.display="none";
	var form5 = document.getElementById("f5");
	form5.style.display="none";
	var form6 = document.getElementById("f6");
	form6.style.display="none";
	var form7 = document.getElementById("f7");
	form7.style.display="none";
	var form8 = document.getElementById("f8");
	form8.style.display="none";
	var form9 = document.getElementById("f9");
	form9.style.display="none";
	//-->how much of the progress bar is green
	var progress2 = document.getElementById("p2");
	progress2.classList.add("active");
	var progress3 = document.getElementById("p3");
	progress3.classList.remove("active");
	//-->how many institutes already present
	var hidden = document.getElementById("hidden_education");
	var no = parseInt(hidden.innerText);
	//-->remove buttons
	var add_button = document.getElementById("edu_add");
	add_button.remove();
	var remove_button = document.getElementById("edu_remove");
	remove_button.remove();
	var previous_button = document.getElementById("edu_previous");
	previous_button.remove();
	var next_button = document.getElementById("edu_next");
	next_button.remove();
	//-->add elements
	var form2 = document.getElementById("f22");
	
	var no = no+1;
	
	hidden.innerText=(no);
	
	//-->add elements in education_info_list_name
	education_info_list_name[no-1] = new Array(5)
	education_info_list_name[no-1][0] = ed_str1+no;
	education_info_list_name[no-1][1] = ed_str2+no;
	education_info_list_name[no-1][3] = ed_str3+no;
	education_info_list_name[no-1][4] = ed_str4+no;
	//-->create subtititle
	var subtititle = document.createElement("h3");
	subtititle.className="fs-subtitle";
	subtititle.id="sub"+education_info_list_name[no-1][0];
	subtititle.innerText="Institute "+(no);
	form2.appendChild(subtititle);
	//-->add rest of the elements
	var label_names = ["Institute:","Degree:","","Year:","% / CGPA :"]
	for(var i=0; i<5; i++){
		if(i==2){

		}
		else{
			//-->create div in which both div of label and input will be present
			var div = document.createElement("div");
			div.className="flex-container";
			form2.appendChild(div);
			//-->create div of label
			var labeldiv = document.createElement("div");
			labeldiv.className="labeldiv";
			div.appendChild(labeldiv);
			//-->create label
			var label = document.createElement("label");
			label.innerText=label_names[i];
			labeldiv.id=education_info_list_name[no-1][i];
			labeldiv.appendChild(label);
			//-->create input
			var input = document.createElement("input");
			input.type="text";
			input.name=education_info_list_name[no-1][i];
			div.appendChild(input);
		}	
	}
	var form2 = document.getElementById("f22");
	//-->create div in which add button will be present
	var div = document.createElement("div");
	div.className="flex-container";
	form2.appendChild(div);
	//-->create remove button
	var remove_button = document.createElement("input");
	remove_button.type="button";
	remove_button.name="remove_institute";
	remove_button.className="remove";
	remove_button.onclick=removeinstitute;
	remove_button.value="Remove";
	remove_button.id="edu_remove";
	div.appendChild(remove_button);
	//-->create add button
	var add_button = document.createElement("input");
	add_button.type="button";
	add_button.name="add_institute";
	add_button.className="add";
	add_button.onclick=addinstitute;
	add_button.value="Add";
	add_button.id="edu_add";
	div.appendChild(add_button);
	//-->create div in which both previous and next button will be present
	var div = document.createElement("div");
	div.className="flex-container";
	form2.appendChild(div);
	//-->create previous button
	var previous_button = document.createElement("input");
	previous_button.type="button";
	previous_button.name="previous";
	previous_button.className="previous action-button";
	previous_button.onclick=clickform1;
	previous_button.value="Previous";
	previous_button.id="edu_previous";
	div.appendChild(previous_button);
	//-->create next button
	var next_button = document.createElement("input");
	next_button.type="button";
	next_button.name="next";
	next_button.className="next action-button";
	next_button.onclick=clickform3;
	next_button.value="Next";
	next_button.id="edu_next";
	div.appendChild(next_button);
}
function removeinstitute(){
	//-->which forms have to be visible
	var form1 = document.getElementById("f1");
	form1.style.display="none";
	var form2 = document.getElementById("f2");
	form2.style.display="block";
	var form3 = document.getElementById("f3");
	form3.style.display="none";
	var form4 = document.getElementById("f4");
	form4.style.display="none";
	var form5 = document.getElementById("f5");
	form5.style.display="none";
	var form6 = document.getElementById("f6");
	form6.style.display="none";
	var form7 = document.getElementById("f7");
	form7.style.display="none";
	var form8 = document.getElementById("f8");
	form8.style.display="none";
	var form9 = document.getElementById("f9");
	form9.style.display="none";
	//-->how much of the progress bar is green
	var progress2 = document.getElementById("p2");
	progress2.classList.add("active");
	var progress3 = document.getElementById("p3");
	progress3.classList.remove("active");
	//-->how many institutes already present
	var hidden = document.getElementById("hidden_education");
	var no = parseInt(hidden.innerText);
	//-->remove most current subtitle
	var subtititle = document.getElementById("sub"+education_info_list_name[no-1][0]);
	subtititle.remove();
	//-->remove most current labels and textfields
	for(var i=0; i<5; i++){
		if(i==2){

		}
		else{
			//-->remove text fields
			var text = document.getElementsByName(education_info_list_name[no-1][i]);
			text[0].remove();
			//-->remove labels
			var label = document.getElementById(education_info_list_name[no-1][i]);
			label.remove();
		}	
	}
	//-->update education_info_list_name
	for(var i=4; i>=0; i--){
		education_info_list_name[no-1].splice(i,1);
	}
	education_info_list_name.splice((no-1),1);
	hidden.innerText=(no-1);
	//console.log(education_info_list_name);
}
//-->Function to go from form2 -> form3 or from form4 -> form3
function clickform3() {
	//console.log("Function form3 works");
	//-->which forms have to be visible
	var form1 = document.getElementById("f1");
	form1.style.display="none";
	var form2 = document.getElementById("f2");
	form2.style.display="none";
	var form3 = document.getElementById("f3");
	form3.style.display="block";
	var form4 = document.getElementById("f4");
	form4.style.display="none";
	var form5 = document.getElementById("f5");
	form5.style.display="none";
	var form6 = document.getElementById("f6");
	form6.style.display="none";
	var form7 = document.getElementById("f7");
	form7.style.display="none";
	var form8 = document.getElementById("f8");
	form8.style.display="none";
	var form9 = document.getElementById("f9");
	form9.style.display="none";
	//-->how much of the progress bar is green
	var progress = document.getElementById("p3");
	progress.classList.add("active");
	var progress = document.getElementById("p4");
	progress.classList.remove("active");
	if(list_made[2]==false){
		var lennotzero=true;
		//-->declare list to be used in this form
		var projects_info_list=[];
		//-->fill the list from main string
		for (var i in json_string){
			if(i=="projects_info_list"){
				if(json_string[i].length>0){
					for(var j=0; j<json_string[i].length; j++){
						//-->add new list to the projects_info_list
						projects_info_list[j] = new Array(json_string[i][j].length);
						for(var k=0; k<json_string[i][j].length; k++){
							projects_info_list[j][k]=json_string[i][j][k];			
						}
						//console.log(projects_info_list);
					}
				}
				else{
					lennotzero = false;
				}
			}
				
		}
		if(lennotzero){
			//-->declare list holding names of of the elements
			var count=1;
			//-->dynamically change each name depeneding on list index 
			for(var i in projects_info_list){
				projects_info_list_name[i] = new Array(projects_info_list[i].length)
				projects_info_list_name[i][0] = pr_str1+count;
				projects_info_list_name[i][1] = pr_str2+count;
				projects_info_list_name[i][2] = pr_str3+count;
				count+=1;
			}
			var len_sublist = projects_info_list[i].length;
			var label_names = ["Name:","Duration:","Description:"]
			//console.log(projects_info_list_name);
			//-->creating elements 
			for(var i in projects_info_list_name){
				var form3 = document.getElementById("f33");
				//-->create subtititle
				var subtititle = document.createElement("h3");
				subtititle.className="fs-subtitle";
				var no = parseInt(i)+1;
				subtititle.id="sub"+projects_info_list_name[no-1][0];
				var hidden = document.getElementById("hidden_projects");
				hidden.innerText=(no);
				subtititle.innerText="Project "+(no);
				form3.appendChild(subtititle);
				for(var j=0; j<len_sublist; j++){
					//-->create div in which both div of label and input will be present
					var div = document.createElement("div");
					div.className="flex-container";
					form3.appendChild(div);
					//-->create div of label
					var labeldiv = document.createElement("div");
					labeldiv.className="labeldiv";
					labeldiv.id=projects_info_list_name[i][j];
					div.appendChild(labeldiv);
					//-->create label
					var label = document.createElement("label");
					label.innerText=label_names[j];		
					labeldiv.appendChild(label);
					//-->create input
					if(j==2){
						var input = document.createElement("textarea");
						input.type="text";
						input.value=projects_info_list[i][j];
						//-->put value from list into input element
						input.name=projects_info_list_name[i][j];
						div.appendChild(input);
					}
					else{
						var input = document.createElement("input");
						input.type="text";
						input.value=projects_info_list[i][j];
						//-->put value from list into input element
						input.name=projects_info_list_name[i][j];
						div.appendChild(input);
					}
					
				}
			}		
		}
		var form3 = document.getElementById("f33");
		//-->create div in which remove button will be present
		var div = document.createElement("div");
		div.className="flex-container";
		form3.appendChild(div);
		//-->create remove button
		var remove_button = document.createElement("input");
		remove_button.type="button";
		remove_button.name="remove_project";
		remove_button.className="remove";
		remove_button.onclick=removeproject;
		remove_button.value="Remove";
		remove_button.id="pr_remove";
		div.appendChild(remove_button);
		//-->create add button
		var add_button = document.createElement("input");
		add_button.type="button";
		add_button.name="add_project";
		add_button.className="add";
		add_button.onclick=addproject;
		add_button.value="Add";
		add_button.id="pr_add";
		div.appendChild(add_button);
		//-->create div in which both previous and next button will be present
		var div = document.createElement("div");
		div.className="flex-container";
		form3.appendChild(div);
		//-->create previous button
		var previous_button = document.createElement("input");
		previous_button.type="button";
		previous_button.name="previous";
		previous_button.className="previous action-button";
		previous_button.onclick=clickform2;
		previous_button.value="Previous";
		previous_button.id="pr_previous";
		div.appendChild(previous_button);
		//-->create next button
		var next_button = document.createElement("input");
		next_button.type="button";
		next_button.name="next";
		next_button.className="next action-button";
		next_button.onclick=clickform4;
		next_button.value="Next";
		next_button.id="pr_next";
		div.appendChild(next_button);
		list_made[2]=true;
	}
}
function addproject(){
	//-->which forms have to be visible
	var form1 = document.getElementById("f1");
	form1.style.display="none";
	var form2 = document.getElementById("f2");
	form2.style.display="none";
	var form3 = document.getElementById("f3");
	form3.style.display="block";
	var form4 = document.getElementById("f4");
	form4.style.display="none";
	var form5 = document.getElementById("f5");
	form5.style.display="none";
	var form6 = document.getElementById("f6");
	form6.style.display="none";
	var form7 = document.getElementById("f7");
	form7.style.display="none";
	var form8 = document.getElementById("f8");
	form8.style.display="none";
	var form9 = document.getElementById("f9");
	form9.style.display="none";
	//-->how much of the progress bar is green
	//-->how much of the progress bar is green
	var progress = document.getElementById("p3");
	progress.classList.add("active");
	var progress = document.getElementById("p4");
	progress.classList.remove("active");
	//-->how many institutes already present
	var hidden = document.getElementById("hidden_projects");
	var no = parseInt(hidden.innerText);
	//-->remove buttons
	var add_button = document.getElementById("pr_add");
	add_button.remove();
	var remove_button = document.getElementById("pr_remove");
	remove_button.remove();
	var previous_button = document.getElementById("pr_previous");
	previous_button.remove();
	var next_button = document.getElementById("pr_next");
	next_button.remove();
	//-->add elements
	var form3 = document.getElementById("f33");
	var no = no+1;
	hidden.innerText=(no);
	//-->add elements in education_info_list_name
	projects_info_list_name[no-1] = new Array(3)
	projects_info_list_name[no-1][0] = pr_str1+no;
	projects_info_list_name[no-1][1] = pr_str2+no;
	projects_info_list_name[no-1][2] = pr_str3+no;
	//-->create subtititle
	var subtititle = document.createElement("h3");
	subtititle.className="fs-subtitle";
	subtititle.id="sub"+projects_info_list_name[no-1][0];
	subtititle.innerText="Project "+(no);
	form3.appendChild(subtititle);
	//-->add rest of the elements
	var label_names = ["Name:","Duration:","Description:"]
	for(var i=0; i<3; i++){
		//-->create div in which both div of label and input will be present
		var div = document.createElement("div");
		div.className="flex-container";
		form3.appendChild(div);
		//-->create div of label
		var labeldiv = document.createElement("div");
		labeldiv.className="labeldiv";
		div.appendChild(labeldiv);
		//-->create label
		var label = document.createElement("label");
		label.innerText=label_names[i];
		labeldiv.id=projects_info_list_name[no-1][i];
		labeldiv.appendChild(label);
		//-->create input
		if(i==2){
			var input = document.createElement("textarea");
			input.type="text";
			input.name=projects_info_list_name[no-1][i];
			div.appendChild(input);
		}
		else{
			var input = document.createElement("input");
			input.type="text";
			input.name=projects_info_list_name[no-1][i];
			div.appendChild(input);
		}
		
	}
	var form3 = document.getElementById("f33");
		//-->create div in which remove button will be present
		var div = document.createElement("div");
		div.className="flex-container";
		form3.appendChild(div);
		//-->create remove button
		var remove_button = document.createElement("input");
		remove_button.type="button";
		remove_button.name="remove_project";
		remove_button.className="remove";
		remove_button.onclick=removeproject;
		remove_button.value="Remove";
		remove_button.id="pr_remove";
		div.appendChild(remove_button);
		//-->create add button
		var add_button = document.createElement("input");
		add_button.type="button";
		add_button.name="add_project";
		add_button.className="add";
		add_button.onclick=addproject;
		add_button.value="Add";
		add_button.id="pr_add";
		div.appendChild(add_button);
		//-->create div in which both previous and next button will be present
		var div = document.createElement("div");
		div.className="flex-container";
		form3.appendChild(div);
		//-->create previous button
		var previous_button = document.createElement("input");
		previous_button.type="button";
		previous_button.name="previous";
		previous_button.className="previous action-button";
		previous_button.onclick=clickform2;
		previous_button.value="Previous";
		previous_button.id="pr_previous";
		div.appendChild(previous_button);
		//-->create next button
		var next_button = document.createElement("input");
		next_button.type="button";
		next_button.name="next";
		next_button.className="next action-button";
		next_button.onclick=clickform4;
		next_button.value="Next";
		next_button.id="pr_next";
		div.appendChild(next_button);
}
function removeproject(){
	//-->which forms have to be visible
	var form1 = document.getElementById("f1");
	form1.style.display="none";
	var form2 = document.getElementById("f2");
	form2.style.display="none";
	var form3 = document.getElementById("f3");
	form3.style.display="block";
	var form4 = document.getElementById("f4");
	form4.style.display="none";
	var form5 = document.getElementById("f5");
	form5.style.display="none";
	var form6 = document.getElementById("f6");
	form6.style.display="none";
	var form7 = document.getElementById("f7");
	form7.style.display="none";
	var form8 = document.getElementById("f8");
	form8.style.display="none";
	var form9 = document.getElementById("f9");
	form9.style.display="none";
	//-->how much of the progress bar is green
	var progress = document.getElementById("p3");
	progress.classList.add("active");
	var progress = document.getElementById("p4");
	progress.classList.remove("active");
	//-->how many institutes already present
	var hidden = document.getElementById("hidden_projects");
	var no = parseInt(hidden.innerText);
	//-->remove most current subtitle
	var subtititle = document.getElementById("sub"+projects_info_list_name[no-1][0]);
	subtititle.remove();
	//-->remove most current labels and textfields
	for(var i=0; i<3; i++){
		//-->remove text fields
		var text = document.getElementsByName(projects_info_list_name[no-1][i]);
		text[0].remove();
		//-->remove labels
		var label = document.getElementById(projects_info_list_name[no-1][i]);
		label.remove();
	}
	//-->update projects_info_list_name
	for(var i=2; i>=0; i--){
		projects_info_list_name[no-1].splice(i,1);
	}
	projects_info_list_name.splice((no-1),1);
	hidden.innerText=(no-1);
}
//-->Function to go from form3 -> form4 or from form5 -> form4
function clickform4(){
	//console.log("Function form4 works");
	//-->which forms have to be visible
	var form1 = document.getElementById("f1");
	form1.style.display="none";
	var form2 = document.getElementById("f2");
	form2.style.display="none";
	var form3 = document.getElementById("f3");
	form3.style.display="none";
	var form4 = document.getElementById("f4");
	form4.style.display="block";
	var form5 = document.getElementById("f5");
	form5.style.display="none";
	var form6 = document.getElementById("f6");
	form6.style.display="none";
	var form7 = document.getElementById("f7");
	form7.style.display="none";
	var form8 = document.getElementById("f8");
	form8.style.display="none";
	var form9 = document.getElementById("f9");
	form9.style.display="none";
	//-->how much of the progress bar is green
	var progress = document.getElementById("p4");
	progress.classList.add("active");
	var progress = document.getElementById("p5");
	progress.classList.remove("active");
	if(list_made[3]==false){
		var lennotzero=true;
		//-->declare list to be used in this form
		var certifications_info_list=[];
		//-->fill the list from main string
		for (var i in json_string){
			if(i=="certifications_info_list"){
				if(json_string[i].length>0){
					for(var j=0; j<json_string[i].length; j++){
						//-->add new list to the certifications_info_list
						certifications_info_list[j] = new Array(json_string[i][j].length);
						for(var k=0; k<json_string[i][j].length; k++){
							certifications_info_list[j][k]=json_string[i][j][k];			
						}
						//console.log(certifications_info_list);
					}
				}
				else{
					lennotzero = false;
				}
			}
				
		}
		if(lennotzero){
			//-->declare list holding names of of the elements
			var count=1;
			//-->dynamically change each name depeneding on list index 
			for(var i in certifications_info_list){
				certifications_info_list_name[i] = new Array(certifications_info_list[i].length)
				certifications_info_list_name[i][0] = cr_str1+count;
				certifications_info_list_name[i][1] = cr_str2+count;
				certifications_info_list_name[i][2] = cr_str3+count;
				count+=1;
			}
			var len_sublist = certifications_info_list[i].length;
			var label_names = ["Name:","Issue Date:","Organisation:"]
			//console.log(certifications_info_list_name);
			//-->creating elements 
			for(var i in certifications_info_list){
				var form4 = document.getElementById("f44");
				//-->create subtititle
				var subtititle = document.createElement("h3");
				subtititle.className="fs-subtitle";
				var no = parseInt(i)+1;
				subtititle.id="sub"+certifications_info_list[no-1][0];
				var hidden = document.getElementById("hidden_certifications");
				hidden.innerText=(no);
				subtititle.innerText="Certification "+(no);
				form4.appendChild(subtititle);
				for(var j=0; j<len_sublist; j++){
					//-->create div in which both div of label and input will be present
					var div = document.createElement("div");
					div.className="flex-container";
					form4.appendChild(div);
					//-->create div of label
					var labeldiv = document.createElement("div");
					labeldiv.className="labeldiv";
					labeldiv.id=certifications_info_list_name[i][j];
					div.appendChild(labeldiv);
					//-->create label
					var label = document.createElement("label");
					label.innerText=label_names[j];		
					labeldiv.appendChild(label);
					//-->create input
					var input = document.createElement("input");
					input.type="text";
					input.value=certifications_info_list[i][j];
					//-->put value from list into input element
					input.name=certifications_info_list_name[i][j];
					div.appendChild(input);
				}
			}		
		}
		var form4 = document.getElementById("f44");
		//-->create div in which remove button will be present
		var div = document.createElement("div");
		div.className="flex-container";
		form4.appendChild(div);
		//-->create remove button
		var remove_button = document.createElement("input");
		remove_button.type="button";
		remove_button.name="remove_certification";
		remove_button.className="remove";
		remove_button.onclick=removecertification;
		remove_button.value="Remove";
		remove_button.id="cr_remove";
		div.appendChild(remove_button);
		//-->create add button
		var add_button = document.createElement("input");
		add_button.type="button";
		add_button.name="add_certification";
		add_button.className="add";
		add_button.onclick=addcertification;
		add_button.value="Add";
		add_button.id="cr_add";
		div.appendChild(add_button);
		//-->create div in which both previous and next button will be present
		var div = document.createElement("div");
		div.className="flex-container";
		form4.appendChild(div);
		//-->create previous button
		var previous_button = document.createElement("input");
		previous_button.type="button";
		previous_button.name="previous";
		previous_button.className="previous action-button";
		previous_button.onclick=clickform3;
		previous_button.value="Previous";
		previous_button.id="cr_previous";
		div.appendChild(previous_button);
		//-->create next button
		var next_button = document.createElement("input");
		next_button.type="button";
		next_button.name="next";
		next_button.className="next action-button";
		next_button.onclick=clickform5;
		next_button.value="Next";
		next_button.id="cr_next";
		div.appendChild(next_button);
		list_made[3]=true;	
	}	
}
function addcertification(){
	//-->which forms have to be visible
	var form1 = document.getElementById("f1");
	form1.style.display="none";
	var form2 = document.getElementById("f2");
	form2.style.display="none";
	var form3 = document.getElementById("f3");
	form3.style.display="none";
	var form4 = document.getElementById("f4");
	form4.style.display="block";
	var form5 = document.getElementById("f5");
	form5.style.display="none";
	var form6 = document.getElementById("f6");
	form6.style.display="none";
	var form7 = document.getElementById("f7");
	form7.style.display="none";
	var form8 = document.getElementById("f8");
	form8.style.display="none";
	var form9 = document.getElementById("f9");
	form9.style.display="none";
	//-->how much of the progress bar is green
	var progress = document.getElementById("p4");
	progress.classList.add("active");
	var progress = document.getElementById("p5");
	progress.classList.remove("active");
	//-->how many institutes already present
	var hidden = document.getElementById("hidden_certifications");
	var no = parseInt(hidden.innerText);
	//-->remove buttons
	var add_button = document.getElementById("cr_add");
	add_button.remove();
	var remove_button = document.getElementById("cr_remove");
	remove_button.remove();
	var previous_button = document.getElementById("cr_previous");
	previous_button.remove();
	var next_button = document.getElementById("cr_next");
	next_button.remove();
	//-->add elements
	var form4 = document.getElementById("f44");
	var no = no+1;
	hidden.innerText=(no);
	//-->add elements in education_info_list_name
	certifications_info_list_name[no-1] = new Array(3)
	certifications_info_list_name[no-1][0] = cr_str1+no;
	certifications_info_list_name[no-1][1] = cr_str2+no;
	certifications_info_list_name[no-1][2] = cr_str3+no;
	//-->create subtititle
	var subtititle = document.createElement("h3");
	subtititle.className="fs-subtitle";
	subtititle.id="sub"+certifications_info_list_name[no-1][0];
	subtititle.innerText="Certification "+(no);
	form4.appendChild(subtititle);
	//-->add rest of the elements
	var label_names = ["Name:","Issue Date:","Organisation:"]
	for(var i=0; i<3; i++){
		//-->create div in which both div of label and input will be present
		var div = document.createElement("div");
		div.className="flex-container";
		form4.appendChild(div);
		//-->create div of label
		var labeldiv = document.createElement("div");
		labeldiv.className="labeldiv";
		div.appendChild(labeldiv);
		//-->create label
		var label = document.createElement("label");
		label.innerText=label_names[i];
		labeldiv.id=certifications_info_list_name[no-1][i];
		labeldiv.appendChild(label);
		//-->create input
		var input = document.createElement("input");
		input.type="text";
		input.name=certifications_info_list_name[no-1][i];
		div.appendChild(input);
	}
	var form4 = document.getElementById("f44");
		//-->create div in which remove button will be present
		var div = document.createElement("div");
		div.className="flex-container";
		form4.appendChild(div);
		//-->create remove button
		var remove_button = document.createElement("input");
		remove_button.type="button";
		remove_button.name="remove_certification";
		remove_button.className="remove";
		remove_button.onclick=removecertification;
		remove_button.value="Remove";
		remove_button.id="cr_remove";
		div.appendChild(remove_button);
		//-->create add button
		var add_button = document.createElement("input");
		add_button.type="button";
		add_button.name="add_certificatino";
		add_button.className="add";
		add_button.onclick=addcertification;
		add_button.value="Add";
		add_button.id="cr_add";
		div.appendChild(add_button);
		//-->create div in which both previous and next button will be present
		var div = document.createElement("div");
		div.className="flex-container";
		form4.appendChild(div);
		//-->create previous button
		var previous_button = document.createElement("input");
		previous_button.type="button";
		previous_button.name="previous";
		previous_button.className="previous action-button";
		previous_button.onclick=clickform3;
		previous_button.value="Previous";
		previous_button.id="cr_previous";
		div.appendChild(previous_button);
		//-->create next button
		var next_button = document.createElement("input");
		next_button.type="button";
		next_button.name="next";
		next_button.className="next action-button";
		next_button.onclick=clickform5;
		next_button.value="Next";
		next_button.id="cr_next";
		div.appendChild(next_button);
}
function removecertification(){
	//-->which forms have to be visible
	var form1 = document.getElementById("f1");
	form1.style.display="none";
	var form2 = document.getElementById("f2");
	form2.style.display="none";
	var form3 = document.getElementById("f3");
	form3.style.display="none";
	var form4 = document.getElementById("f4");
	form4.style.display="block";
	var form5 = document.getElementById("f5");
	form5.style.display="none";
	var form6 = document.getElementById("f6");
	form6.style.display="none";
	var form7 = document.getElementById("f7");
	form7.style.display="none";
	var form8 = document.getElementById("f8");
	form8.style.display="none";
	var form9 = document.getElementById("f9");
	form9.style.display="none";
	//-->how much of the progress bar is green
	var progress = document.getElementById("p4");
	progress.classList.add("active");
	var progress = document.getElementById("p5");
	progress.classList.remove("active");

	//-->how many institutes already present
	var hidden = document.getElementById("hidden_certifications");
	var no = parseInt(hidden.innerText);
	//-->remove most current subtitle
	var subtititle = document.getElementById("sub"+certifications_info_list_name[no-1][0]);
	subtititle.remove();
	//-->remove most current labels and textfields
	for(var i=0; i<3; i++){
		//-->remove text fields
		var text = document.getElementsByName(certifications_info_list_name[no-1][i]);
		text[0].remove();
		//-->remove labels
		var label = document.getElementById(certifications_info_list_name[no-1][i]);
		label.remove();
	}
	//-->update projects_info_list_name
	for(var i=2; i>=0; i--){
		certifications_info_list_name[no-1].splice(i,1);
	}
	certifications_info_list_name.splice((no-1),1);
	hidden.innerText=(no-1);
}
//-->Function to go from form4 -> form5 or from form6 -> form5
function clickform5(){
	//-->which forms have to be visible
	var form1 = document.getElementById("f1");
	form1.style.display="none";
	var form2 = document.getElementById("f2");
	form2.style.display="none";
	var form3 = document.getElementById("f3");
	form3.style.display="none";
	var form4 = document.getElementById("f4");
	form4.style.display="none";
	var form5 = document.getElementById("f5");
	form5.style.display="block";
	var form6 = document.getElementById("f6");
	form6.style.display="none";
	var form7 = document.getElementById("f7");
	form7.style.display="none";
	var form8 = document.getElementById("f8");
	form8.style.display="none";
	var form9 = document.getElementById("f9");
	form9.style.display="none";
	//-->how much of the progress bar is green
	var progress = document.getElementById("p5");
	progress.classList.add("active");
	var progress = document.getElementById("p6");
	progress.classList.remove("active");
	if(list_made[4]==false){
		var lennotzero=true;
		//-->declare list to be used in this form
		var experience_info_list=[];
		//-->fill the list from main string
		for (var i in json_string){
			if(i=="experience_info_list"){
				//console.log("inside if1");
				//console.log(json_string[i]);
				if(json_string[i].length>0){
					//console.log("inside if2");
					for(var j=0; j<json_string[i].length; j++){
						//-->add new list to the certifications_info_list
						experience_info_list[j] = new Array(json_string[i][j].length);
						for(var k=0; k<json_string[i][j].length; k++){
							experience_info_list[j][k]=json_string[i][j][k];			
						}
						
					}
					//console.log(experience_info_list);
				}
				else{
					lennotzero = false;
				}
			}
				
		}
		if(lennotzero){
			//-->declare list holding names of of the elements
			var count=1;
			//-->dynamically change each name depeneding on list index 
			for(var i in experience_info_list){
				experience_info_list_name[i] = new Array(experience_info_list[i].length)
				experience_info_list_name[i][0] = ex_str1+count;
				experience_info_list_name[i][1] = ex_str2+count;
				experience_info_list_name[i][2] = ex_str3+count;
				experience_info_list_name[i][3] = ex_str4+count;
				count+=1;
			}
			var len_sublist = experience_info_list[i].length;
			var label_names = ["Company:","Role:","Duration:","Description"];
			//console.log(experience_info_list_name);
			//-->creating elements 
			for(var i in experience_info_list){
				var form5 = document.getElementById("f55");
				//-->create subtititle
				var subtititle = document.createElement("h3");
				subtititle.className="fs-subtitle";
				var no = parseInt(i)+1;
				subtititle.id="sub"+experience_info_list_name[no-1][0];
				var hidden = document.getElementById("hidden_experience");
				hidden.innerText=(no);
				subtititle.innerText="Experience "+(no);
				form5.appendChild(subtititle);
				for(var j=0; j<len_sublist; j++){
					//-->create div in which both div of label and input will be present
					var div = document.createElement("div");
					div.className="flex-container";
					form5.appendChild(div);
					//-->create div of label
					var labeldiv = document.createElement("div");
					labeldiv.className="labeldiv";
					labeldiv.id=experience_info_list_name[i][j];
					div.appendChild(labeldiv);
					//-->create label
					var label = document.createElement("label");
					label.innerText=label_names[j];		
					labeldiv.appendChild(label);
					//-->create input
					if(j==3){
						var input = document.createElement("textarea");
					input.type="text";
					input.value=experience_info_list[i][j];
					//-->put value from list into input element
					input.name=experience_info_list_name[i][j];
					div.appendChild(input);
					}
					else{
						var input = document.createElement("input");
					input.type="text";
					input.value=experience_info_list[i][j];
					//-->put value from list into input element
					input.name=experience_info_list_name[i][j];
					div.appendChild(input);
					}
					
				}
			}		
		}
		var form5 = document.getElementById("f55");
		//-->create div in which remove button will be present
		var div = document.createElement("div");
		div.className="flex-container";
		form5.appendChild(div);
		//-->create remove button
		var remove_button = document.createElement("input");
		remove_button.type="button";
		remove_button.name="remove_experience";
		remove_button.className="remove";
		remove_button.onclick=removeexperience;
		remove_button.value="Remove";
		remove_button.id="ex_remove";
		div.appendChild(remove_button);
		//-->create add button
		var add_button = document.createElement("input");
		add_button.type="button";
		add_button.name="add_experience";
		add_button.className="add";
		add_button.onclick=addexperience;
		add_button.value="Add";
		add_button.id="ex_add";
		div.appendChild(add_button);
		//-->create div in which both previous and next button will be present
		var div = document.createElement("div");
		div.className="flex-container";
		form5.appendChild(div);
		//-->create previous button
		var previous_button = document.createElement("input");
		previous_button.type="button";
		previous_button.name="previous";
		previous_button.className="previous action-button";
		previous_button.onclick=clickform4;
		previous_button.value="Previous";
		previous_button.id="ex_previous";
		div.appendChild(previous_button);
		//-->create next button
		var next_button = document.createElement("input");
		next_button.type="button";
		next_button.name="next";
		next_button.className="next action-button";
		next_button.onclick=clickform6;
		next_button.value="Next";
		next_button.id="ex_next";
		div.appendChild(next_button);
		list_made[4]=true;	
	}		
}   
function addexperience(){
	//-->which forms have to be visible
	var form1 = document.getElementById("f1");
	form1.style.display="none";
	var form2 = document.getElementById("f2");
	form2.style.display="none";
	var form3 = document.getElementById("f3");
	form3.style.display="none";
	var form4 = document.getElementById("f4");
	form4.style.display="none";
	var form5 = document.getElementById("f5");
	form5.style.display="block";
	var form6 = document.getElementById("f6");
	form6.style.display="none";
	var form7 = document.getElementById("f7");
	form7.style.display="none";
	var form8 = document.getElementById("f8");
	form8.style.display="none";
	var form9 = document.getElementById("f9");
	form9.style.display="none";
	//-->how much of the progress bar is green
	var progress = document.getElementById("p5");
	progress.classList.add("active");
	var progress = document.getElementById("p6");
	progress.classList.remove("active");
	//-->how many institutes already present
	var hidden = document.getElementById("hidden_experience");
	var no = parseInt(hidden.innerText);
	//-->remove buttons
	var add_button = document.getElementById("ex_add");
	add_button.remove();
	var remove_button = document.getElementById("ex_remove");
	remove_button.remove();
	var previous_button = document.getElementById("ex_previous");
	previous_button.remove();
	var next_button = document.getElementById("ex_next");
	next_button.remove();
	//-->add elements
	var form5 = document.getElementById("f55");
	var no = no+1;
	hidden.innerText=(no);
	//-->add elements in education_info_list_name
	experience_info_list_name[no-1] = new Array(4)
	experience_info_list_name[no-1][0] = ex_str1+no;
	experience_info_list_name[no-1][1] = ex_str2+no;
	experience_info_list_name[no-1][2] = ex_str3+no;
	experience_info_list_name[no-1][3] = ex_str4+no;
	//-->create subtititle
	var subtititle = document.createElement("h3");
	subtititle.className="fs-subtitle";
	subtititle.id="sub"+experience_info_list_name[no-1][0];
	subtititle.innerText="Experience "+(no);
	form5.appendChild(subtititle);
	//-->add rest of the elements
	var label_names = ["Company:","Role:","Duration:","Description"];
	for(var i=0; i<4; i++){
		//-->create div in which both div of label and input will be present
		var div = document.createElement("div");
		div.className="flex-container";
		form5.appendChild(div);
		//-->create div of label
		var labeldiv = document.createElement("div");
		labeldiv.className="labeldiv";
		div.appendChild(labeldiv);
		//-->create label
		var label = document.createElement("label");
		label.innerText=label_names[i];
		labeldiv.id=experience_info_list_name[no-1][i];
		labeldiv.appendChild(label);
		//-->create input
		if(i==3){
			var input = document.createElement("textarea");
		input.type="text";
		//-->put value from list into input element
		input.name=experience_info_list_name[no-1][i];
		div.appendChild(input);
		}
		else{
			var input = document.createElement("input");
		input.type="text";
		//-->put value from list into input element
		input.name=experience_info_list_name[no-1][i];
		div.appendChild(input);
		}
		
	}
	var form5 = document.getElementById("f55");
	//-->create div in which remove button will be present
	var div = document.createElement("div");
	div.className="flex-container";
	form5.appendChild(div);
	//-->create remove button
	var remove_button = document.createElement("input");
	remove_button.type="button";
	remove_button.name="remove_experience";
	remove_button.className="remove";
	remove_button.onclick=removeexperience;
	remove_button.value="Remove";
	remove_button.id="ex_remove";
	div.appendChild(remove_button);
	//-->create add button
	var add_button = document.createElement("input");
	add_button.type="button";
	add_button.name="add_experience";
	add_button.className="add";
	add_button.onclick=addexperience;
	add_button.value="Add";
	add_button.id="ex_add";
	div.appendChild(add_button);
	//-->create div in which both previous and next button will be present
	var div = document.createElement("div");
	div.className="flex-container";
	form5.appendChild(div);
	//-->create previous button
	var previous_button = document.createElement("input");
	previous_button.type="button";
	previous_button.name="previous";
	previous_button.className="previous action-button";
	previous_button.onclick=clickform4;
	previous_button.value="Previous";
	previous_button.id="ex_previous";
	div.appendChild(previous_button);
	//-->create next button
	var next_button = document.createElement("input");
	next_button.type="button";
	next_button.name="next";
	next_button.className="next action-button";
	next_button.onclick=clickform6;
	next_button.value="Next";
	next_button.id="ex_next";
	div.appendChild(next_button);
}
function removeexperience(){
	//-->which forms have to be visible
	var form1 = document.getElementById("f1");
	form1.style.display="none";
	var form2 = document.getElementById("f2");
	form2.style.display="none";
	var form3 = document.getElementById("f3");
	form3.style.display="none";
	var form4 = document.getElementById("f4");
	form4.style.display="none";
	var form5 = document.getElementById("f5");
	form5.style.display="block";
	var form6 = document.getElementById("f6");
	form6.style.display="none";
	var form7 = document.getElementById("f7");
	form7.style.display="none";
	var form8 = document.getElementById("f8");
	form8.style.display="none";
	var form9 = document.getElementById("f9");
	form9.style.display="none";
	//-->how much of the progress bar is green
	var progress = document.getElementById("p5");
	progress.classList.add("active");
	var progress = document.getElementById("p6");
	progress.classList.remove("active");
	//-->how many institutes already present
	var hidden = document.getElementById("hidden_experience");
	var no = parseInt(hidden.innerText);
	//-->remove most current subtitle
	var subtititle = document.getElementById("sub"+experience_info_list_name[no-1][0]);
	subtititle.remove();
	//-->remove most current labels and textfields
	for(var i=0; i<4; i++){
		//-->remove text fields
		var text = document.getElementsByName(experience_info_list_name[no-1][i]);
		text[0].remove();
		//-->remove labels
		var label = document.getElementById(experience_info_list_name[no-1][i]);
		label.remove();
	}
	//-->update projects_info_list_name
	for(var i=3; i>=0; i--){
		experience_info_list_name[no-1].splice(i,1);
	}
	experience_info_list_name.splice((no-1),1);
	hidden.innerText=(no-1);

}
//-->Function to go from form5 -> form6 or from form7 -> form6
function clickform6(){
	//-->which forms have to be visible
	var form1 = document.getElementById("f1");
	form1.style.display="none";
	var form2 = document.getElementById("f2");
	form2.style.display="none";
	var form3 = document.getElementById("f3");
	form3.style.display="none";
	var form4 = document.getElementById("f4");
	form4.style.display="none";
	var form5 = document.getElementById("f5");
	form5.style.display="none";
	var form6 = document.getElementById("f6");
	form6.style.display="block";
	var form7 = document.getElementById("f7");
	form7.style.display="none";
	var form8 = document.getElementById("f8");
	form8.style.display="none";
	var form9 = document.getElementById("f9");
	form9.style.display="none";
	//-->how much of the progress bar is green
	var progress = document.getElementById("p6");
	progress.classList.add("active");
	var progress = document.getElementById("p7");
	progress.classList.remove("active");
	if(list_made[5]==false){
		var lennotzero=true;
		//-->declare list to be used in this form
		var skills_info_list=[];
		//-->fill the list from main string
		for (var i in json_string){
			if(i=="skills_info_list"){
				if(json_string[i].length>0){
					for(var j=0; j<json_string[i].length; j++){
						//-->add new list to the certifications_info_list
						skills_info_list[j] = json_string[i][j];
					}
				}
				else{
					lennotzero = false;
				}
			}
			
		}
		//console.log(skills_info_list);
		if(lennotzero){
			//-->declare list holding names of of the elements
			var count=1;
			//-->dynamically change each name depeneding on list index 
			for(var i in skills_info_list){
				skills_info_list_name[i] = sk_str1+count;
				count+=1;
			}
			//console.log(skills_info_list_name);
			//-->creating elements 
			for(var i in skills_info_list){
				var form6 = document.getElementById("f66");
				//-->create div in which both div of label and input will be present
				var div = document.createElement("div");
				div.className="flex-container";
				form6.appendChild(div);
				//-->create div of label
				var labeldiv = document.createElement("div");
				labeldiv.className="labeldiv";
				labeldiv.id=skills_info_list_name[i];
				div.appendChild(labeldiv);
				//-->create label
				var label = document.createElement("label");
				var j=parseInt(i)+1;
				label.innerText="Skill "+(j)+":";		
				labeldiv.appendChild(label);
				//-->create input
				var input = document.createElement("input");
				input.type="text";
				input.value=skills_info_list[i];
				//-->put value from list into input element
				input.name=skills_info_list_name[i];
				div.appendChild(input);
			}
		}	
		//-->update hidden value
		var no = skills_info_list.length;
		var hidden = document.getElementById("hidden_skils");
		hidden.innerText=(no);	
		var form6 = document.getElementById("f66");
		//-->create div in which remove button will be present
		var div = document.createElement("div");
		div.className="flex-container";
		form6.appendChild(div);
		//-->create remove button
		var remove_button = document.createElement("input");
		remove_button.type="button";
		remove_button.name="remove_skill";
		remove_button.className="remove";
		remove_button.onclick=removeskill;
		remove_button.value="Remove";
		remove_button.id="sk_remove";
		div.appendChild(remove_button);
		//-->create add button
		var add_button = document.createElement("input");
		add_button.type="button";
		add_button.name="add_skill";
		add_button.className="add";
		add_button.onclick=addskill;
		add_button.value="Add";
		add_button.id="sk_add";
		div.appendChild(add_button);
		//-->create div in which both previous and next button will be present
		var div = document.createElement("div");
		div.className="flex-container";
		form6.appendChild(div);
		//-->create previous button
		var previous_button = document.createElement("input");
		previous_button.type="button";
		previous_button.name="previous";
		previous_button.className="previous action-button";
		previous_button.onclick=clickform5;
		previous_button.value="Previous";
		previous_button.id="sk_previous";
		div.appendChild(previous_button);
		//-->create next button
		var next_button = document.createElement("input");
		next_button.type="button";
		next_button.name="next";
		next_button.className="next action-button";
		next_button.onclick=clickform7;
		next_button.value="Next";
		next_button.id="sk_next";
		div.appendChild(next_button);
		list_made[5]=true;	
	}	
}
function addskill(){
	//-->which forms have to be visible
	var form1 = document.getElementById("f1");
	form1.style.display="none";
	var form2 = document.getElementById("f2");
	form2.style.display="none";
	var form3 = document.getElementById("f3");
	form3.style.display="none";
	var form4 = document.getElementById("f4");
	form4.style.display="none";
	var form5 = document.getElementById("f5");
	form5.style.display="none";
	var form6 = document.getElementById("f6");
	form6.style.display="block";
	var form7 = document.getElementById("f7");
	form7.style.display="none";
	var form8 = document.getElementById("f8");
	form8.style.display="none";
	var form9 = document.getElementById("f9");
	form9.style.display="none";
	//-->how much of the progress bar is green
	var progress = document.getElementById("p6");
	progress.classList.add("active");
	var progress = document.getElementById("p7");
	progress.classList.remove("active");
	//-->how many institutes already present
	var hidden = document.getElementById("hidden_skils");
	var no = parseInt(hidden.innerText);
	//-->remove buttons
	var add_button = document.getElementById("sk_add");
	add_button.remove();
	var remove_button = document.getElementById("sk_remove");
	remove_button.remove();
	var previous_button = document.getElementById("sk_previous");
	previous_button.remove();
	var next_button = document.getElementById("sk_next");
	next_button.remove();
	//-->add elements
	var form6 = document.getElementById("f66");
	var no = no+1;
	hidden.innerText=(no);
	//-->add elements in education_info_list_name
	skills_info_list_name[no-1] = sk_str1+no;
	var form6 = document.getElementById("f66");
	//-->create div in which both div of label and input will be present
	var div = document.createElement("div");
	div.className="flex-container";
	form6.appendChild(div);
	//-->create div of label
	var labeldiv = document.createElement("div");
	labeldiv.className="labeldiv";
	labeldiv.id=skills_info_list_name[no-1];
	div.appendChild(labeldiv);
	//-->create label
	var label = document.createElement("label");
	label.innerText="Skill "+(no)+":";		
	labeldiv.appendChild(label);
	//-->create input
	var input = document.createElement("input");
	input.type="text";
	//-->put value from list into input element
	input.name=skills_info_list_name[no-1];
	div.appendChild(input);
	var form6 = document.getElementById("f66");
	//-->create div in which remove button will be present
	var div = document.createElement("div");
	div.className="flex-container";
	form6.appendChild(div);
	//-->create remove button
	var remove_button = document.createElement("input");
	remove_button.type="button";
	remove_button.name="remove_skill";
	remove_button.className="remove";
	remove_button.onclick=removeskill;
	remove_button.value="Remove";
	remove_button.id="sk_remove";
	div.appendChild(remove_button);
	//-->create add button
	var add_button = document.createElement("input");
	add_button.type="button";
	add_button.name="add_skill";
	add_button.className="add";
	add_button.onclick=addskill;
	add_button.value="Add";
	add_button.id="sk_add";
	div.appendChild(add_button);
	//-->create div in which both previous and next button will be present
	var div = document.createElement("div");
	div.className="flex-container";
	form6.appendChild(div);
	//-->create previous button
	var previous_button = document.createElement("input");
	previous_button.type="button";
	previous_button.name="previous";
	previous_button.className="previous action-button";
	previous_button.onclick=clickform5;
	previous_button.value="Previous";
	previous_button.id="sk_previous";
	div.appendChild(previous_button);
	//-->create next button
	var next_button = document.createElement("input");
	next_button.type="button";
	next_button.name="next";
	next_button.className="next action-button";
	next_button.onclick=clickform7;
	next_button.value="Next";
	next_button.id="sk_next";
	div.appendChild(next_button);	
}
function removeskill(){
	//-->which forms have to be visible
	var form1 = document.getElementById("f1");
	form1.style.display="none";
	var form2 = document.getElementById("f2");
	form2.style.display="none";
	var form3 = document.getElementById("f3");
	form3.style.display="none";
	var form4 = document.getElementById("f4");
	form4.style.display="none";
	var form5 = document.getElementById("f5");
	form5.style.display="none";
	var form6 = document.getElementById("f6");
	form6.style.display="block";
	var form7 = document.getElementById("f7");
	form7.style.display="none";
	var form8 = document.getElementById("f8");
	form8.style.display="none";
	var form9 = document.getElementById("f9");
	form9.style.display="none";
	//-->how much of the progress bar is green
	var progress = document.getElementById("p6");
	progress.classList.add("active");
	var progress = document.getElementById("p7");
	progress.classList.remove("active");
	//-->how many institutes already present
	var hidden = document.getElementById("hidden_skils");
	var no = parseInt(hidden.innerText);
	//-->remove text fields
	var text = document.getElementsByName(skills_info_list_name[no-1]);
	text[0].remove();
	//-->remove labels
	var label = document.getElementById(skills_info_list_name[no-1]);
	label.remove();
	skills_info_list_name.splice((no-1),1);
	hidden.innerText=(no-1);
}
//-->Function to go from form6 -> form7 or from form8 -> form7
function clickform7(){
	//-->which forms have to be visible
	var form1 = document.getElementById("f1");
	form1.style.display="none";
	var form2 = document.getElementById("f2");
	form2.style.display="none";
	var form3 = document.getElementById("f3");
	form3.style.display="none";
	var form4 = document.getElementById("f4");
	form4.style.display="none";
	var form5 = document.getElementById("f5");
	form5.style.display="none";
	var form6 = document.getElementById("f6");
	form6.style.display="none";
	var form7 = document.getElementById("f7");
	form7.style.display="block";
	var form8 = document.getElementById("f8");
	form8.style.display="none";
	var form9 = document.getElementById("f9");
	form9.style.display="none";
	//-->how much of the progress bar is green
	var progress = document.getElementById("p7");
	progress.classList.add("active");
	var progress = document.getElementById("p8");
	progress.classList.remove("active");
	if(list_made[6]==false){
		var lennotzero=true;
		//-->declare list to be used in this form
		var volunteer_info_list=[];
		//-->fill the list from main string
		for (var i in json_string){
			if(i=="volunteer_info_list"){
				if(json_string[i].length>0){
					for(var j=0; j<json_string[i].length; j++){
						//-->add new list to the certifications_info_list
						volunteer_info_list[j] = new Array(json_string[i][j].length);
						for(var k=0; k<json_string[i][j].length; k++){
							volunteer_info_list[j][k]=json_string[i][j][k];			
						}
						//console.log(volunteer_info_list);
					}
				}
				else{
					lennotzero = false;
				}
			}
				
		}
		if(lennotzero){
			//-->declare list holding names of of the elements
			var count=1;
			//-->dynamically change each name depeneding on list index 
			for(var i in volunteer_info_list){
				volunteer_info_list_name[i] = new Array(volunteer_info_list[i].length)
				volunteer_info_list_name[i][0] = vo_str1+count;
				volunteer_info_list_name[i][1] = vo_str2+count;
				volunteer_info_list_name[i][2] = vo_str3+count;
				volunteer_info_list_name[i][3] = vo_str4+count;
				count+=1;
			}
			var len_sublist = volunteer_info_list[i].length;
			var label_names = ["Company:","Role:","Duration:","Description"];
			//console.log(experience_info_list_name);
			//-->creating elements 
			for(var i in volunteer_info_list){
				var form7 = document.getElementById("f77");
				//-->create subtititle
				var subtititle = document.createElement("h3");
				subtititle.className="fs-subtitle";
				var no = parseInt(i)+1;
				subtititle.id="sub"+volunteer_info_list[no-1][0];
				var hidden = document.getElementById("hidden_volunteer");
				hidden.innerText=(no);
				subtititle.innerText="Volunteer Experience "+(no);
				form7.appendChild(subtititle);
				for(var j=0; j<len_sublist; j++){
					//-->create div in which both div of label and input will be present
					var div = document.createElement("div");
					div.className="flex-container";
					form7.appendChild(div);
					//-->create div of label
					var labeldiv = document.createElement("div");
					labeldiv.className="labeldiv";
					labeldiv.id=volunteer_info_list_name[i][j];
					div.appendChild(labeldiv);
					//-->create label
					var label = document.createElement("label");
					label.innerText=label_names[j];		
					labeldiv.appendChild(label);
					//-->create input
					if(j==3){
						var input = document.createElement("textarea");
						input.type="text";
						input.value=volunteer_info_list[i][j];
						//-->put value from list into input element
						input.name=volunteer_info_list_name[i][j];
						div.appendChild(input);
					}
					else{
						var input = document.createElement("input");
						input.type="text";
						input.value=volunteer_info_list[i][j];
						//-->put value from list into input element
						input.name=volunteer_info_list_name[i][j];
						div.appendChild(input);
					}
					
				}
			}		
		}
		var form7 = document.getElementById("f77");
		//-->create div in which remove button will be present
		var div = document.createElement("div");
		div.className="flex-container";
		form7.appendChild(div);
		//-->create remove button
		var remove_button = document.createElement("input");
		remove_button.type="button";
		remove_button.name="remove_volunteer";
		remove_button.className="remove";
		remove_button.onclick=removevolunteer;
		remove_button.value="Remove";
		remove_button.id="vo_remove";
		div.appendChild(remove_button);
		//-->create add button
		var add_button = document.createElement("input");
		add_button.type="button";
		add_button.name="add_volunteer";
		add_button.className="add";
		add_button.onclick=addvolunteer;
		add_button.value="Add";
		add_button.id="vo_add";
		div.appendChild(add_button);
		//-->create div in which both previous and next button will be present
		var div = document.createElement("div");
		div.className="flex-container";
		form7.appendChild(div);
		//-->create previous button
		var previous_button = document.createElement("input");
		previous_button.type="button";
		previous_button.name="previous";
		previous_button.className="previous action-button";
		previous_button.onclick=clickform6;
		previous_button.value="Previous";
		previous_button.id="vo_previous";
		div.appendChild(previous_button);
		//-->create next button
		var next_button = document.createElement("input");
		next_button.type="button";
		next_button.name="next";
		next_button.className="next action-button";
		next_button.onclick=clickform8;
		next_button.value="Next";
		next_button.id="vo_next";
		div.appendChild(next_button);
		list_made[6]=true;	
	}	
}
function addvolunteer(){
	//-->which forms have to be visible
	var form1 = document.getElementById("f1");
	form1.style.display="none";
	var form2 = document.getElementById("f2");
	form2.style.display="none";
	var form3 = document.getElementById("f3");
	form3.style.display="none";
	var form4 = document.getElementById("f4");
	form4.style.display="none";
	var form5 = document.getElementById("f5");
	form5.style.display="none";
	var form6 = document.getElementById("f6");
	form6.style.display="none";
	var form7 = document.getElementById("f7");
	form7.style.display="block";
	var form8 = document.getElementById("f8");
	form8.style.display="none";
	var form9 = document.getElementById("f9");
	form9.style.display="none";
	//-->how much of the progress bar is green
	var progress = document.getElementById("p7");
	progress.classList.add("active");
	var progress = document.getElementById("p8");
	progress.classList.remove("active");
	//-->how many institutes already present
	var hidden = document.getElementById("hidden_volunteer");
	var no = parseInt(hidden.innerText);
	//-->remove buttons
	var add_button = document.getElementById("vo_add");
	add_button.remove();
	var remove_button = document.getElementById("vo_remove");
	remove_button.remove();
	var previous_button = document.getElementById("vo_previous");
	previous_button.remove();
	var next_button = document.getElementById("vo_next");
	next_button.remove();
	//-->add elements
	var form7 = document.getElementById("f77");
	var no = no+1;
	hidden.innerText=(no);
	//-->add elements in education_info_list_name
	volunteer_info_list_name[no-1] = new Array(4)
	volunteer_info_list_name[no-1][0] = vo_str1+no;
	volunteer_info_list_name[no-1][1] = vo_str2+no;
	volunteer_info_list_name[no-1][2] = vo_str3+no;
	volunteer_info_list_name[no-1][3] = vo_str4+no;
	//-->create subtititle
	var subtititle = document.createElement("h3");
	subtititle.className="fs-subtitle";
	subtititle.id="sub"+volunteer_info_list_name[no-1][0];
	subtititle.innerText="Volunteer Experience "+(no);
	form7.appendChild(subtititle);
	//-->add rest of the elements
	var label_names = ["Company:","Role:","Duration:","Description"];
	for(var i=0; i<4; i++){
		//-->create div in which both div of label and input will be present
		var div = document.createElement("div");
		div.className="flex-container";
		form7.appendChild(div);
		//-->create div of label
		var labeldiv = document.createElement("div");
		labeldiv.className="labeldiv";
		div.appendChild(labeldiv);
		//-->create label
		var label = document.createElement("label");
		label.innerText=label_names[i];
		labeldiv.id=volunteer_info_list_name[no-1][i];
		labeldiv.appendChild(label);
		//-->create input
		if(i==3){
			var input = document.createElement("textarea");
			input.type="text";
			input.name=volunteer_info_list_name[no-1][i];
			div.appendChild(input);
		}
		else{
			var input = document.createElement("input");
			input.type="text";
			input.name=volunteer_info_list_name[no-1][i];
			div.appendChild(input);
		}
		
	}
	var form7 = document.getElementById("f77");
	//-->create div in which remove button will be present
	var div = document.createElement("div");
	div.className="flex-container";
	form7.appendChild(div);
	//-->create remove button
	var remove_button = document.createElement("input");
	remove_button.type="button";
	remove_button.name="remove_volunteer";
	remove_button.className="remove";
	remove_button.onclick=removevolunteer;
	remove_button.value="Remove";
	remove_button.id="vo_remove";
	div.appendChild(remove_button);
	//-->create add button
	var add_button = document.createElement("input");
	add_button.type="button";
	add_button.name="add_volunteer";
	add_button.className="add";
	add_button.onclick=addvolunteer;
	add_button.value="Add";
	add_button.id="vo_add";
	div.appendChild(add_button);
	//-->create div in which both previous and next button will be present
	var div = document.createElement("div");
	div.className="flex-container";
	form7.appendChild(div);
	//-->create previous button
	var previous_button = document.createElement("input");
	previous_button.type="button";
	previous_button.name="previous";
	previous_button.className="previous action-button";
	previous_button.onclick=clickform6;
	previous_button.value="Previous";
	previous_button.id="vo_previous";
	div.appendChild(previous_button);
	//-->create next button
	var next_button = document.createElement("input");
	next_button.type="button";
	next_button.name="next";
	next_button.className="next action-button";
	next_button.onclick=clickform8;
	next_button.value="Next";
	next_button.id="vo_next";
	div.appendChild(next_button);
}
function removevolunteer(){
	//-->which forms have to be visible
	var form1 = document.getElementById("f1");
	form1.style.display="none";
	var form2 = document.getElementById("f2");
	form2.style.display="none";
	var form3 = document.getElementById("f3");
	form3.style.display="none";
	var form4 = document.getElementById("f4");
	form4.style.display="none";
	var form5 = document.getElementById("f5");
	form5.style.display="none";
	var form6 = document.getElementById("f6");
	form6.style.display="none";
	var form7 = document.getElementById("f7");
	form7.style.display="block";
	var form8 = document.getElementById("f8");
	form8.style.display="none";
	var form9 = document.getElementById("f9");
	form9.style.display="none";
	//-->how much of the progress bar is green
	var progress = document.getElementById("p7");
	progress.classList.add("active");
	var progress = document.getElementById("p8");
	progress.classList.remove("active");
	//-->how many institutes already present
	var hidden = document.getElementById("hidden_volunteer");
	var no = parseInt(hidden.innerText);
	//-->remove most current subtitle
	var subtititle = document.getElementById("sub"+volunteer_info_list_name[no-1][0]);
	subtititle.remove();
	//-->remove most current labels and textfields
	for(var i=0; i<4; i++){
		//-->remove text fields
		var text = document.getElementsByName(volunteer_info_list_name[no-1][i]);
		text[0].remove();
		//-->remove labels
		var label = document.getElementById(volunteer_info_list_name[no-1][i]);
		label.remove();
	}
	//-->update projects_info_list_name
	for(var i=3; i>=0; i--){
		volunteer_info_list_name[no-1].splice(i,1);
	}
	volunteer_info_list_name.splice((no-1),1);
	hidden.innerText=(no-1);
}
//-->Function to go from form7 -> form8 or from form9 -> form8
function clickform8(){
	//-->which forms have to be visible
	var form1 = document.getElementById("f1");
	form1.style.display="none";
	var form2 = document.getElementById("f2");
	form2.style.display="none";
	var form3 = document.getElementById("f3");
	form3.style.display="none";
	var form4 = document.getElementById("f4");
	form4.style.display="none";
	var form5 = document.getElementById("f5");
	form5.style.display="none";
	var form6 = document.getElementById("f6");
	form6.style.display="none";
	var form7 = document.getElementById("f7");
	form7.style.display="none";
	var form8 = document.getElementById("f8");
	form8.style.display="block";
	var form9 = document.getElementById("f9");
	form9.style.display="none";
	//-->how much of the progress bar is green
	var progress = document.getElementById("p8");
	progress.classList.add("active");
	var progress = document.getElementById("p9");
	progress.classList.remove("active");
	if(list_made[7]==false){
		var lennotzero=true;
		//-->declare list to be used in this form
		var accomplishments_info_list=[];
		//-->fill the list from main string
		for (var i in json_string){
			if(i=="accomplishments_info_list"){
				if(json_string[i].length>0){
					for(var j=0; j<json_string[i].length; j++){
						//-->add new list to the certifications_info_list
						accomplishments_info_list[j] = new Array(json_string[i][j].length);
						for(var k=0; k<json_string[i][j].length; k++){
							accomplishments_info_list[j][k]=json_string[i][j][k];			
						}
						//console.log(accomplishments_info_list);
					}
				}
				else{
					lennotzero = false;
				}
			}	
			
		}
		if(lennotzero){
			//-->declare list holding names of of the elements
			var count=1;
			//-->dynamically change each name depeneding on list index 
			for(var i in accomplishments_info_list){
				accomplishments_info_list_name[i] = new Array(accomplishments_info_list[i].length)
				accomplishments_info_list_name[i][0] = ac_str1+count;
				accomplishments_info_list_name[i][1] = ac_str2+count;
				count+=1;
			}
			var len_sublist = accomplishments_info_list[i].length;
			var label_names = ["Name:","Year:"];
			//console.log(accomplishments_info_list_name);
			//-->creating elements 
			for(var i in accomplishments_info_list){
				var form8 = document.getElementById("f88");
				//-->create subtititle
				var subtititle = document.createElement("h3");
				subtititle.className="fs-subtitle";
				var no = parseInt(i)+1;
				subtititle.id="sub"+accomplishments_info_list[no-1][0];
				var hidden = document.getElementById("hidden_accomplishments");
				hidden.innerText=(no);
				subtititle.innerText="Accomplishment "+(no);
				form8.appendChild(subtititle);
				for(var j=0; j<len_sublist; j++){
					//-->create div in which both div of label and input will be present
					var div = document.createElement("div");
					div.className="flex-container";
					form8.appendChild(div);
					//-->create div of label
					var labeldiv = document.createElement("div");
					labeldiv.className="labeldiv";
					labeldiv.id=accomplishments_info_list_name[i][j];
					div.appendChild(labeldiv);
					//-->create label
					var label = document.createElement("label");
					label.innerText=label_names[j];		
					labeldiv.appendChild(label);
					//-->create input
					var input = document.createElement("input");
					input.type="text";
					input.value=accomplishments_info_list[i][j];
					//-->put value from list into input element
					input.name=accomplishments_info_list_name[i][j];
					div.appendChild(input);
				}
			}	
		}
		var form8 = document.getElementById("f88");
		//-->create div in which remove button will be present
		var div = document.createElement("div");
		div.className="flex-container";
		form8.appendChild(div);
		//-->create remove button
		var remove_button = document.createElement("input");
		remove_button.type="button";
		remove_button.name="remove_accomplishment";
		remove_button.className="remove";
		remove_button.onclick=removeaccomplishment;
		remove_button.value="Remove";
		remove_button.id="ac_remove";
		div.appendChild(remove_button);
		//-->create add button
		var add_button = document.createElement("input");
		add_button.type="button";
		add_button.name="add_accpmplishment";
		add_button.className="add";
		add_button.onclick=addaccomplishment;
		add_button.value="Add";
		add_button.id="ac_add";
		div.appendChild(add_button);
		//-->create div in which both previous and next button will be present
		var div = document.createElement("div");
		div.className="flex-container";
		form8.appendChild(div);
		//-->create previous button
		var previous_button = document.createElement("input");
		previous_button.type="button";
		previous_button.name="previous";
		previous_button.className="previous action-button";
		previous_button.onclick=clickform7;
		previous_button.value="Previous";
		previous_button.id="ac_previous";
		div.appendChild(previous_button);
		//-->create next button
		var next_button = document.createElement("input");
		next_button.type="button";
		next_button.name="next";
		next_button.className="next action-button";
		next_button.onclick=clickform9;
		next_button.value="Next";
		next_button.id="ac_next";
		div.appendChild(next_button);
		list_made[7]=true;		
	}	
}
function addaccomplishment(){
	//-->which forms have to be visible
	var form1 = document.getElementById("f1");
	form1.style.display="none";
	var form2 = document.getElementById("f2");
	form2.style.display="none";
	var form3 = document.getElementById("f3");
	form3.style.display="none";
	var form4 = document.getElementById("f4");
	form4.style.display="none";
	var form5 = document.getElementById("f5");
	form5.style.display="none";
	var form6 = document.getElementById("f6");
	form6.style.display="none";
	var form7 = document.getElementById("f7");
	form7.style.display="none";
	var form8 = document.getElementById("f8");
	form8.style.display="block";
	var form9 = document.getElementById("f9");
	form9.style.display="none";
	//-->how much of the progress bar is green
	var progress = document.getElementById("p8");
	progress.classList.add("active");
	var progress = document.getElementById("p9");
	progress.classList.remove("active");
	//-->how many institutes already present
	var hidden = document.getElementById("hidden_accomplishments");
	var no = parseInt(hidden.innerText);
	//-->remove buttons
	var add_button = document.getElementById("ac_add");
	add_button.remove();
	var remove_button = document.getElementById("ac_remove");
	remove_button.remove();
	var previous_button = document.getElementById("ac_previous");
	previous_button.remove();
	var next_button = document.getElementById("ac_next");
	next_button.remove();
	//-->add elements
	var form8 = document.getElementById("f88");
	var no = no+1;
	hidden.innerText=(no);
	//-->add elements in education_info_list_name
	accomplishments_info_list_name[no-1] = new Array(2)
	accomplishments_info_list_name[no-1][0] = ac_str1+no;
	accomplishments_info_list_name[no-1][1] = ac_str2+no;
	//-->create subtititle
	var subtititle = document.createElement("h3");
	subtititle.className="fs-subtitle";
	subtititle.id="sub"+accomplishments_info_list_name[no-1][0];
	subtititle.innerText="Accomplishment "+(no);
	form8.appendChild(subtititle);
	//-->add rest of the elements
	var label_names = ["Name:","Year:"];
	for(var i=0; i<2; i++){
		//-->create div in which both div of label and input will be present
		var div = document.createElement("div");
		div.className="flex-container";
		form8.appendChild(div);
		//-->create div of label
		var labeldiv = document.createElement("div");
		labeldiv.className="labeldiv";
		div.appendChild(labeldiv);
		//-->create label
		var label = document.createElement("label");
		label.innerText=label_names[i];
		labeldiv.id=accomplishments_info_list_name[no-1][i];
		labeldiv.appendChild(label);
		//-->create input
		var input = document.createElement("input");
		input.type="text";
		input.name=accomplishments_info_list_name[no-1][i];
		div.appendChild(input);
	}
	var form8 = document.getElementById("f88");
	//-->create div in which remove button will be present
	var div = document.createElement("div");
	div.className="flex-container";
	form8.appendChild(div);
	//-->create remove button
	var remove_button = document.createElement("input");
	remove_button.type="button";
	remove_button.name="remove_accomplishment";
	remove_button.className="remove";
	remove_button.onclick=removeaccomplishment;
	remove_button.value="Remove";
	remove_button.id="ac_remove";
	div.appendChild(remove_button);
	//-->create add button
	var add_button = document.createElement("input");
	add_button.type="button";
	add_button.name="add_accpmplishment";
	add_button.className="add";
	add_button.onclick=addaccomplishment;
	add_button.value="Add";
	add_button.id="ac_add";
	div.appendChild(add_button);
	//-->create div in which both previous and next button will be present
	var div = document.createElement("div");
	div.className="flex-container";
	form8.appendChild(div);
	//-->create previous button
	var previous_button = document.createElement("input");
	previous_button.type="button";
	previous_button.name="previous";
	previous_button.className="previous action-button";
	previous_button.onclick=clickform7;
	previous_button.value="Previous";
	previous_button.id="ac_previous";
	div.appendChild(previous_button);
	//-->create next button
	var next_button = document.createElement("input");
	next_button.type="button";
	next_button.name="next";
	next_button.className="next action-button";
	next_button.onclick=clickform9;
	next_button.value="Next";
	next_button.id="ac_next";
	div.appendChild(next_button);
}
function removeaccomplishment(){
	//-->which forms have to be visible
	var form1 = document.getElementById("f1");
	form1.style.display="none";
	var form2 = document.getElementById("f2");
	form2.style.display="none";
	var form3 = document.getElementById("f3");
	form3.style.display="none";
	var form4 = document.getElementById("f4");
	form4.style.display="none";
	var form5 = document.getElementById("f5");
	form5.style.display="none";
	var form6 = document.getElementById("f6");
	form6.style.display="none";
	var form7 = document.getElementById("f7");
	form7.style.display="none";
	var form8 = document.getElementById("f8");
	form8.style.display="block";
	var form9 = document.getElementById("f9");
	form9.style.display="none";
	//-->how much of the progress bar is green
	var progress = document.getElementById("p8");
	progress.classList.add("active");
	var progress = document.getElementById("p9");
	progress.classList.remove("active");
	//-->how many institutes already present
	var hidden = document.getElementById("hidden_accomplishments");
	var no = parseInt(hidden.innerText);
	//-->remove most current subtitle
	var subtititle = document.getElementById("sub"+accomplishments_info_list_name[no-1][0]);
	subtititle.remove();
	//-->remove most current labels and textfields
	for(var i=0; i<2; i++){
		//-->remove text fields
		var text = document.getElementsByName(accomplishments_info_list_name[no-1][i]);
		text[0].remove();
		//-->remove labels
		var label = document.getElementById(accomplishments_info_list_name[no-1][i]);
		label.remove();
	}
	//-->update projects_info_list_name
	for(var i=1; i>=0; i--){
		accomplishments_info_list_name[no-1].splice(i,1);
	}
	accomplishments_info_list_name.splice((no-1),1);
	hidden.innerText=(no-1);

}
//-->Function to go from form8 -> form9 
function clickform9(){
	
	
	//-->which forms have to be visible
	var form1 = document.getElementById("f1");
	form1.style.display="none";
	var form2 = document.getElementById("f2");
	form2.style.display="none";
	var form3 = document.getElementById("f3");
	form3.style.display="none";
	var form4 = document.getElementById("f4");
	form4.style.display="none";
	var form5 = document.getElementById("f5");
	form5.style.display="none";
	var form6 = document.getElementById("f6");
	form6.style.display="none";
	var form7 = document.getElementById("f7");
	form7.style.display="none";
	var form8 = document.getElementById("f8");
	form8.style.display="none";
	var form9 = document.getElementById("f9");
	form9.style.display="block";
	//-->how much of the progress bar is green
	var progress = document.getElementById("p9");
	progress.classList.add("active");
	if(list_made[8]==false){
		var lennotzero=true;
		//-->declare list to be used in this form
		var hobbies_info_list=[];
		//-->fill the list from main string
		for (var i in json_string){
			if(i=="hobbies_info_list"){
				if(json_string[i].length>0){
					for(var j=0; j<json_string[i].length; j++){
						//-->add new list to the certifications_info_list
						hobbies_info_list[j] = json_string[i][j];
					}
				}
				else{
					lennotzero = false;
				}
			}
				
		}
		if(lennotzero){
			//console.log(skills_info_list);
			//-->declare list holding names of of the elements
			var count=1;
			//-->dynamically change each name depeneding on list index 
			for(var i in hobbies_info_list){
				hobbies_info_list_name[i] = hb_str1+count;
				count+=1;
			}
			//console.log(skills_info_list_name);
			//-->creating elements 
			for(var i in hobbies_info_list){
				var form9 = document.getElementById("f99");
				//-->create div in which both div of label and input will be present
				var div = document.createElement("div");
				div.className="flex-container";
				form9.appendChild(div);
				//-->create div of label
				var labeldiv = document.createElement("div");
				labeldiv.className="labeldiv";
				labeldiv.id=hobbies_info_list_name[i];
				div.appendChild(labeldiv);
				//-->create label
				var label = document.createElement("label");
				var j=parseInt(i)+1;
				label.innerText="Hobby "+(j)+":";		
				labeldiv.appendChild(label);
				//-->create input
				var input = document.createElement("input");
				input.type="text";
				input.value=hobbies_info_list[i];
				//-->put value from list into input element
				input.name=hobbies_info_list_name[i];
				div.appendChild(input);
			}	
		}
		//-->update hidden value
		var no = hobbies_info_list.length;
		var hidden = document.getElementById("hidden_hobbies");
		hidden.innerText=(no);	
		var form9 = document.getElementById("f99");
		//-->create div in which remove button will be present
		var div = document.createElement("div");
		div.className="flex-container";
		form9.appendChild(div);
		//-->create remove button
		var remove_button = document.createElement("input");
		remove_button.type="button";
		remove_button.name="remove_hobby";
		remove_button.className="remove";
		remove_button.onclick=removehobby;
		remove_button.value="Remove";
		remove_button.id="hb_remove";
		div.appendChild(remove_button);
		//-->create add button
		var add_button = document.createElement("input");
		add_button.type="button";
		add_button.name="add_hobby";
		add_button.className="add";
		add_button.onclick=addhobby;
		add_button.value="Add";
		add_button.id="hb_add";
		div.appendChild(add_button);
		//-->create div in which both previous and next button will be present
		var div = document.createElement("div");
		div.className="flex-container";
		form9.appendChild(div);
		//-->create previous button
		var previous_button = document.createElement("input");
		previous_button.type="button";
		previous_button.name="previous";
		previous_button.className="previous action-button";
		previous_button.onclick=clickform8;
		previous_button.value="Previous";
		previous_button.id="hb_previous";
		div.appendChild(previous_button);
		//-->create next button
		var submit_button = document.createElement("input");
		submit_button.type="submit";
		submit_button.name="submit";
		submit_button.className="submit action-button";
		//next_button.onclick=clickform7;
		submit_button.value="Submit";
		submit_button.id="hb_submit";
		div.appendChild(submit_button);
		list_made[8]=true;
	}
	var d1 = document.getElementById("hidden_basic");
	//console.log(d1.innerText);
	var i1 = document.getElementById("hidden_basic1");
	i1.value=d1.innerText;
	var d2 = document.getElementById("hidden_education");
	//console.log(d2.innerText);
	var i2 = document.getElementById("hidden_education1");
	i2.value=d2.innerText;
	var d3 = document.getElementById("hidden_projects");
	//console.log(d3.innerText);
	var i3 = document.getElementById("hidden_projects1");
	i3.value=d3.innerText;
	var d4 = document.getElementById("hidden_certifications");
	//console.log(d4.innerText);
	var i4 = document.getElementById("hidden_certifications1");
	i4.value=d4.innerText;
	var d5 = document.getElementById("hidden_experience");
	//console.log(d5.innerText);
	var i5 = document.getElementById("hidden_experience1");
	i5.value=d5.innerText;
	var d6 = document.getElementById("hidden_skils");
	//console.log(d6.innerText);
	var i6 = document.getElementById("hidden_skils1");
	i6.value=d6.innerText;
	var d7 = document.getElementById("hidden_volunteer");
	//console.log(d7.innerText);
	var i7 = document.getElementById("hidden_volunteer1");
	i7.value=d7.innerText;
	var d8 = document.getElementById("hidden_accomplishments");
	//console.log(d8.innerText);
	var i8 = document.getElementById("hidden_accomplishments1");
	i8.value=d8.innerText;
	var d9 = document.getElementById("hidden_hobbies");
	//console.log(d9.innerText);
	var i9 = document.getElementById("hidden_hobbies1");
	i9.value=d9.innerText;		
}
function addhobby(){
	
	//-->which forms have to be visible
	var form1 = document.getElementById("f1");
	form1.style.display="none";
	var form2 = document.getElementById("f2");
	form2.style.display="none";
	var form3 = document.getElementById("f3");
	form3.style.display="none";
	var form4 = document.getElementById("f4");
	form4.style.display="none";
	var form5 = document.getElementById("f5");
	form5.style.display="none";
	var form6 = document.getElementById("f6");
	form6.style.display="none";
	var form7 = document.getElementById("f7");
	form7.style.display="none";
	var form8 = document.getElementById("f8");
	form8.style.display="none";
	var form9 = document.getElementById("f9");
	form9.style.display="block";
	//-->how much of the progress bar is green
	var progress = document.getElementById("p9");
	progress.classList.add("active");
	//-->how many institutes already present
	var hidden = document.getElementById("hidden_hobbies");
	var no = parseInt(hidden.innerText);
	//-->remove buttons
	var add_button = document.getElementById("hb_add");
	add_button.remove();
	var remove_button = document.getElementById("hb_remove");
	remove_button.remove();
	var previous_button = document.getElementById("hb_previous");
	previous_button.remove();
	var submit_button = document.getElementById("hb_submit");
	submit_button.remove();
	//-->add elements
	var form9 = document.getElementById("f99");
	var no = no+1;
	hidden.innerText=(no);
	//-->add elements in education_info_list_name
	hobbies_info_list_name[no-1] = hb_str1+no;
	var form9 = document.getElementById("f99");
	//-->create div in which both div of label and input will be present
	var div = document.createElement("div");
	div.className="flex-container";
	form9.appendChild(div);
	//-->create div of label
	var labeldiv = document.createElement("div");
	labeldiv.className="labeldiv";
	labeldiv.id=hobbies_info_list_name[no-1];
	div.appendChild(labeldiv);
	//-->create label
	var label = document.createElement("label");
	label.innerText="Hobby "+(no)+":";		
	labeldiv.appendChild(label);
	//-->create input
	var input = document.createElement("input");
	input.type="text";
	//-->put value from list into input element
	input.name=hobbies_info_list_name[no-1];
	div.appendChild(input);
	var form9 = document.getElementById("f99");
	//-->create div in which remove button will be present
	var div = document.createElement("div");
	div.className="flex-container";
	form9.appendChild(div);
	//-->create remove button
	var remove_button = document.createElement("input");
	remove_button.type="button";
	remove_button.name="remove_hobby";
	remove_button.className="remove";
	remove_button.onclick=removehobby;
	remove_button.value="Remove";
	remove_button.id="hb_remove";
	div.appendChild(remove_button);
	//-->create add button
	var add_button = document.createElement("input");
	add_button.type="button";
	add_button.name="add_hobby";
	add_button.className="add";
	add_button.onclick=addhobby;
	add_button.value="Add";
	add_button.id="hb_add";
	div.appendChild(add_button);
	//-->create div in which both previous and next button will be present
	var div = document.createElement("div");
	div.className="flex-container";
	form9.appendChild(div);
	//-->create previous button
	var previous_button = document.createElement("input");
	previous_button.type="button";
	previous_button.name="previous";
	previous_button.className="previous action-button";
	previous_button.onclick=clickform8;
	previous_button.value="Previous";
	previous_button.id="hb_previous";
	div.appendChild(previous_button);
	//-->create next button
	var submit_button = document.createElement("input");
	submit_button.type="submit";
	submit_button.name="submit";
	submit_button.className="submit action-button";
	//next_button.onclick=clickform7;
	submit_button.value="Submit";
	submit_button.id="hb_submit";
	div.appendChild(submit_button);
	var d9 = document.getElementById("hidden_hobbies");
	//console.log(d9.innerText);
	var i9 = document.getElementById("hidden_hobbies1");
	i9.value=d9.innerText;
}
function removehobby(){
	//-->which forms have to be visible
	var form1 = document.getElementById("f1");
	form1.style.display="none";
	var form2 = document.getElementById("f2");
	form2.style.display="none";
	var form3 = document.getElementById("f3");
	form3.style.display="none";
	var form4 = document.getElementById("f4");
	form4.style.display="none";
	var form5 = document.getElementById("f5");
	form5.style.display="none";
	var form6 = document.getElementById("f6");
	form6.style.display="none";
	var form7 = document.getElementById("f7");
	form7.style.display="none";
	var form8 = document.getElementById("f8");
	form8.style.display="none";
	var form9 = document.getElementById("f9");
	form9.style.display="block";
	//-->how much of the progress bar is green
	var progress = document.getElementById("p9");
	progress.classList.add("active");
	//-->how many institutes already present
	var hidden = document.getElementById("hidden_hobbies");
	var no = parseInt(hidden.innerText);
	//-->remove text fields
	var text = document.getElementsByName(hobbies_info_list_name[no-1]);
	text[0].remove();
	//-->remove labels
	var label = document.getElementById(hobbies_info_list_name[no-1]);
	label.remove();
	hobbies_info_list_name.splice((no-1),1);
	hidden.innerText=(no-1);
	var d9 = document.getElementById("hidden_hobbies");
	//console.log(d9.innerText);
	var i9 = document.getElementById("hidden_hobbies1");
	i9.value=d9.innerText;
}
function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
	rawFile.send(null);
	//to call function
	//readTextFile("../scraped_data.json", function(text){
		//var data = JSON.parse(text);
}

function writeTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("PUT", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}
function saveFile(text, name, type) {
    var a = document.createElement("a");
    var file = new Blob([text], {type: type});
    a.href = URL.createObjectURL(file);
    a.download = name;
    a.click();
}
//saveFile(JSON.stringify(basic_info_list), 'config.json', 'text/plain');
