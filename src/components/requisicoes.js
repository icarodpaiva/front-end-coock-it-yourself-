const requisicoes = {
  cadastrar: async recipe => {
    const rawResponse = await fetch(
      "https://cook-it-yourself.herokuapp.com/recipe",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(recipe)
      }
    )
    const content = await rawResponse.json()

    return content
  },
  ultima: async () => {
    const rawResponse = await fetch(
      "https://cook-it-yourself.herokuapp.com/last"
    )
    const content = await rawResponse.json()

    return content
  },
  geral: async () => {
    const rawResponse = await fetch(
      "https://cook-it-yourself.herokuapp.com/recipe"
    )
    const content = await rawResponse.json()

    return content
  },
  nome: async nome => {
    const rawResponse = await fetch(
      `https://cook-it-yourself.herokuapp.com/name/${nome}`
    )
    const content = await rawResponse.json()

    return content
  },
  ingredientes: async ingredientes => {
    const rawResponse = await fetch(
      `https://cook-it-yourself.herokuapp.com/ingredients/${ingredientes}/`
    )
    const content = await rawResponse.json()

    return content
  },
  inregredientesRestrito: async ingredientes => {
    const rawResponse = await fetch(
      `https://cook-it-yourself.herokuapp.com/ingredients/${ingredientes}/restricted`
    )
    const content = await rawResponse.json()

    return content
  },
  utensilios: async tools => {
    const rawResponse = await fetch(
      `https://cook-it-yourself.herokuapp.com/tools/${tools}/`
    )
    const content = await rawResponse.json()

    return content
  },
  utensiliosRestrito: async tools => {
    const rawResponse = await fetch(
      `https://cook-it-yourself.herokuapp.com/tools/${tools}/restricted`
    )
    const content = await rawResponse.json()

    return content
  },
  time: async (timeUnit, timeQuantity) => {
    const rawResponse = await fetch(
      `https://cook-it-yourself.herokuapp.com/time/${timeUnit}/${timeQuantity}/`
    )
    const content = await rawResponse.json()

    return content
  },
  timeRestrito: async (timeUnit, timeQuantity) => {
    const rawResponse = await fetch(
      `https://cook-it-yourself.herokuapp.com/time/${timeUnit}/${timeQuantity}/restricted`
    )
    const content = await rawResponse.json()

    return content
  },
  alterar: async (id, recipe) => {
    const rawResponse = await fetch(
      `https://cook-it-yourself.herokuapp.com/recipe/${id}`,
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(recipe)
      }
    )
    const content = await rawResponse.json()

    return content
  },
  id: async id => {
    const rawResponse = await fetch(
      `https://cook-it-yourself.herokuapp.com/id/${id}`
    )
    const content = await rawResponse.json()

    return content
  },
  delete: async id => {
    await fetch(`https://cook-it-yourself.herokuapp.com/recipe/${id}`, {
      method: "DELETE"
    })
  }
}
export default requisicoes
