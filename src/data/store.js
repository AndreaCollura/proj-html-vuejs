import { reactive } from "vue";



export const store = reactive({

    
    navList: [
        {
            text: "HOME",
            url: "#",
            arrow: false,
        },
        {
            text: "BLOG",
            url: "#",
            arrow: true,
        },
        {
            text: "PAGES ",
            url: "#",
            arrow: true,
        },
        {
            text: "ABOUT",
            url: "#",
            arrow: false,
        },
        {
            text: "CONTACTS",
            url: "#",
            arrow: false,
        },
        {
            text: "GALLERY",
            url: "#",
            arrow: false,
        },
        {
            text: "SHOP",
            url: "#",
            arrow: true,
        }
    ],

    socialList: [
        {
            text: "/images/image (9).svg",
            url: "#",
            
        },
        {
            text: "/images/image (10).svg",
            url: "#",
            
        },
        {
            text: "/images/image (11).svg",
            url: "#",
            
        },
        {
            text: "/images/image (12).svg",
            url: "#",
        
        }
    ],

    featureList: [
        {
            image: "/images/image (14).svg",
            bigtxt: "array of equipment",
            smalltxt: ""

        },
        {
            image: "/images/image (16).svg",
            bigtxt: "new technologies",
            smalltxt: ""
        },
        {
            image: "/images/image (18).svg",
            bigtxt: "versitile actors",
            smalltxt: ""
        },
        {
            image: "/images/image (15).svg",
            bigtxt: "top directors",
            smalltxt: ""
        },
        {
            image: "/images/image (17).svg",
            bigtxt: "minute editing",
            smalltxt: ""
        },
        {
            image: "/images/image (19).svg",
            bigtxt: "versitile actors",
            smalltxt: ""
        },
    ],

    hitsList: [
        {
            image: "/images/Gallery-01.jpg",
            bigtxt: "seventeenth summer",
            smalltxt: "Commercial, Music Video"

        },
        {
            image: "/images/Gallery-02.jpg",
            bigtxt: "a message to space",
            smalltxt: "Short Film"
        },
        {
            image: "/images/Gallery-03.jpg",
            bigtxt: "the most beautiful thing",
            smalltxt: "Music Video"
        },
        {
            image: "/images/Gallery-04.jpg",
            bigtxt: "permission to speak",
            smalltxt: "Documentary"
        },
        {
            image: "/images/Gallery-05.jpg",
            bigtxt: "explore our space",
            smalltxt: "Film noir"
        },
        {
            image: "/images/Gallery-06.jpg",
            bigtxt: "film production",
            smalltxt: "blaxploitation"
        },
    ],

    statisticList: [
        {
            number: "158",
            txt: "statisfied clients"
        },
        {
            number: "3+",
            txt: "our projects"
        },
        {
            number: "1,906",
            txt: "cup of coffee"
        },
        {
            number: "2",
            txt: "our awards"
        },
    ],

    teamList: [
        {
            image: "/images/Team-01.jpg",
            bigtxt: "fabricio guerra",
            smalltxt: "Main Director"

        },
        {
            image: "/images/Team-02.jpg",
            bigtxt: "umberto pagoda",
            smalltxt: "Main Writer"
        },
        {
            image: "/images/Team-03.jpg",
            bigtxt: "gloria riccasso",
            smalltxt: "Main Producer"
        },
        {
            image: "/images/Team-04.jpg",
            bigtxt: "lio napoin",
            smalltxt: "Cameraman"
        }
    ],

    newsList: [
        {
            date: "November 06 , 2021 By Admin",
            image: "/images/blog07.jpg",
            bigtxt: "recap your latest company event",
            smalltxt: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, quibusdam."

        },
        {
            date: "May 27 , 2022 By Admin",
            image: "/images/blog01.jpg",
            bigtxt: "how to edit a film score to serve",
            smalltxt: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, quibusdam."
        },
        {
            date: "May 07 , 2022 By Admin",
            image: "/images/blog02.jpg",
            bigtxt: "the most beautiful thing",
            smalltxt: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, quibusdam."
        }
    ],
    iconList: [
        {
            image: "/images/03.png",
        },
        {
            image: "/images/04.png",
        },
        {
            image: "/images/05.png",
        },
        {
            image: "/images/01.png",
        },
        {
            image: "/images/02.png",
        },
    ],
})