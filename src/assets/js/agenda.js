const agendamentos = [];

function agendar() {
  const data = document.getElementById("data").value;
  const hora = document.getElementById("hora").value;
  const erroMsg = document.getElementById("erro-msg");
  const lista = document.getElementById("lista-agendamentos");

  erroMsg.textContent = "";

  if (!data || !hora) {
    erroMsg.textContent = "Por favor, preencha data e hora.";
    return;
  }

  const agendamento = `${data} ${hora}`;

  if (agendamentos.includes(agendamento)) {
    erroMsg.textContent = "Esse horário já foi agendado!";
    return;
  }

  agendamentos.push(agendamento);

  const item = document.createElement("li");
  item.textContent = `Agendado para: ${data} às ${hora}`;
  lista.appendChild(item);

  document.getElementById("data").value = "";
  document.getElementById("hora").value = "";

  localStorage.setItem("agendamentos", JSON.stringify(agendamentos));



}
