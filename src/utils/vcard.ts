export function generateVCardDownload() {
  const vcardData = `BEGIN:VCARD
VERSION:3.0
FN:Samah Rabie Mahmoud Ali
N:Ali;Samah;Rabie Mahmoud;;
TITLE:Nursing Intern | Digital Content & Graphic Designer (PPT, Word, Video, Medical Posters)
ORG:Faculty of Nursing, Mansoura University, Egypt
EMAIL;TYPE=INTERNET,PREF:samahrabea06@gmail.com
URL;TYPE=LinkedIn:https://linkedin.com/in/samah-rabie
URL;TYPE=GoogleDrive:https://drive.google.com/drive/folders/1U41cf3pbylT29RUXFL-A0lLINjp0_nBI?usp=sharing
NOTE:Specialized in Professional PowerPoint Decks, Word Document Layouts, Graphic Design, Social Media Posters, Video Editing & Nursing Public Health.
END:VCARD`;

  const blob = new Blob([vcardData], { type: 'text/vcard;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'Samah_Rabie_ContactCard.vcf');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
