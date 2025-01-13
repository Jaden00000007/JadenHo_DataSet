let data = []
async function getdata() {
    txt = await (await fetch("Apple_2009-2024.csv")).text()
    data = txt.split("\n").map(d => d.split(/,\"\$|","\$/).map(s => s.replaceAll(",", ""))).slice(1).reverse()
    console.log(data)
}
getdata()
    .then(() => {
        new Chart(document.getElementById('myChart'), {
            type: 'line',
            data: {
                labels: data.map(d => d[0]),
                datasets: [{
                    label: 'Revenue (millions)',
                    data: data.map(d => d[2]),
                    borderWidth: 3,
                    backgroundColor: "lime",
                    borderColor: "green"
                },
                {
                    label: 'Profit (millions)',
                    data: data.map(d => d[3]),
                    borderWidth: 3,
                    backgroundColor: "aqua",
                    borderColor: "blue"
                },
                {
                    label: 'Spent (millions)',
                    data: data.map(d => d[2] - d[3]),
                    borderWidth: 3,
                    backgroundColor: "orange",
                    borderColor: "maroon"
                }]
               
            }
        });
    })
