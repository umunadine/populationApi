var nationName = [], nationYear = [], nationPopulation = []

async function populationChart() {
  await getPopulationData()

const ctx = document.getElementById('myChart').getContext('2d');

const chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: nationYear,
        datasets: [{
            label: 'Nation Population',
            backgroundColor: 'blue',
            borderColor: 'rgb(255, 99, 132)',
            borderWidth: 1,
            data: nationPopulation
        }
      ]
    },
    options: {
      tooltips: {
        mode: 'index',
        y: {
            beginAtZero: true
          }
      }
    }
})}

populationChart()

async function getPopulationData() {
  const apiUrl = "https://datausa.io/api/data?drilldowns=Nation&measures=Population"

  const response = await fetch(apiUrl)
  const barChatData = await response.json()
  console.log("res",barChatData)
  
  const year = barChatData.data.map((x) => x.Year)
  const population = barChatData.data.map((x) => x.Population)
  const nation = barChatData.data.map((x) => x.Nation)
  console.log("this is the nation", nation)
  console.log("population",population)

 nationYear = year
 nationPopulation = population
 nationName = nation
}