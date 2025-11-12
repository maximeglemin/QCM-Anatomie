QCM-Anatomie - Instructions

CONTENU:
- index.html : application web interactive (correction immédiate)
- questions.json : fichier contenant les questions (format JSON)
- README.txt : ce document

COMMENT AJOUTER LES 450 QUESTIONS RAPIDEMENT :
1) Option rapide (je peux le faire pour toi):
   - Copie dans le chat la liste de tes 450 questions avec leurs choix et les indices des bonnes réponses.
   - Je convertirai ce texte en JSON structuré et te renverrai un ZIP prêt à remplacer les fichiers sur GitHub.

2) Option DIY (toi-même):
   - Ouvre questions.json et remplace son contenu par un objet JSON avec chapitres :
     {
       "Chapitre 1": [
         {"text":"Question 1", "choices":["A","B","C"], "correct":[0], "explanation":""},
         ...
       ],
       "Chapitre 2": [ ... ]
     }
   - Sauvegarde et upload sur GitHub.

FORMAT D'UNE QUESTION:
- text : la question (string)
- choices : tableau des propositions (string[])
- correct : indices (0-based) des choix corrects (number[])
- explanation : texte optionnel

EXEMPLE:
{
  "Généralités": [
    {"text":"Combien d'os a un adulte?","choices":["180","206","240"],"correct":[1],"explanation":"206 os chez l'adulte"}
  ]
}

SI TU VEUX QUE JE LE FASSE:
- Colle ici le texte brut de tes 450 questions (ou donne-moi l'autorisation de récupérer les questions déjà présentes dans notre conversation).
- Je générerai le JSON complet et te renverrai un ZIP final prêt à uploader directement.
