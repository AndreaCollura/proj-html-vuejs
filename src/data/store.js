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
    ]

    


})