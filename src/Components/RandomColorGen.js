function RandomColorGen() {
    let colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light']
    let returnValue = {
        firstColor: colors[Math.floor(Math.random() * 7)],
        secondColor: colors[Math.floor(Math.random() * 7)]
    }
    return(returnValue)
} 

export default RandomColorGen