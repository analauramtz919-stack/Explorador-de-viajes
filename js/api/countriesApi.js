// Código para obtener datos de la API de países
const API_URL =
  'https://juancognitus.github.io/explorador-viajes-api/paises.json';

// export se utiliza para que la función pueda ser importada en otros archivos
export async function obtenerPaises() {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    const result = await response.json();
    const paises = result;

    console.log(paises);
    // const countries = await response.json();

    // return countries;
    return paises;

  } catch (error) {
    console.log('Error al obtener los países:', error);
    return [];
  }
}
//obtenerPaises();