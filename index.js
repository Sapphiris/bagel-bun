window.onload = () => {

    //BODY
    const body = new Image()
    const bodynum = Math.floor(Math.random()*12)+1
    body.src = `assets/body/body-${bodynum}.PNG`

    //EARS
    const ears = new Image()
    const earsnum = Math.floor(Math.random()*11)+1
    ears.src = `assets/ears/ears-${earsnum}.PNG`

    //OUTLINE
    const outline = new Image()
    outline.src = `assets/outline.PNG`

    //FACE
    const face = new Image()
    const facenum = Math.floor(Math.random()*8)+1
    face.src = `assets/face/face-${facenum}.PNG`

    //ACCESSORY
    const accessory = new Image()
    const accessorynum = Math.floor(Math.random()*7)+1
    accessory.src = `assets/accessory/accessory-${accessorynum}.PNG`

    //HAT
    const hat = new Image()
    const hatnum = Math.floor(Math.random()*20)+1
    hat.src = `assets/hat/hat-${hatnum}.PNG`

    //BUILD
    body.onload = () => {
        buildbun()
    }

    ears.onload = () => {
        buildbun()
    }

    outline.onload = () => {
        buildbun()
    }

    face.onload = () => {
        buildbun()
    }

    accessory.onload = () => {
        buildbun()
    }

    hat.onload = () => {
        buildbun()
    }

    const buildbun = () => {
        const canvas = document.getElementById("canvas")
        const ctx = canvas.getContext("2d")
        canvas.width = 475
        canvas.height = 475

        ctx.drawImage(body, 0, 0)
        ctx.drawImage(ears, 0, 0)
        ctx.drawImage(outline, 0, 0)
        ctx.drawImage(face, 0, 0)
        ctx.drawImage(accessory, 0, 0)
        ctx.drawImage(hat, 0, 0)
    }
}