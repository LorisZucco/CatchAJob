function obterLocalizacao() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (posicao) => {
        resolve({
          latitude: posicao.coords.latitude,
          longitude: posicao.coords.longitude,
        });
      },

      (erro) => {
        reject(erro);
      },
    );
  });
}

async function buscarClima(latitude, longitude) {
  const url =
    `https://api.open-meteo.com/v1/forecast` +
    `?latitude=${latitude}` +
    `&longitude=${longitude}` +
    `&current=temperature_2m,weather_code`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      console.error("Não foi possível carregar o clima.");
      return null;
    }

    const dados = await response.json();

    return dados;
  } catch (error) {
    console.error("Erro ao buscar o clima:", error);

    return null;
  }
}
function interpretarClima(codigo) {
  if (codigo === 0) {
    return "Céu limpo";
  }

  if (codigo === 1 || codigo === 2) {
    return "Parcialmente nublado";
  }

  if (codigo === 3) {
    return "Nublado";
  }

  if (codigo === 45 || codigo === 48) {
    return "Neblina";
  }

  if (codigo >= 51 && codigo <= 57) {
    return "Garoa";
  }

  if (codigo >= 61 && codigo <= 67) {
    return "Chuva";
  }

  if (codigo >= 71 && codigo <= 77) {
    return "Neve";
  }

  if (codigo >= 80 && codigo <= 82) {
    return "Pancadas de chuva";
  }

  if (codigo >= 85 && codigo <= 86) {
    return "Pancadas de neve";
  }

  if (codigo >= 95) {
    return "Tempestade";
  }

  return "Condição climática indisponível";
}
async function carregarClima() {
  const elementoClima = document.querySelector(".weather-api");

  if (!elementoClima) {
    return;
  }

  try {
    const localizacao = await obterLocalizacao();

    const dados = await buscarClima(
      localizacao.latitude,
      localizacao.longitude,
    );

    if (!dados) {
      elementoClima.textContent = "Clima indisponível.";

      return;
    }

    const temperatura = dados.current.temperature_2m;
    const codigoClima = dados.current.weather_code;
    const descricaoClima = interpretarClima(codigoClima);

    elementoClima.innerHTML = `
      <p>
        Clima agora:
        <strong>${temperatura}°C</strong>
        • ${descricaoClima}
      </p>
    `;
  } catch (error) {
    console.error("Erro ao carregar o clima:", error);
    elementoClima.textContent = "Clima indisponível.";
  }
}

export { carregarClima };
