const axios = require('axios').default;
const cheerio = require('cheerio');
const cron = require('node-cron');

cron.schedule('*/2 * * * *',async()=>{
  console.log(`Se ingresan datos a la base de datos: ${new Date().toLocaleString()}`);
  const html = await axios.get('http://localhost:3000/');
  const $ = cheerio.load(html.data);
  const filas = $("tbody tr");
  const arreglo = [];
  filas.each((i, e)=>{
    const fila = $(e).text().toString().trim();
    const datos = fila.split('\n');
    const cine = {
      Identificacion: datos[0].trim(),
      LocalPedido: datos[1].trim(),
      DetallePedido: datos[2].trim(),
      DistanciaKm: parseInt(datos[3].trim().substring(1, datos[4].trim().length)),
      Valor: datos[4].trim(),
      propina: datos[5].trim()
    }
    arreglo.push(cine);
  });

  await arreglo.forEach(async(e) =>{
    await axios.post('http://localhost:5000/api', e)
  })
})