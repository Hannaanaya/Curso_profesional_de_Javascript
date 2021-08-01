var signo = prompt('¿Cuáles tu signo?')

switch (signo) {
    case 'aries':
        console.log('Ofrece la energía y el desparpajo de un niño, que se mueve la impetuosidad y el coraje que le confiere Marte, su planeta regente')
        break
    case 'acuario':
        console.log('Se distingue por una fuerte y libre personalidad que lo lleva desconocer las convenciones. Las personas marcada por este signos suelen ser innovadores e idealistas.')
        break
    case 'cáncer':
    case 'cancer':
        console.log('Es el signo de la sensibilidad emocional y de la fe profunda. Se trata de un elemento Agua, que representa lo femenino, lo fecundo y está regido por las emociones.')
        break
    case 'virgo':
        console.log('Es el signo del Zodiaco más dedicado a servir. Son personas extremadamente estudiosas y precavidas, con mucha atención al detalle.')
        break
    case 'tauro':
        console.log('Se muestra plácido gran parte del tiempo, pero puede ser impetuoso y hasta brutal cuando se enoja, como el animal que lo representa. Es un elemento Tierra: pragmático, ordenado, trabajador y ambicioso.')
        break
    case 'sagitario':
        console.log('Es el signo del entusiasmo, la jovialidad y la alegría. Son divertidos y depositan una fe ciega en la vida y el futuro. Son portadores de un optimismo a prueba de cualquier dificultad.')
        break
    case 'piscis':
        console.log('Entabla una relación amable con las personas que le rodean. ¿Apacibles? Nada más erróneo; son pasionales y hasta pueden reaccionar con vehemencia.')
         break
    case 'libra':
        console.log('Es el signo de la calidez, el romanticismo y un profundo sentido de la justicia. Suelen ser personas refinadas e inteligentes. inteligente, cálida y social.')
        break
    case 'leo':
        console.log('Es el signo de la fuerza, la confianza y la alegría de vivir. Las personas regidas por este elemento del zodiaco tienen cierta majestad, poder, iniciativa, nobleza y capacidad creadora.')
        break
    case 'géminis':
        console.log('Es el signo de los gemelos, un doble elemento que le imprime complejidad y dualidad a su carácter. En este elemento se agrupan personas dinámicas, emprendedoras, que requieren establecer una conexión intelectual con los demás.')
        break
    case 'escorpio':
        console.log('Es la pasión y el magnetismo. Su signo se representa por el escorpión, que simboliza el autosacrificio, la posibilidad de atacar y trascender. ')
        break
    case 'capricornio':
        console.log('Tiene a la cabra como símbolo, método y destino. Los nacidos bajo el influjo de este signo ejercen una constancia y empeño a prueba de todo. Logra lo que se propone, gracias a planificación muy cuidadosa.')
        break
        default: 
        console.log('No es un signo zoodiacal válido')
        break
}
