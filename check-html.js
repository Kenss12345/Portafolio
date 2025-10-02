const fs = require('fs');

const html = fs.readFileSync('dist/index.html', 'utf8');

// Buscar el script con los datos de proyectos
const match = html.match(/<script type="application\/json" id="projects-data"[^>]*>(.*?)<\/script>/);

if (match) {
  console.log('✅ JSON encontrado en el HTML!');
  console.log('\nPrimeros 800 caracteres del JSON:');
  console.log(match[1].substring(0, 800));
  
  try {
    const projectsData = JSON.parse(match[1]);
    console.log('\n✅ JSON válido!');
    console.log(`\nTotal de proyectos: ${projectsData.length}`);
    projectsData.forEach((p, i) => {
      console.log(`  ${i + 1}. ${p.title} - ${p.images?.length || 0} imágenes`);
    });
  } catch (e) {
    console.error('\n❌ JSON inválido:', e.message);
  }
} else {
  console.log('❌ JSON NO encontrado en el HTML');
  console.log('\nBuscando "projects-data" en el HTML...');
  const hasId = html.includes('projects-data');
  console.log(`ID "projects-data" presente: ${hasId}`);
}

