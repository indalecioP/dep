const gustar = ['a mi me ','a ti te ','a el le ']
const darCon = ['yo te ','tu me ','el te ']
const dar = (s) => darCon.map((e,i)=> e + s.split(',')[i]).join(',')
const gus = (s) => gustar.map(e=>e +s).join(',')
let arTer = ['o', 'as', 'a']
const s = (s) => [s, s + 's', s].join(',')
const pps = (s) => [s + 'e', s + 'iste', s + 'o'].join(',')
let he = ['he', 'has', 'ha']
const pPc = (s) => he.map(e => e + ' ' + s).join(',')
let erIrTer = ['o', 'es', 'e']; let erIrPas = ['ía,ías,ía']
let arTerPlus = [['ar', 'o', 'as', 'a'], ['aba', 'abas', 'aba'], ['é', 'aste', 'ó']]
let erTerPlus = [['er', 'o', 'es', 'e'], ['ía', 'ías', 'ía'], ['í', 'iste', 'ió']]
let irTerPlus = [['ir', 'o', 'es', 'e'], ['ía', 'ías', 'ía'], ['í', 'iste', 'ió']]
const ar = (z) => (z + ',').concat(arTer.map(e => z.slice(0, -2) + e))
const erIr = (z) => (z + ',').concat(erIrTer.map(e => z.slice(0, -2) + e))
const erPlus = (z) => erTerPlus.map((e, i) => e.map((e1, i1) => z + e1).join(',')).concat(he.map(e => e + ' ' + z + 'ido').join(','))
const irPlus = (z) => irTerPlus.map((e, i) => e.map((e1, i1) => z + e1).join(',')).concat(he.map(e => e + ' ' + z + 'ido').join(','))
const arPlus = (z) => arTerPlus.map((e, i) => e.map((e1, i1) => z + e1).join(',')).concat(he.map(e => e + ' ' + z + 'ado').join(','))
const ueIr = (s) => {
  let z = s.replace('o', 'ue')
  return s + 'ir,' + z + 'o,' + z + 'es,' + z + 'e'
}

