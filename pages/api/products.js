// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
    res.status(200).json([
        {
            id: 1,
            name: "Product 1",
            description: "",
            price: 20,
            image: ""
        },
        {
            id: 2,
            name: "Product 2",
            description: "",
            price: 15,
            image: ""
        },
        {
            id: 3,
            name: "Product 3",
            description: "",
            price: 12,
            image: ""
        },

    ])
}
