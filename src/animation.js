export const animation = {
hidden: {
    opacity: 0,
    y: 300,
},
    show: {
    opacity: 1,
    y: 0,
        transition: {
        duration: 1
        }
},

exit: {
    show: {
        opacity: 1,
        y: 0,
            transition: {
            duration: 1
            }
    },
}

}


export default animation