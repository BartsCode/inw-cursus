
#Server opstarten in terminal:

>>>cd inw_cursus
>>>npm install (indien dit nog niet gebeurd is)
>>>npm run dev


#OpenAI heeft volgende installatie nodig:
(indien dit nog niet gebeurd is)
>>>npm install openai
>>>npm install zod@3.24.1

hierbij niet vergeten:
OPENAI_API_KEY='....'
in te vullen in file:
>>>touch .env.local



#Open dan browser en ga naar:

http://localhost:3000


#GitHub updaten:
Voeg alle gewijzigde bestanden toe aan staging 
>>>cd inw_cursus
>>>git add .
Commit je wijzigingen met een beschrijvende message
>>>git commit -m "Beschrijf wat je hebt gewijzigd"
Push naar GitHub (vervang 'main' door je branch naam als die anders is)
>>>git push origin main


#GitHub: usr = BartsCode
#Vercel:
inloggen via email: bart.j.... , je ontvangt een code...
link: https://inw-cursus-bartscodes-projects.vercel.app/

