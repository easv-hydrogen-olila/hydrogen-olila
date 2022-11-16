const PLACEHOLDER = {
    HEROS: [
        //PRIMARY HERO
        {
            heading: {value: 'MID SEASON 21'},
            byline: {
                value: 'Mid season 21 NY Kollektion'
            },
            handle: 'mid-season-21',
            cta: {value: 'Shop Now →'},
            spread:{
                reference: {
                    mediaContentType: 'IMAGE',
                    alt: 'Tracks in the snow leading to a person on a mountain top with a red jacket contrasting to an epic blue horizon with a mountain range in the distance.',
                    previewImage: {
                      url: 'https://cdn.shopify.com/s/files/1/0551/4566/0472/files/Hydrogen_Hero_Feature_1.jpg?v=1654902468',
                    },
                    id: 'gid://shopify/MediaImage/29259478466616',
                    image: {
                      url: 'https://cdn.shopify.com/s/files/1/0551/4566/0472/files/Hydrogen_Hero_Feature_1.jpg?v=1654902468',
                      width: 2500,
                      height: 3155,
                    },
                }
            }

        },
        //SECONDARY HERO
        {
            heading: {value: 'MID SEASON 21'},
            byline: {
                value: 'Mid season 21 NY Kollektion'
            },
            handle: 'mid-season-21',
            cta: {value: 'Shop Now →'},
            spread:{
                reference: {
                    mediaContentType: 'IMAGE',
                    alt: 'Tracks in the snow leading to a person on a mountain top with a red jacket contrasting to an epic blue horizon with a mountain range in the distance.',
                    previewImage: {
                      url: 'https://cdn.shopify.com/s/files/1/0551/4566/0472/files/Hydrogen_Hero_Feature_1.jpg?v=1654902468',
                    },
                    id: 'gid://shopify/MediaImage/29259478466616',
                    image: {
                      url: 'https://cdn.shopify.com/s/files/1/0551/4566/0472/files/Hydrogen_Hero_Feature_1.jpg?v=1654902468',
                      width: 2500,
                      height: 3155,
                    },
                }
            }

        }
    ]
}

const FOOTER_PLACEHOLDER = {
    FOOTERS: [
        {
            heading: "DU FINDER OS HER",
            content: [
                {
                    title: "Olila Esbjerg",
                    items:[
                        {
                            value: 'Address',
                            description: 'Kongensgade 94, 6700'
                        },
                        {
                            value: 'Phone',
                            description: 'Telefon: 5353 9796'
                        },
                        {
                            value: 'Email',
                            description: 'info@olila.dk'
                        },
                        {
                            value: 'CVR',
                            description: '42869643'
                        }
                    ]

                },
                {
                    title: "Åbningstider",
                    items:[
                        {
                            value: 'Working days',
                            description: 'Mandag – torsdag kl. 10.00 – 17.30'
                        },
                        {
                            value: 'Friday',
                            description: 'Fredag kl. 10.00 – 18.00'
                        },
                        {
                            value: 'Saturday',
                            description: 'Lørdag kl. 10.00 – 15.00'
                        },
                        {
                            value: 'Sunday',
                            description: 'Lukket(Eller efter aftale)'
                        },
                        {
                            value: 'Special',
                            description: 'Specielle åbningstider 2021'
                        }
                    ]
                }
            ]
        }
    ]
}


//TODO Hero placeholder
export function getHeroPlaceHolder(heros: any[]) {

    return heros.map((hero, index) =>{

        if(hero?.heading?.value){
            return hero;
        }

        const placeholder = PLACEHOLDER.HEROS[index]

        const byLine = 
            hero?.byLine || hero?.descriptionHtml
            ? {value: hero.descriptionHtml}
            : placeholder.byline;

        const heading =
        hero?.heading || hero?.title ? {value: hero.title} : placeholder.heading;

        return {
            heading,
            byLine,
            cta: hero?.cta || placeholder.cta,
            handle: hero?.handle || placeholder.handle
        }
    })


}