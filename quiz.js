
const questions = [
  {q: "Où se situe l’os coxal ?", a: "Bassin", o:["Crâne","Bras","Bassin","Pied"]},
  {q: "Le fémur est l’os de :", a: "La cuisse", o:["Le bras","La main","La cuisse","Le dos"]},
  {q: "Combien y a-t-il d’os coxaux ?", a: "2", o:["1","2","3","4"]}
];

const quizDiv = document.getElementById("quiz");
questions.forEach((q,i)=>{
  let html = `<p>${q.q}</p>`;
  q.o.forEach(opt => {
    html += `<label><input type='radio' name='q${i}' value='${opt}'> ${opt}</label><br>`;
  });
  quizDiv.innerHTML += html;
});

function checkAnswers(){
  let score=0;
  questions.forEach((q,i)=>{
    let selected = document.querySelector(`input[name='q${i}']:checked`);
    if(selected && selected.value === q.a) score++;
  });
  document.getElementById("result").textContent =
    `Score : ${score} / ${questions.length}`;
}