export let verbo = [
  [
    ['ser,soy,eres,es', s('era'), pps('fu'), pPc('sido')],
    'estudiante,pianista,guitarrista,biólogo,profesor,inteligente,español',
    'estudiante,pianista,guitarrista,biologo,profesor,inteligente,españa',
    {preguntas:['quién eres','eres pianista']},
  ],
  [
    ['tener,tengo,tienes,tiene', 'tenía,tenías,tenía', pps('tuv'), pPc('tenido')],
    'un perro,un gato,un hermano,una moto,una bicicleta',
    'perro,gato,hermano,moto,bicicleta',
    {preguntas:'cuántos años tienes'},
  ],
  [
    ['estar,estoy,estás,está', s('estaba'), pps('estuv'), pPc('estado')],
    'en Madrid,en Italia,en Barcelona,en un pueblo,caminando,en el parque',
    'Madrid,Roma,Barcelona,pueblo,caminando,parque',
    {preguntas:'dónde estás'}
  ],
  [
    erPlus('com'),
    'arroz,pescado,frutas,pan,bananas,manzanas,cereales,patatas',
    'arroz,pescado,frutas,pan,bananas,manzanas,cereales,patatas',
    {preguntas: 'qué comes'}
  ],
  [
    erPlus('beb'),
    'agua,vino tinto,leche de soja,cerveza,zumo de naranja,limonada',
    'agua,vino,leche,cerveza,zumoNaranja,limonada',
    {preguntas:'qué bebes'}
  ],
  [
    arPlus('habl'),
    'español,italiano,portugués,francés,por el móvil',
    'hablando,hablando2,hablando,hablando2,hablandoMovil',
    {preguntas: 'cuántos idiomas hablas'}  
  ],
  [
    arPlus('cant'),
    'boleros,blues,ópera,flamenco,rock',
    'cantante,cantante2,opera,flamenco,rock',
    {preguntas:'cuándo cantas'}    
  ],
  [
    irPlus('viv'),
    'en Roma,en la ciudad,en un pueblo,en casa de mi madre',
    'Roma,ciudad,pueblo,casa',
    {preguntas:'dónde vives'
    }
  ],
  [
    irPlus('abr'),
    'la puerta,la ventana,el libro,mi corazón',
    'puerta,ventana,libro,corazon',
    {preguntas:'cuándo abres la escuela'    
    }
  ],
  [
    arPlus('camin'),
    '2 horas por día,en el parque,por la ciudad',
    'caminando,parque,ciudad',
    {preguntas:'cuándo caminas'
    
    }
  ],
  [
    arPlus('busc'),
    'vivienda,trabajo,una escuela de inglés,en internet',
    'casa,buscandoTrabajo,ingles,internet',
    {preguntas:
      'dónde buscas habitación'    
    }
  ],
  [
    ['cerrar,cierro,cierras,cierra', s('cerraba'), 'cerré,cerraste,cerró', pPc('cerredo')],
    'la boca,los ojos,la puerta',
    'boca,ojos,puerta',
    {
      preguntas:'dónde abres el bar'
    }
  ],
  [
    erPlus('vend'),
    'una bicicleta,una casa,una cama,una mesa,seguros',
    'bicicleta,casa,cama,mesa,seguros',
    {
      preguntas:'cuántos libros venden'
    }
  ],
  [
    arPlus('compr'),
    'ordenadores,comida,una moto,libros de cocina',
    'ordenador,comida,moto,cocinando',
    {
      preguntas:'has comprado el pan'
    }
  ],
  [
    erPlus('le'),
    'cuentos,comics,novelas,ensayos',
    'cuentos,comic,libro,libro2',
    {
      preguntas:'qué estás leyendo'
    }
  ],
  [
    arPlus('toc'),
    'el piano,la guitarra,el bajo,tu mano',
    'piano,guitarra,bajo,mano',
    {
      preguntas:'tocas algún instrumento'
    }
  ],
  [
    arPlus('pag'),
    'en efectivo,con tarjeta,la cena',
    'euros,tarjeta,cena',
    {
      preguntas:'cuánto pagas de alquiler'
    }
  ],
  [
    arPlus('bail'),
    'salsa,tango,flamenco,con mi pareja',
    'salsa,tango,flamenco,pareja',
    {
      preguntas:'quieres bailar'
    }
  ],
  [
    arPlus('escuch'),
    'jazz,música clásica,salsa,música latina',
    'jazz,orquesta,salsa,latina',
    'qué música escuchas',
    {
      preguntas:''
    }
  ],
  [
    arPlus('necesit'),
    'ayuda,una habitación,un amigo,gafas',
    'ayuda,habitacion,amigo,gafas',
    'qué necesitas',
    {
      preguntas:''
    }
  ],
  [
    ['ir,voy,vas,va', 'iba,ibas,iba', 'fui,fuiste,fue', 'he ido,has ido,ha ido'],
    'al trabajo en tren,a la escuela en metro,a clases de flauta,a la biblioteca,al cine',
    'tren,metro,flauta,biblioteca,cine',
    'cómo vas a la escuela',
    {
      preguntas:''
    }
  ],
  [
    arPlus('jug'),
    'a las cartas,a las damas,al ajedrez,al fútbol',
    'cartas,damas,ajedrez,futbol',
    'cuál es tu juego favorito',
    {
      preguntas:''
    }
  ],
  [
    ['hacer,hago,haces,hace', 'hacía,hacías,hacía', 'hice,hiciste,hizo', pPc('hecho')],
    'deporte,preguntas,la tarea,canciones,unas lentejas deliciosas,muebles',
    'futbol,pregunta,estudiante,guitarrista,lentejas,carpintero',
    {
      preguntas:''
    }
  ],
  [
    ['decir,digo,dices,dice', 'decía,decías,decía', 'dije,dijiste,dijo', pPc('dicho')],
    'que mañana va a llover,que hace mucho calor,que le gustó la película',
    'lluvia,calor,cine',
    {
      preguntas:''
    }
  ],
  [
    ['ver,veo,ves,ve', 'veía,veías,veía', 'vi,viste,vio', pPc('visto')],
    'el atardecer el la playa,la luna,películas en el cine,las noticias,fotos',
    'atardecer,luna,cine,noticias,fotos',
    {
      preguntas:''
    }
  ],
  [
    ['saber,sé,sabes,sabe', s('sabía'), pps('sup'), pPc('sabido')],
    'cantar,tocar la guitarra,hablar español',
    'cantante,guitarra,españa',
    {
      preguntas:''
    }
  ],
  [
    ['poder,puedo,puedes,puede', s('podía'), pps('pud'), pPc('podido')],
    'cantar,bailar,cocinar,tocar el piano',
    'cantante,salsa,cocinando,pianista',
    {
      preguntas:''
    }
  ],
  [
    ['querer,quiero,quieres,quiere', s('quería'), pps('quis'), pPc('querido')],
    'comer,ir al cine,jugar al ajedrez',
    'comiendo,cine,ajedrez',
    {
      preguntas:''
    }
  ],
  [
    ['venir,vengo,vienes,viene', s('venía'), pps('vin'), pPc('venido')],
    'de una fiesta,de jugar al futbol,de la playa,de Madrid',
    'fiesta,futbol,playa,Madrid',
    {
      preguntas:''
    }
  ],
  [
    ['pensar,pienso,piensas,piensa', s('pensaba'), pps('pens'), pPc('pensado')],
    'que tienes razón,demasiado,que la película es excelente,que la disciplina es importante',
    'correcto,estres,cine,disciplina',
    {
      preguntas:''
    }
  ],
  [
    ['encontrar,encuentro,encuentras,encuentra', s('encontraba'), pps('encontr'), pPc('encontrado')],
    'una cama,un amigo,un libro,las llaves,un tesoro,una solución',
    'cama,amigo,libro,llave',
    {
      preguntas:''
    }
  ],
  [
    [ueIr('dorm'), s('dormía'), 'dormí,dormisté,durmió', pPc('dormido')],
    'en la cama,muy poco,la siesta,8 horas',
    'dormir1,estres,dormir,dormir2',
    {
      preguntas:''
    }
  ],
  [
    erPlus('cre'),
    'en dios,en la justicia,en la libertad,en el amor',
    'dios,justicia,libertad,corazon',
    {
      preguntas:''
    }
  ],
  [
    ['pedir,pido,pides,pide',s('pedía'),'pedí,pediste,pidió',pPc('pedido')],
    'ayuda,una beca,un préstamo',
    'ayuda,estudiante,prestamo',
    {
      preguntas:''
    }
  ],
  [
    arPlus('estudi'),
    'inglés,español,música,geografía,economía',
    'ingles,españa,musica,mapa,economia',
    {
      preguntas:''
    }
  ],
  [
    arPlus('trabaj'),
    'en un hospital,en un museo,en un bar,en una oficina',
    'hospital,museo,bar,oficina',
    {
      preguntas:''
    }
  ],
  [
    erPlus('aprend'),
    'con entusiasmo,de los errores,de la profesora,del profesor,de la práctica',
    'entusiasmo,estudiante,profesora,profesor,pianista',
    {
      preguntas:''
    }
  ],
  [
    ['conocer,conozco,conoces,conoce',s('conocía'),pps('conoc'),pPc('conocido')],
    'un restaurante excelente,muy bien esa ciudad,las reglas del juego, a alguien que puede ayudarnos',
    'cena,ciudad,ajedrez,ayuda',
    {
      preguntas:''
    }
  ],
  [
    ['entender,entiendo,entiendes,entiende',s('entendía'),pps('entend'),pPc('entendido')],
    'tu punto de vista,las instrucciones claramente,la complejidad de la situación',
    'entender,instrucciones,complejidad',
    {
      preguntas:''
    }
  ],
  [
    arPlus('llam'),
    'a mi mejor amigo todas las semanas,por teléfono,al médico,la ambulancia',
    'amigo,telefono,medico,ambulancia',
    {
      preguntas:''
    }
  ],
  [
    ['preferir,prefiero,prefieres,prefiere',s('prefería'),pps('prefer'),pPc('preferido')],
    'comer arroz,beber cerveza,ir al cine,el color rojo',
    'arroz,cerveza,cine,rojo',
    {
      preguntas:''
    },
  ],
  [
    ['gustar,'+gus('gusta'),gus('gustaba'),gus('gustó'),gus('ha gustado')],
    'la películo,el libro,jugar al futbol,tocar el piano',
    'cine,libro,futbol,piano',
    {
      preguntas:''
    }
  ],
  [
    ['encantar,'+gus('encanta'),gus('encantaba'),gus('encantó'),gus('ha encantadodo')],
    'jugar al ajedrez,caminar,el arroz,comer',
    'ajedrez,caminando,arroz,comiendo',
    {
      preguntas:''
    }
  ],
  [
    ['doler,'+gus('duele'),gus('dolía'),gus('dolió'),gus('ha dolido')],
    'la pierna,la muela,la cabeza,el estómago',
    'pierna,muela,estres,estomago',
    {
      preguntas:''
    }
  ],
  [
    ['dar,'+dar('doy,das,da'),dar(s('daba')),dar(pps('d')),dar(pPc('dado'))],
    'mi palabra,de comer,un abrazo,un beso',
    'jurando,comida,abrazo,beso',
    {
      preguntas:''
    }
  ]
]
verbo = verbo.map(e =>{
  e[0] = e[0].map(e1 => e1.split(','))
  e[1] =  e[1].split(',')
  e[2] =  e[2].split(',')
  return e
})

let pro = ['yo', 'tu', 'el']
export let verEsp = verbo.map(e => {
  let o = {}
  o.conj = e[0].slice(1)
  o.img = e[2].map(e => e + '.avif')
  o.frases = e[1].map((pal, i) => e[0][0].slice(1)[i % 3] + ' ' + pal)
  o.frasesPreImp = e[1].map((pal, i) => e[0][1][i % 3] + ' ' + pal)
  o.frasesPrePerSim = e[1].map((pal, i) => e[0][2][i % 3] + ' ' + pal)
  o.frasesPrePerCom = e[1].map((pal, i) => e[0][3][i % 3] + ' ' + pal)
  o.frasesSuj = e[1].map((pal, i) => pro[i % 3] + ' ' + e[0][0].slice(1)[i % 3] + ' ' + pal)
  o.preguntas = ['¿ ' + e[3].preguntas + '?']
  return o
})
export const ver = verbo.map(e => e[0][0][0])
export const index = verEsp.reduce((acc, e, i) => ({
  ...acc,
  [ver[i]]: e
}), {})


export const frases = ver.map(e => index[e].frases)
export const frasesSuj = ver.map(e => index[e].frasesSuj)