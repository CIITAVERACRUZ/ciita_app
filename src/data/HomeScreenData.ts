import { Evento, HomeItem } from "../interfaces/AppInterfaces";

export const HomeItems: HomeItem[] = [
    {
        id: 1,
        title: 'Papantla de Olarte',
        description: 'Este maravilloso pueblo mágico fue tiene sus orígenes en el año 1200, Fue fundada por indígenas de Tuzapan quienes llegaron a dominar la extensa región donde se desarrolló la cultura totonaca. Al llegar los españoles, la bautizaron como Papantla de Santa María de la Asunción y hoy se llama Papantla de Olarte, en honor al insurgente Serafín Olarte, nacido en esta localidad.',
        type: 'Historia',
        image: 'https://www.mexicodesconocido.com.mx/wp-content/uploads/2019/04/TAJIN_3_IG.jpg'
    },
    {
        id: 2,
        title: 'Papantla de Olarte',
        description: '¿Sabías qué Papantla es una de las pocas ciudades a nivel mundial en tener tres patrimonios de la Humanidad? El Tajín obtuvo el título de Patrimonio de la Humanidad en 1992 por considerarse un testimonio de la grandeza de las culturas precolombinas de México. En 2009, la ceremonia ritual de los Voladores de Papantla fue declarada Patrimonio Cultural Inmaterial de la Humanidad por la UNESCO. Más recientemente (2012), se integró a Xtaxkgakget Makgkaxtlawana, Centro de las Artes Indígenas de Papantla en la lista de Buenas Prácticas para la Salvaguardia del Patrimonio Cultural Inmaterial.',
        type: 'Cultura',
        image: 'https://topadventure.com/__export/1603217195940/sites/laverdad/img/2020/10/20/voladores_de_papantla_ceremonia_ancestral_1.jpg_1962973174.jpg'
    },
    {
        id: 3,
        title: 'Papantla de Olarte',
        description: 'La vainilla es el cultivo principal de la región, es tan reconocida que incluso hay tours turísticos por los cultivos. Los lugareños suelen preparar dulces y alimentos con este delicioso ingrediente, y nada se desaprovecha ya que incluso se realizan artesanías derivada de la vaina.',
        type: 'Turismo',
        image: 'https://www.gob.mx/cms/uploads/article/main_image/83655/vainilla-web.jpg'
    },
    {
        id: 4,
        title: 'Papantla de Olarte',
        description: 'Los coloridos murales que se encuentran por las fachadas y paredes de este lindo pueblo mágico enaltecen la belleza de la ciudad resaltando la cultura totonaca, sus costumbres y tradiciones. Son una obra de arte imperdible en tu paseo por Papantla.',
        type: 'Cultura',
        image: 'https://elsouvenir.com/wp-content/uploads/2019/02/murales-de-papantla-1.jpg'
    },
    {
        id: 5,
        title: 'Papantla de Olarte',
        description: 'Papantla cuenta con muchos atractivos turísticos de interés, te recomendamos visitar: 1.	El Tajín: esta zona arqueológica cuenta con todos los servicios (estacionamiento, restaurantes, guías turísticos, tiendas, etc.) para que tu estadía sea enriquecedora y placentera. 2.	Cuyuxquihui: esta zona arqueológica te ofrece 30 hectáreas de construcciones prehispánicas y naturaleza. Podrás observar una fortaleza militar, el centro ceremonial y terrazas con escalinatas y juegos de pelota. 3.	Playas Semi Vírgenes: A 17 km podrás disfrutar de las lindas playas de Tenixtepec, donde podrás relajarte y comer deliciosos mariscos frescos.',
        type: 'Turismo',
        image: 'https://www.turimexico.com/wp-content/uploads/2019/03/Barra-Tenixtepec-en-Veracruz-900x500.jpg'
    },
]

export const Events: Evento[] = [
    {
        type: 'Evento',
        title: 'Feria de Corpus Christi',
        description: 'Se celebra aproximadamente sesenta días después del Jueves Santo, por ello suele celebrarse a finales de mayo o principios de junio. Esta fecha coincide con el cambio de estación que marcaba el calendario prehispánico solar, justo cuando los Totonacas realizaban festejos y cultos a sus dioses por sus cosechas.',
        date: '7 de Junio',
        month: 'Jun',
        image: 'https://papantlaveracruz.com.mx/wp-content/uploads/2020/05/NO-HABR%C3%81-FERIA-DE-CORPUS-CHRISTI-20202-scaled.jpg'
    },
    {
        type: 'Evento',
        title: 'Festival Xanath',
        description: 'Narra la conquista española y el sometimiento de los Totonacas. Se lleva a cabo durante la feria de Corpus Christi, durante la noche de Jueves de Corpus. Este impresionante foro reúne a más de 200 danzantes que interpretan dicho suceso histórico. Culmina con los impresionantes juegos pirotécnicos.',
        date: '7 de Junio',
        month: 'Jun',
        image: 'https://i.pinimg.com/originals/9d/51/a0/9d51a06e60bd170990a36978ff26d859.jpg'
    },
]

export const months: string[] = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
