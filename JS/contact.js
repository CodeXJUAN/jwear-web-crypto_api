function cambiarColorFondo() {
  const container = document.getElementById("resumen");
  if (container.style.backgroundColor === "lightblue") {
    container.style.backgroundColor = "white";
    container.style.color = "black";
  } else {
    container.style.backgroundColor = "lightblue";
    container.style.color = "darkblue";
  }
}

function mostrarExtras() {
  const container = document.getElementById("extra-info");
  const items = ["Servicios Premium", "Soporte 24/7", "Garantía Incluida"];
  container.innerHTML = "";

  for (let i = 0; i < items.length; i++) {
    const item = document.createElement("div");
    item.textContent = items[i];
    item.style.opacity = "0";
    item.style.transition = "opacity 0.5s";
    container.appendChild(item);
    setTimeout(() => (item.style.opacity = "1"), i * 500);
  }

  const allItems = container.getElementsByTagName("div");
  Array.from(allItems).forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.style.transform = "scale(1.1)";
      item.style.transition = "transform 0.3s";
    });
    item.addEventListener("mouseout", () => {
      item.style.transform = "scale(1)";
    });
  });

  let i = 0;
  while (i < allItems.length) {
    allItems[i].style.border = "1px solid #ddd";
    allItems[i].style.margin = "5px";
    allItems[i].style.padding = "10px";
    i++;
  }
}

function cambiarTema(tema) {
  const container = document.getElementById("resumen");
  switch (tema) {
    case "oscuro":
      container.style.backgroundColor = "#333333";
      container.style.color = "#ffffff";
      container.style.boxShadow = "0 0 10px rgba(255,255,255,0.1)";
      break;
    case "colorido":
      container.style.backgroundColor = "#f0f8ff";
      container.style.color = "#4a90e2";
      container.style.boxShadow = "0 0 15px rgba(74,144,226,0.3)";
      break;
  }
}

$(document).ready(function () {
  const formulario = $("form");

  formulario.on("submit", function (event) {
    event.preventDefault();

    const formData = {
      nombre: $('[name="nom1"]').val(),
      apellido: $('[name="cognom1"]').val(),
      telefono: $('[name="telefon"]').val(),
      email: $('[name="email"]').val(),
      poblacion: $('[name="poblacio"]').val(),
      comentarios: $('[name="textarea"]').val(),
    };

    const resumen = Object.entries(formData)
      .map(
        ([key, value]) =>
          `<strong>${key.charAt(0).toUpperCase() + key.slice(1)}:</strong> ${value}`,
      )
      .join("<br>");

    $("#resultado").html(resumen);
    $("#resumen").fadeIn(500).delay(1500).fadeOut(6000);
  });

  mostrarExtras();

  $("#toggle-color").on("click", () => cambiarTema("colorido"));
  $("#toggle-color").on("dblclick", () => cambiarTema("oscuro"));
});
